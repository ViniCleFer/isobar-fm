import { TablePagination, CircularProgress } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';

import { Band, getBandsRequest } from '../../services/requests/band';

import tvIcon from '../../assets/tv-icon.svg';

import { Header } from '../../components/Header';
import { ListCardItem } from '../../components/ListCardItem';
import { FilterButton } from '../../components/FilterButton';

import {
  Container,
  Content,
  ListContainer,
  NoResultsContainer,
  NoResultsText,
  ResultsSearchContainer,
  ResultsSearchText,
} from './styles';

import { countTotalsOfBandsFounded } from '../../util/countTotalsOfBandsFounded';

export function Home() {
  const [bandName, setBandName] = useState('');
  const [bandsList, setBandsList] = useState<Band[]>([]);
  const [filteredBandsList, setFilteredBandsList] = useState<Band[]>([]);
  const [pageTotals, setPageTotals] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [isLoading, setIsLoading] = useState(false);

  const loadBands = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await getBandsRequest();

      if (response?.status === 200) {
        setBandsList(response?.data);
      }
    } catch (error) {
      console.error('Error on loadBands => ', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadBands();
  }, []);

  const bandsFiltered = bandsList?.filter((u) =>
    u?.name.toUpperCase().includes(bandName.toUpperCase())
  );

  const bandsListFiltered =
    bandName.length > 0 ? bandsFiltered : filteredBandsList;

  const handleAlphabeticSort = useCallback(() => {
    const sortedBands = bandsList.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else {
        return -1;
      }
    });

    setBandsList([...sortedBands]);
    setFilteredBandsList([...sortedBands]);
  }, [bandsList]);

  const handlePopularitySort = useCallback(
    (type: 'more' | 'less') => {
      let sortedBands = [];

      if (type === 'more') {
        sortedBands = bandsList.sort((a, b) => {
          if (a.numPlays > b.numPlays) {
            return -1;
          } else {
            return 1;
          }
        });
      } else {
        sortedBands = bandsList.sort((a, b) => {
          if (a.numPlays < b.numPlays) {
            return -1;
          } else {
            return 1;
          }
        });
      }

      setBandsList([...sortedBands]);
      setFilteredBandsList([...sortedBands]);
    },
    [bandsList]
  );

  useEffect(() => {
    const startIndex = currentPage * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;

    const usuariosExibidos = bandsList.slice(startIndex, endIndex);

    const totalPage = Math.ceil(bandsList.length / rowsPerPage);
    setPageTotals(totalPage);

    setFilteredBandsList([...usuariosExibidos]);
  }, [bandsList, rowsPerPage, currentPage]);

  const handleChangePage = (_: unknown, newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(0);
  };

  const defaultLabelDisplayedRows = ({
    from,
    to,
    count,
  }: {
    from: number;
    to: number;
    count: number;
  }) => {
    return `${from}–${to} de ${count !== -1 ? count : `mais de ${to}`}`;
  };

  return (
    <Container>
      <Header text={bandName} setText={setBandName} />
      {isLoading ? (
        <NoResultsContainer>
          <CircularProgress />
        </NoResultsContainer>
      ) : (
        <Content>
          {bandName.length > 0 && bandsListFiltered.length > 0 && (
            <ResultsSearchContainer>
              <ResultsSearchText>
                {countTotalsOfBandsFounded(bandsListFiltered?.length)}
              </ResultsSearchText>
            </ResultsSearchContainer>
          )}
          {bandsListFiltered.length > 0 && (
            <FilterButton
              handleAlphabeticSort={handleAlphabeticSort}
              handleMorePopularSort={() => handlePopularitySort('more')}
              handleLessPopularSort={() => handlePopularitySort('less')}
            />
          )}

          {bandsListFiltered?.length > 0 ? (
            <ListContainer>
              {bandsListFiltered?.map((item) => (
                <ListCardItem key={item.id} band={item} />
              ))}
              <TablePagination
                backIconButtonProps={{ disabled: currentPage === 0 }}
                nextIconButtonProps={{
                  disabled: currentPage >= pageTotals - 1,
                }}
                rowsPerPageOptions={[5, 10, 25]}
                component='div'
                count={bandsList.length}
                rowsPerPage={rowsPerPage}
                page={currentPage}
                labelRowsPerPage='Linhas por página'
                onPageChange={handleChangePage}
                labelDisplayedRows={defaultLabelDisplayedRows}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </ListContainer>
          ) : (
            <NoResultsContainer>
              <NoResultsText>Sem resultados...</NoResultsText>
              <img width={200} height={200} src={tvIcon} alt='sad-tv-icon' />
            </NoResultsContainer>
          )}
        </Content>
      )}
    </Container>
  );
}

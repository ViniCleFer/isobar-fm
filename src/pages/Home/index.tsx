import { useCallback, useEffect, useState } from 'react';

import { api } from '../../services/api';
import { Band } from '../../services/types';

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

  const loadBands = useCallback(async () => {
    const response = await api('bands');

    if (response !== null) {
      setBandsList(response);
      setFilteredBandsList(response);
    }
  }, []);

  useEffect(() => {
    loadBands();
  }, []);

  useEffect(() => {
    if (bandName.length > 0 && bandsList.length > 0) {
      const searchResults = bandsList.filter((item) =>
        item.name.toLowerCase().includes(bandName.toLowerCase())
      );

      setFilteredBandsList(searchResults);
    }
  }, [bandName, bandsList]);

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

  return (
    <Container>
      <Header text={bandName} setText={setBandName} />
      <Content>
        {bandName.length > 0 && filteredBandsList.length > 0 && (
          <ResultsSearchContainer>
            <ResultsSearchText>
              {countTotalsOfBandsFounded(filteredBandsList?.length)}
            </ResultsSearchText>
          </ResultsSearchContainer>
        )}
        {filteredBandsList.length > 0 && (
          <FilterButton
            handleAlphabeticSort={handleAlphabeticSort}
            handleMorePopularSort={() => handlePopularitySort('more')}
            handleLessPopularSort={() => handlePopularitySort('less')}
          />
        )}

        <ListContainer>
          {filteredBandsList?.length > 0 ? (
            filteredBandsList?.map((item) => (
              <ListCardItem key={item.id} band={item} />
            ))
          ) : (
            <NoResultsContainer>
              <NoResultsText>Sem resultados...</NoResultsText>
              <img width={200} height={200} src={tvIcon} alt='sad-tv-icon' />
            </NoResultsContainer>
          )}
        </ListContainer>
      </Content>
    </Container>
  );
}

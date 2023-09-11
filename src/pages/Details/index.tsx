import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AddOutlined, ArrowBackIosRounded } from '@mui/icons-material';

import { Band, getBandByIdRequest } from '../../services/requests/band';
import { Album, getAlbumByIdRequest } from '../../services/requests/album';

import {
  Container,
  Header,
  GoBackButton,
  BandPhotoContainer,
  BandInfoContainer,
  BandName,
  BandInfoBox,
  BandInfoText,
  BandAvatar,
  Biography,
  DividerContainer,
  AlbumsTitle,
  GridContainer,
  LoadingContainer,
} from './styles';

import { getFormattedPlaysOfNumber } from '../../util/getFormattedPlaysOfNumber';

import { Logo } from '../../components/Logo';
import { CircularProgress } from '@mui/material';

export function Details() {
  const params = useParams();
  const navigate = useNavigate();

  const [selectedBand, setSelectedBand] = useState<Band>({} as Band);
  const [recentlyReleasedAlbum, setRecentlyReleasedAlbum] = useState<Album>(
    {} as Album
  );
  const [isLoading, setIsLoading] = useState(false);

  const loadBandById = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await getBandByIdRequest(params?.id as string);

      if (response?.status === 200) {
        setSelectedBand(response?.data);

        if (response?.data?.albums?.length > 0) {
          const albums = response?.data?.albums.map(async (albumId: string) => {
            const albumResponse = await getAlbumByIdRequest(albumId);

            if (albumResponse?.status === 200) {
              return albumResponse?.data;
            }
          });

          const albumsResponse = await Promise.all(albums);

          setSelectedBand((prevState) => ({
            ...prevState,
            foundedAlbums: albumsResponse,
          }));
        }
      }
    } catch (error) {
      console.error('Error on loadBandById => ', error);
    } finally {
      setIsLoading(false);
    }
  }, [params?.id]);

  useEffect(() => {
    if (params?.id) {
      loadBandById();
    }
  }, [params?.id]);

  useEffect(() => {
    if (
      selectedBand?.foundedAlbums &&
      selectedBand?.foundedAlbums?.length > 0
    ) {
      const recentAlbum = selectedBand?.foundedAlbums.reduce(
        (prevAlbum, currentAlbum) => {
          if (prevAlbum.releasedDate < currentAlbum.releasedDate) {
            return currentAlbum;
          } else {
            return prevAlbum;
          }
        }
      );

      setRecentlyReleasedAlbum(recentAlbum);
    }
  }, [selectedBand?.foundedAlbums]);

  const handleGoBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return isLoading ? (
    <LoadingContainer>
      <CircularProgress />
    </LoadingContainer>
  ) : (
    <Container>
      <Header>
        <GoBackButton onClick={handleGoBack}>
          <ArrowBackIosRounded />
        </GoBackButton>

        <Logo />
      </Header>
      <BandPhotoContainer>
        <img
          src={selectedBand?.image}
          alt={selectedBand?.name}
          width='100%'
          height='100%'
        />
      </BandPhotoContainer>
      <BandInfoContainer>
        <BandInfoText>{recentlyReleasedAlbum?.name}</BandInfoText>
        <BandInfoBox>
          <BandName>{selectedBand?.name}</BandName>
          <BandAvatar
            src={selectedBand?.image}
            alt={selectedBand?.name}
            width={100}
            height={100}
          />
        </BandInfoBox>
        <BandInfoText>
          {getFormattedPlaysOfNumber(selectedBand?.numPlays)}
        </BandInfoText>
      </BandInfoContainer>

      <Biography
        dangerouslySetInnerHTML={{ __html: selectedBand?.biography }}
      />

      <DividerContainer>
        <AddOutlined />
      </DividerContainer>

      <AlbumsTitle>Albuns</AlbumsTitle>

      {selectedBand?.foundedAlbums && (
        <GridContainer>
          {selectedBand?.foundedAlbums?.map((item) => (
            <img src={item.image} alt={item.name} width='100%' loading='lazy' />
          ))}
        </GridContainer>
      )}
    </Container>
  );
}

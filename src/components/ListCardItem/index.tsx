import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { BandName, Container, BandAvatar, NumPlays, InfoItems } from './styles';

import { Band } from '../../services/types';

import { getFormattedPlaysOfNumber } from '../../util/getFormattedPlaysOfNumber';

interface ListCardItemProps {
  band: Band;
}

export function ListCardItem({ band }: ListCardItemProps) {
  const navigate = useNavigate();

  const handleBand = useCallback(() => {
    navigate(`details/${band?.id}`);
  }, [navigate, band?.id]);

  return (
    <Container onClick={handleBand}>
      <BandAvatar src={band.image} alt='image-band' />

      <InfoItems>
        <BandName variant='h6'>{band.name}</BandName>
        <NumPlays>{getFormattedPlaysOfNumber(band.numPlays)}</NumPlays>
      </InfoItems>
    </Container>
  );
}

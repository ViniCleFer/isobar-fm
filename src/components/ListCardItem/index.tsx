import { BandName, Container, BandAvatar, NumPlays, InfoItems } from './styles';

import { Band } from '../../services/types';
import { getFormattedPlaysOfNumber } from '../../util/getFormattedPlaysOfNumber';

interface ListCardItemProps {
  band: Band;
}

export function ListCardItem({ band }: ListCardItemProps) {
  return (
    <Container>
      <BandAvatar src={band.image} alt='image-band' />

      <InfoItems>
        <BandName variant='h6'>{band.name}</BandName>
        <NumPlays>{getFormattedPlaysOfNumber(band.numPlays)}</NumPlays>
      </InfoItems>
    </Container>
  );
}

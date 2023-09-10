import { styled } from '@mui/material/styles';
import {
  Box,
  Divider,
  IconButton,
  Container as MuiContainer,
  Typography,
} from '@mui/material';

export const Container = styled(MuiContainer)`
  padding: 0 !important;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin-bottom: 24px;
`;

export const Header = styled(Box)`
  background-color: ${({ theme }) => theme.palette.primary.main};
  padding: 18px;
  width: 100%;
  display: flex;
  height: 92px;
  position: relative;
  justify-content: center;
  align-items: center;
`;

export const GoBackButton = styled(IconButton)`
  position: absolute;
  left: 18px;

  svg {
    color: ${({ theme }) => theme.palette.common.white};
  }
`;

export const BandPhotoContainer = styled(Box)`
  height: 370px;
`;

export const BandInfoContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: 0 18px;
`;

export const BandInfoBox = styled(Box)`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -50px;
  position: relative;
`;

export const BandName = styled(Typography)`
  position: absolute;
  top: -40px;
  width: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
  white-space: nowrap;
  color: ${({ theme }) => theme.palette.common.white};
  font-size: 24px;
  font-weight: 500;
`;

export const BandInfoText = styled(Typography)`
  text-transform: uppercase;
  color: ${({ theme }) => theme.palette.grey[500]};
  padding-top: 12px;
  font-size: 14px;
  font-weight: 400;
  max-width: 30%;
  text-align: center;
  white-space: wrap;
`;

export const BandAvatar = styled('img')`
  border-radius: 50%;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
`;

export const Biography = styled(Typography)`
  padding: 18px;
  color: ${({ theme }) => theme.palette.grey[900]};
`;

export const DividerContainer = styled(Divider)`
  padding: 18px;
`;

export const AlbumsTitle = styled(Typography)`
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const GridContainer = styled('div')`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
`;

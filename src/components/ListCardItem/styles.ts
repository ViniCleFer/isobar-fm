import { styled } from '@mui/material/styles';
import { Typography, Box, Avatar } from '@mui/material';

export const Container = styled('div')`
  padding: 8px;
  width: 100%;
  display: flex;
  align-items: center;

  & + div {
    border-top: 1px solid ${({ theme }) => theme.palette.divider};
  }
`;

export const BandAvatar = styled(Avatar)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const InfoItems = styled(Box)`
  margin-left: 16px;
`;

export const BandName = styled(Typography)`
  text-transform: uppercase;
  font-weight: 500;
`;

export const NumPlays = styled(Typography)`
  font-weight: 400;
  color: ${({ theme }) => theme.palette.text.secondary};
`;

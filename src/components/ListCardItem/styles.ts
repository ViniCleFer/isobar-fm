import { styled } from '@mui/material/styles';
import { Typography, Box, Avatar, Button } from '@mui/material';

export const Container = styled(Button)`
  padding: 8px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: ${({ theme }) => theme.palette.text.primary};
  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};

  &:hover {
    cursor: pointer;
  }
`;

export const BandAvatar = styled(Avatar)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const InfoItems = styled(Box)`
  margin-left: 16px;
  justify-content: flex-start;
  text-align: left;
`;

export const BandName = styled(Typography)`
  text-transform: uppercase;
  font-weight: 500;
`;

export const NumPlays = styled(Typography)`
  font-weight: 400;
  color: ${({ theme }) => theme.palette.text.secondary};
`;

import { styled } from '@mui/material/styles';
import { Container as MuiContainer, Box, Typography } from '@mui/material';

export const Container = styled(MuiContainer)`
  padding: 0 !important;
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin-bottom: 24px;
`;

export const Content = styled('main')`
  background-color: ${({ theme }) => theme.palette.common.white};
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
`;

export const ResultsSearchContainer = styled(Box)`
  background-color: ${({ theme }) => theme.palette.grey[100]};
  height: 40px;
  padding-left: 26px;
  align-items: center;
  display: flex;
  z-index: 1;
`;

export const ResultsSearchText = styled(Typography)`
  color: ${({ theme }) => theme.palette.grey[500]};
`;

export const ListContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 18px;
`;

export const NoResultsContainer = styled(Box)`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const NoResultsText = styled(Typography)`
  color: ${({ theme }) => theme.palette.grey[400]};
  margin-bottom: 24px;
  font-size: 28px;
  font-weight: 500;
`;

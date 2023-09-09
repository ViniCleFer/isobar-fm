import { styled } from '@mui/material/styles';
import { Container as MuiContainer } from '@mui/material';

export const Container = styled(MuiContainer)`
  padding: 0 !important;
`;

export const ListContainer = styled('main')`
  background-color: ${({ theme }) => theme.palette.common.white};
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 18px;
`;

import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Container = styled('header')`
  background-color: ${({ theme }) => theme.palette.primary.main};
  padding: 18px;
  width: 100%;
  display: flex;
`;

export const TextInput = styled(TextField)`
  width: 100%;
  background-color: ${({ theme }) => theme.palette.common.white};
  outline: none;
  border-radius: 4px;
`;

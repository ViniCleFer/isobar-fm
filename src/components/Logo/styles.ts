import { Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const LogoContainer = styled(Box)`
  display: flex;
  align-items: baseline;
  justify-content: center;
`;

export const LogoText = styled(Typography)`
  color: ${({ theme }) => theme.palette.common.white};
  font-size: 40px;
  font-family: 'Ubuntu', sans-serif;
  letter-spacing: -3px;
`;

export const LogoSuffix = styled(Typography)`
  color: ${({ theme }) => theme.palette.common.white};
  font-size: 14px;
  font-family: 'Ubuntu', sans-serif;
`;

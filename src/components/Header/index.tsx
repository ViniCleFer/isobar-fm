import { IconButton } from '@mui/material';
import { ChangeEvent, useCallback } from 'react';
import { SearchOutlined, CloseOutlined } from '@mui/icons-material';

import { Container, TextInput } from './styles';

import { Logo } from '../Logo';

interface HeaderProps {
  text: string;
  setText: (text: string) => void;
}

export function Header({ text, setText }: HeaderProps) {
  const handleSearch = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setText(event.target.value);
    },
    [setText]
  );

  return (
    <Container>
      <TextInput
        type='text'
        value={text}
        onChange={handleSearch}
        InputProps={{
          endAdornment: <SearchOutlined />,
          startAdornment: text ? (
            <IconButton>
              <CloseOutlined />
            </IconButton>
          ) : null,
        }}
      />

      <Logo />
    </Container>
  );
}

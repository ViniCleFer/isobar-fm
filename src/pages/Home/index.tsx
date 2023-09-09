import { useState } from 'react';
import { Header } from '../../components/Header';
import { Container } from '@mui/material';

export function Home() {
  const [bandName, setBandName] = useState('');

  return (
    <Container>
      <Header text={bandName} setText={setBandName} />
    </Container>
  );
}

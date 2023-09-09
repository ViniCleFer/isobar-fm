import { useCallback, useDeferredValue, useEffect, useState } from 'react';

import { api } from '../../services/api';
import { Band } from '../../services/types';

import { Header } from '../../components/Header';

import { Container, ListContainer } from './styles';

export function Home() {
  const [bandName, setBandName] = useState('');
  const [bandsList, setBandsList] = useState<Band[]>([]);

  const deferredSearch = useDeferredValue(bandName);

  const searchResults = bandsList.filter((item) =>
    item.name.toLowerCase().includes(deferredSearch.toLowerCase())
  );

  const loadBands = useCallback(async () => {
    const response = await api('bands');

    if (response !== null) {
      setBandsList(response);
    }
  }, []);

  useEffect(() => {
    loadBands();
  }, []);

  return (
    <Container>
      <Header text={bandName} setText={setBandName} />
      <ListContainer>
        {searchResults?.map((item) => (
          <span key={item.id}>{item.name}</span>
        ))}
      </ListContainer>
    </Container>
  );
}

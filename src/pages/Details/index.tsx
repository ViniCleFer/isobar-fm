import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { api } from '../../services/api';
import { Band } from '../../services/types';

import { Container } from './styles';

export function Details() {
  const params = useParams();

  const [selectedBand, setSelectedBand] = useState<Band>({} as Band);

  const loadBandById = useCallback(async () => {
    const response = await api(`bands/${params?.id}`);

    if (response !== null) {
      setSelectedBand(response);
    }
  }, [params?.id]);

  useEffect(() => {
    if (params?.id) {
      loadBandById();
    }
  }, [params?.id]);

  return (
    <Container>
      <pre>{JSON.stringify(selectedBand, null, 2)}</pre>
    </Container>
  );
}

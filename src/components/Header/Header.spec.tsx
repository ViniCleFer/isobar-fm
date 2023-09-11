import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Header } from './index';
import { describe, it, expect, vi } from 'vitest';

describe('Header Component Test', async () => {
  function setText(text: string) {
    console.log(text);
    return;
  }

  it('renders the Header component', () => {
    const mockFunction = vi.fn().mockImplementation(setText);

    render(<Header setText={() => mockFunction('Ola')} text='' />);

    expect(screen.getByText('isobar')).toBeInTheDocument();
    expect(screen.getByText('.fm')).toBeInTheDocument();
  });
});

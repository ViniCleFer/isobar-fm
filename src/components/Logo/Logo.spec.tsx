import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Logo } from './index';
import { describe, it, expect } from 'vitest';

describe('Logo Component Test', async () => {
  it('renders the Logo component', () => {
    render(<Logo />);

    expect(screen.getByText('isobar')).toBeInTheDocument();
    expect(screen.getByText('.fm')).toBeInTheDocument();
  });
});

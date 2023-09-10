export const countTotalsOfBandsFounded = (total: number) => {
  if (total === 1) {
    return `${total} resultado`;
  }
  if (total > 1) {
    return `${total} resultados`;
  }

  return `Nenhum resultado encontrado`;
};

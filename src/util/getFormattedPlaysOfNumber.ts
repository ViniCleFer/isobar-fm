export const getFormattedPlaysOfNumber = (number: number) => {
  const numberFormatted = Intl.NumberFormat('pt-BR').format(number); //output - "234K"

  return `${numberFormatted} plays`;
};

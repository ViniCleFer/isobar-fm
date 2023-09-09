export const api = (params?: string) => {
  const results = fetch(
    `https://dws-recruiting-bands.dwsbrazil.io/api/${params}`
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
      return null;
    });

  return results;
};

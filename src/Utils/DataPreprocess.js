export const filterByCurrency2 = async (data, currency) => {
  const filtered = data.filter(
    (item) => item?.currency2.code == currency
  );
  return filtered;
};

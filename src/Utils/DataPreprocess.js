export const filterByCurrency2 = async (data, currency) => {
  const filtered = await data.filter(
    (item) => item?.currency2.code == currency
  );
  return filtered;
};

export const filterById = async (data, id) => {
  const filtered = await data.filter((item) => item?.id == id);
  return filtered;
};

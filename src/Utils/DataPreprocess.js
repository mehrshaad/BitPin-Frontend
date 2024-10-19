export async function filterByCurrency2(data, currency) {
  console.log(122, data);
  const filtered = Array(data).filter(
    (item) => item.currency2.code === currency
  );
  console.log(12, filtered);
  return filtered;
}

export function calculateNumbers(data) {
  const prices = [...data.map((item) => Number(item?.price))];
  const max = Math.max(...prices);
  const min = Math.min(...prices);
  const sumRemain = data.reduce((sum, item) => sum + Number(item?.remain), 0);
  const sumValues = data.reduce((sum, item) => sum + Number(item?.value), 0);
  const priceAverage =
    data.reduce((sum, item) => {
      return sum + Number(item?.price) * Number(item?.remain);
    }, 0) / sumRemain;

  return [min, max, sumRemain, sumValues, priceAverage];
}
export function calculateFilterNumbers(data) {
  const latestTime = data[0]?.time;
  const sumBuy = data.reduce((sum, item) => {
    if (item?.type === "buy") {
      return sum + Number(item?.match_amount);
    }
    return sum;
  }, 0);
  const sumSell = data.reduce((sum, item) => {
    if (item?.type === "sell") {
      return sum + Number(item?.match_amount);
    }
    return sum;
  }, 0);

  return [latestTime, sumBuy, sumSell];
}

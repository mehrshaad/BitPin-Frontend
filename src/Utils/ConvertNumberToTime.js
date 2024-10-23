export function convertNumberToTime(number) {
  const date = new Date(number * 1000);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}`;
}

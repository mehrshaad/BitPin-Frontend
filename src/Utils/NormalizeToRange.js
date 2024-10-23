export function normalizeToRange(value, min, max) {
  const normalizedValue = ((Number(value) - min) / (max - min)) * 100;

  return Math.max(10, Math.min(100, normalizedValue));
}

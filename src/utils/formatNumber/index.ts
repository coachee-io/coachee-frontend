/**
 * Takes a number in cents and returns it as a float up to 2 decimal cases
 * @param value
 */
export const formatNumber = (value: number): string => (value / 100).toFixed(2)

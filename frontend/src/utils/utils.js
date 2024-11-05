export const addDecimal = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

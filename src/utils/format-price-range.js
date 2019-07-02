export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumSignificantDigits: 4,
});

const formatPriceRange = (min, max) => (
  min === max
    ? formatter.format(min)
    : `${formatter.format(min)} - ${formatter.format(max)}`
);

export default formatPriceRange;

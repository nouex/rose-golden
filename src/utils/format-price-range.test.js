import formatPriceRange from './format-price-range';

describe('formatPriceRange()', () => {
  it('returns a single price if min is equal to max', () => {
    expect(formatPriceRange(10, 10)).toEqual('$10');
  });
});

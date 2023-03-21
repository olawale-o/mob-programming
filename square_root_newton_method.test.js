const newtonSquareRoot = require('./square_root_newton_method');

describe('newtonSquareRoot', () => {
  it('should throw for negative numbers', () => {
    function failingnewtonSquareRoot() {
      newtonSquareRoot(-5);
    }
    expect(failingnewtonSquareRoot).toThrow();
  });

  it('should correctly calculate square root with default tolerance', () => {
    expect(newtonSquareRoot(0)).toBe(0);
    expect(newtonSquareRoot(1)).toBe(1);
    expect(newtonSquareRoot(2)).toBe(1);
    expect(newtonSquareRoot(3)).toBe(2);
    expect(newtonSquareRoot(4)).toBe(2);
    expect(newtonSquareRoot(15)).toBe(4);
    expect(newtonSquareRoot(16)).toBe(4);
    expect(newtonSquareRoot(256)).toBe(16);
    expect(newtonSquareRoot(473)).toBe(22);
    expect(newtonSquareRoot(14723)).toBe(121);
  });

  it('should correctly calculate square root for integers with custom tolerance', () => {
    let tolerance = 1;

    expect(newtonSquareRoot(0, tolerance)).toBe(0);
    expect(newtonSquareRoot(1, tolerance)).toBe(1);
    expect(newtonSquareRoot(2, tolerance)).toBe(1.4);
    expect(newtonSquareRoot(3, tolerance)).toBe(1.8);
    expect(newtonSquareRoot(4, tolerance)).toBe(2);
    expect(newtonSquareRoot(15, tolerance)).toBe(3.9);
    expect(newtonSquareRoot(16, tolerance)).toBe(4);
    expect(newtonSquareRoot(256, tolerance)).toBe(16);
    expect(newtonSquareRoot(473, tolerance)).toBe(21.7);
    expect(newtonSquareRoot(14723, tolerance)).toBe(121.3);

    tolerance = 3;

    expect(newtonSquareRoot(0, tolerance)).toBe(0);
    expect(newtonSquareRoot(1, tolerance)).toBe(1);
    expect(newtonSquareRoot(2, tolerance)).toBe(1.414);
    expect(newtonSquareRoot(3, tolerance)).toBe(1.732);
    expect(newtonSquareRoot(4, tolerance)).toBe(2);
    expect(newtonSquareRoot(15, tolerance)).toBe(3.873);
    expect(newtonSquareRoot(16, tolerance)).toBe(4);
    expect(newtonSquareRoot(256, tolerance)).toBe(16);
    expect(newtonSquareRoot(473, tolerance)).toBe(21.749);
    expect(newtonSquareRoot(14723, tolerance)).toBe(121.338);

    tolerance = 10;

    expect(newtonSquareRoot(0, tolerance)).toBe(0);
    expect(newtonSquareRoot(1, tolerance)).toBe(1);
    expect(newtonSquareRoot(2, tolerance)).toBe(1.4142135624);
    expect(newtonSquareRoot(3, tolerance)).toBe(1.7320508076);
    expect(newtonSquareRoot(4, tolerance)).toBe(2);
    expect(newtonSquareRoot(15, tolerance)).toBe(3.8729833462);
    expect(newtonSquareRoot(16, tolerance)).toBe(4);
    expect(newtonSquareRoot(256, tolerance)).toBe(16);
    expect(newtonSquareRoot(473, tolerance)).toBe(21.7485631709);
    expect(newtonSquareRoot(14723, tolerance)).toBe(121.3383698588);
  });

  it('should correctly calculate square root for integers with custom tolerance', () => {
    expect(newtonSquareRoot(4.5, 10)).toBe(2.1213203436);
    expect(newtonSquareRoot(217.534, 10)).toBe(14.7490338667);
  });
});
import unfoldMatrix from '../src';

describe('unfoldMatrix test', () => {
  it('elements quantity is equal', () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    expect(unfoldMatrix(matrix).length).toBe(9);
  });
  it('correctly works with n = 1', () => {
    const matrix = [
      [1],
    ];
    const expected = [1];
    expect(unfoldMatrix(matrix)).toEqual(expected);
  });
  it('unfolds matrix with n = 2', () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const expected = [5, 4, 7, 8, 9, 6, 3, 2, 1];
    expect(unfoldMatrix(matrix)).toEqual(expected);
  });
  it('unfolds matrix with n = 3', () => {
    const matrix = [
      [1, 2, 3, 4, 5],
      [1, 2, 3, 4, 5],
      [1, 2, 3, 4, 5],
      [1, 2, 3, 4, 5],
      [1, 2, 3, 4, 5],
    ];
    const expected = [
      3,
      2,
      2,
      3,
      4,
      4,
      4,
      3,
      2,
      1,
      1,
      1,
      1,
      2,
      3,
      4,
      5,
      5,
      5,
      5,
      5,
      4,
      3,
      2,
      1];
    expect(unfoldMatrix(matrix)).toEqual(expected);
  });
});

export default function (matrix) {
  const length = matrix.length;
  const start = Math.floor(length / 2);
  const matrixCopy = matrix;
  let i = start;
  let j = start;
  const result = [];
  result.push(matrixCopy[i][j]);
  matrixCopy[i][j] = '*';

  while (i !== 0 || j !== 0) {
    // left
    while (j - 1 >= 0) {
      j -= 1;
      result.push(matrixCopy[i][j]);
      matrixCopy[i][j] = '*';
      if (matrixCopy[i + 1][j] !== '*') {
        break;
      }
    }
    if (i === 0 && j === 0) {
      break;
    }
    // down
    while (i + 1 <= length) {
      i += 1;
      result.push(matrixCopy[i][j]);
      matrixCopy[i][j] = '*';
      if (matrixCopy[i][j + 1] !== '*') {
        break;
      }
    }
    // right
    while (j + 1 <= length) {
      j += 1;
      result.push(matrixCopy[i][j]);
      matrixCopy[i][j] = '*';
      if (matrixCopy[i - 1][j] !== '*') {
        break;
      }
    }
    // up
    while (i - 1 >= 0) {
      i -= 1;
      result.push(matrixCopy[i][j]);
      matrixCopy[i][j] = '*';
      if (matrixCopy[i][j - 1] !== '*') {
        break;
      }
    }
  }
  return result;
}

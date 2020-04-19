/*
const sum = (x, y, z) => {
  const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0);
}
*/

const sum = (...args) => args.reduce((a, b) => a + b, 0);
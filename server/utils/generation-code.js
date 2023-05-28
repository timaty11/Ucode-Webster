export default () => {
  const code = [];
  for (let i = 0; 6 > i; i += 1) {
    code.push(Math.floor(Math.random() * (9 - 0 + 1) + 0));
  }
  return code.join('');
};

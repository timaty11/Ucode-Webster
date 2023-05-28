import solution from '../index.js';

solution().listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});

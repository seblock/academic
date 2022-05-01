let gigasecond = (time) => {
  let date = time.getTime();
  const gs = Math.pow(10, 12);
  let futureTime = date + gs;
  return new Date(futureTime)
};
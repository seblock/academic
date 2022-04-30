let isPangram = (string) => {
  let alphabets = 'abcdefghijklmnopqrstuvwxyz'.split("");
  string = string.toLowerCase();
  return alphabets.every(x => string.includes(x));
};
let parse = (string) => {
  string = string.replace(/[_-]/g, " ").replace(/'s/g, " ");
  return string.match(/\b(\w)/g).join("").toUpperCase();
};

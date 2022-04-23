let convert = (x) => {
  if (x % 7 == 0 && x % 5 == 0 && x % 3 == 0) return 'PlingPlangPlong';
  else if (x % 3 == 0 && x % 5 == 0) return 'PlingPlang';
  else if (x % 3 == 0 && x % 7 == 0) return 'PlingPlong';
  else if (x % 7 == 0 && x % 5 == 0) return 'PlangPlong';
  else if (x % 3 == 0) return 'Pling';
  else if (x % 5 == 0) return 'Plang';
  else if (x % 7 == 0) return 'Plong';
  else {
    return x.toString();
  }
};
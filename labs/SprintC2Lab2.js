let steps = (n) => {
  let counter = 0;
  if (n > 0 && Number.isInteger(n)) {
    while (n !== 1) {
        if (n % 2 === 0) {                                      
            n = n / 2; 
            counter++;
        } else if (n % 2 !== 0) {
            n = (n * 3) + 1;
            counter++;
        }
    }
    return counter;
  } else {
    throw new Error('Only positive numbers are allowed');
  }
};
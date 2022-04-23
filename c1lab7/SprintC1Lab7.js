let classify = (num) => {
  let result = '';

  if (num <= 0) throw new Error("Classification is only possible for natural numbers.");
  
  let sum = 0;
  for (let i = 1; i < num; i++){
    if (num % i == 0) {
      sum += i;
    }
  }

  if (sum == num) {
    result = 'perfect';
  }
  else if (sum > num) {
    result = 'abundant';
  }
  else if (sum < num) {
    result = 'deficient';
  }

  return result;
};

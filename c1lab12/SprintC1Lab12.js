let compute = (s1, s2) => {
  if (s1.length != s2.length) {
    throw new Error("strands must be of equal length");
  }
  let hammingDistance = 0;
  for (i = 0; i < s1.length; i++) {
    if (s1.charAt(i) != s2.charAt(i)) {
      hammingDistance++;
    }
  }
  return hammingDistance;
};
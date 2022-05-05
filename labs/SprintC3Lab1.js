let buildSign = (occasion, name) => { return `Happy ${occasion} ${name}!`; };
let buildBirthdaySign = (age) => {
  let result = age >= 50 ? "mature" : "young";
  return `Happy Birthday! What a ${result} fellow you are.`;
 };
let graduationFor = (name, year) => { return `Congratulations ${name}!\nClass of ${year}` };
let costOf = (sign, currency) => { 
  let total = (String(sign).length * 2) + 20;
  return `Your sign costs ${total}.00 ${currency}.`;
};

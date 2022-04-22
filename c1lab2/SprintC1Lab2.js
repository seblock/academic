// Greatly helped by this stack overflow post:
// https://stackoverflow.com/questions/52969755/how-to-check-the-sequence-of-opening-and-closing-brackets-in-string

let isPaired = (string) => {
  const holder = [];
  const open = ["(", "{", "["];
  const closed = [")", "}", "]"];
  for (let l of string) {
    if (open.includes(l)) {
      holder.push(l);
    } else if (closed.includes(l)) {
      const openPair = open[closed.indexOf(l)];
      if (holder[holder.length - 1] === openPair) {
        holder.splice(-1, 1);
      } else {
        holder.push(l);
        break;
      }
    }
  }
  return holder.length === 0;
};

// Return how many i's are in a string

const iFinder = (str) => {
  let count = 0;

  str.split("").forEach((char) => (char === "i" ? count++ : (count += 0)));

  return count;
};

const iFinderTwo = (str, count = 0) => {
  for (let a = 0; a < str.length; a++) {
    if (str[a] === "i") {
      count++;
    }
  }

  return count;
};

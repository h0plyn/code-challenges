// Create a function that concatenates n input arrays, where n is variable.

const concat = (...args) => args.reduce((prev, curr) => prev.concat(curr));

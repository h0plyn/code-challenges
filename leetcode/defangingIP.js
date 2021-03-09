var defangIPaddr = function (address) {
  return address
    .split('')
    .map((char) => {
      if (char === '.') {
        return (char = '[.]');
      } else {
        return char;
      }
    })
    .join('');
};

// O(n)t | O(1)s - where n is the length of the ip address
var defangIPaddr = function (address) {
  let defanged = '';

  for (let i = 0; i < address.length; i++) {
    if (address[i] === '.') {
      defanged += '[.]';
    } else {
      defanged += address[i];
    }
  }
  return defanged;
};

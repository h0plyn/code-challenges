//Write the function detectNetwork: - it should accept a string or a number for its cardNumber argument - 
//it should return the appropriate network string (or undefined if there's no match), based on the provided cardData

const cardData = [{
  network: 'Visa',          // card issuer (network)
  prefixes: ['4'],	        // beginning digits
  lengths: [13, 16, 19]     // lengths of card numbers
},{
  network: 'Mastercard',
  prefixes: ['51', '52', '53', '54', '55'],
  lengths: [16]
},{
  network: 'American Express',
  prefixes: ['34', '37'],
  lengths: [15]
},{
  network: 'Diner\'s Club',
  prefixes: ['38', '39'],
  lengths: [14]
}];

function detectNetwork(cardNumber, cardData) {
    //Turn number to string
  if (typeof cardNumber == 'number') {
    cardNumber = String(cardNumber)
  };

  //Prefix lengths
  let prefixOne = cardNumber.slice(0, 1);
  let prefixTwo = cardNumber.slice(0, 2);
  
  //Visa
  if (prefixOne == '4')  {
    return cardData[0].network
  }

  // //Mastercard
  if ((prefixTwo >= '51' && prefixTwo<= '55')) {
    return cardData[1].network
  }

  // //American Express
if ((prefixTwo == '34') || (prefixTwo == '37')) {
    return cardData[2].network
  }

  //Diner's Club
if (prefixTwo == '39') {
    return cardData[3].network;
  }

};

// example
const network = detectNetwork(5343456789012345, cardData);
console.log(network); // --> 'American Express'
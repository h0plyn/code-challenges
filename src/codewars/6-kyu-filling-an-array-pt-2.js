// So let's try filling an array with...
// ...square numbers
// ...a range of numbers
// ...random numbers
// ...prime numbers

const squares = n => {
    let squares = [];
    for (let i = 1; i <= n; i++) {
        squares.push(i * i);
    }
    return squares;
}

const range = (n, start, step) => {
    let range = [];
    for (let i = start; range.length < n; i += step) {
        range.push(i);
    }
    return range;
}

const random = (n, min, max) => {
    let random = [];
    for (let i = 0; random.length < n; i++) {
        let numberGenerator = Math.ceil(Math.random() * max);
        if (numberGenerator <= max && numberGenerator >= min) {
            random.push(numberGenerator)
        }
    }
    return random;
}
  
const primes = n => {
    let primes = [];

    for (let i = 2; primes.length < n; i++) {
        let isPrime = true;

        for (let j = 2; j < i; j++) {
            if (i % j === 0 && i !== j) {
                isPrime = false;
            }
        }

        if (isPrime === true) {
            primes.push(i)
        }
    }
    return primes
}

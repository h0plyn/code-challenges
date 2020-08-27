//Write a function that returns the length of a string. Make your function recursive.

const length = (str) => {
    let count = 0;

    if (str.length === 0) {
        return 0;
    }

    count += 1 + length(str.slice(1));

    return count;
};


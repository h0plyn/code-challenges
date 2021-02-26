//Write a function that returns the length of a string. Make your function recursive.

const length = (str, count = 0) => {
    if (str.length === 0) {
        return count;
    }

    return length(str.slice(1), count + 1);
};

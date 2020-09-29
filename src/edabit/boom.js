// Create a function that takes an array of numbers and return "Boom!" if the number 7 
// appears in the array. Otherwise, return "there is no 7 in the array".

function sevenBoom(arr) {
    let string = 'there is no 7 in the array';

    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i].toString();

        if (currentNum.length > 1) {
            let newArr = currentNum.split('');
            newArr.forEach(num => {
                if (num === '7') {
                    string = 'Boom!';
                }
            })
        }

        if (currentNum === '7') {
            return 'Boom!';
        }
    }

    return string;
}

// We expect sevenBoom to be a function
// We expect sevenBoom to return a string
// We expect the parameter of sevenBoom to be an arr
// We expect Boom! to be returned if 7 is in the array
// We expect 'there is no 7 in the array' if there is no 7 in the array

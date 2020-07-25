// Create a function that takes a number (from 1 to 12) and returns its corresponding month name as a string. 
// For example, if you're given 3 as input, your function should return "March", because March is the 3rd month.


const monthName = (num) => {
    
    //An array with all 12 months
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    //Return the month that equates to num argument
    return months[num - 1];

};

//I wanted to practice a switch statement for this challenge but indexing an array would be more elegant. 

// function monthName(num) {
// 	switch (num) {
//         case 1:
//             return 'January';
//             break;
//         case 2:
//             return 'February';
//             break;
//         case 3:
//             return 'March';
//             break;
//         case 4:
//             return 'April';
//         case 5:
//             return 'May';
//             break;
//         case 6:
//             return 'June';
//             break;
//         case 7:
//             return 'July';
//             break;
//         case 8:
//             return 'August';
//             break;
//         case 9:
//             return 'September';
//             break;
//         case 10:
//             return 'October';
//             break;
//         case 11:
//             return 'November';
//             break;
//         case 12:
//             return 'December';
//             break;
//         default:
//             return 'Invalid Date: Choose a number between 1 and 12'
//     }
// }

monthName(1);   //Return January
monthName(7);   //Return July
monthName(12);  //Return December
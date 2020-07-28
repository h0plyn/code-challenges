// Write a function called "transformEmployeeData" that transforms some employee data 

// from one format to another.

// The argument will look like this:

// var input = [
//     [
//         ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
//     ],
//     [
//         ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
//     ]
// ];
// Given that input, the return value should look like this:

// [
//     {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
//     {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
// ]
// Note that the input may have a different number of rows or different keys 
// than the given sample.

// For example, let's say the HR department adds a "tshirtSize" field to each 
// employee record. Your code should flexibly accommodate that. 


var input = [
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
];

function transformEmployeeData(employeeData) {
   
    let result = [];

    //Loop through employeeData array
    for (let i = 0; i < employeeData.length; i++) {
        let personArray = employeeData[i];
        let personObject = {};
       
        //Loop through each employee
        for (let j = 0; j < personArray.length; j++) {
            
            //Convert to object
            let key = personArray[j][0];
            let value = personArray[j][1];
            
            personObject[key] = value
        };
        
        //Push to result array
        result.push(personObject);
    };

    return result;
};

transformEmployeeData(input); 
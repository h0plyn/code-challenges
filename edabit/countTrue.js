//Create a function which returns the number of true values there are in an array.

function countTrue(arr) {
     //Define counter
     let trueCount = 0;
    
     //Loop through Array
     for (let i = 0; i < arr.length; i++) {
         
        //If true, increment count
         arr[i] === true ? trueCount++ : trueCount;
     
        };

    //return final count
    return trueCount;
     
};

countTrue([true, false, false, true, false]); //Return 2
countTrue([true, true, false, false, false, false, true, false, true, true, false, true]); //Return 6
countTrue([]); //Return 0
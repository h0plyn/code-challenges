function solution(str){
   let splitArr = [];

    if (str.length % 2 === 1) {
       str += '_'
   } 

   //LOOP through string
   for (let i = 0; i < str.length; i+=2) {
        splitArr.push(str.slice(i, i+2))
   }

   return splitArr;
}

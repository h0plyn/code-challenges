// Given that
// f0 = '0'
// f1 = '01'
// f2 = '010' = f1 + f0
// f3 = '01001' = f2 + f1
// You will be given a number and your task is to return the nth fibonacci string

// function solve(n){
//     if (n === 0) {
//         return '0';
//     } else if (n === 1) {
//         return '01';
//     }

//     return solve(n-1) + solve(n-2)
// }

function solve(n) {
    debugger;
    let f = ['0', '01'];

    for (let i = 1; i < n; i++) {
        f.push(f[i] + f[i - 1]);
    }

    return f[n];
}

console.log(solve(5))
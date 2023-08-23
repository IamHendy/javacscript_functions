//function to find factorial 
//of a number

function factorialfind(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorialfind(n - 1);
    }
}
console.log(factorialfind(6));

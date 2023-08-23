//function to reverse a number
function reverseNum(num) {
    var reverse= 0;
    while(num != 0){
        reverse = reverse * 10;
        reverse = reverse + num%10;
        num = Math.trunc(num/10);
    }
    return reverse;
}

console.log(reverseNum(456))
console.log(reverseNum(3466))

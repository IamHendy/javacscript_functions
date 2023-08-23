//function to calculate compound 
//interest final amount based on the principle amount

function compundInt(principle, rate,time, n) {
    var interest = principle * (Math.pow((1 + (rate/n)), (n * time)));
    return principle + interest;
}

console.log(compundInt(20000,5,2,2))
console.log(compundInt(150000,7,2,2))

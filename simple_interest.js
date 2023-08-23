//function to calculate simple interest based on the principle amount

function simpleinterest(principle,rate,time){
    let interest = principle * rate * time;

    return interest
}

console.log(simpleinterest(10000,0.5,3))
//find area and perimeter of circlr

const PI  = 3.1429;
let radius;

function circumfrenceCircle (radius){
    return 2 * PI * radius
}

function AreaCircle (radius) {
    return PI * radius *  radius;
}

console.log(circumfrenceCircle(7));
console.log(circumfrenceCircle(14));
console.log(AreaCircle(7));
console.log(AreaCircle(14));


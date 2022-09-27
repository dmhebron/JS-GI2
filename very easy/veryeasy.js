// Write a function named min that takes two arguments and returns their minimum.



const x = 10;
const y = 50;
const z = Math.min(x, y);
console.log (z);

// or 

function min(a, b) {
    if (a < b){
    return a;
    }
    else {
    return b;
    }
   
}

console.log(min(10, 50));
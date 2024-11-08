// Define the function min that takes two arguments and returns their minimum.

const min = (a, b) =>{
    if(isNaN(a) || isNaN(b)) return "Please enter a number"
    else if(a < b) return a;
    else return b;
}

console.log(min(7, 2));

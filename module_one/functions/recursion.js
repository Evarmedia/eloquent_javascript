/**
 * Define a recursive function isEven 
 * Zero is even.

One is odd.

For any other number N, its evenness is the same as N - 2.
 */

const isEven = (n) => {
    if (n === 0) return true
    if (n === 1) return false
    if (n < 0) return isEven(-n); // to correct the case of negative numbers causing infinite recursion
    else if (n % 2 === 0) return true
    else isEven(n-2)
    return false
}

console.log(isEven(50));
console.log(isEven(-1));

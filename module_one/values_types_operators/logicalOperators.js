console.log(true && false)
// → false
console.log(true && true)
// → true
console.log(false || true)
// → true
console.log(false || false)
// → false

console.log(true ? 1 : 2);
// → 1
console.log(false ? 1 : 2);
// → 2

//Short Circuiting of logical operators

console.log(null || "user")
// → user
console.log("Agnes" || "user")
// → Agnes

console.log(0 || 100);
// → 100
console.log(0 ?? 100);
// → 0
console.log(null ?? 100);
// → 100
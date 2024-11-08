// Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase B characters). Rewrite countBs to make use of this new function.


const countBs = (str) => {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] == "B") {
            count++;
        }
    }
    return count;
}

console.log(countBs("BOB"));

const countChar = (str, char) => {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] == char) {
            count++;
        }
    }
    return count;
}

console.log(countChar("kakkerlak", "e"));
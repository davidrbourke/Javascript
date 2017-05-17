// A string can be used like array of characters, although not all array functions work on it.
let output = document.getElementById('output');

// for gives the index of each element
for (let c in 'test') {
    console.log(c);
    output.innerHTML = output.innerHTML + c;
}

let str = 'teest2';
for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}

// To use array functions, use split to convert string to array of chars
str.split('').map(c => {
});

// Regular expressions - match
// match returns an array of matches
// 'g' does global search, doesn't stop at first, 'i' does case-insensitive compare
let myMatches = str.match(new RegExp('E', 'gi'));
console.log(myMatches);


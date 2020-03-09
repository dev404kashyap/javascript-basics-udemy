let first = 'lauReNce';

let last = 'sveKis';
console.log(first,last);

let fullName = first + ' ' +last;
console.log(fullName);


// see above imp 


console.log(first.length);
console.log(fullName.length);

console.log(first[7]);


let initials = first[0] + last[0];
console.log(initials);


console.log(first.toUpperCase());

console.log(first.toLowerCase());
console.log(first);

first = first.toLowerCase();
console.log(first);


let str = 'I love JavaScript because its JavaScript';

let val = str.indexOf('JavaScript');
console.log('val'+' '+ val);


let lastVal = str.lastIndexOf('JavaScript');
console.log(lastVal);


let valSearch = str.search('JavaScript');
console.log(valSearch);


let val2 = str.indexOf('JavaScript',20);
console.log(val2);

//Example
// Find the first occurrence of the letter "e" in a string, starting the search at position 5:

// var str = "Hello world, welcome to the universe.";
// var n = str.indexOf("e", 5
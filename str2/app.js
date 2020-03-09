

let first = 'lauReNce';
let last = 'sveKis';

let needle = 'JavaScript';
let str = 'I love' + needle + ', because its ' + needle + ', and ' + needle + ' its the best';

console.log(str);

let start = str.indexOf(needle);

let len = needle.length;

let end = start + len;


console.log(start,len,end);

let firstSlice = str.slice(start);
let mySlice = str.slice(start,end);

console.log(firstSlice);
console.log(mySlice);

let subby = str.substring(start,end);
let subby2 = str.substr(start,len);

// see the slicing method more carefully
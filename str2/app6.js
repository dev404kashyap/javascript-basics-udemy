let friends = ['Mike','John','Lisa','Jane'];
let friends2 = ['Mike','John','Lisa','Jane'];
friends.sort();
friends2.sort().reverse();
console.log(friends);
console.log(friends2);
 
console.log(friends.includes('Mike'));

// sort 




let okay = true;
let notOkay = false;

let message = 'Hello JavaScript';
let checker = message.includes('JavaScript');
console.log(message == 'JavaScript');
console.log(message == 'Hello JavaScript');

console.log(5 ==5 );
console.log(5 != 5 );
console.log(10 < 5 );
console.log(1 <= 5 );

console.log(1 >= 5 );
console.log('5' == 5 );
console.log('5' === 5 );
console.log('5' !== 5 );

console.log(typeof('5'));
console.log(typeof(5));
console.log(typeof(true));






// js copndotions 

let okay = true;
let notOkay = false;
let message = 'Hello JavaScript';
let word = 'HTML';
let checker = message.includes(word);
if (word === 'JavaScript') {
    console.log('it was true');
}
else {
    console.log('Not true');
}
if (checker) {
    console.log(`${word} was found`);
}
else {
    console.log(`${word} Not found`);
}


// see the difference betn  == and === 



let okay = true;
let notOkay = false;
let message = 'Hello JavaScript';
let word = 'JavaScript';
let checker = message.includes(word);
let output = (word === 'JavaScript') ? 'it was true' : 'Not true';
console.log(output);
let output1 = (checker) ? `${word} was found` : `${word} Not found`;
console.log(output1);-

// this  == vs === 
// ==	equal to	x == 8	false	

// x == 5	true	
// x == "5"	true	

// ===	equal value and equal type	x === 5	true	
// x === "5"	false





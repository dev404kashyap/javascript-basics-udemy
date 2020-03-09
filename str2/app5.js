let friends = ['Mike','John','Lisa','Jane'];
console.log(friends.length);
console.log(friends[2]);
friends[2] = 'Jack';
console.log(friends);
let mixer = ['Hello',50,true,100,600,null,[1,2,3]];
console.log(mixer);
mixer[6][1] = 100;
console.log(mixer);
console.log(mixer.toString());
let mixer2 = mixer.toString();
let joiner = friends.join('----*----');
console.log(joiner);

// splice is to add items to the array 
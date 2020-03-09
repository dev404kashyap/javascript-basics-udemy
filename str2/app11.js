
// good function for each  array cool 


let friends = ['Mike', 'john', 'Lisa', 'Jane'];

console.log(friends);
friends.forEach(function (friend, index)
{
    console.log(friend, index);
    console.log(friend);
})

friends.forEach((friend, index) => 
{
    console.log(friend, index);
    console.log(friend);
})
let friend1 =
 {
      firstName: 'John'
    , lastName: 'Smith'
    , age: 40
};

console.log(Object.keys(friend1));
console.log(Object.values(friend1));

for (propu in friend1) 
{
    console.log(propu);
    console.log(friend1[propu]);
}


let friend2 = 
{
    firstName: 'Jane'
    , lastName: 'Doe'
    , age: 25
};


for (prop in friend2) 
{
    console.log(prop);
    console.log(friend2[prop]);
}


let friends = 
{
    list: [friend1, friend2, friend1, friend2, friend1, friend2]
};

console.log(friends.list);
 
friends.list.forEach(function (friend) 
{
    console.log(`${friend.firstName} ${friend.lastName} `);
})
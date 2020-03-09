let car = {
      make: 'ford'
    , model: 'mustang'
    , year: 2000
    , price: 50000
    , color: 'red'
    , tires: true
};
console.log(car);
car.color = 'blue';
console.log(car);

car['color'] = 'green';
console.log(car);

let prop = 'color';

car[prop] = 'black';
console.log(car);

car.inside = ['radio', 'seats', 'steering wheel', true];

car.outside = {
      tires: 4
    , windshield: 'glass'
    , bumper: true
}

console.log(car);

//  inside and outside features are also added to the object  cool added
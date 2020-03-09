






let car = 
{
      make: 'ford'
    , model: 'mustang'
    , year: 2000
    , price: 50000
    , color: 'red'
    , tires: true
   
    , drive()
     
     {
        console.log('its driving');
     }

   
   
     , instructions: ['Turn Key', 'Put in Gear', 'Press Gas Pedal']

   
   
   
    , help() 
    {
        console.log(this);
    }

    , info() 
    {
        console.log(`Make ${this.make} Model ${this.model}`);
    }

    , howto() 
    {
        this.instructions.forEach(step => 
            {
            console.log(step);
            })
    }

};

console.log(car);

car.drive();
car.howto();
car.info(); 


// why this function is so important here ?
// if you dont  use the this  keyword then ===>>>> 
// C:\Users\imagi_000\Desktop\comeback\js\objectMethod\app.js:30
//         console.log(`Make ${make} Model ${model}`);                             ^
// ReferenceError: make is not defined
//     at Object.info (C:\Users\imagi_000\Desktop\comeback\js\objectMethod\app.js:30:29)
//     at Object.<anonymous> (C:\Users\imagi_000\Desktop\comeback\js\objectMethod\app.js:45:5)
//     at Module._compile (internal/modules/cjs/loader.js:816:30)
//     at Object.Module._extensions..js (internal/modules/cjs/loader.js:827:10)
//     at Module.load (internal/modules/cjs/loader.js:685:32)
//     at Function.Module._load (internal/modules/cjs/loader.js:620:12)
//     at Function.Module.runMain (internal/modules/cjs/loader.js:877:12)
//     at internal/main/run_main_module.js:21:11
// What is “this” keyword in JavaScript. this keyword refers to an object, that 
// object which is executing the current bit of javascript code. In other words, 
// every javascript function while executing 
// has a reference to its current execution context, called this. Execution 
// context means here is how the function is called.
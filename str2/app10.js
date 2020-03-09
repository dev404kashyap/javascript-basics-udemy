// callback function 
// go into the depths of callbacks 


function greeting(name)
 {
    console.log('hello ' + name);
 }
 
function test(callback) {
    let name = 'Laurence';
    callback(name);
}

test(greeting);
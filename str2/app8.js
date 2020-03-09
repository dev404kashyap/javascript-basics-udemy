// function params 
// need to see .. comfusing one 


const message1 = function (mes = 'default', b = 100)

{
    console.log(b);
   
   
    return 'Hello world function expression ' + mes + ' ' + b;
}
 
function message2(mes = 'default', b = 100)
 {
    return 'Hello world function declaration ' + mes + ' ' + b;
 }


console.log(message1());

let str1 = message1('hello world', 500);
let str2 = message2('hello world');
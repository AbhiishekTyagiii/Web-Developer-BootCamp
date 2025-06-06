
//Require require keyword for commonJS(CJS)
// var generateName = require('sillyname');

//Require import keyword for  modules(ESM)
import generateName from "sillyname"
var sillyName = generateName();
console.log(`My name is ${sillyName}.`);

// Require import keyword for modules(ESM)-(ECMA Script Module) 
import random from "random";
// var max=11;
// var min=0;
var num=random.boolean(); 
console.log(`Random Numeber=${num}`);


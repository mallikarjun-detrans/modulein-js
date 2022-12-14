// destructing : mentos 
const { celsiusToFahrenheit, fahrenheitToCelsius} = require('./converters.js');

const freezingPointC=0;
const boilingPointC = 100;
// const fahrenheitToCelsiusC=100;

const freezingPointF = celsiusToFahrenheit(freezingPointC);
const boilingPointF = celsiusToFahrenheit(boilingPointC);
// const fahrenheitToCelsiusC=fahrenheitToCelsius(fahrenheitToCelsiusC);

console.log(`the freezing point of water in fahrenheit is ${freezingPointF}`);
console.log(`the boiling point of water in fahrenheit is ${boilingPointF}`);
// console.log(`the boiling point of water in fahrenheit is ${fahrenheitToCelsiusC}`);
















// importing modules
// const converters = require('./converters.js');

// const freezingPointF = converters.celsiusToFahrenheit(0);
// const boilingPointF = converters.celsiusToFahrenheit(100);
// const fahrenheitToCelsiusC=converters.fahrenheitToCelsius(100);

// console.log(`the freezing point of water in fahrenheit is ${freezingPointF}`);
// console.log(`the boiling point of water in fahrenheit is ${boilingPointF}`);
// console.log(`the boiling point of water in fahrenheit is ${fahrenheitToCelsiusC}`);


































// function celsiusToFahrenheit(celsius) {
//     return celsius * (9/5)+32;
// }
// const freezingPointC=0;
// const boilingPointC=100;
// const humanBodyC=37;

// const freezingPointF = celsiusToFahrenheit(freezingPointC);
// const boilingPointF = celsiusToFahrenheit(boilingPointC);
// const humanBodyF = celsiusToFahrenheit(humanBodyC);


// console.log(`the freezing point of water in fahrenheit is ${freezingPointF}`);
// console.log(`the boiling point of water in fahrenheit is ${boilingPointF}`);
// // old function
// function celsiusToFahrenheit(celsius) {
//     return celsius * (9/5)+32;
// }
// // exporting old function

// module.exports.celsiusToFahrenheit = celsiusToFahrenheit;

// // declaring another function & exporting on the same line

// module.exports.fahrenheitToCelsius = function (fahrenheit){
//     return(fahrenheit-32) * (5/9);
// };


// function celsiusToFahrenheit(celsius){
//     return celsius * (9/5)+32;
// }

// function fahrenheitToCelsius = function(fahrenheit){
//     return (fahrenheit-32) * (5/9);
// };
// export{celsiusToFahrenheit, fahrenheitToCelsius};


// // converters.js
// //first function
// function celsiusToFahrenheit(celsius) {
//     return celsius * (9/5) + 32;
// }
// //second fucntion
// const fahrenheitToCelsius = function(fahrenheit){
//     return(fahrenheit - 32) * (5/9);
// };
// export { celsiusToFahrenheit, fahrenheitToCelsius};

// // converters.js
// //first function
// export function celsiusToFahrenheit(celsius) {
//     return celsius * (9/5) + 32;
// }
// //second fucntion
// export const fahrenheitToCelsius = function(fahrenheit){
//     return(fahrenheit - 32) * (5/9);
// };
// // export { celsiusToFahrenheit, fahrenheitToCelsius};


// converters.js
//first function
export function celsiusToFahrenheit(celsius) {
    return celsius * (9/5) + 32;
}
//second fucntion
export const fahrenheitToCelsius = function(fahrenheit){
    return(fahrenheit - 32) * (5/9);
};
// export { celsiusToFahrenheit, fahrenheitToCelsius};

// 3rd function
export const milliToCenti = (millimeter)=>{
    return millimeter/10;
}

// 4th function
export const centiToMeter = (centimeter)=>{
    return centimeter*100;
}
// plain variable
 const nanoMeter=0.0000000001;

export default nanoMeter;
// export{nano meter as default}


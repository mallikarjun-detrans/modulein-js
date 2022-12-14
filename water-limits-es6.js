import { celsiusToFahrenheit, fahrenheitToCelsius } from "./converters.js";
import{milliToCenti, centiToMeter} from './converters.js';
import  nano from "./converters.js";


// const buttonElement=document.getElementById('button');
// buttonElement.addEventListener('click', clickMe);
// function clickMe(){
//     let element = document.getElementById('container');
//     element.innerHTML=`<h1>Boiling point is:${celsiusToFahrenheit(100)} & freezing point is:${celsiusToFahrenheit(0)}</h1>`;
// }



const buttonElement=document.getElementById('button');
buttonElement.addEventListener('click', clickMe);

function clickMe(){
    let element = document.getElementById('container');
    element.innerHTML=`<h1>Human body temperature:${fahrenheitToCelsius(98.6)}</h1> 
    <h1>Boiling point is:${celsiusToFahrenheit(100)} & freezing point is:${celsiusToFahrenheit(0)}
    <h2>
    100 millimeter is ${milliToCenti(100)} , 1000 centimeters ${centiToMeter(1000)},
    one nanometer is ${nano}.
    
    </h2>
    `;
}
console.log(`water boiling point:${celsiusToFahrenheit(100)} degree`)
console.log(`human body temp:${fahrenheitToCelsius(98.6)} degree`)
import { greet } from "./modules/myName.js";
greet("Alex");


import { calculeteAverege } from "./modules/calculateAverage.js";
   const num1 = 1;
   const num2 = 2;
   const num3 = 3;
   const averege = calculeteAverege(num1, num2, num3);
console.log(`Среднее арифметическое: ${averege}`);

import { calculeteFallDistance } from "./modules/calculateFallDistance.js";
const g = 9.8;
let distance = null;
let t = 10;
distance = calculeteFallDistance(distance, g, t);
console.log('Расстояния падения: ', distance);

import { celsiusToFahrenheit } from "./modules/celsiusToFahrenheit.js";
let celsius = 25;
let fahrenheit = celsiusToFahrenheit(celsius);
console.log(`По Цельсию: ${celsius}, по Фарингейту: ${fahrenheit}`);

import { concatStrings } from "./modules/concatStrings.js";
const str1 = 'one';
const str2 = 'two';
const str3 = concatStrings(str1, str2);
console.log(str3);
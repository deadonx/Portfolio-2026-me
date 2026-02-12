let number = document.getElementById('number');
let counter= 0;

setInterval(() =>{
 if (counter == 98) {
clearInterval;
} else {
counter += 1;
number.innerHTML = `${counter}%</br>HTML
`}
},20);

let number1 = document.getElementById('number1');
let counter1= 0;

setInterval(() =>{
 if (counter1 == 94) {
clearInterval;
} else {
counter1 += 1;
number1.innerHTML = `${counter1}% </br>Css
`}
},20);

let number2 = document.getElementById('number2');
let counter2= 0;

setInterval(() =>{
 if (counter2 == 5) {
clearInterval;
} else {
counter2 += 1;
number2.innerHTML = `${counter1}% </br>JS
`}
},20);




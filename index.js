document.getElementById('demo').innerHTML = 5 + 6;
document.getElementById('weather').innerHTML = toCelsius(97);

// Console game of fizzbuzz
// let x = prompt('input a number between 1 and 100')

//for (let x = 1; x <= 100; x++) {
// if (x % 15 === 0) {
//     console.log ('fizzbuzz')
// }
// else if (x % 5 === 0) {
//     console.log ('buzz')
// }
// else if (x % 3 === 0) {
//     console.log ('fizz')
// }
// else {
//     console.log ('input not divisible by 3, 5 and 15')
// }
//}

function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32)
}

let text = 'the temperature is ' + toCelsius(88) + ' celsius'
console.log(text)

const person = {
    firstName: 'Habeeb',
    lastName: 'Oyesile',
    age: 27,
    eyeColor: 'black',
    fullName: function() {
        return this.firstName + " " + this.lastName
    }
}

console.log(person.lastName)
console.log(person['firstName'])
console.log(person.fullName())

function displayDate() {
    let button = document.getElementById('button')
    return button.innerHTML = 'the time is ' + Date()
}

let alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let length = alphabets.length
console.log(length)

// JavaScript string slice(), substring() and substr()

let txt = 'apple, banana, kiwi'
let part = txt.slice(-12, -6)
let prt = txt.substring(-12, 5)
let str = txt.substr(-4)
console.log(part)
console.log(prt)
console.log(str)

// JavaScript replace() and replaceAll()
let sentence = 'please visit Microsoft and Microsoft'
let newSentence = sentence.replace('Microsoft', 'w3schools')
let anotherSentence = sentence.replaceAll('Microsoft', 'w3schools')
console.log(newSentence)
console.log(anotherSentence)

// JavaScript toUpperCase() and toLowerCase()
let bigSentence = sentence.toUpperCase()
let smallSentence = sentence.toLowerCase()
console.log(bigSentence, smallSentence)

// JavaScript padStart() and padEnd()
let pahd = '5'
let padded = pahd.padStart(7, "0");
let backPad = pahd.padEnd(5, '1')
console.log(padded, backPad)

// JavaScript charAt() and charCodeAt()
let grtn = 'Hello World'
let char = grtn.charAt(4)
let charCode = grtn.charCodeAt(4)
console.log(char, charCode)

// JavaScript split()
let ok = 'it is okay'
let newArray = ok.split(' ')
let firstWord = newArray[0]
console.log(newArray, firstWord)


// HTML templates 
let header = "Templates Literals";
let tags = ["template literals", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;
console.log(html)
document.getElementById('literal').innerHTML = html

// Numbers
let x = 0.2 + 0.1;
let y = (0.2 * 10 + 0.1 * 10) / 10;
console.log(x, y)

let myNumber = 32;
// Execute until Infinity
// while (myNumber != Infinity) {
//   myNumber = myNumber * myNumber;
// }

console.log(myNumber)
console.log(myNumber.toString(32));
console.log(myNumber.toString(16));
console.log(myNumber.toString(12));
console.log(myNumber.toString(10));
console.log(myNumber.toString(8));
console.log(myNumber.toString(2));

let u = 1234567890123456789012345n;
let v = BigInt(1234567890123456789012345)
let w = u * v
console.log(w)

let a = 9.656;
console.log(a.toFixed(2));
console.log(a.toFixed(4));
console.log(a.toFixed(6));

console.log(Number(true));
console.log(Number(false));
console.log(Number("10"));
console.log(Number("  10"));
console.log(Number("10  "));
console.log(Number(" 10  "));
console.log(Number("10.33"));
console.log(Number("10,33"));
console.log(Number("10 33"));
console.log(Number("John"));

console.log(Number(new Date("2017-09-30")))

console.log(parseInt("-10"));
console.log(parseInt("-10.33"));
console.log(parseInt("10"));
console.log(parseInt("10.33"));
console.log(parseInt("10 20 30"));
console.log(parseInt("10 years"));
console.log(parseInt("years 10"));

console.log(parseFloat("10"));
console.log(parseFloat("10.33"));
console.log(parseFloat("10 20 30"));
console.log(parseFloat("10 years"));
console.log(parseFloat("years 10"));

// Arrays
const fruits = ['apple', 'banana', 'orange']
// let flen = fruits.length

let sent = '<ul>'
// for (let i = 0; i < flen; i++) {
//     sent += '<li> ' + fruits[i] + '<li>'
// }
// sent += '</ul>'
// console.log(sent)

fruits.forEach(fruit)

function fruit(value) {
        sent += '<li>' + value + '<li>'
}

sent += '</ul>'
console.log(sent)

console.log(fruits.push('lemon'))
console.log(fruits[fruits.length] = 'grape')
console.log(fruits)

console.log(fruits.splice(2, 0, "tangarine", "kiwi"));
console.log(fruits)
console.log(fruits.slice(1, 3))


const numbers = [45, 4, 9, 16, 25];
let txxt = "";
numbers.forEach(myFunction);

function myFunction(value) {
  txxt += value + "<br>";
}

console.log(txxt)

// Array sort()
console.log(fruits.sort())
console.log(fruits.reverse())

const points = [40, 100, 1, 5, 25, 10];
console.log(points.sort(function(a, b){return a - b}));
console.log(points.sort(function(a, b){return b - a}))
console.log(points.sort(function(){return 0.5 - Math.random()}))

function sortNum() {
    points.sort(function(a, b){return a - b})
    document.getElementById('points').innerHTML = points
}

function sortAlpha() {
    points.sort()
    document.getElementById('points').innerHTML = points
}

const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];

  console.log(cars.sort(function(a, b) {return a.year - b.year}))
  console.log(cars.sort(function(a, b) {return b.year - a.year}))

  console.log(cars.sort(function(a, b){
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  }));

  // Array map()
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value) {
  return value * 2;
}

console.log(numbers2)

// Array filter
const numbers3 = [45, 4, 9, 16, 25];
const numbers4 = numbers3.filter(myFunction);

function myFunction(value) {
    return value > 18
}

console.log(numbers4)

// Array methods
const numbers5 = [45, 4, 9, 16, 25];
const numbers6 = numbers5.reduce(myFunction);
const numbers7 = numbers5.reduceRight(myFunction)
let allOver18 = numbers5.every(myFunction1)
let someOver18 = numbers5.some(myFunction2)
let firstOver18 = numbers5.find(myFunction3)

function myFunction(total, value) {
    return total + value
}

console.log(numbers6, numbers7)

function myFunction1(value) {
    return value > 18
}

console.log(allOver18)

function myFunction2(value) {
    return value > 18
}

console.log(someOver18)

function myFunction3(value) {
    return value > 18
}

console.log(firstOver18)

const d = new Date();
console.log(d.toDateString());
console.log(d.toUTCString())
console.log(d.toISOString())
console.log(d.toString())
console.log(d)
console.log(d.getFullYear());

// A Proper Random Function
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

console.log(getRndInteger(1, 17))

// Switch statement
let day;

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}

console.log(day)

let b = "0";
switch (b) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
}

console.log(text)

let weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

switch (randomNumber(0, 6)) {
  case 0:
    day = weekdays[0].toUpperCase()
    break
  case 1:
    day = weekdays[1].toUpperCase()
    break
  default:
    day = 'day is neither monday nor tuesday'
}

console.log(day)

// For of loop
let language = "JavaScript";

let texts = "";
for (let x of language) {
texts += x;
}

console.log(texts)

require('dotenv').config();


const userName = 'mesut';

console.log(`Hello ${userName}`);
console.log(`Name: ${process.env.NAME}`);
console.log(`Age: ${process.env.AGE}`);
console.log(`City: ${process.env.CITY}`);
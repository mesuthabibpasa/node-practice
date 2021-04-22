const fs = require("fs");
const path = require("path");
require("dotenv").config();
const inquirer = require("inquirer");

var addressBook = require("./addressBook.json");

var questions = [
  {
    type: "input",
    name: "name",
    message: "What's your name?",
  },
  {
    type: "input",
    name: "age",
    message: "How old are you?",
  },
  {
    type: "input",
    name: "city",
    message: "Where do you live?",
  },
];

const sum = function(a, b) {
  return a + b;
}

inquirer.prompt(questions).then((answers) => {
  return new Promise((resolve, reject) => {
    console.log(
      `Hi ${answers["name"]} (${answers["age"]}), from ${answers["city"]}!`
    );
    const newContact = { ...answers };
    addressBook.push(newContact);
    fs.writeFile(
      path.join(__dirname, "./addressBook.json"),
      JSON.stringify(addressBook, null, 2),
      (err) => {
        if (err) {
          reject(err);
        }
      }
    );
    resolve(console.log("Your information is saved!"));
  });
});

// console.log(`Name: ${process.env.NAME}`);
// console.log(`Age: ${process.env.AGE}`);
// console.log(`City: ${process.env.CITY}`);
// console.log(__dirname);


module.exports = sum;

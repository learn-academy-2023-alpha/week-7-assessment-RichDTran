// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

const { number } = require("yargs");

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

//PSEUDOCODE//ORIGINAL: Create a function called objectCap. This function we will take in an array of objects
// and use .map to touch each object in the array and use .toUppercase for names to be capitalized . And for each object I will use object.values to convert the objects to an array and use a newArray function  and concatanating the strings  Then i will want to use ().join to get rid of the commas) and returning another concatenation of the arrays to make one big array for multiple sentences together and the names capitalized.


//PSEUDOCODE: I created a function called objectCap that takes in a array and create a variable called words which will access the objects in the array by using Object.values turning it into an array and I wanted to do it for each one so I used .map to touch each array and take the value.name from one of the key pairs to use .split which will turn the array into a string. Then used .map again to use the variable i created "capitalizeString" which is a variable that takes in a string and at the index of 0 i capitalized the letter using .toUpperCase and .slice(1) to return the rest of the letters besides at [0] and used .toLowerCase for the rest of the letters. After this variable i used .join(" ") to elminate the , in the middle and provide correct spacing for the string and used .concat for the rest of the string. I accessed and concatanated the occupation key pair by value.occupation. This was alot of trial and error which explains all the commented out code below:

// const capitalize = capString.split(" "); {
//   for (let i = 0; i < capitalize.length; i++)
//     capitalize[i] = capitalize[i][0].toUpperCase() + capitalize[i].substr(1)
//     return capString.join(" ")
// }
//  var finalArray = 
// + value.name[0].toUpperCase()
  // const newArray = array.split(" ")
  // var newArray = people.split(" ").map(firstArray)
//   const firstArray = (Object.values(array)).map((value) => {
// 
//     return (value.name.toUpperCase())
//   })
//     return firstArray 
// }
// console.log(objectCap(people))
// + value.name.slice(1).toLowerCase()
// .split(" ")
    // return (value.name.split(" "))
    // return newArray
    // + value.name.substring(1)

// , value.name.toUpperCase() + value.name.substr(1) + "is"))})
// const capitalize = capString.split(" "); {
//   for (let i = 0; i < capitalize.length; i++)
//     capitalize[i] = capitalize[i][0].toUpperCase() + capitalize[i].substr(1)
//     return capString.join(" ")
// }
// + `is` + `${people.occupation}` 
// const objectCap = (array) => {
//   array.map(Object.values(`${people.name}`))
//   console.log(objectCap(people))
//   return objectCap(people)
// }
  
  
    
      // value.name.split(" ").toUpperCase() + value.name.substr(1))))})
    // let secondArray = (firstArray) => {
    // newArray = firstArray.map([0]).toUpperCase()
    // return newArray
    // }
  
// a) Create a test with an expect statement using the variable provided.

const people = [
  { name: "ford prefect", occupation: "a hitchhiker." },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy." },
  { name: "arthur dent", occupation: "a radio employee." }
]


var capitalizeString = (string) => string[0].toUpperCase() + 
string.slice(1).toLowerCase();

const objectCap = (array) => {
var words = (Object.values(array)).map((value) => {
  return (value.name.split(" ").map(capitalizeString).join(" ").concat(' is ').concat(value.occupation))})
console.log (words)
return  words
}



describe("objectCap", () => {
  it ("returns an array with a sentence about each person with their name capitalized", () => {
    expect(objectCap(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.
//PSEUDOCODE//ORIGINAL: I will create a function called byThree, this will take in an array and use .filter to return a sub-set array, what i want filtered will be the remainder of the numbers / by 3 we can do this by starting at the i=0 index of 0 and moving progressivly in the array. and use typeOf value === "numbers" to only return numbers if it has a remainder. Below is the attempt at this pseudocode.

  // console.log(mathArray)
// const byThree = (array) => {
//   for (let i = 0, i < array.length, i++)
//    (array[i] !== typeof("string" && "boolean"))
//   array.filter(numx % 3)
// return numx
// }
    // for(let i = 0; i < array.length; i++) {
    // if (array[i] !== "" || true || false)
    // console.log(value % 3)
    // array.filter((value => value % 3 !=="Yo"))



// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.
//PSEUDOCODE:  Created a function called byThree which takes in an array and using .filter on the array to extract only === "numbers." Then used .map to divide by 3 of each value by 3 giving us the return of only numbers in an array by typeOf value.

// const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
// const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]
//  mathArray =  
//  for (let i = 0; i < array.length; i++)
//   if (array[i] !== "" || true || false)

const byThree = (array) => {
  return array.filter((value) =>{
  return typeof value === "number"}).map (value => value %3)
}

describe("byThree", () => {
  it ("returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
    expect(byThree(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(byThree(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})
// b) Create the function that makes the test pass.

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.
//PSEUDOCODE: Create a function called sumOf that takes in an array. and use .reduce to get a whole number to add each value together after they have been cubed by using Math.pow.

// a) Create a test with an expect statement using the variables provided.
describe("sumOf", () => {
  it ("returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
    expect(sumOf(cubeAndSum1)).toEqual(99)
    expect(sumOf(cubeAndSum2)).toEqual(1125)
  })
})
const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

// b) Create the function that makes the test pass.

const sumOf = (array) => {
  return array.reduce((a,b) => a += Math.pow(b,3), 0)}

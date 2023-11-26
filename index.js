// I MISSED THIS DAYS MORNING EXERCISE SO I WENT THROUGH EACH OF THE 
// DIFFERENT WAYS TO CALL OBJECTS, KEYS, ENTRIES AND VALUES...I KNOW 
// IT'S OVER KILL, BUT IT HELPED ME GET THE JIST OF WHAT I MISSED
// ==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

console.log(person3) // all objects keys (arrays logged below if more than 1)
// {pizza: Array(2), tacos: 'Anything not from Taco bell', burgers: 'Portillos Burgers', ice_cream: Array(3), shakes: Array(1)}
console.log(Object.keys(person3))
// (5) ['pizza', 'tacos', 'burgers', 'ice_cream', 'shakes']
for (const key of Object.keys(person3)){
    console.log(key)
}
// pizza                ^
// tacos                | above is thru keys
// burgers          same result
// ice_cream            | below is thru index
// shakes               v
for (let i in Object.keys(person3)){
    console.log(Object.keys(person3)[i])
}
// pizza
// tacos
// burgers
// ice_cream
// shakes
Object.values(person3)
console.log(Object.values(person3))//list all the values in object keys

console.log(Object.entries(person3))// logged each array w/ drop downs

console.log(Object.entries(person3))
for (let [key, value] of Object.entries(person3)){
    console.log(`${key}, ${value}`)
}
// pizza, Deep Dish,South Side Thin Crust
// tacos, Anything not from Taco bell
// burgers, Portillos Burgers
// ice_cream, Chocolate,Vanilla,Oreo
// shakes, [object Object] doesn't log dict 

for (const value of Object.values(person3)){
    if (Array.isArray(value)){
        for (const thing of value){
            console.log(thing)
        }
    }else {
        console.log(value)
    }
}
// logs all values, no object key names are logged
// Deep Dish
// South Side Thin Crust
// Anything not from Taco bell
// Portillos Burgers
// Chocolate
// Vanilla
// Oreo
// {oberwise: 'Chocolate', dunkin: 'Vanilla', culvers: 'All of them', mcDonalds: 'Sham-rock-shake', cupids_candies: 'Chocolate Malt'}
for (const [key, value] of Object.entries(person3)){
    if (Array.isArray(value)){
        console.log(`${key}: `)
        value.forEach(thing => console.log(thing))
    } else {
        console.log(`${key}: ${value}`)
    }
}
// logs object keys, values, entries
// pizza: 
// Deep Dish
// South Side Thin Crust
// tacos: Anything not from Taco bell
// burgers: Portillos Burgers
// ice_cream: 
// Chocolate
// Vanilla
// Oreo
// shakes: 
// {oberwise: 'Chocolate', dunkin: 'Vanilla', culvers: 'All of them', mcDonalds: 'Sham-rock-shake', cupids_candies: 'Chocolate Malt'}


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

class Dude{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    printInfo = () => {
        return `Name ${this.name} \n Age: ${this.age}`
    }
}

let yoda = new Dude('Yoda', 900)
console.log(yoda.printInfo())

let countUp = (function () {
    let counter = yoda.age
    return function () {
        console.log(counter)
        return counter++
    }
})()

let yoda2 = {
    age:900
}
let countingUp =  () => {
    let counter = yoda.age
    return() => {
        console.log(counter)
        return counter++
    }
}
let goUp = countingUp()

// Name Yoda 
//  Age: 900
// countUp()
// 900
// 900
// countUp()
// 901
// 901
// countUp()
// 902
// 902
// countUp()
// 903
// 903
// countUp()
// 904
// 904

// Create two people using the 'new' keyword, and print 
// both of their infos and increment one persons
// age by 3 years. Use an arrow function for both methods
function Person(name, age){
    this.name = name;
    this.age = age

    this.getInfo = () => {
        console.log(`My name is  ${this.name}, I am ${this.age} years old. I am your father`)
        return "noooooo"
    };
    this.incrementAge = () => {
        this.age += 3
    };
}

let darth = new Person('Darth', 33)
let leah = new Person('Leah', 25)

console.log(darth.getInfo())
console.log(leah.getInfo())

darth.incrementAge()

console.log(darth.getInfo())










// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
let bigTen = (str)=> {
    return new Promise((resolve, reject) => {
        if (str.length > 10) {
            resolve(str)
        } else {
            reject(str)
        }
    })
}

bigTen("learn coding it's fun")
    .then((resolve) => {
        console.log(`Big word: ${resolve} `)
    })
    .catch((reject) =>{
        console.log(`Small number ${reject}`)
    })
// javascript objects are similar to dictionaries in python
/*
var ourDog = {
    "name": "spy"
    "legs": 4,
    "tails": 1,
    "friends": ["everyone"]

};
*/

//accesiing values of a property in an object
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats",
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;
var entreeValue = testObj[" an entree"];
var drinkValue = testObj['the drink'];
console.log(hatValue);
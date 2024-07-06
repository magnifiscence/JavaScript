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
//lets add a property
testObj.tie = "red"
testObj["price"] = "200"
//lets update a property
testObj.shoes = "balenciaga"
testObj["shirt"] = "adidas"
//lets delete a property from the object
delete testObj.shoes;
delete testObj["the drink"];
console.log(hatValue);
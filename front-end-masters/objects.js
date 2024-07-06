const js = {
    name: "JavaScript",
    abbreviation: "JS",
    isAwesome: true,
    officialSpec: "EcmaScript"

}


/*properties can point to functions*/
const dog = {
    name: "Ein",
    bread: "Corgi",
    speak: function () {
        console.log("woof woof");
    }
}

dog.speak();
function phoneticLocup(val) {
    var result = "";

    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "chicago",
        "delta": "denvar",
        "echo": "Easy",
        "foxtrot": "frank"
    };
    result = lookup[val];
    return result;
}

//checking properties
var myobj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleign"
}

function checkobj(checkprop) {
    if (myobj.hasOwnProperty(checkprop)) {
        return myobj[checkprop];
    } else {
        return "Not found"
    }
}

//accessing complex objects
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents)

console.log(phoneticLocup("alpha"));
console.log(checkobj("hello"));
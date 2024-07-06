function x(val) {
    var result = "";
    if  (val > 5) {
        result = " bigger than 5";
    }

    if (val <= 5) {
        result = "5 or smaller";
    }
    return result;
}

//we could also write the above code as

function x(val) {
    var result = "";
    if  (val > 5) {
        result = " bigger than 5";
    } else {
        result = "5 or smaller";
    }
    return result;
}

//else if
function x(val) {
    if (val > 10) {
        return "greater than 10";
    } else if (val < 5) {
        return " smaller than 5";
    } else {
        return "between 5 and 10"
    }
}
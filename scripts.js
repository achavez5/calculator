const add = function(x, y){
    return x + y;
}

const subtract = function(x,y) {
    return x - y;
}

const multiply = function(x, y){
    return x * y;
}

const divide = function (x, y){
    return x / y;
}

const operate = function(operator, x, y){
    switch(operator){
        case "divide":
            return divide(x,y);
        case "multiply":
            return multiply(x,y);
        case "add":
            return add(x,y);
        case "subtract":
            return subtract(x,y);
        default:
            return alert("Pick valid operator");
        

    }
}

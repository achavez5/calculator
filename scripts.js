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

const click = function(x){
    alert(x);
}

const updateDisplay = function(text){
    
    switch (text){
        case "one":
            display.textContent += "1";
            break;
        case "two":
            display.textContent += "2";
            break;
        case "three":
            display.textContent += "3";
            break;
        case "four":
            display.textContent += "4";
            break;
        case "five":
            display.textContent += "5";
            break;
        case "six":
            display.textContent += "6";
            break;
        case "seven":
            display.textContent += "7";
            break;
        case "eight":
            display.textContent += "8";
            break;
        case "nine":
            display.textContent += "9";
            break;
        case "zero":
            display.textContent += "0";
            break;
        case "add":
            display.textContent += " + ";
            break;
        case "subtract":
            display.textContent += " - ";
            break;
        case "divide":
            display.textContent += " / ";
            break;
        case "multiply":
            display.textContent += " X ";
            break;
        case "clear":
            display.textContent = "";
            break;    
        case "delete":
            display.textContent = 
                display
                    .textContent
                    .slice(0,display.textContent.length - 1);
    }


}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        updateDisplay(button.id);
    }
    );
});

const display = document.querySelector("#calcDisplay");

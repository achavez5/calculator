class Calculator{
    constructor(previousTextElement, currentTextElement){
        this.previousTextElement = previousTextElement;
        this.currentTextElement = currentTextElement;
        this.clear();       
    }

    clear(){
        this.currentText = '';
        this.previousText = '';
        this.operation = undefined;
    }
    
    delete(){
        this.currentText = this.currentText.toString().slice
        (0,-1);
    }

    appendNum(number){
        if(number === '.' && this.currentText.includes('.')) 
            return 
        this.currentText = this.currentText.toString() + number.toString();
    }

    chooseOperation(operation){
        if (this.currentText === '') return
        if (this.previousText !== ''){
            this.compute();
        }
        this.operation = operation; 
        this.previousText = this.currentText
        this.currentText = '';
    }
    
    compute(){
        let computation
        const prev = parseFloat(this.previousText)
        const current = parseFloat(this.currentText)
        if (isNaN(prev) || isNaN(current)) return
        
        switch(this.operation){
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '÷':
                computation = prev / current;
                break;
            default:
                return;
            
         }
         this.currentText = computation
         this.operation = undefined
         this.previousText = '';
        }

    getDisplayNumber(number){
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];
        let integerDisplay;
        if(isNaN(integerDigits)){
            integerDisplay = '';
        } else{
            integerDisplay = integerDigits.toLocaleString('en', {
            maximumFractionDigits: 0 });
        }
        if(decimalDigits != null){
            return `${integerDisplay}.${decimalDigits}`;
        } else {
            return integerDisplay;
        }
     }

    updateDisplay(){
        this.currentTextElement.innerText = this.getDisplayNumber(this.currentText);
        if(this.operation != null){
            this.previousTextElement.innerText = 
                `${this.getDisplayNumber(this.previousText)} ${this.operation}`;
        }else{
            this.previousTextElement.innerText = '';
        }
        
    }
}


const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll(
    '[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const clearButton = document.querySelector('[data-clear]');
const previousTextElement = document.querySelector('[data-previous]');
const currentTextElement = document.querySelector('[data-current]');

const calculator = new Calculator(previousTextElement, currentTextElement);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNum(button.innerText)
        calculator.updateDisplay();
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay();
    })
})

clearButton.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
});

equalsButton.addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay();
});

deleteButton.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
});

function toggleMode(){
    var element = document.body;
    element.classList.toggle("light-mode");
}

const toggleButton = document.querySelector("#toggle-button");

toggleButton.addEventListener('click', () =>{
    toggleMode();
});
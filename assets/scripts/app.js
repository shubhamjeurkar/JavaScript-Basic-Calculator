let currentResult=0;

//currentResult = currentResult + 10 * 3 / 2 -1;

function add(num1 , num2){
    const enteredNum = parseInt(userInput.value);
    const calcDesciption = `${currentResult} + ${enteredNum}`;
    currentResult += enteredNum;
    outputResult(currentResult, calcDesciption);
}

function subtract(num1 , num2){
    const enteredNum = parseInt(userInput.value);
    const calcDesciption = `${currentResult} - ${enteredNum}`;
    currentResult -= enteredNum;
    outputResult(currentResult , calcDesciption);
}

//currentResult=add(2,5);
addBtn.addEventListener('click' , add);
subtractBtn.addEventListener('click' , subtract);


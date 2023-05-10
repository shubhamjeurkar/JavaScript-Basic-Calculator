let currentResult=0;
let logEnteries = [];

//currentResult = currentResult + 10 * 3 / 2 -1;

// Gets input from input field
function getUserNumberInput(){
    return parseInt(userInput.value);
}

// Generates and writes calculation logs
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
    const calcDesciption = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDesciption);
}

function writeToLog(operation , initialResult, enteredNum, currentResult){
    const logEntry = {
        operation : operation,
        prevResult : initialResult ,
        number : enteredNum ,
        result : currentResult
    };
    logEnteries.push(logEntry);
    console.log(logEnteries);
}

function calculateResult(calculationType){
    const enteredNum = getUserNumberInput();
    const initialResult = currentResult;
    let mathOperator ;

    if(calculationType !== 'ADD' &&
    calculationType !== 'Subtract' &&
    calculationType !== 'Multiply' &&
    calculationType !== 'Divide' ||
    !enteredNum
    ) {
    return;
    }

    if(calculationType === 'ADD'){
        currentResult += enteredNum;
        mathOperator = '+';
    }
    else if(calculationType === 'Subtract'){
        currentResult -= enteredNum;
        mathOperator = '-';
    }
    else if(calculationType === 'Multiply'){
        currentResult *= enteredNum;
        mathOperator = '*';
    }
    else if(calculationType === 'Divide') {
        currentResult /= enteredNum;
        mathOperator = '/';
    }

    createAndWriteOutput(mathOperator, initialResult, enteredNum);
    writeToLog(calculationType, initialResult, enteredNum, currentResult);
}


function add(num1 , num2){
    calculateResult('ADD');
}

function subtract(num1 , num2){
    calculateResult('Subtract');
}

function multiply(num1, num2){
    calculateResult('Multiply');
}

function divide(num1, num2){
    calculateResult('Divide');
}

//currentResult=add(2,5);
addBtn.addEventListener('click' , add);
subtractBtn.addEventListener('click' , subtract);
multiplyBtn.addEventListener('click' , multiply);
divideBtn.addEventListener('click' , divide);


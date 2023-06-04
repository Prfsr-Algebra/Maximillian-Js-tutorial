let defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];
function getUserInput()
{
    return parseInt(userInput.value);  
}
function createAndWriteOutput(operator, resultBefore, resultAfter)
{
const description = `${resultBefore}  ${operator}  ${resultAfter}`;
outputResult(currentResult, description);
}
function WriteToLog(operation,
    initialResult,
    newNumber,
    current){
const logEntry = {
    operator: operation,
    Number: initialResult,
    new: newNumber,
    Result: current
};
logEntries.push(logEntry);
console.log(logEntries);
}
function operation(calculation_type){
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    if(calculation_type !== "ADD" &&
    calculation_type !== "SUBTRACT"&&
    calculation_type !== "MULTIPLY"&&
    calculation_type !== "DIVIDE" ||
    !enteredNumber
    )
    {
        return;
    }
    let mathOperator;
    if (calculation_type === "ADD"){
        currentResult = currentResult + enteredNumber;
        mathOperator = '+';
    }
    else if(calculation_type === "SUBTRACT"){
        currentResult = currentResult - enteredNumber;
        mathOperator = '-';
    }
    else if (calculation_type === "MULTIPLY"){
        currentResult = currentResult * enteredNumber;
        mathOperator = '*';
        }
    else if(calculation_type === "DIVIDE"){
            currentResult = currentResult / enteredNumber;
            mathOperator = '/';
            
        }
        createAndWriteOutput(mathOperator, initialResult, enteredNumber);
        WriteToLog(calculation_type, initialResult, enteredNumber, currentResult);
    //alert(`the result is ${result}`);
    //currentResult = currentResult + +userInput.value
   
    return currentResult;
    
}
function add(){
    operation("ADD");
}
/*add(1, 3);
currentResult = defaultResult + add(1, 3);
let description = `( ${defaultResult} + 10)`;*/
function subtract()
{
    operation("SUBTRACT");
    
}
function multiply()
{
    operation("MULTIPLY");
    
}
function divide()
{
    operation("DIVIDE");
   
}
const addBtn = document.getElementById('btn-add');
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

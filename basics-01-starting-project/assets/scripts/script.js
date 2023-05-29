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
function add(){
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
   currentResult = currentResult + enteredNumber;
    //alert(`the result is ${result}`);
   createAndWriteOutput('+', currentResult, enteredNumber);
    //currentResult = currentResult + +userInput.value
    WriteToLog("ADD", initialResult, enteredNumber, currentResult);
   
    return currentResult;
    
}
/*add(1, 3);
currentResult = defaultResult + add(1, 3);
let description = `( ${defaultResult} + 10)`;*/
function subtract()
{
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult = currentResult - enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber);
    WriteToLog("SUBTRACT", initialResult, enteredNumber, currentResult); 
    return currentResult;
}
function multiply()
{
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult = currentResult * enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber);
    WriteToLog("MULTIPLY", initialResult, enteredNumber, currentResult);
    return currentResult;
}
function divide()
{
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult = currentResult / enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber);
    WriteToLog("DIVIDE", initialResult, enteredNumber, currentResult);
    return currentResult;
}
const addBtn = document.getElementById('btn-add');
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
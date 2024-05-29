const convert = require("../src/calculator/converter");
const eval = require("../src/calculator/evaluator");

init();

function init() {
    document.getElementById("result").value = null;
    document.getElementById("hexToDec").value = null;
    document.getElementById("decToHex").value = null;
    document.getElementById("hexToDec-result").innerText = "";
    document.getElementById("decToHex-result").innerText = "";

    const list = document.querySelectorAll(".btn");

    for (let i = 0; i < list.length; i++)
    {
        switch(i){
            case 0:
                addEvent("click", list[i], ()=>{
                    clear();
                });
                break;
            case 5:
                addEvent("click", list[i], ()=>{
                    let input = document.getElementById("result").value;    
                    if (input != null) {
                        document.getElementById("result").value = input.substring(0, input.length - 1);   
                    }
                });
                break;
            case 24:
                addEvent("click", list[i], ()=>{
                    solve();
                });
                break;
            default:
                addEvent("click", list[i], ()=>{
                    display(list[i].dataset.operation);
                });
                break;
        }
    }

    addEvent("keyup", document.getElementById("hexToDec"), ()=>{
        if (document.getElementById("hexToDec").value != null) {
            convertToDec(document.getElementById("hexToDec").value);
        }
    })

    addEvent("keyup", document.getElementById("decToHex"), ()=>{
        if (document.getElementById("decToHex").value != null) {
            convertToHex(document.getElementById("decToHex").value);
        }
    })
}

function solve() { 
    document.getElementById("error-result").innerText = "";

    try {
        let expression = document.getElementById("result").value;
        validateInput(expression);
        let result = eval.evaluateExpression(expression);
        document.getElementById("result").value = result;
        document.getElementById("result").style.color = "#FFFFFF"
    } 
    catch (error) {
        let errorMessage = "";
        if (error == "Long operand") errorMessage = "Please input numbers consisting of 3 characters or less";
        else if (error == "Invalid operand" || "Non-hexadecimal number") errorMessage = "Please valid hexadecimal value(s)";
        else if (error == "This expression is invalid") errorMessage = "Please enter a valid mathematical expression";
        else if (error == "Negative difference") errorMessage = "Cannot evaluate an expression that results in a negative value";

        document.getElementById("error-result").innerText = errorMessage;
    }    
}

function validateInput(expression){
    const delimiters = "+-/*";
    let tokens = eval.tokenize(expression);

    for (let i = 0; i < tokens.length - 2; i++){
        let x = tokens[i];
        let y = tokens[i + 1];
        if (delimiters.includes(x) && delimiters.includes(y)) throw "This expression is invalid";
    }

    return true;
}

function convertToDec(val) {
    try{
        if (val == "" || val == null){
            document.getElementById("hexToDec-result").innerText = "";
            return;
        }
        
        let result = convert.hextoDec(val);
        document.getElementById("hexToDec-result").innerText = result;
        document.getElementById("error-convert-hex").innerText = "";

    } catch(error) {
        let errorMessage = "";
        if (error == "Non-hexadecimal number") errorMessage = "Please enter a valid hexadecimal number";
        document.getElementById("hexToDec-result").innerText = "";
        document.getElementById("error-convert-hex").innerText = errorMessage;
    }
}

function convertToHex(val) {
    try {
        if (val == "" || val == null){
            document.getElementById("decToHex-result").innerText = "";
            return;
        }

        let result = convert.decToHex(parseInt(val));
        document.getElementById("decToHex-result").innerText = result;
        document.getElementById("error-convert-dec").innerText = "";

    } catch(error) {
        let errorMessage = "";
        if (error == "Non-decimal number") errorMessage = "Please enter a valid decimal number";
        document.getElementById("decToHex-result").innerText = "";
        document.getElementById("error-convert-dec").innerText = errorMessage;
    }
}

function addEvent(event, element, func){
    element.addEventListener(event, func);
}

function clear() { 
    document.getElementById("result").value = "";
}

function display(val) {
    document.getElementById("result").value += val;
    document.getElementById("result").style.color = "#ECECEC";
}
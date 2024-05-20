(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
    } 
    catch (error) {
        let errorMessage = "";
        if (error == "Long operand") errorMessage = "Please input numbers consisting of 3 characters or less";
        if (error == "Invalid operand") errorMessage = "Please valid hexadecimal values";
        if (error == "This expression is invalid") errorMessage = "Please enter a valid mathematical expression";

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
    try{
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
}
},{"../src/calculator/converter":3,"../src/calculator/evaluator":4}],2:[function(require,module,exports){
const convert = require("./converter");

function add(x, y){
    return convert.decToHex(convert.hextoDec(x) + convert.hextoDec(y));
}

function subtract(x, y){
    let difference = convert.hextoDec(x) - convert.hextoDec(y);
    if (difference < 0) throw "Negative difference";
    difference = convert.decToHex(difference);
    return difference;
}

function multiply(x, y){
    if (x == 0 || y == 0) return 0;        
    return convert.decToHex(convert.hextoDec(x) * convert.hextoDec(y));
}

function divide(x,y){
    if (x == 0 || y == 0) throw "Division by zero";
    return convert.decToHex(convert.hextoDec(x) / convert.hextoDec(y));
}


module.exports = {add, subtract, multiply, divide};
},{"./converter":3}],3:[function(require,module,exports){
const hexadecimalCode = /^[a-fA-F0-9]+$/;

function isHexadecimal(x){
    return hexadecimalCode.test(x);
}

function isDecimal(x){
    return !isNaN(Number(x));
}

function decToHex(x){
    if (!this.isDecimal(x)) throw "Non-decimal number";
    return x.toString(16).toUpperCase();
}

function hextoDec(x){
    if (!this.isHexadecimal(x)) throw "Non-hexadecimal number";
    return parseInt(x, 16);
}

module.exports = {isHexadecimal, isDecimal, decToHex, hextoDec};
},{}],4:[function(require,module,exports){
const operators = require(`./arithmeticOperators`);
const inputOutput = require(`./inputOutput`);

const delimiters = "+-/*()";

function tokenize(expression) {
    let tokens = [];
    let currToken = "";

    for (let x of expression) {
        if (x === ' ') continue;
        
        if (delimiters.includes(x)) {
            if (currToken.length > 0) {
                tokens.push(currToken);
                currToken = "";
            }
            tokens.push(x);
        }
        else {
            currToken += x;
        }
    }

    if (currToken.length > 0) {
        tokens.push(currToken);
    }

    return tokens;
}

function validateTokens(tokens) {
    try {
        tokens.forEach(token =>{
            if (!delimiters.includes(token)) {
                if (!inputOutput.validOperand(token, )) return;
            }
        });
    }  
    catch (error) {
        throw error;
    }
}

function infixToPostfix(tokens) {
    let postfixArr = [];
    let buffer = [];

    const precedence = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2,
    };

    const associativity = {
        '+': 'Left',
        '-': 'Left',
        '*': 'Left',
        '/': 'Left',
    };
    
    tokens.forEach(token => {
        if (!delimiters.includes(token)) {
            postfixArr.push(token);
        }
        
        else if (token == "(") {
            buffer.push(token);
        }

        else if (token == ")") {
            while (buffer.length > 0 && buffer[buffer.length - 1] != "(") {
                postfixArr.push(buffer.pop())
            }

            buffer.pop();
        }

        else {
            while ((buffer.length > 0) && (precedence[token] <= precedence[buffer[buffer.length - 1]]) && (associativity[token] == 'Left')) {
                postfixArr.push(buffer.pop());
            }

            buffer.push(token);
        }
    });

    while (buffer.length > 0) {
        if (buffer[buffer.length - 1] == "(") {
            return "This expression is invalid";
        }
            
        postfixArr.push(buffer.pop());
    }

    return postfixArr;
}

function evaluatePostfix(postfixTokens)
{
    const stack = [];
    
    postfixTokens.forEach(token => {

        const delimiters = "+-/*()";

        if (!delimiters.includes(token)) {
            stack.push(token);
        }

        else 
        {
            const operand1 = stack.pop();
            const operand2 = stack.pop();
            var result;

            switch (token) {
                case '+':
                    result = operators.add(operand2, operand1); 
                    break;
                case '-': 
                    result = operators.subtract(operand2, operand1);
                    break;
                case '/': 
                    result = operators.divide(operand2, operand1);
                    break;
                case '*': 
                    result = operators.multiply(operand2, operand1);
                    break;
            }

            stack.push(result);
        }
    });
    
    let answer = stack.pop();
    if (!inputOutput.validAnswer(answer)) return;
    return answer;
}

function evaluateExpression(expression) {
    try {
        const tokens = tokenize(expression);
        validateTokens(tokens);
        const postfix = infixToPostfix(tokens);
        return evaluatePostfix(postfix);
    } catch (error) {
        throw error;
    }
}

module.exports = {tokenize, infixToPostfix, evaluatePostfix, evaluateExpression};
},{"./arithmeticOperators":2,"./inputOutput":5}],5:[function(require,module,exports){
const convert = require("./converter");

function validOperand(value){
    if (!convert.isHexadecimal(value)) throw "Invalid operand";
    if (value.length > 3) throw "Long operand";
    return true;
}

function validAnswer(value){
    if (!convert.isHexadecimal(value)) throw "Invalid answer";
    if (value.length > 6) throw "Long answer";
    return true;
}

module.exports = {validOperand, validAnswer};
},{"./converter":3}]},{},[1]);

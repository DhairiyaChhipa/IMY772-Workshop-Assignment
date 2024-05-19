const { Stack } = require("./stack");
const operators = require(`./arithmeticOperators`);
const e = require("express");

// let tokens = new Stack();


function tokenize(expression) {
    let tokens = [];
    let currToken = "";
    const delimiters = "+-/*()";

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

function infixToPostfix(tokens) {

    const delimiters = "+-/*()";
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
            while (buffer.length > 0 && buffer[buffer.length - 1] != '(') {
                postfixArr.push(buffer.pop())
                buffer.pop();
            }
        }

        else {
            while (buffer.length > 0 && (precedence[token] <= precedence[buffer[buffer.length - 1]]) && associativity[token] === 'Left') {
                postfixArr.push(buffer.pop());
            }
            buffer.push(token);
        }
    });

    while (buffer.length > 0) {
        if (buffer[buffer.length - 1] == '(')
            return "This expression is invalid";
        postfixArr.push(buffer.pop());
    }

    return postfixArr;
}

function evaluatePostfix(postfixTokens)
{
    const stack = [];
    
    postfixTokens.forEach(token => {
        if (!isNaN(token)) { stack.push(parseInt(token)); } 
        else 
        {
            const b = stack.pop();
            const a = stack.pop();
            switch (token) {
                case '+': stack.push(operators.add(a, b)); break;
                case '-': stack.push(operators.subtract(a, b)); break;
                case '*': stack.push(operators.multiply(a, b)); break;
                case '/': stack.push(operators.divide(a, b)); break;
            }
        }
    });
    
    return stack.pop();
}

function evaluateExpression(expression) {
    const tokens = tokenize(expression);
    const postfix = infixToPostfix(tokens);
    return parseInt(evaluatePostfix(postfix));
}


function temp(expression) {
    const tokens = tokenize(expression);
    const ahh = infixToPostfix(tokens);

    let string = "";
    for (let i = 0; i < ahh.length; i++) {
        string += ahh[i] + "";
    }

    return string;
}


module.exports = {tokenize, temp, infixToPostfix, evaluatePostfix, evaluateExpression};
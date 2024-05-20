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
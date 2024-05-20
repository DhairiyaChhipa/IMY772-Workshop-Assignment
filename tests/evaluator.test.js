const evaluate = require("../src/calculator/evaluator");

// =================== TOKENIZE ===================
let arr = ["31", "+", "4", "*", "2"];
test("Tokenizing string: '31 + 4 * 2'", () => {
    expect(evaluate.tokenize("31 + 4 * 2")).toEqual(arr);
});

let arr2 = ["31", "+", "4", "*", "2", "/", "(", "1", "-", "5", ")"];
test("Tokenizing string: '31 + 4 * 2 / (1 - 5)'", () => {
    expect(evaluate.tokenize("31 + 4 * 2 / (1 - 5)")).toEqual(arr2);
});

let arr3 = ["10", "/", "(", "5", "-", "3", ")", "+", "1"];
test("Tokenizing string: '10 / (5 - 3) + 1'", () => {
    expect(evaluate.tokenize("10 / (5 - 3) + 1")).toEqual(arr3);
});

test("Tokenizing string: '10 / (5 - 3) 1'", () => {
    expect(evaluate.tokenize("10 / (5 - 3) 1")).not.toEqual(arr3);
});

let arr4 = ["(", "3A", "+", "4", ")", "*", "5B"];
test("Tokenizing string: '(3A + 4) * 5B)'", () => {
    expect(evaluate.tokenize("(3A + 4) * 5B")).toEqual(arr4);
});

// =================== INFIX TO POSTFIX ===================
let arr5_1 = ["(", "3", "+", "4", ")", "*", "5"];
let arr5_2 = ["3", "4", "+", "5", "*"];
test("Converting infix string to postfix: '(3 + 4) * 5'", () => {
    expect(evaluate.infixToPostfix(arr5_1)).toEqual(arr5_2);
});

let arr6_1 = ["3", "+", "4", "*", "2", "/", "(", "1", "-", "5", ")"];
let arr6_2 = ["3", "4", "2", "*", "1", "5", "-", "/", "+"];

test("Converting infix string to postfix: '3 + 4 * 2 / (1 - 5)'", () => {
    expect(evaluate.infixToPostfix(arr6_1)).toEqual(arr6_2);
});

let arr7_1 = ["10", "/", "(", "5", "-", "3", ")" , "+", "1"];
let arr7_2 = ["10", "5", "3", "-", "/", "1", "+"];
test('Converting infix string to postfix: 10 / (5 - 3) + 1', () => {
    expect(evaluate.infixToPostfix(arr7_1)).toEqual(arr7_2);
});

let arr8_1 = ["2", "+", "(", "23", "*", "1", ")", "-", "9"];
let arr8_2 = ["2", "23", "1", "*", "+", "9", "-"];
test("Converting infix to postfix: '2 + (23 * 1) - 9')", () => {
    expect(evaluate.infixToPostfix(arr8_1)).toEqual(arr8_2);
});

// =================== EVALUATION ===================
test('Evaluating string: (3A + 4) * 5B', () => {
    expect(evaluate.evaluateExpression("(3A + 4) * 5B")).toMatch("160A");
});

test("Evaluating postfix: '2 + (23 * 1) - 9'", () => {
    expect(evaluate.evaluateExpression("2 + (23 * 1) - 9")).toEqual("1C");
});

test("Evaluating postfix: '3 + 4 * 2 / (5 - 1)'", () => {
    expect(evaluate.evaluateExpression("3 + 4 * 2 / (5 - 1)")).toEqual("5");
});

test('Evaluating string: 10 / (5 - 3) + 1', () => {
    expect(evaluate.evaluateExpression("10 / (5 - 3) + 1")).toEqual("9");
});

test('Evaluating string: 41 + (1A * 12)', () => {
    expect(evaluate.evaluateExpression("41 + (1A * 12)")).toEqual("215");
});
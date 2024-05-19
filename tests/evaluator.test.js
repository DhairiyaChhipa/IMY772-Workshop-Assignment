const evaluate = require("../src/calculator/evaluator");

// test('Evaluating string: (3+4)*5', () => {
//     expect(evaluate.temp("(3+4)*5")).toMatch("34+5*");
// });

// test('Evaluating string: 3+4*2/(1-5)', () => {
//     expect(evaluate.temp("3+4*2/(1-5)")).toMatch("342*15-/+");
// });

// ------------
// test('Evaluating string: (3 + 4) * 5', () => {
//     expect(evaluate.evaluateExpression("(3 + 4) * 5")).toEqual(35);
// });


// test('Evaluating string: 3 + (4 * 5)', () => {
//     expect(evaluate.evaluateExpression("(3 + 4) * 5")).toEqual(23);
// });

// test('Evaluating string: 3 + 4 * 5', () => {
//     expect(evaluate.evaluateExpression("(3 + 4) * 5")).toEqual(23);
// });

// test('Evaluating string: (1 + 2) * (3 + 4)', () => {
//     expect(evaluate.evaluateExpression("(1 + 2) * (3 + 4)")).toEqual(21);
// });

// test('Evaluating string: 10 / (5 - 3) + 1', () => {
//     expect(evaluate.evaluateExpression("10 / (5 - 3) + 1")).toEqual(6);
// });

let arr = ["31", "+", "4", "*", "2"];

test('Tokenizing string: 31 + 4 * 2', () => {
    expect(evaluate.tokenize("31 + 4 * 2")).toEqual(arr);
});

let arr2 = ["31", "+", "4", "*", "2", "/", "(", "1", "-", "5", ")"];

test('Tokenizing string: 31 + 4 * 2 / (1 - 5)', () => {
    expect(evaluate.tokenize("31 + 4 * 2 / (1 - 5)")).toEqual(arr2);
});

let arr3 = ["10", "/", "(", "5", "-", "3", ")", "+", "1"];

test('Tokenizing string: 10 / (5 - 3) + 1', () => {
    expect(evaluate.tokenize("10 / (5 - 3) + 1")).toEqual(arr3);
});
const { Stack } = require("../src/calculator/stack");

let tokens = new Stack();
tokens.push("C");

test('Testing popping from stack', () => {
    expect(tokens.pop()).toMatch("C");
});
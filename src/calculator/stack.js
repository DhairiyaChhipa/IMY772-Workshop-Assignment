class Stack{
    constructor() {
        this.list = [];
    }

    push(element) {
        this.list.push(element);
    }

    pop() {
        if (this.list.length == 0)
            return null;
        return this.list.pop();
    }

    peek() {
        return this.list[this.list.length - 1];
    }

    isEmpty() {
        return (this.list.length == 0);
    }

    printStack() {
        let string = "";
        for (let i = 0; i < this.list.length; i++) {
            string += this.list[i] + " ";
        }
        return string;
    }
}

module.exports = {Stack};
'use strict'

let chai = require('chai');
let expect = chai.expect;
let MinStack = require('./min_stack')

chai.should();

describe("Min Stack", () => {
    let stack;

    beforeEach(() => {
        stack = new MinStack();
    });

    it("should return null on empty stack", () => {
        expect(stack.min()).to.be.null;
    });

    it("should return 1 on [5, 1, 4, 3, 9] stack", () => {
        stack.push(9);
        stack.push(3);
        stack.push(4);
        stack.push(1);
        stack.push(5);

        stack.min().should.be.equal(1);
    });

    it("should return 3 on [5, 1, 4, 3, 9] stack after 1 is popped", () => {
        stack.push(9);
        stack.push(3);
        stack.push(4);
        stack.push(1);
        stack.push(5);

        stack.pop();
        stack.pop();

        stack.min().should.be.equal(3);
    });
});
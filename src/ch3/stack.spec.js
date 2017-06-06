'use strict'

let chai = require('chai');
let Stack = require('./stack').Stack;

chai.should();

describe('Stack', () => {
    let stack;

    beforeEach( () => {
        stack = new Stack();
    });

    it('created stack should not be null', () => {
        stack.should.not.be.null;
    });

    it('should have 2 itens', () => {
       stack.push(1);
       stack.push(2);
       
       stack.empty().should.be.false;
       stack.toArray().should.deep.equal([2, 1]);
    });

    it('should be filled and then empty', () => {
       stack.push(1);
       stack.push(2);

       let firstPop = stack.pop();
       let secondPop = stack.pop();
       
       stack.empty().should.be.true;
       firstPop.should.equal(2);
       secondPop.should.equal(1);
    });

    it('should peek item', () => {
       stack.push(1);
       stack.push(2);

       stack.peek().should.be.equal(2);
       stack.empty().should.be.false;
       stack.toArray().should.deep.equal([2, 1]);
    });
});
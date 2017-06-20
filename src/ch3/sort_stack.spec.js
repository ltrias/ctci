'use strict'

let chai = require('chai');
let SortStack = require('./sort_stack');

chai.should();

describe('Sort stack', () => {
    it('should order itens added in reverse order', () => {
        let stack = new SortStack();

        for(let i = 0; i < 10; i++){
            stack.push(i);
        }
        
        let previous = 10;

        while( !stack.empty() ){
            stack.pop().should.be.equal(--previous)
        }
        
    });
});
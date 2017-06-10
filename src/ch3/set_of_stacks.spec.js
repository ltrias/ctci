'use strict'

let chai = require('chai');
let SetOfStacks = require('./set_of_stacks');

chai.should();

describe('Set of stacks', () => {
    it('should return null when no element has been added', () => {
        let set = new SetOfStacks(3);
    });

    it('should return 9 to 1 3 by 3', () => {
        let set = new SetOfStacks(3);

        for(let i = 0; i < 10; i++){
            set.push(i);
        }
        
        for(let i = 9; i >= 0; i--){
            let popped = set.pop();
            popped.should.be.equal(i);
        }
        
    });

    it('popAt without insertion after', () => {
        let set = new SetOfStacks(3);

        for(let i = 0; i < 10; i++){
            set.push(i);
        }

        set.popAt(1).should.be.equal(5);
        
        for(let i = 9; i >= 0; i--){
            if( i === 5 ) continue;

            let popped = set.pop();
            popped.should.be.equal(i);
        }
    });

    it('popAt with insertion after', () => {
        let set = new SetOfStacks(2);
        
        set.push(0);
        set.push(1);
        set.push(2);
        set.popAt(1);
        set.push(3);
        set.push(4);
        set.push(5);

        
        for(let i = 5; i >= 0; i--){
            if( i === 2 ) continue;
            let popped = set.pop();
            popped.should.be.equal(i);
        }
    });
});
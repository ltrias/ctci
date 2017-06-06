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
            set.pop().should.be.equal(i);
        }
        
    });
});
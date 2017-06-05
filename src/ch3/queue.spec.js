'use strict'

let chai = require('chai');
let Queue = require('./queue');

chai.should();

describe('Queue', () => {
    let queue;

    beforeEach( () => {
        queue = new Queue();
    });

    it('created queue should not be null', () => {
        queue.should.not.be.null;
    });

    it('should have 2 itens', () => {
       queue.add(1);
       queue.add(2);
       
       queue.empty().should.be.false;
       queue.toArray().should.deep.equal([1, 2]);
    });

    it('should be filled and then empty', () => {
       queue.add(1);
       queue.add(2);

       let firstRemove = queue.remove();
       let secondRemove = queue.remove();
       
       queue.empty().should.be.true;
       firstRemove.should.equal(1);
       secondRemove.should.equal(2);
    });

    it('should peek item', () => {
       queue.add(1);
       queue.add(2);

       queue.peek().should.be.equal(1);
       queue.empty().should.be.false;
       queue.toArray().should.deep.equal([1, 2]);
    });
});
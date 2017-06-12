'use strict'

let chai = require('chai');
let QueueOfStacks = require('./queue_of_stacks');

chai.should();

describe('Queue of stacks', () => {
    let queue;

    beforeEach( () => {
        queue = new QueueOfStacks();
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
       queue.add(3);
       queue.add(4);
       queue.add(5);

       for(let i = 1; i <= 5; i++){
           queue.remove().should.be.equal(i);
       }
       
       queue.empty().should.be.true;
    });

    it('should peek item', () => {
       queue.add(1);
       queue.add(2);

       queue.peek().should.be.equal(1);
       queue.empty().should.be.false;
       queue.toArray().should.deep.equal([1, 2]);
    });

    it('should be able to process multiple operations', () => {
       queue.add(1);
       queue.add(2);
       queue.add(3);
       queue.remove();
       queue.add(4);
       queue.peek().should.be.equal(2);
       queue.add(5);
       queue.remove();
       queue.add(6);

       for(let i = 3; i <= 6; i++){
           queue.remove().should.be.equal(i);
       }
       
       queue.empty().should.be.true;
    });
});
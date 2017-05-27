'use strict'

let chai = require('chai');
let LinkedList = require('./linkedlist');

chai.should();

describe('Linked List', () => {
    let list;

    beforeEach( () => {
        list = new LinkedList();
    });

    it('create a list', () => {
        list.should.not.be.null;
    });

    it('appendToTail', () => {
       list.appendToTail('a'); 
       list.appendToTail('b'); 
    });

    describe('toArray', () =>{
        it('should return empty array', () => {
            let r = list.toArray();
            r.should.be.a('array');
            r.should.be.empty;
        });

        it('should return non empty array', () => {
            list.appendToTail('a');
            list.appendToTail('b');

            let r = list.toArray();
            
            r.should.not.be.empty;
            r.should.deep.equal(['a', 'b']);
        });
    });

    
});
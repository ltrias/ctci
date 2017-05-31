'use strict'

let chai = require('chai');
let List = require('./linkedlist');
let LinkedList = List.LinkedList;
let Node = List.Node;

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

    describe('remove', () => {
        it('the head', () => {
            list.appendToTail(1);
            list.appendToTail(2);
            list.remove(1);

            list.toArray().should.deep.equal([2]);
        });

        it('middle element', () => {
            list.appendToTail(1);
            list.appendToTail(2);
            list.appendToTail(3);
            list.remove(2);

            list.toArray().should.deep.equal([1, 3]);
        });

        it('the tail', () => {
            list.appendToTail(1);
            list.appendToTail(2);
            list.remove(2);

            list.toArray().should.deep.equal([1]);
        });

        it('the first element found', () => {
            list.appendToTail(1);
            list.appendToTail(2);
            list.appendToTail(3);
            list.appendToTail(2);
            list.remove(2);

            list.toArray().should.deep.equal([1, 3, 2]);
        });
    });

    
});
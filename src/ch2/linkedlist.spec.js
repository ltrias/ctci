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
       
       list.toArray().should.deep.equal(['a', 'b']);
    });

    it('appendToTail', () => {
       list.appendToHead('a'); 
       list.appendToHead('b');

       list.toArray().should.deep.equal(['b', 'a']);
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
'use strict'

let chai = require('chai');
let LinkedList = require('./linkedlist');
let RemoveDuplicates = require('./remove_duplicates');

chai.should();

describe('Remove Duplicates', () => {
  let list;
  let remover;

  beforeEach(() => {
    list = new LinkedList();
    remover = new RemoveDuplicates(list);
  });

  it('with duplicate', () =>{
    list.appendToTail(1);
    list.appendToTail(2);
    list.appendToTail(3);
    list.appendToTail(1);
    list.appendToTail(5);
    list.appendToTail(2);
    
    remover.remove();

    list.toArray().should.deep.equal([1, 2, 3, 5]);
  });

  it('with duplicate in the head', () =>{
    list.appendToTail(1);
    list.appendToTail(1);
    list.appendToTail(3);
    list.appendToTail(1);
    list.appendToTail(5);
    list.appendToTail(2);
    
    remover.remove();

    list.toArray().should.deep.equal([1, 3, 5, 2]);
  });

  it('with duplicate', () =>{
    list.appendToTail(1);
    list.appendToTail(2);
    list.appendToTail(3);
    list.appendToTail(4);
    list.appendToTail(4);
    
    remover.remove();

    list.toArray().should.deep.equal([1, 2, 3, 4]);
  });

  it('without duplicate', () =>{
    list.appendToTail(1);
    list.appendToTail(2);
    list.appendToTail(3);
    list.appendToTail(4);
    list.appendToTail(5);
    
    remover.remove();

    list.toArray().should.deep.equal([1, 2, 3, 4, 5]);
  });
});
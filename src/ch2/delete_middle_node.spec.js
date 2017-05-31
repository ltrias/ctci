'use strict'

let chai = require('chai');
let List = require('./linkedlist');
let LinkedList = List.LinkedList;
let Node = List.Node;
let MiddleNodeDeleter = require('./delete_middle_node');

chai.should();

describe('Delete middle node', () => {
  let list;
  let deleter;

  beforeEach(() => {
    list = new LinkedList();
    deleter = new MiddleNodeDeleter(list);
  });

  it('', () =>{
    list.appendToTail(1);
    list.appendToTail(2);
    list.appendToTail(3);
    list.appendToTail(4);
    list.appendToTail(5);
    
    deleter.delete(4);

    list.toArray().should.deep.equal([1, 2, 3, 5]);
  });
});
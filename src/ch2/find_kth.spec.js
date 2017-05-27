'use strict'

let chai = require('chai');
var expect = require('chai').expect;
let LinkedList = require('./linkedlist');
let KthFinder = require('./find_kth');

chai.should();

describe('Find Kth to last', () => {
  let list;
  let finder;

  beforeEach(() => {
    list = new LinkedList();
    finder = new KthFinder(list);
  });

  it('normal list', () =>{
    list.appendToTail(1);
    list.appendToTail(2);
    list.appendToTail(3);
    list.appendToTail(4);
    list.appendToTail(5);
    list.appendToTail(6);
    
    let result = finder.find(3);

    result.toArray().should.deep.equal([3, 4, 5, 6]);
  });

  it('K bigger than list size', () =>{
    list.appendToTail(1);
    list.appendToTail(1);
    
    let result = finder.find(3);

    expect(result).to.be.null;
  });

  it('k = 0', () =>{
    list.appendToTail(1);
    list.appendToTail(2);
    list.appendToTail(3);
    list.appendToTail(4);
    
    let result = finder.find(0);

    result.toArray().should.deep.equal([1, 2, 3, 4]);
  });

  it('k = list size', () =>{
    list.appendToTail(1);
    list.appendToTail(2);
    list.appendToTail(3);
    list.appendToTail(4);
    list.appendToTail(5);
    
    let result = finder.find(5);

    result.toArray().should.deep.equal([5]);
  });
});
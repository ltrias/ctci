'use strict'

let chai = require('chai');
let Sum = require('./sum_list');

let List = require('./linkedlist');
let LinkedList = List.LinkedList;
let Node = List.Node;

chai.should();

describe('sum lists ', () => {
  let list1, list2;
  let sum;

  beforeEach(() => {
    list1 = new LinkedList();
    list2 = new LinkedList();
    sum = new Sum(list1, list2);
  });

  it('simple case - unit first', () =>{
    list1.appendToTail(7);
    list1.appendToTail(1);
    list1.appendToTail(6);
    
    list2.appendToTail(1);
    list2.appendToTail(2);
    list2.appendToTail(3);

    let result = sum.sum();

    result.toArray().should.deep.equal([8, 3, 9]);
  });

  it('different size numbers - unit first', () =>{
    list1.appendToTail(7);
    list1.appendToTail(1);
    list1.appendToTail(6);
    list1.appendToTail(2);
    
    list2.appendToTail(1);
    list2.appendToTail(2);
    list2.appendToTail(3);

    let result = sum.sum();

    result.toArray().should.deep.equal([8, 3, 9, 2]);
  });

  it('with remainder - unit first', () =>{
    list1.appendToTail(7);
    list1.appendToTail(1);
    list1.appendToTail(6);
    
    list2.appendToTail(3);
    list2.appendToTail(9);
    list2.appendToTail(3);

    let result = sum.sum();

    result.toArray().should.deep.equal([0, 1, 0, 1]);
  });

  it('simple case - unit last', () =>{
    list1.appendToTail(6);
    list1.appendToTail(1);
    list1.appendToTail(7);
    
    list2.appendToTail(3);
    list2.appendToTail(2);
    list2.appendToTail(1);

    let result = sum.sumUnitLast();

    result.toArray().should.deep.equal([9, 3, 8]);
  });

  it('different size numbers - unit last', () =>{
    list1.appendToTail(2);
    list1.appendToTail(6);
    list1.appendToTail(1);
    list1.appendToTail(7);
    
    list2.appendToTail(3);
    list2.appendToTail(2);
    list2.appendToTail(1);

    let result = sum.sumUnitLast();

    result.toArray().should.deep.equal([2, 9, 3, 8]);
  });

  it('with remainder - unit last', () =>{
    list1.appendToTail(6);
    list1.appendToTail(1);
    list1.appendToTail(7);
    
    list2.appendToTail(3);
    list2.appendToTail(9);
    list2.appendToTail(3);

    let result = sum.sumUnitLast();

    result.toArray().should.deep.equal([1, 0, 1, 0]);
  });

  it('bigger number with remainder - unit last', () =>{
    list1.appendToTail(9);
    list1.appendToTail(9);
    list1.appendToTail(9);
    list1.appendToTail(9);
    
    list2.appendToTail(9);
    list2.appendToTail(9);
    list2.appendToTail(9);
    list2.appendToTail(9);

    let result = sum.sumUnitLast();

    result.toArray().should.deep.equal([1, 9, 9, 9, 8]);
  });

});
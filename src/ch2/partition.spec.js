'use strict'

let chai = require('chai');
let LinkedList = require('./linkedlist');
let Partitioner = require('./partition');

chai.should();

function checkCondition(list, pivot){
  let biggerThanPivot = false;
  let result = true;
  let node = list.head;

  while( node ){
    if( node.value >= pivot ){
      biggerThanPivot = true;
    }

    if( !biggerThanPivot && node.value >= pivot || biggerThanPivot && node.value < pivot){
      result = false;
      break;
    }

    node = node.next;
  }

  return result;
}

describe('Partition list around ', () => {
  let list;
  let partitioner;

  beforeEach(() => {
    list = new LinkedList();
    partitioner = new Partitioner(list);
  });

  it('X smaller than smallest value in list', () =>{
    let pivot = 0;
    list.appendToTail(1);
    list.appendToTail(2);
    list.appendToTail(3);
    list.appendToTail(4);
    list.appendToTail(5);
    
    partitioner.partition(pivot);

    checkCondition(list, pivot).should.be.true;
  });

  it('X bigger than than biggest value in list', () =>{
    let pivot = 6;
    list.appendToTail(1);
    list.appendToTail(2);
    list.appendToTail(3);
    list.appendToTail(4);
    list.appendToTail(5);
    
    partitioner.partition(pivot);

    checkCondition(list, pivot).should.be.true;
  });

  it('X between values in list', () =>{
    let pivot = 3;
    list.appendToTail(5);
    list.appendToTail(4);
    list.appendToTail(1);
    list.appendToTail(2);
    list.appendToTail(3);
    
    partitioner.partition(pivot);
    
    checkCondition(list, pivot).should.be.true;
  });

  it('X twice in list', () =>{
    let pivot = 3;
    list.appendToTail(5);
    list.appendToTail(4);
    list.appendToTail(1);
    list.appendToTail(3);
    list.appendToTail(2);
    list.appendToTail(3);
    
    partitioner.partition(pivot);

    checkCondition(list, pivot).should.be.true;
  });

  it('book example ', () =>{
    let pivot = 5;
    list.appendToTail(3);
    list.appendToTail(5);
    list.appendToTail(8);
    list.appendToTail(5);
    list.appendToTail(10);
    list.appendToTail(2);
    list.appendToTail(1);

    partitioner.partition(pivot);

    checkCondition(list, pivot).should.be.true;
  });
});
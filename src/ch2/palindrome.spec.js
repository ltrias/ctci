'use strict'

let chai = require('chai');
let Palindrome = require('./palindrome');

let List = require('./linkedlist');
let LinkedList = List.LinkedList;
let Node = List.Node;

chai.should();

describe('Linked List Palindrome ', () => {
  let list;
  let palindrome;

  beforeEach(() => {
    list = new LinkedList();
    palindrome = new Palindrome(list);
  });

  it('not a palindrome', () =>{
    list.appendToTail(6);
    list.appendToTail(1);
    list.appendToTail(7);
    list.appendToTail(7);
    list.appendToTail(3);
    list.appendToTail(2);
    list.appendToTail(1);

    palindrome.check().should.be.false;
  });

  it('a palindrome', () =>{
    list.appendToTail(6);
    list.appendToTail(1);
    list.appendToTail(7);
    list.appendToTail(5);
    list.appendToTail(7);
    list.appendToTail(1);
    list.appendToTail(6);

    palindrome.check().should.be.true;
  });

  it('not a palindrome with even size', () =>{
    list.appendToTail(6);
    list.appendToTail(1);
    list.appendToTail(7);
    list.appendToTail(3);
    list.appendToTail(2);
    list.appendToTail(1);

    palindrome.check().should.be.false;
  });

  it('a palindrome with even size', () =>{
    list.appendToTail(6);
    list.appendToTail(1);
    list.appendToTail(7);
    list.appendToTail(7);
    list.appendToTail(1);
    list.appendToTail(6);

    palindrome.check().should.be.true;
  });

});
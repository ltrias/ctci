'use strict'

let chai = require('chai');
let expect = chai.expect;
let Loop = require('./loop');

let List = require('./linkedlist');
let LinkedList = List.LinkedList;
let Node = List.Node;

chai.should();

describe('Loop Detection', () => {
  let list;
  let loop;

  beforeEach(() => {
    list = new LinkedList();
    loop = new Loop(list);
  });

  it('must not find a loop', () =>{
    list.appendToTail(6);
    list.appendToTail(1);
    list.appendToTail(7);
    list.appendToTail(7);
    list.appendToTail(3);

    expect(loop.detect()).to.be.null;
  });

  it('must find a loop in the middle of the list', () =>{
    list.appendToTail(6);
    list.appendToTail(1);
    let loopNode = new Node(7);
    list.appendNodeToTail(loopNode);
    list.appendToTail(7);
    list.appendToTail(3);
    let tailNode = new Node(5);
    tailNode.next = loopNode;
    list.appendNodeToTail(tailNode);

    let result = loop.detect() == tailNode;
    result.should.be.true;
  });

  it('must find a loop in the tail of the list', () =>{
    list.appendToTail(6);
    list.appendToTail(1);
    list.appendToTail(7);
    list.appendToTail(3);
    let tailNode = new Node(5);
    tailNode.next = list.head;
    list.appendNodeToTail(tailNode);

    let result = loop.detect() == tailNode;
    result.should.be.true;
  });
});
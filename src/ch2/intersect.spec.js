'use strict'

let chai = require('chai');
let expect = chai.expect;
let Intersect = require('./intersect');

let List = require('./linkedlist');
let LinkedList = List.LinkedList;
let Node = List.Node;

chai.should();

describe('Intersect', () => {
  let list1, list2;
  let intersect;

  beforeEach(() => {
    list1 = new LinkedList();
    list2 = new LinkedList();
    intersect = new Intersect(list1, list2);
  });

  it('must not find intersection', () => {
    list1.appendToTail(1);
    list1.appendToTail(2);
    list1.appendToTail(3);
    
    list2.appendToTail(4);
    list2.appendToTail(5);
    list2.appendToTail(6);

    let result = intersect.findIntersection();

    expect(result).to.be.null;
  });

  it('must find intersection in the middle', () => {
    let list3 = new LinkedList();
    let intersectionNode = new Node(3);
    list3.appendNodeToTail(intersectionNode);
    list3.appendToTail(5);
    list3.appendToTail(6);

    list1.head = list3.head;
    list1.appendToHead(2);
    list1.appendToHead(1);

    list2.head = list3.head;
    list2.appendToHead(8);
    list2.appendToHead(7);

    let result = intersect.findIntersection();
    result = result && intersectionNode == result;

    result.should.be.true;
  });

  it('must find intersection in the tail', () => {
    let list3 = new LinkedList();
    let intersectionNode = new Node(3);
    list3.appendNodeToTail(intersectionNode);

    list1.head = list3.head;
    list1.appendToHead(2);
    list1.appendToHead(1);

    list2.head = list3.head;
    list2.appendToHead(8);
    list2.appendToHead(7);

    let result = intersect.findIntersection();
    result = result && intersectionNode == result;

    result.should.be.true;
  });

  it('must find intersection in the head(aka same list)', () => {
    list1.appendToHead(2);
    list1.appendToHead(1);
    list1.appendToHead(1);

    list2.head = list1.head;

    let result = intersect.findIntersection();
    result = result && list1.head == result;

    result.should.be.true;
  });

  it('must find intersection in the middle of different size lists', () => {
    let list3 = new LinkedList();
    let intersectionNode = new Node(3);
    list3.appendNodeToTail(intersectionNode);
    list3.appendToTail(4);
    list3.appendToTail(5);

    list1.head = list3.head;
    list1.appendToHead(1);

    list2.head = list3.head;
    list2.appendToHead(9);
    list2.appendToHead(8);
    list2.appendToHead(7);

    let result = intersect.findIntersection();
    result = result && intersectionNode == result;

    result.should.be.true;
  });
});
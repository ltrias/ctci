'use strict'

let chai = require('chai');
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

  it.skip('No intersection', () => {
    list1.appendToTail(1);
    list1.appendToTail(2);
    list1.appendToTail(3);
    
    list2.appendToTail(4);
    list2.appendToTail(5);
    list2.appendToTail(6);

    let result = intersect.findIntersection();

    result.should.be.null;
  });

  it.skip('Intersection in the middle', () => {
    let head1 = list1.head;
    let head2 = list2.head;


  });

  it.skip('Intersection in the end', () => {
  });

  it.skip('Intersection in the head aka same list', () => {
  });

});
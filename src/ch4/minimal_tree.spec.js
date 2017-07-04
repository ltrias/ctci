'use strict'

let chai = require('chai');
let MinimalTree = require('./minimal_tree');

chai.should();

describe('Minimal tree', () => {
    let tree;

    beforeEach(() => {
        tree = new MinimalTree();
    });

    it('should not be BST, have 0 nodes and 0 levels with empty array', () =>{
        tree.create([]);
        
        tree.isBST().should.be.false;
        tree.nodes().should.equal(0);
        tree.levels().should.equal(0);
    });

    it('should be BST, have 5 nodes and 3 levels', () =>{
        tree.create([1,2,3,4,5]);
        
        tree.isBST().should.be.true;
        tree.nodes().should.equal(5);
        tree.levels().should.equal(3);
    });

    it('should be BST, have 6 nodes and 3 levels', () =>{
        tree.create([1,2,3,4,5,6]);
        
        tree.isBST().should.be.true;
        tree.nodes().should.equal(6);
        tree.levels().should.equal(3);
    });

    it('should be BST, have 15 nodes and 4 levels', () =>{
        tree.create([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
        
        tree.isBST().should.be.true;
        tree.nodes().should.equal(15);
        tree.levels().should.equal(4);
    });
});
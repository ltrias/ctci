'use strict'

let chai = require('chai');
let BinaryTree = require('./binary_tree').BinaryTree;
let Node = require('./binary_tree').Node;

chai.should();

describe('Binary tree', () => {
    let tree;

    beforeEach(() => {
        tree = new BinaryTree();
    });

    it('should have zero levels with 0 nodes', () =>{
        tree.levels().should.be.equal(0);
    });

    it('should have one level with 1 node', () =>{
        tree.root = new Node(1);

        tree.levels().should.be.equal(1);
    });

    it('should have two levels with 3 nodes', () =>{
        let n1 = new Node(1);
        n1.left = new Node(2);
        n1.right = new Node(3);

        tree.root = n1;

        tree.levels().should.be.equal(2);
    });

    it('should have three levels with 5 nodes', () =>{
        let n1 = new Node(1);
        let n2 = new Node(2);
        let n3 = new Node(3);
        n1.left = n2;
        n1.right = n3;
        n2.left = new Node(4);
        n2.right = new Node(5);

        tree.root = n1;

        tree.levels().should.be.equal(3);
    });

    it('should have four levels with 5 unbalanced nodes', () =>{
        let n1 = new Node(1);
        let n2 = new Node(2);
        let n3 = new Node(3);
        let n4 = new Node(4);
        n1.left = n2;
        n1.right = n3;
        n3.left = n4;
        n4.right = new Node(5);

        tree.root = n1;

        tree.levels().should.be.equal(4);
    });
});
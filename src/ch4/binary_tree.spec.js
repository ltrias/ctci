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

    it('should not be BST if empty', () =>{
        tree.isBST().should.be.false;
    });

    it('should be BST with single node', () =>{
        tree.root = new Node(1);

        tree.isBST().should.be.true;
    });

    it('should be BST', () =>{
        let n1 = new Node(3);
        let n2 = new Node(2);
        let n3 = new Node(4);
        n1.left = n2;
        n1.right = n3;
        n2.left = new Node(1);
        n3.right = new Node(5);

        tree.root = n1;

        tree.isBST().should.be.true;
    });

    it('should not be BST', () =>{
        let n1 = new Node(1);
        let n2 = new Node(2);
        let n3 = new Node(3);
        n1.left = n2;
        n1.right = n3;
        n2.left = new Node(4);
        n2.right = new Node(5);

        tree.root = n1;

        tree.isBST().should.be.false;
    });

    it('should not be BST with book example', () =>{
        let n1 = new Node(20);
        let n2 = new Node(10);
        let n3 = new Node(30);
        n1.left = n2;
        n1.right = n3;
        n2.right = new Node(25);

        tree.root = n1;

        tree.isBST().should.be.false;
    });

    it('should have 0 nodes', () =>{
        tree.nodes().should.be.equal(0);
    });

    it('should have 1 node', () =>{
        tree.root = new Node(1);

        tree.nodes().should.be.equal(1);
    });

    it('should have 3 nodes', () =>{
        let n1 = new Node(1);
        n1.left = new Node(2);
        n1.right = new Node(3);

        tree.root = n1;

        tree.nodes().should.be.equal(3);
    });

    it('should have 5 nodes', () =>{
        let n1 = new Node(1);
        let n2 = new Node(2);
        let n3 = new Node(3);
        n1.left = n2;
        n1.right = n3;
        n2.left = new Node(4);
        n2.right = new Node(5);

        tree.root = n1;

        tree.nodes().should.be.equal(5);
    });

    it('should have 5 nodes even with unbalanced tree', () =>{
        let n1 = new Node(1);
        let n2 = new Node(2);
        let n3 = new Node(3);
        let n4 = new Node(4);
        n1.left = n2;
        n1.right = n3;
        n3.left = n4;
        n4.right = new Node(5);

        tree.root = n1;

        tree.nodes().should.be.equal(5);
    });
});
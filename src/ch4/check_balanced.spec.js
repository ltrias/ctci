'use strict'

let chai = require('chai');
let BinaryTree = require('./binary_tree').BinaryTree;
let Node = require('./binary_tree').Node;
let BalanceChecker = require('./check_balanced');

chai.should();

describe('Check Balanced', () => {
    let checker;
    let tree;

    beforeEach(() => {
        tree = new BinaryTree();
        checker = new BalanceChecker(tree);
    })

    it('should be balanced when tree is empty', () => {
        checker.check().should.be.true;
    });

    it('should be balanced tree has only root', () => {
        tree.root = new Node(1);

        checker.check().should.be.true;
    });

    it('should be balanced when tree has 2 nodes', () => {
        tree.root = new Node(1);
        tree.root.left = new Node(2);

        checker.check().should.be.true;
    });
    
    it('should not be balanced tree has 3 nodes in line', () => {
        tree.root = new Node(1);
        tree.root.left = new Node(2);
        tree.root.left.right = new Node(3);

        checker.check().should.be.false;
    });

    it('should be balanced with complex complete tree', () => {
        let root = new Node(1);
        let n2 = new Node(2);
        let n3 = new Node(3);
        let n4 = new Node(4);
        let n5 = new Node(5);
        let n6 = new Node(6);
        let n7 = new Node(7);

        tree.root = root;

        root.left = n2;
        root.right = n3;

        n2.left = n4;
        n2.right = n5;
        n3.right = n6;
        n3.right = n7;

        checker.check().should.be.true;
    });

    it('should not be balanced with complex unbalanced tree', () => {
        let root = new Node(1);
        let n2 = new Node(2);
        let n3 = new Node(3);
        let n4 = new Node(4);
        let n5 = new Node(5);
        let n6 = new Node(6);
        let n7 = new Node(7);

        tree.root = root;

        root.left = n2;
        root.right = n3;

        n2.left = n4;
        n2.right = n5;
        n3.left = n6;
        n6.left = n7;
        
        checker.check().should.be.false;
    });
});
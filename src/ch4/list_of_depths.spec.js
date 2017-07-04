'use strict'

let chai = require('chai');
let BinaryTree = require('./binary_tree').BinaryTree;
let Node = require('./binary_tree').Node;
let ListOfDepths = require('./list_of_depths');

chai.should();

describe('List of Depths', () => {
    let listOfDepths;
    let tree;

    beforeEach(() => {
        listOfDepths = new ListOfDepths();
        tree = new BinaryTree();
    })

    it('should have 0 lists when tree is empty', () => {
        let r = listOfDepths.create(tree);

        r.length.should.equal(0);
    });

    it('should have 1 lists when tree has only root', () => {
        let r = listOfDepths.create(tree);

        tree.root = new Node(1);

        r.length.should.equal(1);
        r[0].root.value.should.equal(1);
    });

    it('should have 2 lists when tree has 2 nodes', () => {
        let r = listOfDepths.create(tree);

        tree.root = new Node(1);
        tree.root.left = new Node(2);

        r.length.should.equal(2);
        r[0].root.value.should.equal(1);
        r[1].root.value.should.equal(2);
    });
    
    it('should have 2 lists when tree has 3 nodes', () => {
        let r = listOfDepths.create(tree);

        tree.root = new Node(1);
        tree.root.left = new Node(2);
        tree.root.right = new Node(3);

        r.length.should.equal(2);
        r[0].root.value.should.equal(1);
        r[1].root.value.should.equal(2);
        r[1].root.value.should.equal(3);
    });

    it('should have 4 lists with complex list', () => {
        let r = listOfDepths.create(tree);

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

        n6.left = n7;

        r.length.should.equal(4);
        r[0].root.value.should.equal(1);
        r[1].root.value.should.equal(2);
        r[1].root.value.should.equal(3);
        r[2].root.value.should.equal(4);
        r[2].root.value.should.equal(5);
        r[2].root.value.should.equal(6);
        r[3].root.value.should.equal(7);
    });
});
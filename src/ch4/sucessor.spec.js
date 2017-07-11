'use strict'

let chai = require('chai');
let expect = chai.expect;
let BinaryTree = require('./binary_tree').BinaryTree;
let Node = require('./binary_tree').Node;
let Sucessor = require('./sucessor');

chai.should();

describe('Sucessor', () => {
    let tree;
    let sucessor;

    beforeEach(() => {
        tree = new BinaryTree();
        sucessor = new Sucessor(tree);
    });

    it('should be null with empty tree', () =>{
        expect(sucessor.find(0)).to.be.null;
    });

    it('should be null with single node', () =>{
        tree.root = new Node(1);

        expect(sucessor.find(1)).to.be.null;
    });

    it('should be null with unkown item', () =>{
        let n1 = new Node(3);
        let n2 = new Node(2);
        let n3 = new Node(4);
        n1.left = n2;
        n1.right = n3;

        tree.root = n1;

        expect(sucessor.find(5)).to.be.null;
    });

    
    it('should be smallest of the biggers when there is a right branch', () =>{
        tree.root = buildComplexTree();

        sucessor.find(4).should.equal(7);
    });

    it('should be parent of parent when there is not right branch and node is reached from the right', () =>{
        tree.root = buildComplexTree();

        sucessor.find(13).should.equal(15);
    });

    it('should be parent when there is not right branch and node is reached from the left', () =>{
        tree.root = buildComplexTree();

        sucessor.find(7).should.equal(8);
    });
});

/*
                 9
        4                 15
    3      8        11          16
2        7              13
                    12

 */
function buildComplexTree(){
    let n9 = new Node(9);
    let n4 = new Node(4);
    let n15 = new Node(15);
    let n3 = new Node(3);
    let n8 = new Node(8);
    let n11 = new Node(11);
    let n16 = new Node(16);
    let n2 = new Node(2);
    let n7 = new Node(7);
    let n13 = new Node(13);
    let n12 = new Node(12);

    n9.left = n4;
    n4.parent = n9;
    n9.right = n15;
    n15.parent = n9;

    n4.left = n3;
    n3.parent = n4;
    n4.right = n8;
    n8.parent = n4;
    n15.left = n11;
    n11.parent = n15;
    n15.right = n16;
    n16.parent = n15;

    n3.left = n2;
    n2.parent = n3;
    n8.left = n7;
    n7.parent = n8;
    n11.right = n13;
    n13.parent = n11;

    n13.left = n12;
    n12.parent = n13;

    return n9;
}
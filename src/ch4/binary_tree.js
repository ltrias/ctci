'use strict'

class BinaryTree{
    constructor(){
        this.root = null;
    }

    levels(){
        return this.recurseLevel(this.root, 0);
    }

    recurseLevel(node, deep){
        if( !node ){
            return deep;
        }

        return Math.max(this.recurseLevel(node.left, deep + 1), this.recurseLevel(node.right, deep + 1));
    }

    isBST(){
        if( !this.root ){
            return false;
        } else {
            return this.recurseBSTCheck(this.root);
        }
    }

    recurseBSTCheck(node){
        if( !node ){
            return true;
        }

        if( (node.left && node.left.value > node.value) || (node.right && node.right.value < node.value) ){
            return false;
        }

        return this.recurseBSTCheck(node.left) && this.recurseBSTCheck(node.right);
    }
}

class Node {
    constructor(value){
        this.value = value;
    }
}

module.exports = {BinaryTree, Node};
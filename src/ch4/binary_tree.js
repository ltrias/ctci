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
            return this.recurseBSTCheck(this.root, null, null);
        }
    }

    recurseBSTCheck(node, min, max){
        if( !node ){
            return true;
        }


        if( (min != null && node.value <= min) || (max != null && node.value > max ) ){
            return false;
        }

        if( !this.recurseBSTCheck(node.left, min, node.value) || !this.recurseBSTCheck(node.right, node.value, max)){
            return false;
        }

        return true;
    }

    nodes(){
        return this.recursiveNodeCount(this.root, 0);
    }

    recursiveNodeCount(node, n){
        if( node == null ){
            return 0;
        }

        return 1 + this.recursiveNodeCount(node.left) + this.recursiveNodeCount(node.right);
    }
}

class Node {
    constructor(value){
        this.value = value;
    }
}

module.exports = {BinaryTree, Node};
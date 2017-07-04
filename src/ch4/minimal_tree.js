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
}

class Node {
    constructor(data){
        this.data = data;
    }
}

module.exports = {BinaryTree, Node};
'use strict'

let BinaryTree = require('./binary_tree').BinaryTree;
let Node = require('./binary_tree').Node;

class MinimalTree extends BinaryTree{
    create(arr){
        this.root = this.recurseCreate(arr, 0, arr.length - 1);
    }

    recurseCreate(arr, begin, end){
        if( end < begin ){
            return null;
        }

        let pivot = Math.floor((begin + end) / 2);
        let r = new Node(arr[pivot]);

        r.left = this.recurseCreate(arr, begin, pivot - 1);
        r.right = this.recurseCreate(arr, pivot + 1, end);

        return r;
    }
}

module.exports = MinimalTree;
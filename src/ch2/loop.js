'use strict'

let List = require('./linkedlist');
let LinkedList = List.LinkedList;

class Loop{
    constructor(list){
        this.list = list;
    }

    detect(){
        let visitedNodes = new Set();
        let node = this.list.head;
        let result = null;

        while( node ){
            if( visitedNodes.has(node.next) ){
                result = node;
                break;
            }
            visitedNodes.add(node);
            node = node.next;
        }

        return result;
    }
}

module.exports = Loop;
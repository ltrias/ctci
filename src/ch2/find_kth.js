'use strict'

let List = require('./linkedlist');
let LinkedList = List.LinkedList;
let Node = List.Node;


class KthFinder{
    constructor(list){
        this.list = list;
    }

    find(k){
        let result = new LinkedList();
        let count = 0;
        let node = this.list.head;

        while( node ){
            if( ++count >= k ){
                result.appendToTail(node.value)
            }
            node = node.next;
        }

        return count >= k ? result : null;
    }
}

module.exports = KthFinder;

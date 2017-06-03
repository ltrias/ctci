'use strict'

let List = require('./linkedlist');
let LinkedList = List.LinkedList;

class Intersect{
    constructor(list1, list2){
        this.list1 = list1;
        this.list2 = list2;
    }

    findIntersection(){
        return this.lastNodeOf(this.list1) == this.lastNodeOf(this.list2) ? {} : null;
    }

    lastNodeOf(list){
        let node = list.head;

        while( node.next ){
            node = node.next;
        }

        return node;
    }
}

module.exports = Intersect;
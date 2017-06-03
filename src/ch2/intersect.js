'use strict'

let List = require('./linkedlist');
let LinkedList = List.LinkedList;

class Intersect{
    constructor(list1, list2){
        this.list1 = list1;
        this.list2 = list2;
    }

    findIntersection(){
        let node1 = this.list1.head;
        let size1 = 0;
        let node2 = this.list2.head;
        let size2 = 0;

        while( node1.next ){
            node1 = node1.next;
            size1++;
        }

        while( node2.next ){
            node2 = node2.next;
            size2++;
        }

        if( node1 != node2 ){
            return null;
        }

        let sizeDifference = Math.abs(size1 - size2);

        node1 = this.list1.head;
        node2 = this.list2.head;

        let c = 0;
        if( size1 < size2 ){
            while( c < sizeDifference ){
                node2 = node2.next;
                c++;
            }
        }else{
            while( c < sizeDifference ){
                node1 = node1.next;
                c++;
            }
        }

        while( node1 != node2 ){
            node1 = node1.next;
            node2 = node2.next;
        }

        return node1;
    }
}

module.exports = Intersect;
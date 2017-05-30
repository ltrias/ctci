'use strict'

let LinkedList = require('./linkedlist');

class Partitioner{
    constructor(list){
        this.list = list;
    }

    partition(pivot){
        let head = this.list.head;
        let tail = this.list.head;
        let node = this.list.head;

        while( node ){
            let next = node.next;

            if( node.value < pivot ){
                node.next = head;
                head = node;
            }else{
                tail.next = node;
                tail = node;
            }
            node = next;
        }
        this.list.head = head;
        tail.next = null;

        /*

        //more memory expensive

        let biggerOrEqual = new LinkedList();
        let smaller = new LinkedList();

        let node = this.list.head;

        while( node ){
            if( node.value < pivot ){
                smaller.appendToTail(node.value);
            }else{
                biggerOrEqual.appendToTail(node.value);
            }

            node = node.next;
        }

        if( smaller.head ){
            this.list.head = smaller.head;
            node = this.list.head;

            while( node.next ){
                node = node.next;
            }

            node.next = biggerOrEqual.head;
        }else{
            this.list.head = biggerOrEqual.head;
        }*/


    }
}

module.exports = Partitioner;
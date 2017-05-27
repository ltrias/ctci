'use strict'

class LinkedList{
    appendToTail(value){
        let newNode = new Node(value);
        let node = this.head;

        if( !node ){
            this.head = newNode;
        }else{
            while( node.next ){
                node = node.next;
            }
            node.next = newNode;
        }
    }

    remove(value){
        if(this.head.value === value){
            this.head = this.head.next;
        }

        let node = this.head;

        while( node.next ){
            if( node.next.value === value ){
                node.next = node.next.next;
                break;
            }
            node = node.next;
        }
    }

    toArray(){
        let result = [];

        let node = this.head;

        while( node != null ){
            result.push(node.value);
            node = node.next;
        }

        return result;
    }
};

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

module.exports = LinkedList;
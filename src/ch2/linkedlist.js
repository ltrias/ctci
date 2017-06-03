'use strict'

class LinkedList{
    appendToTail(value){
        let newNode = new Node(value);
        this.appendNodeToTail(newNode);
    }

    appendToHead(value){
        let newNode = new Node(value);

        if( this.head ){
            newNode.next = this.head;
        }
        
        this.head = newNode;
    }

    appendNodeToTail(newNode){
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

module.exports = {LinkedList, Node};
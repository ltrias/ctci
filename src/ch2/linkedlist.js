'use strict'

class LinkedList{
    appendToTail(value){
        let newNode = new Node(value);
        let node = this.head;

        if( !node ){
            this.head = newNode;
        }else{
            while( node.next ){
                console.log(node);
                node = node.next;
            }
            node.next = newNode;
        }
    }

    get size(){
        let i = 0;
        let node = this.head;

        while( node != null ){
            i++;
            node = node.next;
        }

        return i;
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
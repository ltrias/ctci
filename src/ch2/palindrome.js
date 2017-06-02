'use strict'

let List = require('./linkedlist');
let LinkedList = List.LinkedList;
let Node = List.Node;

class Palindrome{
    constructor(list){
        this.list = list;
    }

    check(){
        let other = this.reverse(this.list);
        let node1 = this.list.head;
        let node2 = other.head;

        while( node1 ){
            if( node1.value !== node2.value ){
                return false;
            }
            node1 = node1.next;
            node2 = node2.next;
        }

        return true;
    }
    
    reverse(list){
        let result = new LinkedList();

        this.reverseNodes(list.head, result);

        return result;
    }

    reverseNodes(node, result){
        if( node ){
            this.reverseNodes(node.next, result);
            result.appendToTail(node.value);
        }
    }
}

module.exports = Palindrome;
'use strict'

class MiddleNodeDeleter{
    constructor(list){
        this.list = list;
    }

    delete(value){
        let node = this.searchNode(value); //necessary as we don't have direct access to nodes with the used list data structure

        if( node == null || node.next == null ){
            return false;
        }

        node.value = node.next.value;
        node.next = node.next.next;

        return true;
    }

    searchNode(value){
        let node = this.list.head;

        while( node ){
            if( node.value === value ){
                return node;
            }

            node = node.next;
        }

        return null;
    }
}

module.exports = MiddleNodeDeleter;
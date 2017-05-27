'use strict'

import { LinkedList } from './linkedlist'

class RemoveDuplicates{
    constructor(list){
        this.list = list;
    }

    remove(){
        let node = this.list.head;

        while( node ){
            let previous = node;
            let current = node.next;
            
            while( current ){
                if( node.value === current.value ){
                    previous.next = current.next;
                }

                previous = current;
                current = current.next;
            }

            node = node.next;
        }
    }
}

module.exports = RemoveDuplicates;
'use strict'

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
    }
    
    add(value){
        let newNode = new QueueNode(value);

        if( this.last ){
            this.last.next = newNode;
        }

        this.last = newNode;

        if( !this.first ){
            this.first = this.last;
        }
    }

    remove(){
        let result = null;

        if( this.first ){
            result = this.first.value;
            this.first = this.first.next;
            if( this.first == null ){
                this.last = null;
            }
        }

        return result;
    }

    peek(){
        let result = null;

        if( this.first ){
            result = this.first.value;
        }

        return result;
    }

    empty(){
        return this.first == this.last;
    }

    toArray(){
        let result = [];
        let node = this.first;

        while( node ){
            result.push(node.value);
            node = node.next;
        }

        return result;
    }
}

class QueueNode{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

module.exports = Queue;
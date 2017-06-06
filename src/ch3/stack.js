'use strict'

class Stack{
    constructor(){
        this.top = null;
    }

    pop(){
        let result = null;

        if( this.top ){
            result = this.top.value;
            this.top = this.top.next;
        }

        return result;
    }

    push(value){
        let newNode = new StackNode(value);
        newNode.next = this.top;
        this.top = newNode;
    }

    peek(){
        let result = null;

        if( this.top ){
            result = this.top.value;
        }

        return result;
    }

    empty(){
        return this.top == null;
    }

    toArray(){
        let result = [];

        let node = this.top;

        while( node != null ){
            result.push(node.value);
            node = node.next;
        }

        return result;
    }
}

class StackNode{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

module.exports = {Stack, StackNode};
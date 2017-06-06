'use strict'

let Stack = require('./stack').Stack;
let StackNode = require('./stack').StackNode;

class MinStack extends Stack {
    push(value){
        let newNode = new MinStackNode(value);
        newNode.next = this.top;

        if( newNode.next ){
            if( newNode.next.min < value ){
                newNode.min = newNode.next.min;
            }else{
                newNode.min = value;
            }
        }else{
            newNode.min = value; 
        }

        this.top = newNode;
    }

    min(){
        let result = null;

        if( this.top ){
            result = this.top.min;
        }

        return result;
    }
}

class MinStackNode extends StackNode {
    constructor(value){
        super(value);
        this.min = null;
    }
}

module.exports = MinStack;
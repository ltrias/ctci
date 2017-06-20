'use strict'

let Stack = require('./stack').Stack;
let StackNode = require('./stack').StackNode;

class SortStack extends Stack{
    constructor(){
        super();
    }

    push(value){
        let aux = new Stack();

        while( !this.empty() && this.top.value > value ){
            aux.push(this.pop());
        }

        let newNode = new StackNode(value);
        newNode.next = this.top;
        this.top = newNode;

        while( !aux.empty() ){
            let newNode = new StackNode(aux.pop());
            newNode.next = this.top;
            this.top = newNode;
        }
    }
}

module.exports = SortStack;
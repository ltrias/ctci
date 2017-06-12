'use strict'

let Stack = require('./stack').Stack;

class QueueOfStacks{
    constructor(){
        this.mainStack = new Stack();
        this.auxStack = new Stack();
    }
    
    add(value){
        this.fillMainStack();
        this.mainStack.push(value);
        this.fillAuxStack();
    }

    remove(){
        return this.auxStack.pop();
    }

    peek(){
        return this.auxStack.peek();
    }

    empty(){
        return this.auxStack.empty();   
    }

    toArray(){
        let result = [];

        while( !this.auxStack.empty() ){
            let value = this.auxStack.pop();

            result.push(value);
            this.mainStack.push(value)
        }

        this.fillAuxStack();

        return result;
    }

    fillAuxStack(){
        while( !this.mainStack.empty() ){
            this.auxStack.push(this.mainStack.pop());
        }
    }

    fillMainStack(){
        while( !this.auxStack.empty() ){
            this.mainStack.push(this.auxStack.pop());
        }
    }
}

class QueueNode{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

module.exports = QueueOfStacks;
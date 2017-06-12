'use strict'

let Stack = require('./stack').Stack;

class QueueOfStacks{
    constructor(){
        this.mainStack = new Stack();
        this.auxStack = new Stack();
    }
    
    add(value){
        this.mainStack.push(value);    
    }

    remove(){
        let result = null;

        this.fillAuxStack();

        result = this.auxStack.pop();

        this.fillMainStack();

        return result;
    }

    peek(){
        let result = null;
        
        this.fillAuxStack();
        result = this.auxStack.peek();
        this.fillMainStack();

        return result;
    }

    empty(){
        return this.mainStack.empty();   
    }

    toArray(){
        let result = [];

        this.fillAuxStack();

        while( !this.auxStack.empty() ){
            let value = this.auxStack.pop();

            result.push(value);
            this.mainStack.push(value)
        }

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
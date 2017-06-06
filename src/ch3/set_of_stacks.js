'use strict'

let Stack = require('./stack').Stack;

class SetOfStacks{
    constructor(threshold){
        this.threshold = threshold;
        this.stacks = new Stack();
    }

    push(value){
        let stack = this.stacks.peek();

        if( stack == null || this.stackHeight(stack) == this.threshold ){
            stack = new Stack();
            this.stacks.push(stack);
        }
        stack.push(value);
    }

    pop(){
        let result = null;
        let stack = this.stacks.peek();

        if( stack ){
            result = stack.pop();

            if( stack.empty() ){
                this.stacks.pop();
            }
        }

        return result;
    }

    stackHeight(stack){
        let height = 0;
        let node = stack.top;

        while( node ){
            node = node.next;
            height++;
        }

        return height;
    }
}

module.exports = SetOfStacks;
'use strict'

let Stack = require('./stack').Stack;

class SetOfStacks{
    constructor(threshold){
        this.threshold = threshold;
        this.stacks = [];
        this.lastStack = 0;
    }

    push(value){
        let stack = this.stacks[this.lastStack];

        if( !stack ){
            stack = new Stack();
            this.stacks[this.lastStack] = stack;
        }else if( this.stackHeight(stack) === this.threshold ){
            stack = new Stack();
            this.stacks.push(stack);
            this.lastStack++;
        }

        stack.push(value);
    }

    pop(){
        let result = null;
        let stack = this.stacks[this.lastStack];

        if( stack ){
            result = stack.pop();
            
            if( stack.empty() ){
                this.stacks = this.stacks.slice(0, this.lastStack);
                this.lastStack--;
            }
        }

        return result;
    }

    popAt(_stack){
        let result = null;
        let stack = this.stacks[_stack];

        if( stack ){
            result = stack.pop();
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
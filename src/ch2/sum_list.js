'use strict'

let LinkedList = require('./linkedlist');

class Sum{
    constructor(list1, list2){
        this.list1 = list1;
        this.list2 = list2;
    }

    sum(){
        let digit1 = this.list1.head;
        let digit2 = this.list2.head;
        let result = new LinkedList();

        while( digit1 || digit2 ){
            let value1 = digit1 ? digit1.value : 0;
            let value2 = digit2 ? digit2.value : 0;
            let sum = value1 + value2;
            result.appendToTail(sum);

            digit1 = digit1 ? digit1.next : null;
            digit2 = digit2 ? digit2.next : null;
        }

        return result;
    }

    sumUnitLast(){
        
    }
}

module.exports = Sum;
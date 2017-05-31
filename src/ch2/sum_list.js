'use strict'

let List = require('./linkedlist');
let LinkedList = List.LinkedList;
let Node = List.Node;

class Sum{
    constructor(list1, list2){
        this.list1 = list1;
        this.list2 = list2;
    }

    sum(){
        let digit1 = this.list1.head;
        let digit2 = this.list2.head;
        let result = new LinkedList();
        let remainder = 0;

        while( digit1 || digit2 || remainder){
            let value1 = digit1 ? digit1.value : 0;
            let value2 = digit2 ? digit2.value : 0;
            
            let sum = value1 + value2 + remainder;
            remainder = 0;

            if( sum >= 10 ){
                remainder = 1;
                sum -= 10;
            }

            result.appendToTail(sum);

            digit1 = digit1 ? digit1.next : null;
            digit2 = digit2 ? digit2.next : null;
        }

        return result;
    }

    sumUnitLast(){
        let result = new LinkedList();

        this.addDigits(this.list1.head, this.list2.head, result);

        return result;
    }

    // 617
    // 321
    addDigits(d1, d2, r){
        if( d1 && d2 ){
            this.addDigits(d1.next, d2.next, r);
            let value = d1.value + d2.value;
            
            let newHead = new Node(value);
            newHead.next = r.head;
            r.head = newHead
        }
    }
}

module.exports = Sum;
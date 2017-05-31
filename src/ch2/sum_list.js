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

        let firstDigit = this.addDigits(this.list1.head, this.list2.head, result);
        if( firstDigit ){
            result.appendToHead(firstDigit);
        }

        return result;
    }

    // 617
    // 393
    addDigits(d1, d2, res){
        if( d1 && d2 ){
            let value = d1.value + d2.value + this.addDigits(d1.next, d2.next, res);
            let rem = 0;

            if( value >= 10 ){
                rem = 1;
                value -= 10;
            }

            res.appendToHead(value);
            return rem;
        }else{
            return 0;
        }
    }
}

module.exports = Sum;
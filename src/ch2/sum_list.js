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

        this.addPaddingIfNeccessary(this.list1, this.list2);

        let firstDigit = this.addDigits(this.list1.head, this.list2.head, result);
        if( firstDigit ){
            result.appendToHead(firstDigit);
        }

        return result;
    }

    addPaddingIfNeccessary(list1, list2){
        let list1Size = 0;
        let list2Size = 0;

        let node = list1.head;
        while( node ){
            list1Size++;
            node = node.next;
        }

        node = list2.head;
        while( node ){
            list2Size++;
            node = node.next;
        }

        let padding = Math.abs(list1Size - list2Size);
        if( padding ){
            let targetList = list1Size < list2Size ? list1 : list2;

            for(let i = 0; i < padding; i++){
                targetList.appendToHead(0);
            }
        }
    }

    // 2617
    //  393
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
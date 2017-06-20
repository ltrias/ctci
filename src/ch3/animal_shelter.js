'use strict'

let Queue = require('./queue');

class AnimalShelter extends Queue{
    enqueue(type, name){
        this.add(new Animal(type, name));
    }

    dequeueAny(){
        return this.remove();
    }

    dequeueDog(){
        return this.dequeueType('dog');
    }

    dequeueCat(){
        return this.dequeueType('cat');
    }

    dequeueType(type){
        let result = null;

        if( this.peek().type === type ){
            result = this.remove();
        }else{
            let node = this.first.next;
            let previous = null;

            while( node ){
                if( node.value.type === type ){
                    previous.next = node.next;
                    result = node.value;
                    break;
                }
                previous = node;
                node = node.next;
            }
        }
        return result;
    }
}

class Animal{
    constructor(type, name){
        this.type = type;
        this.name = name;
    }
}

module.exports = AnimalShelter;
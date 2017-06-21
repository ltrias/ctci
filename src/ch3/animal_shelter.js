'use strict'

let Queue = require('./queue');

class AnimalShelter {
    constructor(){
        this.catsQueue = new Queue();
        this.dogsQueue = new Queue();
        this.position = 0;
    }

    enqueue(type, name){
        let a = new Animal(type, name, this.position++);

        if( a.type === 'cat'){
            this.catsQueue.add(a);
        }else if( a.type === 'dog' ){
            this.dogsQueue.add(a);
        }else{
            throw 'Only dogs and cats allowed';
        }
    }

    dequeueAny(){
        let firstCat = this.catsQueue.peek();
        let firstDog = this.dogsQueue.peek();
        let result = null;
        
        if( firstDog == null || firstCat != null && firstCat.position < firstDog.position ){
            result = this.catsQueue.remove();
        }else{
            result = this.dogsQueue.remove();
        }

        return result;
    }

    dequeueDog(){
        return this.dogsQueue.remove();
    }

    dequeueCat(){
        return this.catsQueue.remove();
    }
}

class Animal{
    constructor(type, name, position){
        this.position = position;
        this.type = type;
        this.name = name;
    }
}

module.exports = AnimalShelter;
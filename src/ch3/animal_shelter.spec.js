'use strict'

let chai = require('chai');
let expect = chai.expect;
let AnimalShelter = require('./animal_shelter');

chai.should();

describe('Animal shelter', () => {
    let as;

    beforeEach( () => {
        as = new AnimalShelter();
    });

    it('should remove animals in order', () => {
        as.enqueue('dog', 1);
        as.enqueue('cat', 1);
        as.enqueue('dog', 2);
        as.enqueue('cat', 3);
        as.enqueue('cat', 5);

        let animal  = as.dequeueAny();
        animal.type.should.be.equal('dog');
        animal.name.should.be.equal(1);

        animal  = as.dequeueAny();
        animal.type.should.be.equal('cat');
        animal.name.should.be.equal(1);

        animal  = as.dequeueAny();
        animal.type.should.be.equal('dog');
        animal.name.should.be.equal(2);

        animal  = as.dequeueAny();
        animal.type.should.be.equal('cat');
        animal.name.should.be.equal(3);

        animal  = as.dequeueAny();
        animal.type.should.be.equal('cat');
        animal.name.should.be.equal(5);

    });

    it('should have only dogs', () => {
        as.enqueue('dog', 1);
        as.enqueue('dog', 2);
        as.enqueue('dog', 3);
        
        let animal  = as.dequeueCat();
        expect(animal).to.be.null;

        for(let i = 1; i <= 3 ; i++){
            animal  = as.dequeueAny();
            animal.type.should.be.equal('dog');
            animal.name.should.be.equal(i);
        }
    });

    it('should have only cats', () => {
        as.enqueue('cat', 1);
        as.enqueue('cat', 2);
        as.enqueue('cat', 3);
        
        let animal  = as.dequeueDog();
        expect(animal).to.be.null;

        for(let i = 1; i <= 3 ; i++){
            animal  = as.dequeueAny();
            animal.type.should.be.equal('cat');
            animal.name.should.be.equal(i);
        }
    });

    it('should first remove all dogs and then cats', () => {
        as.enqueue('cat', 1);
        as.enqueue('cat', 2);
        as.enqueue('cat', 3);
        as.enqueue('dog', 1);
        as.enqueue('dog', 2);
        as.enqueue('dog', 3);

        let animal = null;
        for(let i = 1; i <= 3 ; i++){
            animal  = as.dequeueDog();
            animal.type.should.be.equal('dog');
            animal.name.should.be.equal(i);
        }

        for(let i = 1; i <= 3 ; i++){
            animal  = as.dequeueAny();
            animal.type.should.be.equal('cat');
            animal.name.should.be.equal(i);
        }
    });

});
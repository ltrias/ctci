'use strict'

let chai = require('chai');
let expect = chai.expect;
let BuildOrder = require('./build_order');

chai.should();

describe('Build order', () => {

    it('should have a result equivalent to the book', () =>{
        let projects = ['a', 'b', 'c', 'd', 'e', 'f'];
        let dependencies = [{'a':'d'}, {'f':'b'}, {'b':'d'}, {'f':'a'}, {'d':'c'}];
        let buildOrder = new BuildOrder(projects, dependencies);
        buildOrder.find().should.deep.equal(['f', 'e', 'a', 'b', 'd', 'c']);
    });

    it('should return null when can not find a sequence due to circular dependency', () => {
        let projects = ['a', 'b', 'c'];
        let dependencies = [{'b':'a'}, {'c':'b'}, {'a':'c'}];
        let buildOrder = new BuildOrder(projects, dependencies);
        expect(buildOrder.find()).to.be.null;
    });
});
'use strict'

let chai = require('chai');

let Graph = require('./graph').Graph;
let Node = require('./graph').Node;

chai.should();

describe('Graph', () => {
    let graph;

    beforeEach(() =>{
        graph = new Graph();
    });

    it('new graph should not be null', () =>
    {
        graph.should.not.be.null;
    });

    it('new graph should not have nodes', () =>
    {
        graph.nodes.should.not.be.null;
        graph.nodes.should.be.empty;
    });

    it('new node should not have children', () =>
    {
        let node = new Node(1);

        node.children.should.not.be.null;
        node.children.should.be.empty;
    });

});
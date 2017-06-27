'use strict'

let chai = require('chai');
let Graph = require('./graph').Graph;
let Node = require('./graph').Node;
let RouteFinder = require('./route_between_nodes');

chai.should();

describe('Route between nodes', () => {
    let graph;
    let finder;

    beforeEach(() => {
        graph = new Graph();
        finder = new RouteFinder(graph);
    })

    it('should find a route', () => {
        let n1 = new Node(1);
        let n2 = new Node(2);
        let n3 = new Node(3);
        let n4 = new Node(4);
        let n5 = new Node(5);

        n1.addChildren(n2);
        n1.addChildren(n3);
        n2.addChildren(n4);
        n3.addChildren(n5);

        graph.addNode(n1);

        finder.hasRoute(n1, n5).should.be.true;
    });

    it('should not find a route', () => {
        let n1 = new Node(1);
        let n2 = new Node(2);
        let n3 = new Node(3);
        let n4 = new Node(4);
        let n5 = new Node(5);

        n1.addChildren(n2);
        n2.addChildren(n4);
        n3.addChildren(n5);

        graph.addNode(n1);
        graph.addNode(n3);

        finder.hasRoute(n1, n5).should.be.false;
    });
});
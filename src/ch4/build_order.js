'use strict'

let Graph = require('./graph').Graph;
let Node = require('./graph').Node;

class BuildOrder {
    constructor(projects, dependencies){
        this.graph = new Graph();
        let nodes = {};

        for(let p of projects){
            let node = new Node(p);
            this.graph.addNode(node);
            nodes[p] = node;
        }

        for(let d of dependencies){
            let dependency = Object.keys(d)[0];
            let dependent = d[dependency];

            nodes[dependent].addChildren(dependency);
        }
    }

    find(){

    }
}

module.exports = BuildOrder;
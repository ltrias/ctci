'use strict'

let Graph = require('./graph').Graph;
let Node = require('./graph').Node;

class BuildOrder {
    constructor(projects, dependencies){
        this.graph = new Graph();

        for(let d of dependencies){
            //...
        }
    }

    find(){

    }
}

module.exports = BuildOrder;
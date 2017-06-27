'use strict'

class Graph{

    constructor(){
        this.nodes = [];
    }

    addNode(node){
        this.nodes = this.nodes.concat(node);
    }
}

class Node {
    constructor(data){
        this.data = data;
        this.children = [];
    }

    addChildren(node){
        this.children = this.children.concat(node);
    }
}

module.exports = {Graph, Node};
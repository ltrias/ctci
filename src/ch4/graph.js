'use strict'

class Graph{

    constructor(){
        this.nodes = [];
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
'use strict'

class ListOfDepths{

    create(tree){
        let result = [];

        return result;
    }
/*
    hasRoute(a, b){
        let queue = [];

        a.visited = true;
        queue.push(a);

        while( queue.length ){
            let n = queue.shift();

            if( n == b ){
                return true;
            }

            n.visited = true;

            for(let c of n.children){
                if( !c.visited ){
                    c.visited = true;
                    queue.push(c);
                } 
            }
        }

        return false;
    }*/
}

module.exports = ListOfDepths;
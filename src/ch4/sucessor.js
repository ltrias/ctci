'use strict'

class Sucessor{
    constructor(tree){
        this.tree = tree;
    }

    find(base){
        let result = null;
        
        let baseNode = this.binarySearch(base);
        if( baseNode ){
            if( baseNode.right ){
                let sucessor = baseNode.right;

                while( sucessor.left ){
                    sucessor = sucessor.left;
                }

                return sucessor.value;
            }else{
                if( baseNode.parent ){
                    if( baseNode == baseNode.parent.left ){
                        return baseNode.parent.value;
                    }else if( baseNode.parent.parent ){
                        return baseNode.parent.parent.value;
                    }
                }
            }
        }

        return result;
    }

    binarySearch(n){
        return this.recurseBinarySearch(n, this.tree.root);
    }

    recurseBinarySearch(n, node){
        if( !node ){
            return null;
        }

        if( node.value === n ){
            return node;
        }

        if( n < node.value ){
            return this.recurseBinarySearch(n, node.left);
        }else{
            return this.recurseBinarySearch(n, node.right);
        }
    }
}

module.exports = Sucessor;
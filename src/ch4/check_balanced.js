'use strict'

class BalanceChecker{
    constructor(tree){
        this.tree = tree;
    }

    check(){
        return this.checkHeight(this.tree.root) != Number.NEGATIVE_INFINITY;
    }

    checkHeight(node){
        if( !node ){
            return -1;
        }

        let leftHeight = this.checkHeight(node.left);
        if( leftHeight === Number.NEGATIVE_INFINITY ){
            return Number.NEGATIVE_INFINITY;
        }

        let rightHeight = this.checkHeight(node.right);
        if( rightHeight === Number.NEGATIVE_INFINITY ){
            return Number.NEGATIVE_INFINITY;
        }

        if( Math.abs(leftHeight - rightHeight) > 1 ){
            return Number.NEGATIVE_INFINITY
        }else{
            return Math.max(leftHeight, rightHeight) + 1;
        }
    }
}

module.exports = BalanceChecker;
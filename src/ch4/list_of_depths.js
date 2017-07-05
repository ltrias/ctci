'use strict'

class ListOfDepths{

    create(tree){
        let result = [];

        if( tree.root ){
            let queue = [];

            queue.push(new NodeWrapper(tree.root, 0));
            
            while( queue.length ){
                let wrapper = queue.shift();
                
                if( wrapper.node ){
                    let levelList = result[wrapper.level];
                    if( !levelList ){
                        levelList = [];
                        result.push(levelList); 
                    }

                    levelList.push(wrapper.node);

                    queue.push(new NodeWrapper(wrapper.node.left, wrapper.level + 1));
                    queue.push(new NodeWrapper(wrapper.node.right, wrapper.level + 1));
                }
            }
        }

        return result;
    }
}

class NodeWrapper{
    constructor(node, level){
        this.node = node;
        this.level = level;
    }
}

module.exports = ListOfDepths;
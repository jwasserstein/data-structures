class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class MaxBinaryHeap {
    constructor(){
        this.root = new Node(null);
        this.lastParent = null;
    }

    insert(value){
        const newNode = new Node(value);
        
        if(this.root === null){
            this.root = newNode;
            return this;
        }

        if(!this.lastParent.left){
            this.lastParent.left = newNode;
            return this;
        }

        if(!this.lastParent.right){
            this.lastParent.Right = newNode;
            this.lastParent = this.lastParent.left;
            return this;
        }
    }
}

//      15          
//     /  \
//    7    9
//   / \    
//  3   5   
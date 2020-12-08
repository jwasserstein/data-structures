class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class MaxBinaryHeap {
    constructor(){
        this.root = null;
        this.lastParent = this.root;
    }

    insert(value){
        const newNode = new Node(value);
        
        if(this.root === null){
            this.root = newNode;
            this.lastParent = this.root;
            return this;
        }

        if(!this.lastParent.left){
            this.lastParent.left = newNode;
            return this;
        }

        if(!this.lastParent.right){
            this.lastParent.right = newNode;
            this.lastParent = this.lastParent.left;
            return this;
        }
    }
}

const h = new MaxBinaryHeap();
h.insert(15);
h.insert(7);
h.insert(9);
h.insert(3);
h.insert(5);
debugger;

//      15          
//     /  \
//    7    9
//   / \    
//  3   5   
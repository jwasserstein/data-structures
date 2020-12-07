class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(){
        this.root = null;
    }

    insert(value){
        if(this.root === null){
            this.root = new Node(value);
            return;
        }
        
        let currentNode = this.root;
        let prevNode;
        while(currentNode !== null){
            if(value === currentNode.value){
                return false;
            } else if(value < currentNode.value){
                prevNode = currentNode;
                currentNode = currentNode.left;
            } else {
                prevNode = currentNode;
                currentNode = currentNode.right;
            }
        }
        const newNode = new Node(value);
        if(value < prevNode.value){
            prevNode.left = newNode;
        } else {
            prevNode.right = newNode;
        }
    }

    lookup(value){
        let currentNode = this.root;
        
        while(currentNode !== null){
            if(value === currentNode.value){
                return currentNode;
            } else if (value < currentNode.value){
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }

        return currentNode ? currentNode.value : null;
    }

    remove(value){
        if(this.root === null) return null;

        let currentNode = this.root;
        let prevNode;
        while(currentNode.value !== value){
            if(value < currentNode.value){
                if(currentNode.left === null) return null;
                prevNode = currentNode;
                currentNode = currentNode.left;
            } else {
                if(currentNode.right === null) return null;
                prevNode = currentNode;
                currentNode = currentNode.right;
            }
        }
        
        if(currentNode.left === null && currentNode.right === null){ // if the deletion node has no children, just delete it
            if(prevNode.left === currentNode) {
                prevNode.left = null;
            } else {
                prevNode.right = null;
            }
        } else if(currentNode.left === null || currentNode.right === null){ // if the deletion node has one child, move child up to replace this node
            if(prevNode.left === currentNode) {
                prevNode.left = currentNode.left ? currentNode.left : currentNode.right;
            } else {
                prevNode.right = currentNode.left ? currentNode.left : currentNode.right;
            }
        } else { // if the deletion node has two children, replace it with the smallest value to its right
            let subtreeMinNode = currentNode.right;
            let subtreePrevNode;
            while(subtreeMinNode.left !== null){
                subtreePrevNode = subtreeMinNode;
                subtreeMinNode = subtreeMinNode.left;
            }
            currentNode.value = subtreeMinNode.value;
            if(subtreePrevNode){
                subtreePrevNode.left = null;
            } else {
                currentNode.right = null;
            }
        }
        return value;
    }
}

let b = new BST();
b.insert(15);
b.insert(13);
b.insert(18);
b.insert(10);
b.insert(14);
b.insert(20);
debugger;


//       15
//      /  \
//    13    18
//   /  \     \ 
// 10    14    20
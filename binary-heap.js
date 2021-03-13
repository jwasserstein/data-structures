class MinHeap {
    constructor(){
        this.data = [];
    }

    static getParentIdx(childIdx){
        if(childIdx === 0) return -1;
        return childIdx % 2 === 0 ? (childIdx-2)/2 : (childIdx-1)/2;
    }

    static getLeftChildIdx(parentIdx){
        return parentIdx*2+1;
    }

    static getRightChildIdx(parentIdx){
        return parentIdx*2+2;
    }

    add(val){
        this.data.push(val);
        let idx = this.data.length-1;
        let pIdx = MinHeap.getParentIdx(idx);
        while(pIdx !== -1 && this.data[idx] < this.data[pIdx]){
            [this.data[idx], this.data[pIdx]] = [this.data[pIdx], this.data[idx]];
            idx = pIdx;
            pIdx = MinHeap.getParentIdx(idx);
        }
    }

    peek(){
        return this.data[0];
    }

    remove(){
        if(this.data.length === 1) return this.data.pop();

        const val = this.data[0];
        [this.data[0], this.data[this.data.length-1]] = [this.data[this.data.length-1], this.data[0]];
        this.data.pop();

        let idx = 0;
        let leftChildIdx = MinHeap.getLeftChildIdx(idx);
        let rightChildIdx = MinHeap.getRightChildIdx(idx);
        while((leftChildIdx !== -1 && this.data[idx] > this.data[leftChildIdx]) || (rightChildIdx !== -1 && this.data[idx] > this.data[rightChildIdx])){
            let childIdx = this.data[leftChildIdx] < this.data[rightChildIdx] ? leftChildIdx : rightChildIdx;
            [this.data[idx], this.data[childIdx]] = [this.data[childIdx], this.data[idx]];
            idx = childIdx;
            leftChildIdx = MinHeap.getLeftChildIdx(idx);
            rightChildIdx = MinHeap.getRightChildIdx(idx);
        }

        return val;
    }
}

const heap = new MinHeap();

heap.add(5);
heap.add(3);
heap.add(7);
heap.add(1);
heap.add(2);
heap.add(9);
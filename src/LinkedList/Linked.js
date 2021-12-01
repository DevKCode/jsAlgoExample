class Node {
    constructor(value) {
        this.value = value
        this.next = null;

    }
}

class LinkedList {

    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    push(value) {
        if (this.length == 0) {
            let firstNode = new Node(value);
            this.head = firstNode;
            this.tail = firstNode
        } else {

            let node = new Node(value);
            this.tail = node;
        }
    }
}


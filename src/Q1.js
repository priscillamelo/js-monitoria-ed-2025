class Pilha {
    constructor(size = 10) {
        this.stack = [];
        this.size = size;
        this.topo = 0;
    }

    invert(word) {
        let invertWord = "";
        for (let i = 0; i < word.length; i++) {
            this.push(word[i]);
        }

        for (let i = 0; i < this.stack.length; i++) {
            invertWord += this.pop();
        }

        return invertWord;
    }

    push(dado) {
        if (this.topo === this.size) {
            throw new Error("Stack Overflow");
        }
        this.stack[this.topo] = dado;
        this.topo++;
    }

    pop() {
        if (this.topo === 0) {
            throw new Error("Stack underflow");
        }
        this.topo--;
        return this.stack[this.topo];
    }



    /* isEmpty() {
        return this.length() === 0;
    }

    isFull() {
        return this.length() === this.size;
    }

    length() {
        return this.topo;
    }    
    
    top() {
         if (!this.isEmpty()) {
             return this.stack[this.topo - 1];
         }
     }
 
     clear() {
         this.topo = 0;
     }
 
     toString() {
         return this.stack.toString();
     } */
}

export default Pilha;

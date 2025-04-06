class PilhaAuxiliar {
    constructor(size = 10) {
        this.stack = [];
        this.stackAux = [];
        this.maxSize = size;
        this.topo = 0;
    }

    inverterExtremidades() {
        for (let i = 0; i < this.stack.length; i++) {
            if (i === 0) {
                this.stackAux[i] = this.stack[this.topo - 1];
            } else if (i === this.topo - 1) {
                this.stackAux[i] = this.stack[0];
            } else {
                this.stackAux[i] = this.stack[i];
            }
        }
        return this.stackAux.join('');
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
}

export default PilhaAuxiliar;
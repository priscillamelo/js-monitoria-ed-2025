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
        this.stackAux[i] = this.stack[this.length() - 1];
      } else if (i === this.length() - 1) {
        this.stackAux[i] = this.stack[0];
      } else {
        this.stackAux[i] = this.stack[i];
      }
    }
    
    return this.stackAux.join("");
  }

  push(dado) {
    if (this.isFull()) {
      throw new Error("Stack Overflow");
    }
    this.stack[this.topo] = dado;
    this.topo++;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack underflow");
    }
    this.topo--;
  }

  isEmpty() {
    return this.length() === 0;
  }

  isFull() {
    return this.length() === this.maxSize;
  }

  length() {
    return this.topo;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.stack[this.topo - 1];
    }
  }

  clear() {
    this.topo = 0;
  }

  toString() {
    return this.stack.toString();
  }
}

export default PilhaAuxiliar;

class Pilha {
  constructor(size = 10) {
    this.stack = [];
    this.maxSize = size;
    this.topo = 0;
  }

  invert(word) {
    let invertWord = "";
    for (let i = 0; i < word.length; i++) {
      this.push(word[i]);
    }

    for (let i = 0; i < this.stack.length; i++) {
      invertWord += this.peek();
      this.pop();
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

export default Pilha;

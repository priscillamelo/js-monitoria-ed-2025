class PilhaDupla {
  constructor(size = 10) {
    this.stack = [];
    this.size = size;
    this.topoA = this.size - 1;
    this.topoB = 0;
  }

  pushA(dado) {
    if (this.isFull()) {
      throw new Error("Stack Overflow");
    }
    this.stack[this.topoA] = dado;
    this.topoA--;
  }

  pushB(dado) {
    if (this.isFull()) {
      throw new Error("Stack Overflow");
    }
    this.stack[this.topoB] = dado;
    this.topoB++;
  }

  popA() {
    if (this.isEmptyA()) {
      throw new Error("Stack underflow");
    }
    this.topoA++;
  }

  popB() {
    if (this.isEmptyB()) {
      throw new Error("Stack underflow");
    }
    this.topoB--;
  }

  isEmptyA() {
    return this.topoA === this.size - 1;
  }
  isEmptyB() {
    return this.topoB === 0;
  }

  isFull() {
    return this.topoA < this.topoB;
  }

  toString() {
    let dado = "";
    for (const element of this.stack) {
      dado += element;
    }

    return dado;
  }
}

export default PilhaDupla;

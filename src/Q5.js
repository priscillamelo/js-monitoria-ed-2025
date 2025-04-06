class PilhaSequencia {
  constructor(size = 10) {
    this.maxSize = size;
    this.stack = [];
    this.topo = 0;
  }

  verificaFormacao(dado) {
    for (let i = 0; i < dado.length; i++) {
      const elemento = dado[i];

      const isColchete = elemento === "[" || elemento === "]";
      const isParenteses = elemento === "(" || elemento === ")";

      if (isColchete || isParenteses) {
        if (this.isEmpty()) {
          this.push(elemento);
        } else {
          const topo = this.peek();

          if (
            (elemento === "]" && topo === "[") ||
            (elemento === ")" && topo === "(")
          ) {
            this.pop();
          } else {
            this.push(elemento);
          }
        }
      } else {
        return "Texto possui outros caracteres.";
      }
    }

    if (this.isEmpty()) return "Pilha bem-formada";
    return "Pilha malformada";
  }

  push(elemento) {
    if (this.topo === this.maxSize) throw new Error("Stack Overflow");

    this.stack[this.topo] = elemento;
    this.topo++;
  }

  pop() {
    if (this.topo === 0) throw new Error("Stack Underflow");
    this.topo--;
  }

  isEmpty() {
    return this.length() === 0;
  }

  isFull() {
    return this.length() === this.size;
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

export default PilhaSequencia;

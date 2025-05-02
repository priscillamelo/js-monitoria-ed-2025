class PilhaSemDuplicatas {
  constructor(size = 10) {
    this.maxSize = size;
    this.stack = [];
    this.topo = 0;
  }

  removerDuplicatas() {
    let stackAux = [];
    let positionDuplicata = 0;

    for (let i = 0; i < this.length(); i++) {
      // PILHA: 2, 1, 4, 4
      let elemento = this.stack[i];

      if(i === 0) {
        stackAux[positionDuplicata] = elemento;
        positionDuplicata++;
        // PILHA AUXILIAR: 2, 1, 4
      } else {
        let contains = 0;
        for (let element of stackAux) {
          if (element === elemento) contains++;
        }

        if(contains === 0) {
          stackAux[positionDuplicata] = elemento;
          positionDuplicata++;
        }
      }
    }

    return stackAux.join(", ");
  }

  push(dado) {
    if (this.isFull()) throw new Error("Stack Overflow");

    this.stack[this.topo] = dado;
    this.topo++;
  }

  pop() {
    if (this.isEmpty()) throw new Error("Stack underflow");
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
    let pilha = "";
    for (const pilhaElement of this.stack) {
      pilha+= pilhaElement;
    }

    return pilha;
  }
}

export default PilhaSemDuplicatas;

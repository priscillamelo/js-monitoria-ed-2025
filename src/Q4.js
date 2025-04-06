class PilhaBinaria {
  constructor(size = 64) {
    this.stack = [];
    this.maxSize = size;
    this.topo = 0;
  }

  decimalToBinario(numero) {
    if (numero === 0) return 0;
    let valorBinarioInvertido = "1";

    while (numero !== 1) {
      let resto = numero % 2;
      numero = parseInt(numero / 2);
      this.push(resto);
    }

    while (!this.isEmpty()) {
      valorBinarioInvertido += this.peek();
      this.pop();
    }

    return parseInt(valorBinarioInvertido);
  }

  push(dado) {
    if (this.isFull()) throw new Error("Stack Overflow");
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

export default PilhaBinaria;

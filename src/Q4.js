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

    while (this.topo !== 0) {
      valorBinarioInvertido += this.pop();
    }

    return parseInt(valorBinarioInvertido);
  }

  push(dado) {
    if (this.topo === this.maxSize) throw new Error("Stack Overflow");
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

export default PilhaBinaria;

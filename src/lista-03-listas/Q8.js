import Node from "../Node";

class ListaPessoas {
  constructor() {
    this.head = new Node();
  }

  add(nome, idade) {
    const novoNo = new Node({ nome, idade });

    if (!this.head.proximo) {
      this.head.proximo = novoNo;
    } else {
      let atual = this.head.proximo;
      while (atual.proximo) {
        atual = atual.proximo;
      }
      atual.proximo = novoNo;
    }
  }

  ordenarPorNome() {
    if (this.isEmpty()) return null;
    if (!this.head.proximo.proximo) return this.toString();

    let trocado;
    do {
      trocado = false;
      let atual = this.head.proximo;

      while (atual && atual.proximo) {
        if (atual.dado.nome.toLowerCase() > atual.proximo.dado.nome.toLowerCase()) {
          let temp = atual.dado;
          atual.dado = atual.proximo.dado;
          atual.proximo.dado = temp;
          trocado = true;
        }
        atual = atual.proximo;
      }
    } while (trocado);

    return this.toString();
  }

  ordenarPorIdade() {
    if (this.isEmpty()) return null;
    if (!this.head.proximo.proximo) return this.toString();

    let trocado;
    do {
      trocado = false;
      let atual = this.head.proximo;

      while (atual.proximo) {
        if (atual.dado.idade > atual.proximo.dado.idade) {
          const temp = atual.dado;
          atual.dado = atual.proximo.dado;
          atual.proximo.dado = temp;
          trocado = true;
        }
        atual = atual.proximo;
      }
    } while (trocado);

    return this.toString();
  }

  isEmpty() {
    return this.head.proximo === null;
  }

  toString() {
    let atual = this.head.proximo;
    let resultado = "";
    while (atual) {
      resultado += `${atual.dado.nome}: ${atual.dado.idade}`;
      if (atual.proximo) {
        resultado += ", ";
      }
      atual = atual.proximo;
    }
    return resultado;
  }
}

export default ListaPessoas;

import Node from "../Node";

class ListaPessoas {
  constructor() {
    this.head = null;
  }

  adicionar(nome, idade) {
    const novoNo = new Node({ nome, idade });
    if (!this.head) {
      this.head = novoNo;
    } else {
      let atual = this.head;
      while (atual.proximo) {
        atual = atual.proximo;
      }
      atual.proximo = novoNo;
    }
  }

  // Converte a lista para array para facilitar a ordenação
  toArray() {
    let array = [];
    let atual = this.head;
    while (atual) {
      array.push(atual.dado);
      atual = atual.proximo;
    }
    return array;
  }

  // Constrói nova lista a partir de um array de objetos
  static fromArray(arr) {
    const novaLista = new ListaPessoas();
    arr.forEach(({ nome, idade }) => novaLista.adicionar(nome, idade));
    return novaLista;
  }

  // Retorna nova lista ordenada por nome
  ordenarPorNome() {
    const array = this.toArray();
    array.sort((a, b) => a.nome.localeCompare(b.nome));
    return ListaPessoas.fromArray(array);
  }

  // Retorna nova lista ordenada por idade
  ordenarPorIdade() {
    const array = this.toArray();
    array.sort((a, b) => a.idade - b.idade);
    return ListaPessoas.fromArray(array);
  }

  toString() {
    let atual = this.head;
    let str = '';
    while (atual) {
      str += `(${atual.dado.nome}, ${atual.dado.idade}) -> `;
      atual = atual.proximo;
    }
    return str + 'null';
  }
}

export default ListaPessoas;

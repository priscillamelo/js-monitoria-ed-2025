import Node from "../Node";

class ListaString {
  constructor() {
    this.head = new Node();
  }

  addString(texto) {
    let atual = this.head;

    // destrincha o texto criando um novo no com cada caractere
    for (const char of texto) {
      atual.proximo = new Node(char);
      atual = atual.proximo;
    }

  }

  // Retorna uma nova lista com os caracteres da posição A até B
  substring(A, B) {
    if (A < 0 || B <= A) return null;

    let substringList = new ListaString();

    let atual = this.head.proximo;

    let novoAtual = substringList.head;

    // teste -> 2, 4
    for (let i = 0; i < B; i++) {
      if (atual) {
        if (i >= A) {
          novoAtual.proximo = new Node(atual.dado); // st
          novoAtual = novoAtual.proximo;
        }
        atual = atual.proximo;
      }
    }

    return substringList.toString();
  }

  substringPorLetras(letraA, letraB) {
    let substringList = new ListaString();
    let novoAtual = substringList.head;
    let atual = this.head.proximo;
    let encontrouLetraA = false;
  
    while (atual) {
      
      if (!encontrouLetraA) {
        if (atual.dado === letraA) {
          encontrouLetraA = true;
          novoAtual.proximo = new Node(atual.dado);
          novoAtual = novoAtual.proximo;
  
          if (letraA === letraB) break;
        }
      } else {
        novoAtual.proximo = new Node(atual.dado);
        novoAtual = novoAtual.proximo;
  
        if (atual.dado === letraB) break;
      }
  
      atual = atual.proximo;
    }
  
    return encontrouLetraA ? substringList.toString() : null;
  }

  toString() {
    let str = '';
    let atual = this.head.proximo;
    while (atual) {
      str += atual.dado;
      atual = atual.proximo;
    }
    return str;
  }
}

export default ListaString;

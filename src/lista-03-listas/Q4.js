import Node from "../Node";

class ListaInvertida {
  constructor() {
    this.head = new Node();
  }

  inverter() {
    if (this.isEmpty()) return null;
    
    if (this.head.proximo.proximo === null) return this.head.proximo.dado; // Lista vazia ou com 1 elemento
    
    let prev = null;
    let current = this.head.proximo;
    let next = null;

    while (current) {
      next = current.proximo;
      current.proximo = prev;
      prev = current;
      current = next;
    }

    // Após o loop, prev será o novo primeiro nó
    this.head.proximo = prev;

  }

  add(elemento) {
    let novoNo = new Node(elemento);
    novoNo.proximo = this.head.proximo;
    this.head.proximo = novoNo;
  }

  append(elemento) {
    const novoNo = new Node(elemento);
    let atual = this.head;

    while (atual.proximo !== null) {
      atual = atual.proximo;
    }

    atual.proximo = novoNo;
  }

  removeLast() {
    if (!this.isEmpty()) {
      let node_a = this.head;
      let node_b = this.head.proximo;
      while (node_b.proximo !== null) {
        node_a = node_b;
        node_b = node_b.proximo;
      }
      node_a.proximo = null;
    }
  }

  removeFirst() {
    if (!this.isEmpty()) {
      let aux;
      aux = this.head.proximo;
      this.head.proximo = aux.proximo;
    }
  }

  isEmpty() {
    return this.head.proximo === null;
  }

  length() {
    let result = 0;
    let node_b = this.head.proximo;
    while (node_b !== null) {
      result++;
      node_b = node_b.proximo;
    }
    return result;
  }

  addAt(elemento, pos) {
    if (pos < 0 || pos > this.length()) throw new Error("Posição inválida");

    let novoNo = new Node(elemento);
    let atual = this.head;
    let index = 0;

    while (index < pos) {
      atual = atual.proximo;
      index++;
    }

    novoNo.proximo = atual.proximo;
    atual.proximo = novoNo;
  }

  removeAt(pos) {
    if (pos < 0 || pos >= this.length()) throw new Error("Posição inválida");

    let atual = this.head;
    let index = 0;

    while (index < pos) {
      atual = atual.proximo;
      index++;
    }

    atual.proximo = atual.proximo.proximo;
  }

  search(key) {
    let atual = this.head.proximo;

    while (atual !== null) {
      if (atual.dado === key) return true;
      atual = atual.proximo;
    }

    return false;
  }

  toString() {
    let result = "";
    let element = this.head.proximo;

    while (element) {
      result += element.dado;
      element = element.proximo;
    }
    return result;
  }
}

export default ListaInvertida;

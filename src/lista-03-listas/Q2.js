import Node from "../Node";

class FilaDinamica {
  constructor() {
    this.inicio = null; // Referência para o primeiro elemento da fila
    this.fim = null; // Referência para o último elemento da fila
  }

  // Adiciona um elemento no final da fila
  enqueue(element) {
    let newNode = new Node(element); // Cria um novo nó com o elemento

    // Se a fila estiver vazia, o primeiro e o último nó serão o mesmo
    if (this.isEmpty()) {
      this.inicio = this.fim = newNode;
    } else {
      this.fim.next = newNode; // O ultimo no da fila aponta para o novoNo
      this.fim = newNode; // Atualiza a referência para o último nó da fila
    }
  }

  // Remove um elemento do início da fila
  dequeue() {
    if (this.isEmpty()) return null; // Fila vazia

    let frontFila = this.front();

    this.inicio = this.inicio.next; // Atualiza a referência para o próximo nó

    return frontFila;
  }

  // Retorna o valor do primeiro elemento da fila
  front() {
    return this.isEmpty() ? null : this.inicio.dado;
  }

  // Verifica se a fila está vazia
  isEmpty() {
    return this.inicio === null;
  }

  // Retorna o número de elementos na fila
  length() {
    let count = 0;
    let current = this.inicio;
    
    while (current !== null) {
      count++;
      current = current.next;
    }
    return count;
  }

  clear() {
    this.inicio = this.fim = null;
  }

  toString() {
    let result = "";
    let current = this.inicio;
    
    while (current) {
      result += current.dado;
      current = current.next;
    }
    return result;
  }
}

export default FilaDinamica;

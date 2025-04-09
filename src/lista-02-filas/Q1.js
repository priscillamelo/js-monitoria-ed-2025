class FilaBasica {
  constructor(size = 3) {
    this.queue = [];
    this.newQueue = [];
    this.maxSize = size;
    this.inicio = 0;
    this.fim = 0;
  }

  queueToStack(dado) {
    for (let i = 0; i < dado.length; i++) {
      this.enqueue(dado[i]);
    }

    for (let i = this.length() - 1; i >= 0; i--) {
      this.newQueue[i] = this.dequeue();
    }

    return this.newQueue.join("");
  }

  enqueue(dado) {
    if (this.isFull()) throw new Error("Queue overflow");
    this.queue[this.fim] = dado;
    this.fim++;
  }

  dequeue() {
    if (this.isEmpty()) throw new Error("Queue underflow");
    let element = this.front();
    this.inicio++;

    return element;
  }

  front() {
    if (!this.isEmpty()) return this.queue[this.inicio];
  }

  isEmpty() {
    return this.inicio === this.fim;
  }

  isFull() {
    return this.fim === this.maxSize;
  }

  clear() {
    this.fim = 0;
    this.inicio = 0;
  }

  length() {
    return this.fim - this.inicio;
  }

  toString() {
    return this.queue.join(",");
  }
}

export default FilaBasica;

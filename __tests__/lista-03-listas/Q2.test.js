import FilaDinamica from "../../src/lista-03-listas/Q2";

let filaDinamica;

beforeEach(() => {
  filaDinamica = new FilaDinamica();
});

test('Fila deve iniciar vazia.', () => {
  expect(filaDinamica.isEmpty()).toBe(true);
});

test('Adicionar elementos na fila.', () => {
  filaDinamica.enqueue(1);
  filaDinamica.enqueue(2);
  
  expect(filaDinamica.isEmpty()).toBe(false);
  expect(filaDinamica.front()).toBe(1);
});

test('Verifica o tamanho da fila após várias operações.', () => {
  filaDinamica.enqueue(1);
  filaDinamica.enqueue(2);
  filaDinamica.enqueue(3);

  expect(filaDinamica.length()).toBe(3);

  filaDinamica.dequeue(); // remove 1
  expect(filaDinamica.length()).toBe(2);

  filaDinamica.dequeue(); // remove 2
  filaDinamica.enqueue(4);
  expect(filaDinamica.length()).toBe(2);

  filaDinamica.clear();
  expect(filaDinamica.length()).toBe(0);
});

test('Remoção dos elementos respeitando a ordem FIFO.', () => {
  filaDinamica.enqueue(10);
  filaDinamica.enqueue(20);
  filaDinamica.enqueue(30);

  expect(filaDinamica.dequeue()).toBe(10);
  expect(filaDinamica.dequeue()).toBe(20);
  expect(filaDinamica.dequeue()).toBe(30);
  expect(filaDinamica.dequeue()).toBe(null); // fila vazia
});

test('Após remover todos os elementos, a fila deve estar vazia.', () => {
  filaDinamica.enqueue(5);
  filaDinamica.dequeue();
  expect(filaDinamica.isEmpty()).toBe(true);
  expect(filaDinamica.front()).toBe(null);
});

test('toString deve refletir o conteúdo da fila.', () => {
  filaDinamica.enqueue('A');
  filaDinamica.enqueue('B');
  filaDinamica.enqueue('C');
expect(filaDinamica.toString()).toBe('ABC');
});

test('clear deve esvaziar a fila completamente.', () => {
  filaDinamica.enqueue(1);
  filaDinamica.enqueue(2);
  filaDinamica.clear();
  expect(filaDinamica.isEmpty()).toBe(true);
  expect(filaDinamica.front()).toBe(null);
});

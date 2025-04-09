import FilaBasica from "../../src/lista-02-filas/Q1";

let fila;

beforeEach(() => {
  fila = new FilaBasica();
});

test("Verifica se a fila esta vazia.", () => {
  expect(fila.isEmpty()).toBe(true);
});

test("Verifica se a fila esta cheia.", () => {
  fila.enqueue(1);
  fila.enqueue(2);
  fila.enqueue(3);
  expect(fila.isFull()).toBe(true);
});

test("Verifica se a fila retorna os dados na seguinte ordem: A,B,C.", () => {
  fila.enqueue("A");
  fila.enqueue("B");
  fila.enqueue("C");
  expect(fila.toString()).toBe("A,B,C");
});

test("Verifica se a fila retorna os dados 'C, B, A' que serao inseridos na seguinte ordem: A,B,C.", () => {
  expect(fila.queueToStack("ABC")).toBe("CBA");
});

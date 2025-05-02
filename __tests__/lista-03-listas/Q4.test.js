import ListaInvertida from "../../src/lista-03-listas/Q4";

let lista;

beforeEach(() => {
  lista = new ListaInvertida();
});

test('Deve inverter uma lista com múltiplos elementos.', () => {
  lista.add(1); // Lista: 1
  lista.add(2); // Lista: 2 → 1
  lista.add(3); // Lista: 3 → 2 → 1

  expect(lista.toString()).toBe('321');

  lista.inverter(); // Deve virar: 1 → 2 → 3
  expect(lista.toString()).toBe('123');
});

test('Deve retornar null ao inverter uma lista vazia.', () => {
  expect(lista.inverter()).toBe(null);
});

test('Deve retornar o próprio nó em uma lista com apenas um elemento', () => {
  lista.add(7);
  expect(lista.inverter()).toBe(7);
});

import ListaPessoas from "../../src/lista-03-listas/Q8";

let lista;

beforeEach(() => {
  lista = new ListaPessoas();
});

test('Deve ordenar por nome em ordem alfabética', () => {
  lista.adicionar('Carlos', 30);
  lista.adicionar('Ana', 25);
  lista.adicionar('Bruno', 20);

  const ordenada = lista.ordenarPorNome();
  expect(ordenada.toString()).toBe('(Ana, 25) -> (Bruno, 20) -> (Carlos, 30) -> null');
});

test('Deve ordenar por idade em ordem crescente', () => {
  lista.adicionar('Carlos', 30);
  lista.adicionar('Ana', 25);
  lista.adicionar('Bruno', 20);

  const ordenada = lista.ordenarPorIdade();
  expect(ordenada.toString()).toBe('(Bruno, 20) -> (Ana, 25) -> (Carlos, 30) -> null');
});

test('Deve manter lista vazia se nenhum elemento for adicionado', () => {
  expect(lista.ordenarPorNome().toString()).toBe('null');
  expect(lista.ordenarPorIdade().toString()).toBe('null');
});

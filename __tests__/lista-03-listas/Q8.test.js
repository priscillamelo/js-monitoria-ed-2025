import ListaPessoas from "../../src/lista-03-listas/Q8";

let lista;

beforeEach(() => {
  lista = new ListaPessoas();
});

test('Deve adicionar pessoas (nome, idade)', () => {
  lista.add('Carlos', 30);
  lista.add('Ana', 25);
  lista.add('Bruno', 20);

  expect(lista.isEmpty()).toBe(false);
});

test('Deve retornar as pessoas adicionadas sem ordenação.', () => {
  lista.add('Carlos', 30);
  lista.add('Ana', 25);
  lista.add('Bruno', 20);

  expect(lista.toString()).toBe("Carlos: 30, Ana: 25, Bruno: 20");
});

test('Deve retornar o próprio elemento caso tenha sido o único adicionado.', () => {
  lista.add('Carlos', 30);

  expect(lista.ordenarPorNome()).toBe("Carlos: 30");
  expect(lista.ordenarPorIdade()).toBe("Carlos: 30");
});


test('Deve ordenar por nome em ordem alfabética', () => {
  lista.add('Carlos', 30);
  lista.add('Ana', 25);
  lista.add('Bruno', 20);

  expect(lista.ordenarPorNome()).toBe("Ana: 25, Bruno: 20, Carlos: 30");
});

test('Deve ordenar por nome em ordem alfabética e idade (menor -> maior)', () => {
  lista.add('Bruna', 25);
  lista.add('Carlos', 30);
  lista.add('Ana', 25);
  lista.add('Bruno', 20);
  lista.add('Carla', 18);

  expect(lista.ordenarPorNome()).toBe("Ana: 25, Bruna: 25, Bruno: 20, Carla: 18, Carlos: 30");
  expect(lista.ordenarPorIdade()).toBe("Carla: 18, Bruno: 20, Ana: 25, Bruna: 25, Carlos: 30");
});

test('Deve ordenar por idade em ordem crescente', () => {
  lista.add('Carlos', 30);
  lista.add('Ana', 25);
  lista.add('Bruno', 20);

  expect(lista.ordenarPorIdade()).toBe("Bruno: 20, Ana: 25, Carlos: 30");
});

test('Deve manter lista vazia se nenhum elemento for adicionado', () => {
  expect(lista.ordenarPorNome()).toBeNull();
  expect(lista.ordenarPorIdade()).toBeNull();
});

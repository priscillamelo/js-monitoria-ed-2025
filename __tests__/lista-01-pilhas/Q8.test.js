import Pilha from "../../src/lista-01-pilhas/Q8";

let pilha;

beforeEach(() => {
  pilha = new Pilha();
});

test("Deve empilhar e desempilhar pratos corretamente respeitando capacidade de 3 por pilha", () => {
  pilha.push(1);
  pilha.push(2);
  pilha.push(3); // primeira pilha cheia
  pilha.push(4); // nova pilha criada

  expect(pilha.pop()).toBe(4);
  expect(pilha.pop()).toBe(3);
  expect(pilha.pop()).toBe(2);
  expect(pilha.pop()).toBe(1);
  expect(pilha.pop()).toBe(null);
});

test("Deve criar uma nova pilha automaticamente ao atingir 3 pratos na pilha atual", () => {
  pilha.push(10);
  pilha.push(20);
  pilha.push(30); // primeira pilha cheia
  pilha.push(40); // segunda pilha criada

  expect(pilha.length()).toBe(2); // duas pilhas no conjunto
});

test("Deve remover todos os pratos e retornar null após esvaziar todas as pilhas", () => {
  pilha.push(100);
  pilha.push(200);
  pilha.push(300);
  pilha.push(400);

  expect(pilha.pop()).toBe(400);
  expect(pilha.pop()).toBe(300);
  expect(pilha.pop()).toBe(200);
  expect(pilha.pop()).toBe(100);
  expect(pilha.pop()).toBe(null);
});

test("Deve retornar null ao tentar desempilhar quando não há pilhas ou pratos", () => {
  expect(pilha.pop()).toBe(null);
});

test("Deve gerenciar empilhamento e desempilhamento intercalado corretamente", () => {
  pilha.push(1);
  pilha.push(2);
  pilha.push(3); // primeira pilha cheia
  pilha.push(4); // nova pilha criada

  expect(pilha.pop()).toBe(4); // desempilha da nova
  pilha.push(5); // insere na pilha que ainda tem espaço

  expect(pilha.pop()).toBe(5);
  expect(pilha.pop()).toBe(3);
  expect(pilha.pop()).toBe(2);
  expect(pilha.pop()).toBe(1);
  expect(pilha.pop()).toBe(null);
});

import ListaString from "../../src/lista-03-listas/Q6";

let lista;

beforeEach(() => {
  lista = new ListaString();
});

test('Deve criar a lista a partir de uma string', () => {
  lista.addString('teste');
  expect(lista.toString()).toBe('teste');
});

test('Deve retornar substring do início ao meio', () => {
  lista.addString('abcdef');
  const sub = lista.substring(0, 3);
  expect(sub.toString()).toBe('abc');
});

test('Deve retornar substring do meio ao fim', () => {
  lista.addString('abcdef');
  expect(lista.substring(3, 6)).toBe('def');
});

test('Deve retornar substring parcial', () => {
  lista.addString('analise');
  const sub = lista.substring(2, 5);
  expect(sub.toString()).toBe('ali');
});

test('Deve retornar null se A for negativo', () => {
  lista.addString('exemplo');
  expect(lista.substring(-1, 3)).toBeNull();
});

test('Deve retornar null se B for menor a A', () => {
  lista.addString('exemplo');
  expect(lista.substring(3, 1)).toBeNull();
  expect(lista.substring(4, 2)).toBeNull();
});

test('Deve retornar substring mesmo se B ultrapassar o tamanho da lista', () => {
  lista.addString('abc');
  expect(lista.substring(1, 10)).toBe('bc');
});

test('Deve retornar string vazia se substring começa e termina fora do limite', () => {
  lista.addString('abc');
  expect(lista.substring(5, 7)).toBe('');
});

test('Deve retornar substring entre letras.', () => {
  lista.addString('teste');
  expect(lista.substringPorLetras('e', 't')).toBe('est');
});

test('Deve retornar substring com múltiplos caracteres entre letras', () => {
  lista.addString('desenvolvimento');
  expect(lista.substringPorLetras('s', 'v')).toBe('senv');
});

test('Deve retornar substring quando letraA e letraB são iguais', () => {
  lista.addString('banana');
  expect(lista.substringPorLetras('n', 'n')).toBe('n');
});

test('Deve retornar substring até o final se letraB não existir', () => {
  lista.addString('javascript');
  expect(lista.substringPorLetras('s', 'z')).toBe("script");
});



import PilhaSequencia from "../../src/lista-01-pilhas/Q5";

let pilhaSequencia;

beforeEach(() => {
  pilhaSequencia = new PilhaSequencia();
});

test("Verifica se a pilha esta bem-formada.", () => {
  expect(pilhaSequencia.verificarFormacao("[()[()]]()")).toBe(
    "Pilha bem-formada"
  );
});

test("Verifica se a pilha esta malformada.", () => {
  expect(pilhaSequencia.verificarFormacao("(()]")).toBe("Pilha malformada");
});

test("Verifica se o texto eh composto apenas por parenteses e/ou colchetes.", () => {
  expect(pilhaSequencia.verificarFormacao("(()2]")).toBe(
    "Texto possui outros caracteres."
  );
});

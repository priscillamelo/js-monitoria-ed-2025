import PilhaSequencia from "../src/Q5";

let pilhaSequencia;

beforeEach(() => {
  pilhaSequencia = new PilhaSequencia();
});

test("Verifica se a pilha esta bem-formada.", () => {
  expect(pilhaSequencia.verificaFormacao("[()[()]]()")).toBe(
    "Pilha bem-formada"
  );
});

test("Verifica se a pilha esta ma-formada.", () => {
  expect(pilhaSequencia.verificaFormacao("(()]")).toBe("Pilha malformada");
});

test("Verifica se o texto eh composto apenas por parenteses e/ou colchetes.", () => {
  expect(pilhaSequencia.verificaFormacao("(()2]")).toBe(
    "Texto possui outros caracteres."
  );
});

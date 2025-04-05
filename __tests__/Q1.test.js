import Pilha from "../src/Q1";

let p;

beforeEach(() => {
    p = new Pilha(7);
});

test("Se inserir a palavra 'ABACAXI', o retorno deve ser 'IXACABA'.", () => {
    expect(p.invert("ABACAXI")).toBe("IXACABA");
});

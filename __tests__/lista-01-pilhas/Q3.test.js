import PilhaAuxiliar from "../../src/lista-01-pilhas/Q3";

let pilha;

beforeEach(() => {
    pilha = new PilhaAuxiliar(5);
})

test("Se adicionar na pilha '12345', o retorno devera ser '52341'.", () => {
    pilha.push(1);
    pilha.push(2);
    pilha.push(3);
    pilha.push(4);
    pilha.push(5);
    expect(pilha.inverterExtremidades()).toBe("52341");
});
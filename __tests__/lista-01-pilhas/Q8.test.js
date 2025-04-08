import Pilha from "../../src/lista-01-pilhas/Q8";

let pilha;

beforeEach(() => {
   pilha = new Pilha();
});

test("", () => {
    pilha.push(5);
    pilha.push(10);
    pilha.push(15);
    pilha.push(0);
    pilha.push(20);

    expect(pilha.pop()).toBe(20);
    expect(pilha.pop()).toBe(0);
    expect(pilha.pop()).toBe(15);
    expect(pilha.pop()).toBe(10);
    expect(pilha.pop()).toBe(5);
    expect(pilha.pop()).toBe(null);

});
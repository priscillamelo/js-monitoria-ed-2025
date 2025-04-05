import PilhaDupla from "../src/Q2";

let doubleStack;

beforeEach(() => {
    doubleStack = new PilhaDupla(6)
});

test("Se adicionar 'ABC' no topoB e 'FED' no topoA, o retorno sera 'ABCDEF'.", () => {
    doubleStack.pushB("A");
    doubleStack.pushB("B");
    doubleStack.pushB("C");
    doubleStack.pushA("F");
    doubleStack.pushA("E");
    doubleStack.pushA("D");
    expect(doubleStack.toString()).toBe("ABCDEF");
});

test("Se a pilha esta vazia.", () => {
    expect(doubleStack.isEmptyA() === doubleStack.isEmptyB()).toBe(true);
});

test("Se a pilha esta cheia.", () => {
    doubleStack.pushB("A");
    doubleStack.pushB("B");
    doubleStack.pushB("C");
    doubleStack.pushA("F");
    doubleStack.pushA("E");
    doubleStack.pushA("D");
    expect(doubleStack.isFull()).toBe(true);
});
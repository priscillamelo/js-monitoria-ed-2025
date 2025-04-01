import Lista from "../src/Lista";

let l;

beforeEach(() => {
    l = new Lista();
})

test("Inicializada deve ser vazia", () => {
    expect(l.isEmpty()).toBe(true);
})

test("Adicionar no inicio da lista", () => {
    l.add('A');
    l.add('B');
    l.add('C');
    expect(l.toString()).toBe('CBA');
    l.removeLast();
    expect(l.toString()).toBe('CB');
    l.removeFirst();
    expect(l.toString()).toBe('B');
    expect(l.length()).toBe(1);
    l.removeFirst();
    expect(l.isEmpty()).toBe(true);
    expect(l.length()).toBe(0);
})
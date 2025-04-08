import PilhaRPN from "../../src/lista-01-pilhas/Q6";

let pilhaRPN;

beforeEach(() => {
    pilhaRPN = new PilhaRPN();
})

test("Verificar se ao adicionar a expressao simples: A+E, o resultado esperado sera: AE+", () => {
   expect(pilhaRPN.algToRPN("A+E")).toBe("AE+");
});

test("Verificar se ao adicionar a expressao com parenteses: (A+B)-C, o resultado esperado sera: AB+C-", () => {
   expect(pilhaRPN.algToRPN("(A+B)-C")).toBe("AB+C-");
});

test("Verificar se ao adicionar a expressao com parenteses e media precedencia: (a+(b*c)), o resultado esperado sera: ABC*+", () => {
   expect(pilhaRPN.algToRPN("(a+(b*c))")).toBe("abc*+");
})

test("Verificar se ao adicionar a expressao com parenteses e media precedencia: ((a+b)*(z+x)), o resultado esperado sera: ab+zx+*", () => {
   expect(pilhaRPN.algToRPN("((a+b)*(z+x))")).toBe("ab+zx+*");
})

test("Verificar se ao adicionar a expressao com parenteses e media precedencia: a*b-(c-d)+e, o resultado esperado sera: ab*cd--e+", () => {
   expect(pilhaRPN.algToRPN("a*b-(c-d)+e")).toBe("ab*cd--e+");
})

test("Verificar se ao adicionar a expressao com parenteses e media precedencia: ((a+t)*((b+(a+c))^(c+d))), o resultado esperado sera: at+bac++cd+^*", () => {
   expect(pilhaRPN.algToRPN("((a+t)*((b+(a+c))^(c+d)))")).toBe("at+bac++cd+^*");
})
test("Verificar se ao adicionar a expressao com parenteses e media precedencia: a+b*c-d, o resultado esperado sera: abc*+d-", () => {
   expect(pilhaRPN.algToRPN("a+b*c-d")).toBe("abc*+d-");
})

test("Verificar se ao adicionar a expressao com parenteses e media precedencia: (a+b)+c/d, o resultado esperado sera: ab+cd/+", () => {
   expect(pilhaRPN.algToRPN("(a+b)+c/d")).toBe("ab+cd/+");
})


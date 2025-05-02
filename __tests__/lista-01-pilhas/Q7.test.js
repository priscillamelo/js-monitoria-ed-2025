import PilhaSemDuplicatas from "../../src/lista-01-pilhas/Q7";

let pilhaSemDuplicatas;

beforeEach(() => {
  pilhaSemDuplicatas = new PilhaSemDuplicatas();
});

test("Verifica se a pilha possui numero(s) duplicados. Ex: [3, 7, 3, 2, 7, 1, 4, 2] , resultado: [3, 7, 2, 1, 4].", () => {
  pilhaSemDuplicatas.push(3);
  pilhaSemDuplicatas.push(7);
  pilhaSemDuplicatas.push(3);
  pilhaSemDuplicatas.push(2);
  pilhaSemDuplicatas.push(7);
  pilhaSemDuplicatas.push(1);
  pilhaSemDuplicatas.push(4);
  pilhaSemDuplicatas.push(2);
  
  expect(pilhaSemDuplicatas.removerDuplicatas()).toBe("3, 7, 2, 1, 4");
});

test("Verifica se a pilha possui numero(s) duplicados. Ex: [2, 1, 4, 4] , resultado: [2, 1, 4].", () => {
  pilhaSemDuplicatas.push(2);
  pilhaSemDuplicatas.push(1);
  pilhaSemDuplicatas.push(4);
  pilhaSemDuplicatas.push(4);

  expect(pilhaSemDuplicatas.removerDuplicatas()).toBe("2, 1, 4");
});

import PilhaBinaria from "../src/Q4";

let pilhaBinaria;

beforeEach(() => {
  pilhaBinaria = new PilhaBinaria();
});

test("Se o numero decimal for '39', o retorno devera ser '100111'.", () => {
  expect(pilhaBinaria.decimalToBinario(39)).toBe(100111);
});

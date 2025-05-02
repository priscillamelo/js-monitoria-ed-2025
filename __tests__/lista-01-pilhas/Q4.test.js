import PilhaBinaria from "../../src/lista-01-pilhas/Q4";

let pilhaBinaria;

beforeEach(() => {
  pilhaBinaria = new PilhaBinaria();
});

test("Se o numero decimal for '0', o retorno devera ser '0'.", () => {
  expect(pilhaBinaria.decimalToBinario(0)).toBe("0");
});

test("Se o numero decimal for '1', o retorno devera ser '1'.", () => {
  expect(pilhaBinaria.decimalToBinario(1)).toBe("1");
});

test("Se o numero decimal for '10', o retorno devera ser '1010'.", () => {
  expect(pilhaBinaria.decimalToBinario(10)).toBe("1010");
});

test("Se o numero decimal for '39', o retorno devera ser '100111'.", () => {
  expect(pilhaBinaria.decimalToBinario(39)).toBe("100111");
});

test("Se o numero decimal for '25', o retorno devera ser '11001'.", () => {
  expect(pilhaBinaria.decimalToBinario(25)).toBe("11001");
});

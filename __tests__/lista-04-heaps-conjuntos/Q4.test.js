import MegaSena from "../../src/lista-04-heaps-conjuntos/Q4";

let megasena;
const numerosSorteados = [5, 12, 23, 34, 45, 56];

beforeEach(() => {
  megasena = new MegaSena();
});

test("não deve haver ganhador.", () => {
  const apostas = [[1, 2, 3, 4, 6, 7]];
  const resultado = megasena.verificarGanhadores(numerosSorteados, apostas);

  expect(resultado.length).toBe(0);
});

test("deve identificar um vencedor da sena", () => {
  const apostas = [[5, 12, 23, 34, 45, 56]];
  const resultado = megasena.verificarGanhadores(numerosSorteados, apostas);

  expect(resultado.length).toBe(1);
  expect(resultado[0]).toEqual({
    apostador: 1,
    acertos: 6,
    premio: "Sena"
  })});

  test("deve identificar um vencedor da quina", () => {
    const apostas = [[5, 12, 23, 34, 45, 60]];
    const resultado = megasena.verificarGanhadores(numerosSorteados, apostas);

    expect(resultado.length).toBe(1);
    expect(resultado[0]).toEqual({
      apostador: 1,
      acertos: 5,
      premio: "Quina"
    });
  });

  test("vários apostadores com resultados mistos", () => {
    const apostas = [
      [5, 12, 23, 34, 45, 56], // Sena
      [5, 12, 23, 34, 45, 60], // Quina
      [1, 2, 3, 4, 5, 6]       // Sem prêmio
    ];
    const resultado = megasena.verificarGanhadores(numerosSorteados, apostas);

    expect(resultado.length).toBe(2);
    expect(resultado).toEqual([
      { apostador: 1, acertos: 6, premio: "Sena" },
      { apostador: 2, acertos: 5, premio: "Quina" }
    ]);
  });

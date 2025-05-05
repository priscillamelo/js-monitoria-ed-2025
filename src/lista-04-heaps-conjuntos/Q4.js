import Conjunto from "../Conjunto.js";

class MegaSena {
  constructor() {
    this.numerosSorteados = new Conjunto();
  }

  verificarGanhadores(numerosMegasena, matrizApostas) {
    let resultado = [];

    // Adiciona os números sorteados ao conjunto
    for (let numero of numerosMegasena) {
      this.numerosSorteados.add(numero);
    }

    // Verifica cada aposta
    for (let i = 0; i < matrizApostas.length; i++) {
      const apostaAtual = new Conjunto();

      for (let numero of matrizApostas[i]) {
        apostaAtual.add(numero);
      }

      const intersecao = this.numerosSorteados.intersection(apostaAtual);
      const acertos = intersecao.length();

      if (acertos === 6) {
        resultado.push({ apostador: i + 1, acertos, premio: "Sena" });
      } else if (acertos === 5) {
        resultado.push({ apostador: i + 1, acertos, premio: "Quina" });
      }
    }

    this.numerosSorteados.clear();
    return resultado;
  }
}

export default MegaSena;

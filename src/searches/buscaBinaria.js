function buscaBinaria(chave, dados) {
    let esquerda = 0;
    let direita = dados.length - 1;

    while (esquerda <= direita) {
        let meio = Math.floor((esquerda + direita) / 2);

        if (dados[meio] === chave) {
            return meio; // Valor encontrado
        } else if (dados[meio] < chave) {
            esquerda = meio + 1;
        } else {
            direita = meio - 1;
        }
    }

    return -1; // Valor não encontrado
}

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const valor = 8;
const resultado = buscaBinaria(valor, array);

if (resultado !== -1) {
    console.log(`Valor ${valor} encontrado na posição ${resultado}.`);
} else {
    console.log(`Valor ${valor} não encontrado no vetor.`);
}
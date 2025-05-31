function buscaSequencial (dados, chave) {
    for (var i = 0; i < dados.length; i ++){
        if (dados[i] === chave) return i;
    }
    return -1;
}

const array = [5, 4, 8, 1, 2, 6, 7, 3];
const valorProcurado = 6;
const resultado = buscaSequencial(array, valorProcurado);

if (resultado !== -1) {
    console.log(`Valor ${valorProcurado} encontrado na posição ${resultado}.`);
} else {
    console.log(`Valor ${valorProcurado} não encontrado no vetor.`);
}
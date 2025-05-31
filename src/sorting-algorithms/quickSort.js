function quickSort(array, inicio, fim) {
    // Verifica se ainda há elementos para ordenar
    if (inicio < fim) {
        // Particiona o array e obtém a posição correta do pivô
        let posicaoPivo = particionar(array, inicio, fim);

        // Ordena o lado esquerdo do pivô
        quickSort(array, inicio, posicaoPivo - 1);

        // Ordena o lado direito do pivô
        quickSort(array, posicaoPivo + 1, fim);
    }

    return array;
}

function particionar(array, inicio, fim) {
    // Define o pivô como o último elemento
    let pivo = array[fim];
    let i = inicio - 1;

    // Percorre todos os elementos até antes do pivô
    for (let j = inicio; j < fim; j++) {
        if (array[j] <= pivo) {
            i++;
            // Troca elementos menores ou iguais ao pivô para a esquerda
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Coloca o pivô na posição correta (entre os menores e maiores)
    [array[i + 1], array[fim]] = [array[fim], array[i + 1]];

    // Retorna a posição do pivô
    return i + 1;
}

const array = [5, 4, 8, 1, 2, 6, 7, 3];
console.log(array);
quickSort(array, 0, array.length - 1);
console.log(array);
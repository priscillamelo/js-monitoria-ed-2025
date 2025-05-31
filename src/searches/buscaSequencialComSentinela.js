function buscaSequencialComSentinela (chave, dados) {
    let tam = dados.length; // 5
    dados[tam] = chave; // [7, 3, 9, 5, 2, chave] -> chave === 5
    let i = 0;
    
    while (chave !== dados[i]) {
        i++;
    } // i === 3

    // 6 -> 5
    dados.length = tam; // Redefine o tamanho do array, removendo a sentinela
    
    // 3 (i) !== 5(tam) -> 3(i)
    if (i != tam) return i;
    
    return -1;
}

/*  let tam = dados.length; // 5
 dados[tam] = chave; // [7, 3, 9, 5, 2, chave] -> chave === 10
 let i = 0;
 
 while (chave !== dados[i]) {
     i++;
 } // i === 5

 // 6 -> 5
 dados.length = tam; // Redefine o tamanho do array, removendo a sentinela
 
 // 5 (i) !== 5(tam) -> -1 - condição não satisfeita
 if (i != tam) return i;
 
 return -1; */

const lista = [7, 3, 9, 5, 2];
const resultado = buscaSequencialComSentinela(5, lista);

if (resultado !== -1) {
    console.log("Valor encontrado na posição", resultado);
} else {
    console.log("Valor não encontrado.");
}

function mergesort(vetor) {
	if (vetor.length === 1) {
		return vetor;
	}

	const mid = Math.floor(vetor.length / 2);
	const esquerda = vetor.slice(0, mid);
	const direita = vetor.slice(mid, vetor.length);

	return merge(mergesort(esquerda), mergesort(direita));
}

function merge(esquerda, direita) {
	let result = [];
	let i = 0;
	let j = 0;

	while (i < esquerda.length && j < direita.length) {
		if (esquerda[i] < direita[j]) {
			result.push(esquerda[i]);
			i++;
		} else {
			result.push(direita[j]);
			j++;
		}
	}

	while (i < esquerda.length) {
		result.push(esquerda[i]);
		i++;
	}

	while (j < direita.length) {
		result.push(direita[j]);
		j++;
	}

	return result;
}

const array = [5, 4, 8, 1, 2, 6, 7, 3];
console.log(array);
console.log(mergesort(array));
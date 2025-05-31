function bubbleSort(array) {
	for (let i = 0; i < array.length - 1; i++) {
		for (let j = 0; j < array.length - 1 - i; j++) {
			if (array[j] > array[j + 1]) {
				let temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;

                // alternativa sem variável temporária
                // [array[j], array[j + 1]] = [array[j + 1], array[j]];

			}
		}
	}
}

let array = [1, 8, 4, 6, 0, 3, 5, 2, 7, 9];
console.log("Array não ordenado: " + array);
bubbleSort(array);
console.log(`Array ordenado: ${array}`);
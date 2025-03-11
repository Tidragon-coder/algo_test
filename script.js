const numbers = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 10000));
console.log("Non trié :", numbers)



mergeSort(numbers);
a = mergeSort(numbers);
console.log(a);
testSort(mergeSort, numbers);

selectionSort(numbers);
a = selectionSort(numbers);
console.log(a);
testSort(selectionSort, numbers);

insertionSort(numbers);
a = insertionSort(numbers);
console.log(a);
testSort(insertionSort, numbers);

bubbleSort(numbers);
a = bubbleSort(numbers);
console.log(a);
testSort(bubbleSort, numbers);


// pr trier le tableau 
// 1 bubbleSort 2 insertionsort 3 selectionSort 4 mergeSort 5 quicksort 6 bogoSort
// pr calculer le temps d'execution on va utiliser cosole.time() de javascript
// on implémente les diff algorithme et on va comparer leurs temps d'execution

function mergeSort(numbers) {
    if (numbers.length <= 1) {
        return numbers;
    }

    const mid = Math.floor(numbers.length / 2);
    const left = mergeSort(numbers.slice(0, mid));
    const right = mergeSort(numbers.slice(mid));

    return merge(left, right); // Fusionner les parties triées
}
function merge(left, right) {
    let exit = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            exit.push(left[i]);
            i++;
        } else {
            exit.push(right[j]);
            j++;
        }
    }

    return exit.concat(left.slice(i)).concat(right.slice(j));
}




function selectionSort(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let low = i;
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[j] < numbers[low]) {
                low = j;
            }
            if (low !== i) {
                [numbers[i], numbers[low]] = [numbers[low], numbers[i]];
            }
        }
    }
    return numbers;
}



function insertionSort(numbers) {
    for (let i = 1; i < numbers.length; i++) {
        let key = numbers[i];
        let j = i - 1;

        while (j >= 0 && numbers[j] > key) {
            numbers[j + 1] = numbers[j];
            j--;
        }
        numbers[j + 1] = key;
    }
    return numbers;
}




function bubbleSort(numbers) {
    let n = numbers.length;
    for (let i = 0; i < n - 1; i++) {
        for (let k = 0; k < n - i - 1; k++) {
            if (numbers[k] > numbers[k + 1]) {
                [numbers[k], numbers[k + 1]] = [numbers[k + 1], numbers[k]];
            }
        }
    }
    return numbers;
}


function testSort(algorithm, numbers) {
    const numbersCopy = [...numbers];
    console.time(algorithm.name);
    let result = algorithm(numbersCopy);
    //console.log(result)
    console.timeEnd(algorithm.name);
}
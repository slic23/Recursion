function dividir(arr) {
    if (arr.length <= 1) {
        return arr;
    } else {
        let mid = Math.floor(arr.length / 2);
        let leftArray = arr.slice(0, mid);
        let rightArray = arr.slice(mid);

        // Ordenar recursivamente los subarreglos izquierdo y derecho
        let leftSorted = dividir(leftArray);
        let rightSorted = dividir(rightArray);

        // Fusionar y ordenar los subarreglos ordenados
        return merge(leftSorted, rightSorted);
    }
}

// Función para fusionar dos subarreglos ordenados
function merge(leftArr, rightArr) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if (leftArr[leftIndex] < rightArr[rightIndex]) {
            result.push(leftArr[leftIndex]);
            leftIndex++;
        } else {
            result.push(rightArr[rightIndex]);
            rightIndex++;
        }
    }

    // Agregar elementos restantes de los subarreglos
    while (leftIndex < leftArr.length) {
        result.push(leftArr[leftIndex]);
        leftIndex++;
    }
    while (rightIndex < rightArr.length) {
        result.push(rightArr[rightIndex]);
        rightIndex++;
    }

    return result;
}

console.log(dividir([5, 1, 4, 9, 7, 2]));
console.log(dividir([0, 1, 1, 2, 3, 5, 8, 13]));

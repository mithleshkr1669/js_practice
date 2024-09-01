function mergeSortedArrays(array1, array2) {
    const mergedArray = [];
    let i = 0;
    let j = 0;
    [0, 3, 4, 30];[2,5,6];
    // Compare elements from both arrays and add the smaller one to the merged array
    while (i < array1.length && j < array2.length) {
        if (array1[i] < array2[j]) {
            mergedArray.push(array1[i]);
            i++;
        } else {
            mergedArray.push(array2[j]);
            j++;
        }
    }

    // If there are remaining elements in array1, add them to mergedArray
    while (i < array1.length) {
        mergedArray.push(array1[i]);
        i++;
    }

    // If there are remaining elements in array2, add them to mergedArray
    while (j < array2.length) {
        mergedArray.push(array2[j]);
        j++;
    }

    return mergedArray;
}

const array1 = [0, 3, 4, 30];
const array2 = [2,5,6];
const sortedMergedArray = mergeSortedArrays(array1, array2);
console.log(sortedMergedArray);  // Outputs: [0, 3, 4, 4, 6, 30, 31]
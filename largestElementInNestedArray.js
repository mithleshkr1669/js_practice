function findLargestElement(arr) {
    let max=0;

    function findMax(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'object') { // Check if it's an array
                findMax(arr[i]);
            } else {
                if (arr[i] > max) {
                    max = arr[i];
                }
            }
        }
    }

    findMax(arr);
    return max;
}

const nestedArray = [[3, 4, 58], [709, 8, 9, [10, 11]], [111, 2]];
const largestElement = findLargestElement(nestedArray);
console.log("The largest element is:", largestElement);

// reduce method polyfill of sum
Array.prototype.reducer = function (callback, acc) {
    const arr = this;
    console.log(callback)
    
    let totalSum=0
    for (let i = 0; i < arr.length; i++){
        let result = callback(acc, arr[i])
        totalSum+=result
    }
    return totalSum
}


const arr = [1, 2, 3, 4]
const result = arr.reducer(function (acc, item) {
    return acc + item
 },0)

console.log(result)


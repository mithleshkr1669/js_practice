function productOfItems(arr) {
    let j=0
    let newArr=[]
    for (let i = 0; i < arr.length; i++){
        if (arr[i + 1] && arr[i + 2]) {
            let productOfItems = arr[i + 1] * arr[i + 2]
            newArr[j] = productOfItems;
            j++
        } else if (arr[i+1]) {
            let productOfItems = arr[i - 1] * arr[i + 1];
            newArr[j] = productOfItems;
            j++
        } else {
            let productOfItems = arr[i - 1] * arr[i - 2];
            newArr[j]=productOfItems
        }
    }
    console.log(newArr)
}
productOfItems([3, 4, 5,4])
    
    
// [3, 4, 5] -> [20, 15, 12]
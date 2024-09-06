let result = new Promise((resolve, reject) => {
    const arr = [undefined, 2, 3]
   setTimeout(()=>{
        for (let item of arr) {
           let  data = item * item
            if (data) {
            resolve(data)
            } else {
                reject("error in getting data")
        }
            
            
       }
   }, 500)
})


result.then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})


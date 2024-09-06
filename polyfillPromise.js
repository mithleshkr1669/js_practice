function PolyfillPromise(callBack) {
    // This variable will store the resolved or rejected value.
    let value = null;
    // This flag indicates whether the promise has been resolved or rejected.
    let isResolved = false;
    let isRejected = false;

    function resolve(data) {
        value = data;
        isResolved = true;
    }

    function reject(data) {
        value = data;
        isRejected = true;
    }

    this.then = function (callBackResolve) {
        if (isResolved) {
            callBackResolve(value);
        }
        console.log(this)
        return this; // Allow chaining
    }

    this.catch = function (callBackReject) {
        if (isRejected) {
            callBackReject(value);
        }
        return this; // Allow chaining
    }

    callBack(resolve, reject);
}

let promise = new PolyfillPromise((resolve, reject) => {
    let data = false;
    if (data) {
        resolve("data fetched successfully");
    } else {
        reject("error in getting data");
    }
});

promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});

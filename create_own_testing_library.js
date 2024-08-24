let a = 2;
let b = 3;
let sum=a+b
let expected = 5;
let anotherActual = [1, 2, 3, 4]
let anotherExpected= [1,2,3,4]

const assert = {
    equal(actual,expected) {
        if (actual !== expected) {
            throw new Error(`expected ${expected},but got ${actual}`)
        } else {
            console.log("addition working properly")
        }
    }
, // deepEqual is used to check array and nested array or object and nested object equal or not
    deepEqual(anotherActual, anotherExpected) {
        if (JSON.stringify(anotherActual) !== JSON.stringify(anotherExpected)) {
            throw new Error(`expected ${JSON.stringify(anotherExpected)},but got ${JSON.stringify(anotherActual)}`)
        } else {
            console.log("Array includes element")
        }
    }
}

function test() {
    
    assert.equal(sum, expected)
    assert.deepEqual(anotherActual,anotherExpected)
}
test()
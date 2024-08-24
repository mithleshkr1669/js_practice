const toUpperCase = str => str.toUpperCase();
const trim = str => str.trim();
const exclaim = str => str + '!';

function pipe(...args) {
    return function (string) {
        let result;
        args.forEach((fn) => {
            result=fn(string)
        })
        return result
    }
    
}

const processString = pipe(trim, toUpperCase, exclaim);

const result = processString(' HELLO WORLD ')
console.log(result)

// console.log(processString);
 // Output: 'HELLO WORLD!'

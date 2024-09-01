function createNestedObject(path, value) {
    let result = {};          
    let parts = [];            
    let current = result;      

    // Manually splitting the path by '.'
    let tempStr = '';
    for (let i = 0; i < path.length; i++) {
        if (path[i] === '.') {
            parts.push(tempStr);
            tempStr = '';
        } else {
            tempStr += path[i];
        }
    }
    parts.push(tempStr); // Add the last part

    // Constructing the nested object
    for (let i = 0; i < parts.length; i++) {
        if (i === parts.length - 1) {
            current[parts[i]] = value; // Assign the value to the last key
        } else {
            current[parts[i]] = {}; // Create a new level in the object
            current = current[parts[i]]; // Move to the next level
        }
    }
  console.log("current",current)
    return result;
}

const path = 'a.b.c.d';
const value = 'someValue';
const nestedObject = createNestedObject(path, value);
console.log(nestedObject);

// {a: {b: {c: 'someValue'}}}



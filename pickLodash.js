// lodash pick polyfill

function pick(people, array) {
    let result = {}
    for (let i = 0; i < array.length; i++){
        result[array[i]]=people[array[i]]
    }
    console.log(result)
}



const people = {
    id: 1,
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    role: "admin"
};

pick(people,['name','age'])
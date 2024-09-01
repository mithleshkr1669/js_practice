function Person(name, age) {
    this.name = name;
    this.age = age
}
Person.prototype.greet = function () {
    console.log(`I am ${this.name} and age is ${this.age}`)
}
let obj = new Person("sudhir", 22)

obj.greet()
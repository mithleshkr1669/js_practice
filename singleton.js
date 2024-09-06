class Singleton{
    constructor() {
     this.instance="sudhir"
 }
}

let obj = new Singleton()
let obj1 = obj.instance;
let obj2=obj.instance

console.log(obj1===obj2)
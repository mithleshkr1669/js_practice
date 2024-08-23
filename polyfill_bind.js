const name={
    fullName:"sudhir kumar"
}

function printName(...args){
    console.log("print name",this.fullName,...args)
}
function printName1(...args){
    console.log("print name",this.fullName,...args)
}
Function.prototype.myBind = function(name,...args) {
    // console.log("scope",scope)
    console.log(...args)
    name.name= this; 
    return function(){
         name.name(...args)
    }  
};


const printFunction=printName.myBind(name,"banglore","india")
printFunction()

const printFunction1=printName1.myBind(name,"new delhi","india")

printFunction1()
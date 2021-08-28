//Here i try to understand that js is a first class language 
//1.Can store in a variable -passed

function sayName(name){
  return "Hello" +'  '+ name
}

var hello = sayName;
var anotherhello = hello
var result = anotherhello("abid")
console.log(result)

//3.can be stored in array -passed
var arr=[1,2,3]
arr.push(sayName)
console.log(arr)
//4.Can be stored in object -passed
var person = {
  Name :"abid",
  sayName:sayName
}

console.log(person)
//4.create function when need -passed

var result = 10 +(function(){
  return 20
})()
console.log(result)

//pass function as an argument passed
function wow(name,fan){
  return fan(name)
}

var result = wow("abid",sayName)
console.log(result)

//return function from another function

function base(b){
  return function(n){
    var res = 1;
    for(var i = 0;i<b ;i++){
      res *= n
    }
    return res
  }
}

var power = base(3)(5)
console.log(power)


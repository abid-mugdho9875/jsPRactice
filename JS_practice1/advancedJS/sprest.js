function sum(name, ...args) {
    let sum = 0;
    for (var i in args) {
        sum += args[i]
    }
    console.log(sum)
}

let arr = [10, 20, 30, 20]
sum('hi', ...arr)

arr1 = [10, 20, 30, 40]
let arr2 = [...arr1]
arr1.push(50)
console.log(arr2)
console.log(arr1)

let arr3 = [...arr1, ...arr2]
console.log(arr3)

var a = {
    name: 'afia',

}
var b = {

    age: '22',
    education: 'DVM'
}

var c = {
    ...a,
    ...b
}
console.log(c)
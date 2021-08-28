// // // var arr = [1,23,52,12,3,121,76,22,12,343,3]
// // // arr.sort(function(a,b){
// // //     return a-b;
// // // })
// // // console.log(arr)

// // people = [
// //     {name:"afia ",age:33},
// //     {name:"abid",age:22},
// //     {name:"khatun",age:26},
// //     {name:"hasan",age:35},
// //     {name:"munni",age:28},
// //     {name:"mukdho",age:29}
// // ]

// // people.sort(function(a,b){
// //     if(a.name>b.name){
// //         return 1;
// //     }
// //     else if(a.name < b.name){
// //         return -1;
// //     }
// //     else{
// //          return 0;
// //     }
// // })
// // console.log(people)
// var arr = [5, 9, 1, 2, 3, 4, 5];

// // arr.forEach(function(element, index, arr){
// //     console.log('Element is = ' + element + ' Index = ' + index + ' arr = ' + arr);
// // });

// function loop(arr, callback) {
//     for (var i=0; i<arr.length; i++) {
//        callback(arr[i], i)
//        console.log(arr);
//     }
// }

// loop(arr, function(element, i) {
//     console.log('Element is ' + element + ' index = ' + i);
// });

 var arr= [1,5,6,2,9,7]
// var newArr = arr.filter(function(value){
//     return value%2 === 0;
// })
// console.log(newArr)



function loop(arr,callback){
    var newArr = []
    for(var i = 0;i < arr.length; i++){
        if(callback(arr[i])){
            newArr.push(arr[i])
        };
    }

    return newArr;
}
function callback(value){
   return value % 2 == 1;
}

var result = loop(arr,callback)

console.log(result)

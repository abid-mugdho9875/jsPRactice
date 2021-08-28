// function map(f,a){
//     let result = []
//     var i;
//     for(i= 0;i<a.length;i++){
//          result[i] = f(a[i])
       
//     }

//     return result
// }
// let f = function (x){
//     return x*x
// }
// a=[1,2,3,4,5,6]



// let square = map(f,a)
// console.log(square)
function name(first_name,last_name,gender){
    if(gender==='male'){
        return 'Mr' + ' ' + first_name +' '+last_name
    }
    else if (gender === 'female') {
        return 'Mrs' +' '+ first_name + ' '+ last_name
        
    } 
}

let full_name  = name('Afia','Khatun','female')
let full_name2 = name('Abid','Hasan','male')
console.log(full_name)
console.log(full_name2)
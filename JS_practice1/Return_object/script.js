// function example(name,age){
//     return{
//         Name:name,
//         Age:age,
//         print:function (){
//             console.log("hi")
//         }
//     }
// }

// var obj = example('abid','22')
// obj.print()

//I want to see something like myCar.name = Ford;
//myCar.model = mustang,myCar.year = 1969
var myCar = {
    name:'Ford',
    model:'mustang',
    year:1969

}

function showProps(obj,objName){
    let result = ''
    for (var i in obj){
        //hasOwnProperty used to filter out the propertise from object
        if(obj.hasOwnProperty(i)){
            result += `${objName}.${i} = ${obj[i]} `+' '
        }
        
    }
    return result

}

let show = showProps(myCar,'myCar')
//console.log(show)
function caller(){
    return function call(name){
        console.log('hi'+name)
    }
}

let x = caller()
let y = x('abid')


function returnObject(name,age){
    let nam = 'machineName'
    return{
        ['abid' + nam]:name,
        age(){
            console.log(age)
        },
        age

    };
}

console.log(returnObject('abid','22'))



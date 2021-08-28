var person1 = {
    name:'Afia Khatun',
    age:'22',
    email:'afiakhatunmunni@gmail.com'
}
var persdon2 = {
    name:'Abid Hasan',
    age:'22',
    email:'abidhasanmukdho@gmail.com'
}

function PrintProfile(person,print){
    print(person)
}

PrintProfile(person1,function(person1){
    console.log('Name:'+person1.name)
    console.log('Age:'+person1.name)
    console.log('Email:' + person1.email)
   
})
PrintProfile(persdon2,function(person2){
    console.log('Name:'+person2.name)
    console.log('Age:'+person2.name)
    console.log('Email:' + person2.email)
    
})
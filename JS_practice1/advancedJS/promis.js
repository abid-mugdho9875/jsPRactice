let takeOrder = (customer,callback) => {
    console.log(`Taking  order from ${customer} one`)
    callback (customer)
    
}
let processorder = (customer,callback) => {
    console.log(`Processing  order from ${customer} one`)
    let currenttime = new Date().getTime()
    //while (currenttime + 300 >= new Date().getTime());
     setTimeout(() => {
         console.log('cooked')
         callback(customer)
     },3000)
     

}
let completeOrder = (customer) => {
    console.log(`Completing  order from ${customer} one`)
}
takeOrder('customer 1',(customer)=>{
    processorder(customer,(customer) => {
        completeOrder(customer)
    })
})

console.log('hi')


function sum(name,...args){
    let sum = 0
    for(let v in args){
       sum += args[v];
    }
    console.log(sum  )
}
let arr = [10,20,30,40]
sum("ABid Hasan Mukdho",...arr)
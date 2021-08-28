function outer(a,b,c){
    function add(){
        return a+b+c
    }
    function sub(){
        return a-b-c
    }
   
  var hi =  add() 
  var zi = sub()
  return zi
  return hi
  
    
}

console.log(outer(10,20,30))
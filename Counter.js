//This program will check if the array 2 has all the elements twice f array one or not and returns true/false
var c=[3,7, 5,11, 2];
var d=[14, 6, 5, 22, 10];

function Counter(a,b){
  for (var i of a){
    if(b.includes(i*i)){
      console.log("Yes "+i)
    }else{
      return false
    }
  }
  return true
}
console.log(Counter(c,d))
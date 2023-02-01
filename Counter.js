//This program will check if the array 2 has all the elements twice f array one or not and returns true/false
var c=[1,2,3,2];
var d=[9,1,4,4];

function Counter(a,b){
    if(a.length!=b.length){
        return false
    }
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

//Complexity is O(n^2)

// var mid=Math.round(a.length/2)
// var temp=mid;
// while(mid>1){
//   mid=Math.round(mid/2)
//   if(a[temp]<num){
//     temp=temp+mid;
//     if(a[temp]==num)
//     console.log("Element "+num+" is at "+(temp))
//   }
//   if(a[temp]>num){
//     temp=temp-mid;
//     if(a[temp]==num)
//     console.log("Element "+num+" is at "+(temp))
//   }
// }

var a=[1,2,3,5,6,8,9,12,15,16,29,32,35]
 //number to be searched;
//console.log(Math.floor(17/2))
function findNum(a, num){
    //finding a mid value
    var mid=Math.round((a.length+1)/2)
    var temp=mid; //assigning the value
    if(num==a[a.length-1])  //to check if the item is at end
    return ("Element "+num+" is at "+a[a.length-1])
    while(mid>1){ 
        if(a[temp]==num) 
        return ("Element "+num+" is at "+(temp))
        if(a[temp]<num){ //For values at right side
            mid=Math.round(mid/2)
            temp=temp+mid;
            if(a[temp]==num)
            return ("Element "+num+" is at "+(temp))
        }
        if(a[temp]>num){ //For values at left side
            mid=Math.round(mid/2)
            temp=temp-mid;
            if(a[temp]==num)
            return ("Element "+num+" is at "+(temp))
        }
    }
    return -1;  //Item not found
}
console.log(findNum(a,7)) //Checking a condition where item is absent
for(var i of a){
  console.log(findNum(a,i)) //Checking all items
}

//Here time complexity will be O(log n) because it keeps getting divided by 2. 
// var a=[1,2,8,3,4];
// function max2(a,n){
//     var max=0;
//     for(var i=0;i<a.length;i++){
//         var temp=0;
//         for(var j=i;j<i+2;j++){
//             temp=temp+a[j]
//         }
//         if(temp>max)
//         max=temp;
//     }
//     return max;
// }
// console.log((max2(a,2)))

var a=[1,5,2,4,3]
function check(a,b){
    var temp=0;
    var max=0;
    for(var i=0;i<b;i++){
        temp=temp+a[i];
        //console.log(temp)
    }
    for(var j=b;j<a.length;j++){
        temp=temp+a[j]-a[j-b];
        if(max<=temp)
        max=temp
    }
    return max;
}
console.log(check(a,3))
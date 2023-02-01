// // var a="{(][)}";
// // var count1=0;
// // var count2=0;
// // var count3=0;
// // for (var i=0;i<a.length;i++){
// //     if(a[i]=="("){
// //         count1=count1+1
// //     }
// //     if(a[i]==")"){
// //         count1=count1-1
// //     }
// //     if(a[i]=="{"){
// //         count2++
// //     }
// //     if(a[i]=="}"){
// //         count2--
// //     }
// //     if(a[i]=="["){
// //         count3++
// //     }
// //     if(a[i]=="]"){
// //         count3--
// //     }
// // }
// // if(count1==0&&count2==0){
// //     console.log("True")
// // }else{
// //     console.log("False")
// // }
// // var a="(()"
// // for (var i=0;i<a.length;i++){
// //     if(a[i]=="("){
// //         for(var j=i+1;j<a.length;j++){
// //             if(a[j]==")"){
// //                 console.log(a[i],a[j],i,j)
                
// //             }
// //         }
// //     }
// // }
// // console.log(a)
// // if(str[i]=="{"){
// //     for(var j=i+1;j<=str.length;j++){
// //         if(str[j]=="}"){
// //             str=str.replace("}","")
// //             str=str.replace("{","l")
// //         }
// //     }
// // }
// // if(str[i]=="["){
// //     for(var j=i+1;j<=str.length;j++){
// //         if(str[j]=="]"){
// //             str=str.replace("]","")
// //             str=str.replace("[","l")
// //         }
// //     }
// // }
// // }
// // console.log(str)
// var str='{[(])}'
// function check(str){
//     for(var i=0;i<=str.length;i++){
//         if(str[i]=="("){
//             for(var j=i+1;j<=str.length;j++){
//                 if(str[j]==")"){
//                     str=str.replace(")","")
//                     str=str.replace("(","l")
//                 }
//             }
//         }
//     } 
//     for(var i=0;i<=str.length;i++){
//         if(str[i]=="["){
//             for(var j=i+1;j<=str.length;j++){
//                 if(str[j]=="]"){
//                     str=str.replace("[","")
//                     str=str.replace("]","l")
//                 }
//             }
//         }
//     } 
//     console.log(str)   
//     for(var i of str){
//         if(i=="("||i==")"||i=="{"||i=="}"||i=="["||i=="]"){
//             return "NAH Won't work"
//         }
//     }
//     return "WOW Works"
// }
// console.log(check(str))

// Function to check if brackets are balanced
function getbrackets(expr){
    function areBracketsBalanced(expr)
    {  
        let stack = [];
        for(let i = 0; i < expr.length; i++)
        {
            let x = expr[i];
      
            if (x == '(' || x == '[' || x == '{')
            {
                stack.push(x);
                continue;
            }
      
            if (stack.length == 0)
                return false;
                  
            let check;
            switch (x){
            case ')':
                check = stack.pop();
                if (check == '{' || check == '[')
                    return false;
                break;
      
            case '}':
                check = stack.pop();
                if (check == '(' || check == '[')
                    return false;
                break;
      
            case ']':
                check = stack.pop();
                if (check == '(' || check == '{')
                    return false;
                break;
            }
        }
      
        return (stack.length == 0);
    }
    if (areBracketsBalanced(expr))
    return "YES"
    else
    return "NO"

}
  
    
let expr = "{[([])]}";
console.log(getbrackets(expr))
  

  

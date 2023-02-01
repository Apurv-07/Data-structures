var b=[1,2,[5,7,[1,2],5,[9]],[4,9]]
function findSum(a){
    var sum=0;
    function checkloop(loop){
        for(var i of loop){
            if(typeof(i)=='object'){
                checkloop(i)
            }else{
                sum=sum+i;
            }
        }
    }
    for(var i of a){
        if(typeof(i)=='object'){
            checkloop(i)
        }else{
            sum=sum+i
        }
    }
    return sum;
}
console.log(findSum(b))
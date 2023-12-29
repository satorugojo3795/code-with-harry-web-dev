let arr = [1,2,3,4,5];
const fact = arr.reduce((acc,el)=>{
    return acc*el;
},1);

console.log(fact);
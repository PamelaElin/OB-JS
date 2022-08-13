const Fibonacci=(limit)=>{
    const num=[1,1]
for (let i = 2; i <limit; i++) {
 num[i]=num[i-1]+num[i-2];
    
}
return num;
}
const array=Fibonacci(6);
console.log(array)

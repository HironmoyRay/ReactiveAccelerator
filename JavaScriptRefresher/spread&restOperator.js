function sum(...rest){
    const result = rest.reduce((total,cur)=>{
        return total+cur;
    }, 0)
    return result;
}

 console.log(sum(1,2,4))
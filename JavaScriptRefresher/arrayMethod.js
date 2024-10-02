function findFruits(){
    const fruits = ["apple","banana","guava","lemon"];
    const result = fruits.find((f)=>f=="guava");
    console.log(result);
    console.log(fruits);
}

function filterFruits(){
    const fruits = ["apple","banana","guava","lemon"];
    const result = fruits.filter((f)=>f=="guava");
    console.log(result);
    console.log(fruits);
}
// filterFruits();

function sliceFruits(){
    const fruits = ["apple","banana","guava","lemon"];
    const result = fruits.slice(1,3);
    console.log(result);
    console.log(fruits);
}
// sliceFruits()

function spliceFruits(){
    const fruits = ["apple","banana","guava","lemon"];
    const result = fruits.splice(1,2,"Pine-apple","Fruit1");
    console.log(result);
    console.log(fruits);
}

// spliceFruits()

function mapFruits(){
    const fruits = ["apple","banana","guava","lemon"];
    const result = fruits.map((f)=>{
        return f+="-fruit"
    })
    console.log(result);
    console.log(fruits);
}
// mapFruits()

function reduceNums(){
    const nums = [10,20,30,40,50];
    const result = nums.reduce((total,val)=>total+val, -50);
    
    console.log(result);
    console.log(nums);
    
}

// reduceNums()

function forEachNums(){
    const nums = [10,20,30,40,50];
    const result = nums.forEach(n=>n*2)
    

    console.log(result);
    console.log(nums);
}

forEachNums();
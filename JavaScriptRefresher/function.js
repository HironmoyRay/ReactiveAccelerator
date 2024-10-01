// 1. Regular Function

// 2. function Expression 
const printHello = function(){
    console.log("HELLO");
}
printHello()
console.log(printHello);


// 2.1 named Function Expression 
const display = function hello(){
    console.log("Display Hello");
}

console.log(display);
display()

// 3. Arrow function 
const arrowFunc = () =>{
    console.log("This is from Arrow Function");
}

console.log(arrowFunc);
arrowFunc();

// 4. Anonymous Function 
const country = ()=>{
    return ()=>{
        console.log("Bangladesh");
    }
}

const countryName = country();
countryName();
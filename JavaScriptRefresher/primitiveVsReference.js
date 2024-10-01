// Primitive -> Immutable -> Value can't change in if Memory is already allocated 
let a = 10; // a get a memory location & store value 10; 
let b = 20;
a = b; // a get another memory location & store value 20;
console.log(a);
console.log(b);

b = 30;
console.log(a);
console.log(b);


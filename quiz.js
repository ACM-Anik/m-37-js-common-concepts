// what would be the output?

let p='Javascript'; 
let q = p; 
p ='React'; 
console.log(q); 



// What will be the output (be careful. And think about it)? 

const isTrue ='false'; 
if(!isTrue){
console.log('hello');
} else {
console.log('world'); 
}

// Which one will check whether the value and the type are the same for strict equality comparison?
//ans: ===


// What will be the value of the result? 

function sum(p, q) {
 p + q;
}
const result = sum(2, 3);
console.log(result);

// Ans: undefined



// What would be the output from the code below?

if ("2" === 2) {
 console.log("Inside if");
} else {
 console.log("Inside else");
}



// What would be the output from the function below? 

function work(x, y = 4) {
 return x + y;
}
// console.log(work(32);
// Ans: SyntaxError 
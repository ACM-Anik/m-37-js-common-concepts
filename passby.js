// Primitive types are pass by value;

let num1 = 5;
let num2 = 7;

function multiply(a, b){
    a= 27;
    const result = a * b;
    return result;
}
console.log(num1);
const output = multiply(num1, num2);
console.log(output);
console.log(num1);



// Non-Primitive: 
// Object and Array are Pass by reference

let student1 = {name: 'Jalil', partner: 'borsha'};
let student2 = {name: 'raj', partner: 'rani'};

function makeMovie(couple1, couple2){
    couple1.name = 'Ananto';
    couple2.partner = 'mimi';
}

console.log(student1, student2);
makeMovie(student1, student2);
console.log(student1, student2);
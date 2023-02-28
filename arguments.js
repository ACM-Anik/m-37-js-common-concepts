function sum(a, b, c){ //parameters
    // console.log(arguments);
    const args = [...arguments];
    // console.log(args);
    const result = a + b + c;
    return result;
}
// console.log(arguments); bahire kaj kore na
const total = sum(34, 56, 67, 70, 40);//--> arguments
console.log(total); 
console.log(sum.length); //Kototi parameter declare korechi ta

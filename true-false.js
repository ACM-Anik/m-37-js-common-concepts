/*
Truthy:
1. true
2. any number (+ve, -ve) will be truthy other than 0
3. any string other then empty string
3.5 '0' 'false' are truthy
4. {}, {a:3, b: 4} are truthy
5.[], [a, b, c]

Falsy:
1. false;
2. 0
3. ''empty string
4. undefined
5. null
*/


// const x = false;
// const x = 0;
// const x = 's';
// const x = '';
// const x = ' ';
// const x = undefined;
// const x = '0';
// const x = {a: 3, b: 4};
// const x = {}:

if(x ){
    console.log('Value of x is truthy');
}
else{
    console.log('Value of x is falsy');
}



// Optional
// check falsy
const y = '';
if(!y){
   console.log('value is falsy');
}


const z = " ";
// check truthy
if(!!z){
    console.log('value is truthy');
}
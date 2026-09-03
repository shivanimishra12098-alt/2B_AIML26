/* 1. Arrow function with no parameters
const greet = () => {
    console.log("Hello!");
};

greet();


// 2. Arrow function with one parameter
const square = (num) => {
    return num * num;
};

console.log("Square:", square(5));


// 3. Arrow function with multiple parameters
const add = (a, b) => {
    return a + b;
};

console.log("Addition:", add(10, 20));*/
let n=4;
for(let i=1;i<=n;i++){
    let str=""; 
    
    for(let j=1;j<=i;j++){
        str+="*";
    }
    console.log(str);   
}





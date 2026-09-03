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
const addNumbers = (...numbers) => {
    console.log(numbers);
};

addNumbers(10, 20, 30, 40);
addNumbers("shivi", 10, 20, 30, 40);
const sum = (...numbers) => {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
};
console.log(sum(10, 20, 30, 40));
const student = (name, ...numbers) => {
    let total = 0;

    for (let num of numbers) {
        total += num;
    }

    console.log("Name:", name);
    console.log("Total:", total);
};

student("Shivani", 10, 20, 30);




let arr = [10, 20, 30, 40, 50];

console.log("Original Array:", arr);

arr.splice(2, 0, 25);
console.log("After Insertion:", arr);

arr.splice(3, 1);
console.log("After Deletion:", arr);



arr.splice(1, 1, 15);
console.log("After Replacement:", arr);
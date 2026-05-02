const myArray:number[]=[1,2,3,4,5];

myArray.push(11);
myArray.push(10);

console.log(myArray);

for (const myNumber of myArray){
    console.log(myNumber + 10);
}
//Q1

let x = 123;
let y = 7;
console.log(x + y);
//Q2
function checkValue(value) {
    if (value) {
        return "Valid";
    } else {
        return "Invalid";
    }
}
console.log(checkValue(0));
//Q3
for (let num = 0; num <= 10; num++) {
    if (num % 2 !== 0)
        console.log(num)

}


//Q4
const input = [1, 2, 3, 4, 5];
const output = input.filter(number => number % 2 === 0);
console.log(output);
//Q5

const arry1 = [1, 2, 3];
const arry2 = [4, 5, 6];
const mareg = [...arry1, ...arry2]
console.log(mareg);
//Q6
let day = 2;
switch (day) {
    case 1:
        console.log("sunday");
        break;
    case 2:
        console.log("monday")
        break;
    case 3:
        console.log("thusday")
        break;
    case 3:
        console.log("thusday")
        break;
    case 4:
        console.log("wensday")
        break;
    case 5:
        console.log("thrusday")
        break;
    case 6:
        console.log("friday")
        break;
    case 6:
        console.log("friday")
        break;
    case 7:
        console.log("saturday")
        break;
}
//Q7
const lengths = ["a", "ab", "abc"].map(str => str.length);
console.log(lengths);
//Q8
let number;
function checkValue(number) {
    if (number % 3 == 0 && number % 5 == 0) {
        return "Divisible by both";
    }
}
console.log(checkValue(15));

//Q9
const square = (num) => num * num;
console.log(square(5));

//Q10
const person = { name: 'John', age: 25 };
function formatPerson(obj) {
    const { name, age } = obj;
    return name + " is " + age + " years old";
}
console.log(formatPerson(person)); 
//Q11
function Sum(x,y,z,u,e){
let sum=x+y+z+u+e;
return sum;
}
console.log(Sum(1,2,3,4,5));
//Q12
function delayedSuccess() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Success");
        }, 3000);
    });
}
delayedSuccess().then((message) => {
    console.log(message); 
});
//Q13
function Largest(arry) {
    let maxValue = arry[0]; 
    for (let i = 1; i < arry.length; i++) {
        if (arry[i] > maxValue) {
            maxValue = arry[i]; 
        }
    }
    return maxValue;
}
console.log(Largest([1, 3, 7, 2, 4])); 
//Q14
function John(){
    let nemo={
        name:"John",
        age:"30",
    };
    return Object.keys(nemo)
}
console.log(John());
//Q15
let inpu = "The quick brown fox";
function splitWords(spl) {
    return spl.split(" ");
}
console.log(splitWords(inpu)); 
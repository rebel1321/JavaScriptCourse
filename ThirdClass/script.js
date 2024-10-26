//Loops
// let i;
for(let i=0;i<5;i++){
    if(i%2==0){
        console.log("Even Value is ",i);
    }else{
        console.log("Odd value is ",i)
    }
}

//Infinite loop
// for(let j=1;j>=1;j++){
//     console.log(j);
// }Never use this in your code

// While loop
let i=1;
while(i<6){
    console.log("Satyam");
    i++;
}

// do-while loop
let j=20;
do{
    console.log("He is learning JavaScript");
    j++;
// }while(j<=5);
}while(j<=25);
// for-of-loop used for string and arrays
let str ="Surya";
let size=0;
for(let i of str){
    console.log("i = " ,i);
    size++;
}
console.log("String size = ",size);

// for-in loop return keys of an object

let student = {
    name:"Satyam Tripathi",
    age:20,
    cgpa:8.3,
    isPass:true
};
for(let key in student){
    console.log("key=",key,"& value=",student[key]);
}


// Game of guessing number

// let gameNum=25;
// let userNum =prompt("Guess the game number : ");
// while(userNum != gameNum){
//     userNum=prompt("You entered wrong number.Guess again: ");
// }
// console.log("Congratulations, you guessed it correct");

// Sting in js

let str1="Satyam";
let str2='Sobhit   ';
console.log(str1.length);
console.log(str2[0],str1[3]);


let obj = {
    item:"pen",
    price:10
};
console .log("the cost of this", obj.item, "is" , obj.price, "rupees");
// template literals
let output = `The cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

let sentence =`This is a template literal`

// Escape character
console.log(`temple \nrun`);
console.log((`temple\trun`).length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str2.trim());
console.log(str1.concat(str));
console.log(str1.slice(1,3));
console.log(str1.charAt(1));
console.log(str1.replace("a","o"));

//String are immutable that means no change


// Practice Question
let fullName = prompt("Enter your fullname without any spaces");

let userName = "@" + fullName + fullName.length; 
console.log(userName);



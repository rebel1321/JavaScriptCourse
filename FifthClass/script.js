// Function
console.log("abc".toUpperCase());

function myFunction() {
  console.log("Welcome to my era");
  console.log("I am learning java script");
}
myFunction();

// No overloading allowed in JS
function myFunction1(msg) {
  console.log(msg);
}
myFunction1("Welcome back");

// sum
function sum(x, y) {
  console.log(x + y);
}
sum(445, 663);

// multiplication
function multiplication(x, y) {
  console.log(x * y);
}
multiplication(445, 663);

// Arrow function is a compact way of writing a function
const arrowSubtraction = (a, b) => {
  console.log(a - b);
};
arrowSubtraction(9, 4);

// Let's practice
function countVowels(str) {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  console.log(count);
}
countVowels("Satyam");

const countVow = (str) => {
    let count = 0;
    for (const char of str) {
      if (
        char === "a" ||
        char === "e" ||
        char === "i" ||
        char === "o" ||
        char === "u"
      ) {
        count++;
      }
    }
    console.log(count);
  }
  countVow("aaaeeaaaaaaaaaaaaaaaai");


//   For each loop in arrays arr.forEach(callBackFunction) .This is higher order function
  let vow=["Satyam","Priyanshu","Amit","Naman"];
  vow.forEach(countVow);


  let arr=[3,1,45,6,9];
  arr.forEach(square);

  function square(side){
    console.log(side*side);
  }

//   Map function
  let newArray=arr.map((val)=>{
    return val;
  });
  console.log(newArray);

//   filter
let newArr=arr.filter((even)=>{
    return even%2==0;
});
console.log(newArr);


// Reduce
const output = arr.reduce((res,curr)=>{
    return res+curr;
});
console.log(output);

let marks=[89,46,90,93,91,44];
const mark = marks.filter((gm)=>{
    return gm>90;
});
console.log(mark);


let n=prompt("enter a number : ");
let arra=[];
for(let i=1;i<=n;i++){
    arra[i-1]=i;
}
console.log(arra);

let redSum=arra.reduce((res,curr)=>{
    return res+curr;
})
console.log(redSum);
let redMul=arra.reduce((res,curr)=>{
    return res*curr;
})
console.log(redMul);
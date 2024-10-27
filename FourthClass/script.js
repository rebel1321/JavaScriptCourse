let marks=[94,95,96,98,99];
console.log("Marks of Students in Maths are:",marks);
console.log("Size of Students in Maths are:",marks.length);

let studentName=["Satyam","Priyanshu","Naman","Hiten","Abhinav"];
console.log("Name of students are:",studentName);
console.log(typeof studentName);
console.log(studentName[3]);

// Array are mutable 


// Loop over array
for(let i=0;i<studentName.length;i++){
    console.log(studentName[i]);
}

for(let stud of studentName){
    console.log(stud);
}

// Question
let sum =0;
for(let mark of marks){
    sum+=mark;
}
let n= marks.length;
let avg=sum/n;
console.log(avg);



let i=0;
let prices=[250,645,300,900,50];
for(let price of prices){
    // console.log(`value at index ${i} = ${price}`)
    offer=price/10;
    prices[i]=prices[i]-offer;
    console.log(`value after offer = ${prices[i]}`);
    i++;
}


for(let i=0;i<DataTransferItemList.length;i++){
    let offer=prices[i]/10;
    prices[i]-=offer;
}
console.log(prices);

// Push
prices.push(432);
console.log(prices);


// Pop
let p=prices.pop();
console.log(p);
console.log(prices);

// toString
console.log(prices.toString());


// Concat
console.log(prices.concat([532,753,454]));


// Unshift add at start
prices.unshift(6437);
console.log(prices);

// Sift delete from start
console.log(prices.shift());
console.log(prices);


// Slice return a piece of array from start index to end index provided by user  
console.log(prices.slice(2,5));


// Splice change original array (add,remove ,replace)

// add
prices.splice(2,0,1421);
console.log(prices);
// replace
prices.splice(2,3,101,1044,621);
console.log(prices);

// delete
prices.splice(2,1);
console.log(prices);

// if we pass only startIndex then it will delete from there
prices.splice(2);
console.log(prices);

// Practice
let companies=["Bllomberg","Microsoft","Uber","Google","IBM","Netflix"]

companies.shift();
console.log(companies);

companies.splice(1,1,"Ola");
console.log(companies);

companies.push("Amazon");
console.log(companies);

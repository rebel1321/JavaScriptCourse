// // let div =document.querySelector("div");
// // // console.log(div);

// // // let id=div.setAttribute("id","newBox");
// // // console.log(id);
// // console.log(div.style)
// // div.style.backgroundColor="purple";
// // div.innerText="Hello";

// // Insert element

// let newBTN=document.createElement("button");
// newBTN.innerText="Click me";
// console.log(newBTN);

// let div = document.querySelector("div");
// // div.append(newBTN);
// // div.prepend(newBTN);
// // div.before(newBTN);
// div.after(newBTN);

// // Delete element
// let para =document.querySelector("p");
// para.remove();

let btn=document.createElement("button");
btn.innerText="Click me"
btn.style.color="white";
btn.style.backgroundColor="black";

let body=document.querySelector("body");
body.prepend(btn)

let para=document.querySelector("p");
para.classList.add("newClass");



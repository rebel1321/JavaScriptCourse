// let btn1=document.querySelector("#btn1");
// // btn1.onclick=()=>{
// //     // console.log("btn was clicked");
// // }

// btn1.addEventListener("click",()=>{
//     console.log("button was clicked");
// })
// let div=document.querySelector("div");
// // div.onmouseover=()=>{
// //     console.log("You are inside div");
// // }
// const handler1=()=>{
//     console.log("You are inside div");
// }
// div.addEventListener("mouseover",handler1);
// div.removeEventListener("mouseover",handler1);

let modeBtn=document.querySelector("#mode");
let body=document.querySelector("body");
let currMode = "light";
modeBtn.addEventListener("click",()=>{
    if(currMode==="light"){
        currMode="dark";
        // document.querySelector("body").style.backgroundColor="black";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        currMode="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currMode);
})
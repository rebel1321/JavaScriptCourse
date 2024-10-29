// alert("Hello")
// console.log(window);
// // document.body.querySelector("h1").style.backgroundColor = "red";


// let a=document.getElementById("myId");
// console.dir(a);


// let s=document.getElementsByClassName("myClass");
// console.dir(s);

// // let par =document.getElementsByTagName("p");
// // console.dir(par);

// // QuerySelector

// let firstEl=document.querySelector("p"); //First element
// console.dir(firstEl);

// let allEl = document.querySelectorAll(".myClass") //All element
// console.dir(allEl);

// let t=firstEl.innerText;
// // let t=firstEl.tagName;
// console.log(t);

// let at=document.body.firstChild;
// console.dir(at);

// let a =document.querySelector("h2");
// a.innerText=a.innerText+" from Apna College.";
// console.dir(a);

let divs =document.querySelectorAll(".box");
// divs[0].innerText="new unique Value";
// divs[1].innerText="new fake Value";
// divs[2].innerText="new trustfull Value";

let idx=1;
for(div of divs){
    div.innerText=`new unique value ${idx}`;
    idx++;
}
console.log(divs);
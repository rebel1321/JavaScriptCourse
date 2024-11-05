const URL = "https://catfact.ninja/fact";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");
// const getFacts = async () => {
//   console.log("Getting data .....");
//   let response = await fetch(URL);
//   console.log(response);
//   let data = await response.json();
//   factPara.innerText = data.fact;
//   console.log(data);
// };

function getFacts(){
    fetch(URL)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data);
        factPara.innerText = data.fact;
    })
}
btn.addEventListener("click", getFacts);

// Synchronous coding
// console.log("one");
// console.log("two");
// console.log("three");

// function hello(){
    
// }
// console.log("one");
// console.log("bagh");
// setTimeout(()=>{
//     console.log("hello");
// },2000) // 2000ms=2 sec
// console.log("Milkha");
// console.log("bagh");

// // Callback

// function sum(a,b){
//     console.log(a+b);
// }

// function calculator(a,b,sumCallBack){
//     sumCallBack(a,b);
// }
// calculator(1,3,sum);

// Callback hell
// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("data",dataId);
//         resolve("success");
//         if(getNextData){
//             getNextData();
//         }
//     },2000);
// });
// }

// // Promise chain
// getData(1).then((res)=>{
//     return getData(2);
// }).then((res)=>{
//     return getData(3);
// }).then((res)=>{
//     console.log(res);
// })




// Promises
// const getPromise = ()=>{
//  return new Promise((resolve,reject)=>{
//     console.log("I am promise");
//     // resolve("success");
//     reject("error");
// });
// };

// let promise = getPromise();
// promise.then((res)=>{
//     console.log("promise fulfilled",res);
// })
// promise.catch((err)=>{
//     console.log("rejected",err);
// })

// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             resolve("success");
//             if(getNextData){
//                 getNextData();
//             }
//         },2000);
//     });
        
//     }

function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success");
        },2000);
    });
        
    }
    // async await
    async function getAllData(){
        await getData(1);
        await getData(2);
        await getData(3);
        await getData(4);
    }
    (async function (){
        await getData(1);
        await getData(2);
        await getData(3);
        await getData(4);
    })();


    // Callback hell
    // getData(1, ()=>{
//     getData(2,()=>{
//         getData(3);
//     });
// })




// function asyncFunc(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("some murder mystery");
//             resolve("success"); 
//         },2000);
//     });
// }
// function asyncFunc1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("some murder mystery");
//             resolve("success"); 
//         },4000);
//     });
// }

// console.log("fetching data1.....");
//  asyncFunc().then((res)=>{
//     console.log(res);
//     console.log("fetching data2.....");
//     asyncFunc1().then((res)=>{
//     console.log(res);
//     });
// });

async function hello(){
    console.log("hello");
}

function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("weather data");
            resolve(200);
        },2000);
    })
    
}
async function getWeatherData(){
    await api();
    await api();
    await api();
}
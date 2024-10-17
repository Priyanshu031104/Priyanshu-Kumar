// function aa(){
//     console.log("first");
// }
// aa();

// (function(){
//     console.log("second");
// })();

// ()=> {
//     console.log("third");
// }

// let a=new Function(`console.log("fourth)`);
// a()

// console.log("hello")
// function aa(){
//         console.log("first");
//     }
// setTimeout(aa,4000);
// console.log("World")

// function rollnumber(num) {
//     console.log("Roll number is ",num);
// }
// setTimeout(rollnumber, 3000, 20149389);
// setTimeout(rollnumber, 4000, 20159389);

// function rollnumber(num,delay, nextroll){
//     setTimeout(() => {
//         console.log("Roll Number is", num);
//         if(nextroll) nextroll();
//     }, delay);
// }
// rollnumber(12121, 1000, () => {
//     rollnumber(12321, 2000, () => {
//         rollnumber(12321, 3000, () => {
//             rollnumber(12521, 4000);
//         });
//     });
// });

// const promise=new Promise((resolve, reject) => {
//     console.log("first");
//     resolve("Promise Resolved");
//     reject("Promise Rejected");
// });
// promise.then(() => {
//     console.log("This is my promise");
// }).catch(() => {
//     console.log("This is my error")
// })
/*
let promise1=function getPromise() {
    return new Promise((resolve, reject) => {
        resolve("Promise resolved from function!");
    });
}
promise1.then(result => {
    console.log(result);
});
*/
function getRoll(num, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Roll No is", num);
            resolve("Successfully Done");
        }, delay);
    });
}
getRoll(1, 1000).then(() => {
    getRoll(2, 2000).then(() => {
        getRoll(3, 3000);
    });
});
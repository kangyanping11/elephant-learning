const MyPromise = require('./MyPromise');

// let promise = new MyPromise((resolve, reject) => {
//     // setTimeout(() => {
//     //     resolve('成功')
//     // }, 2000)
//     // reject('失败')
//     resolve('成功')
    
// })

// promise.then(value=> {
//     console.log(value)
// }, reason=> {
//     console.log(reason)
// })



// 一个promise对象重复多次调用then
// promise.then(value => {
//     console.log(1)
//     console.log(value)
// })
// promise.then(value => {
//     console.log(2)
//     console.log(value)
// })
// promise.then(value => {
//     console.log(3)
//     console.log(value)
// })



// promise.then返回一个常量
// promise.then((value)=>{
//     console.log(value);
//     return 100;
// }).then((value)=>{
//     console.log(value)
// })



// promise.then返回一个promise对象
// function other () {
//     return new MyPromise((resolve, reject) => {
//         resolve('other')
//     })
// }

// promise.then((value)=>{
//     console.log(value);
//     return other();
// }).then((value)=>{
//     console.log(value)
// })


// promise对象循环调用
// let p1 = promise.then((value)=>{
//     console.log(value);
//     return p1;
// })
// p1.then((value)=>{
//     console.log(value)
// },reason => console.log(reason.message))

// 捕获执行器当中的错误
// let promise = new MyPromise((resolve, reject)=>{
//     throw new Error('executor error')
//     resolve('成功')
// })
// promise.then((v)=>{console.log(v)},(r)=>{console.log(r.message)})


// 捕获执行then回调时 的错误
// let promise = new MyPromise((resolve, reject)=>{
    
//     resolve('成功')
// })
// promise.then((v)=>{
//     console.log(v);
//     throw new Error('then error')
// },(r)=>{console.log(r.message)})
// .then((v)=>{console.log(v)},(r)=>{console.log(r.message)})


// 失败回调返回普通值
// let promise = new MyPromise((resolve, reject)=>{
    
//         setTimeout(() => {
//         reject('失败')
//     }, 2000)
// })
// promise.then((v)=>{
//     console.log(v);
//     return 10
// },(r)=>{
//     console.log(r)
//     return 100
// })
// .then((v)=>{console.log(v)},(r)=>{console.log(r.message)})

// 参数可选
Promise.then().then().then(value => console.log(value))
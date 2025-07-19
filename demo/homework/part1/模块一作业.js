const fp = require('lodash/fp')
const { Maybe, Container } = require('./support')
/*
简答题
1.谈谈你是如何理解 JS 异步编程的  Eventloop、消息队列都是做什么的，什么是宏任务，什么是微任务？

js是一个单线程的语言, 为了解决长时间等待代码执行问题, js引入了异步编程的概念.   
异步编程就是在等待这件事情完成的时候, 你可以去做其他的事情.   
EventLoop是js的事件循环机制, 它负责监控调用栈和消息队列, 当调用栈为空的时候, 就会从消息队列中取出一个任务执行.   
消息队列就是放那些异步任务的地方, 比如setTimeoutPromise等.  当这些异步API任务完成后, 它们会被放入消息队列中, 等待EventLoop来处理.   
宏任务是指那些在事件循环中被处理的任务, 比如setTimeout、setInterval等.   
微任务是指那些在事件循环中被处理的任务, 比如Promise.then、Promise实例的resolve()等. 
*/


// 代码题
// 2.将下面异步代码使用 Promise 的方式改进
let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('hello');
  }, 10);
});
p1.then(res1=>{
    // return Promise.resolve(res1 + ' lagou');
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(res1 + ' lagou');
        },10)
    })
}).then(res2=>{
    setTimeout(()=>{
        console.log(res2 + ' I love you');
    },10)
})


/*
3.根据数据练习以下四道题
*/

const cars = [
  { name: 'Ferrari FF', horsepower: '660r', dollar_value: 700000, in_stock: true },
  { name: 'Spyker C12 zagato', horsepower: 650, dollar_value: 648000, in_stock: false },
  { name: 'Jaguar XKR-S', horsepower: 550, dollar_value: 132000, in_stock: false },
  { name: 'Audi R8', horsepower: 525, dollar_value: 114200, in_stock: false },
  { name: 'Aston_Martin One-77', horsepower: 750, dollar_value: 1850000, in_stock: true },
  { name: 'Pagani Huayra', horsepower: 700, dollar_value: 1300000, in_stock: false }
]
/*练习1 ： 使用fp.flowRight() 重新实现下面这个函数
*/
const isLastInStock = fp.flowRight(fp.prop('in_stock'), fp.last)
console.log(isLastInStock(cars))

/*练习2：使用fp.flowRight()、fp.prop() 和 fp.first() 获取第一个car的name
*/
const isFirstNAme = fp.flowRight(fp.prop('name'), fp.first)
console.log(isFirstNAme(cars))

/*练习3： 使用帮助函数_average 重构 averageDollarValue, 使用函数组合的方式实现
*/

let _average = function (xs) {
  return fp.reduce(fp.add, 0 ,xs)/xs.length
}

let _dollarValues = function(){
  return fp.map((car)=>car.dollar_value,cars)
  
}

const averageDollarValue = fp.flowRight(_average, _dollarValues)
console.log(averageDollarValue(cars))

/*练习 4: 使用 flowRight 写一个 sanitizenames()函数，返回一个下划线连接的小写字符串,把数组中的 name 转换为这种形式：
例如 sanitizenames(["Hello World"]) => ["Hello World"] 
 */
let _underscore = fp.replace(/\W+/g, '_');

let sanitizenames = fp.map(fp.flowRight(fp.toLower, _underscore, fp.prop('name')))
console.log(sanitizenames(cars))

/*
4.根据数据练习以下四道题
*/
//练习 1: 使用 fp.add (x, y) 和fp.map(f, x）创建一个能让 functor 里的值增加的函数 ex1
let maybe = Maybe.of([5, 6, 1])

let ex1 = () => {
  return maybe.map((values)=>{
    return fp.map(fp.add(2) ,values)
  })
}
console.log(ex1())

// 练习 2: 实现一个函数 ex2, 能够使用 fp.first 获取列表的第一个元素
let xs = Container.of(['do','ray','me','fa','so','la','ti','do'])

// let ex2 = () => {
//   return xs.map((values)=>{
//     return fp.first(values)
//   })
// }

let ex2 = () =>{
  return xs.map(values => fp.first(values))
}
console.log(ex2())

//练习 3: 实现一个函数 ex3, 使用 safeProp 和 fp.first 找到 user 的名字的首字母
let safeProp = fp.curry(function (x, o){
  return Maybe.of(o[x])
})
let user = {id:2 , name:'Albert'}
// let ex3 = ()=>{
//   let maybe1 = safeProp('name', user)
//   return maybe1.map((value)=>{
//     return fp.first(value)
//   })
// }

let ex3 = ()=>{
  return safeProp('name', user).map(value => fp.first(value))
}
console.log(ex3())


// 练习 4: 使用 Maybe 重写 ex4, 不要有 if 语句

let ex4 = (n) => {
  let maybe2 = Maybe.of(n)
  return  maybe2.isNothing() ? null : parseInt(n)
}

console.log(ex4(3))
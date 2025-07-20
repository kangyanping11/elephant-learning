/*
  四、手写实现 MyPromise 源码
  要求：尽可能还原 Promise 中的每一个 API，并通过注释的方式描述思路和原理。
*/

const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class MyPromise {
    // exexutor 是一个执行器，执行器会立即执行
    constructor(executor) {
        try {
            executor(this.resolve, this.reject)
        } catch (e) {
            // 当执行器执行出现错误，则变成失败状态
            this.reject(e)
        }
    }

    // promise状态
    status = PENDING;
    // 成功之后的值
    value = undefined;
    // 失败后的原因
    reason = undefined;
    // 成功回调 , 同一个promise实例的可以多次调用then
    successCallback = [];
    // 失败回调 , 同一个promise实例的可以多次调用then
    failCallback = [];

    resolve = value => {
        // 如果状态不是等待，阻止程序向下执行
        if (this.status !== PENDING) return;
        // 将状态更改为成功
        this.status = FULFILLED;
        // 保存成功之后的值
        this.value = value;
        // 判断成功回调是否存在，如果存在则调用
        while (this.successCallback.length) {
            this.successCallback.shift()()
        }
    }

    reject = reason => {
        // 如果状态不是等待，阻止程序向下执行
        if (this.status !== PENDING) return;
        // 将状态更改为失败
        this.status = REJECTED;
        // 保存失败后的原因
        this.reason = reason;
        // 判断失败回调是否存在，如果存在则调用
        // this.failCallback && this.failCallback(this.reason);
        while (this.failCallback.length) {
            this.failCallback.shift()()
        }
    }

    then(successCallback, failCallback) {
        // 参数可选
        successCallback = successCallback ? successCallback : value => value
        // 参数可选
        failCallback = failCallback ? failCallback : reason => { throw reason }

        let promise2 = new MyPromise((resolve, reject) => {

            if (this.status === FULFILLED) {

                setTimeout(() => {
                    try {
                        // 调用成功回调 ，接收成功回调返回的值
                        let x = successCallback(this.value);
                        // 判断 x 的值是普通值还是promise对象
                        // 如果是普通值 直接调用resolve
                        // 如果是promise对象 查看promise对象返回的结果
                        // 再根据promise对象返回的结果，决定调用resolve 还是调用reject
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                }, 0)


            } else if (this.status === REJECTED) {
                setTimeout(() => {
                    try {
                        // 调用失败回调 ，接收回调返回的值
                        let x = failCallback(this.reason);
                        // 判断 x 的值是普通值还是promise对象
                        // 如果是普通值 直接调用resolve
                        // 如果是promise对象 查看promise对象返回的结果
                        // 再根据promise对象返回的结果，决定调用resolve 还是调用reject
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                }, 0)


            } else {
                // 等待
                // 将成功回调，失败回调存储起来 
                // 处理异步情况
                // this.successCallback.push(successCallback);
                // this.failCallback.push(failCallback);
                this.successCallback.push(() => {
                    setTimeout(() => {
                        try {
                            // 调用成功回调 ，接收成功回调返回的值
                            let x = successCallback(this.value);
                            // 判断 x 的值是普通值还是promise对象
                            // 如果是普通值 直接调用resolve
                            // 如果是promise对象 查看promise对象返回的结果
                            // 再根据promise对象返回的结果，决定调用resolve 还是调用reject
                            resolvePromise(promise2, x, resolve, reject)
                        } catch (e) {
                            reject(e)
                        }
                    }, 0)
                });
                this.failCallback.push(() => {
                    setTimeout(() => {
                        try {
                            // 调用失败回调 ，接收回调返回的值
                            let x = failCallback(this.reason);
                            // 判断 x 的值是普通值还是promise对象
                            // 如果是普通值 直接调用resolve
                            // 如果是promise对象 查看promise对象返回的结果
                            // 再根据promise对象返回的结果，决定调用resolve 还是调用reject
                            resolvePromise(promise2, x, resolve, reject)
                        } catch (e) {
                            reject(e)
                        }
                    }, 0)
                });
            }

        });

        return promise2;

    }



    static all(array) {
        let result = [];
        let index = 0
        
        // all方法返回值是一个对象
        return new MyPromise((resolve, reject) => {
            function addData(key, value) {
                result[key] = value;
                index++;
                // 用index标时所以操作都执行完了，包括异步操作。再用resolve传出all方法的结果
                if(index === array.length){
                    resolve(result)
                }
            }

            for (let i = 0; i < array.length; i++) {
                let current = array[i];
                if (current instanceof MyPromise) {
                    // promise 对象
                    current.then(value => addData(i, value), (reason) => reject(reason))
                } else {
                    // 普通值
                    addData(i, array[i]);
                }
            }
            
        })
    }

    

}







function resolvePromise(promise2, x, resolve, reject) {
    // 判断是否发生了promise对象循环调用(自己返回了自己)
    if (promise2 === x) {
        return reject(new TypeError('chaining cycle detected for promise #<Promise>'))
    }
    if (x instanceof MyPromise) {
        // promise 对象
        // x.then(value=>{resolve(value)},reason=>reject(reason))
        x.then(resolve, reject)
    } else {
        resolve(x)
    }
}

module.exports = MyPromise 
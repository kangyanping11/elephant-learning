// proxy 比 defineProperty 方法更多


// 一： proxy 可以拦截更多操作，比如函数调用、属性删除等，而 defineProperty 只能拦截属性的访问和设置。
const person = {
    name: 'John',
    age: 30
};

const proxy = new Proxy(person, {
    deleteProperty (target, prop) {
        console.log(`Deleting property ${prop}`);
        delete target[prop]; // 删除属性
        return true; // 返回 true 表示删除成功
    }
})

delete proxy.age; // 删除属性，触发 deleteProperty 拦截器
console.log(proxy.age); // 访问已删除的属性，返回 undefined
console.log(person); // 输出原始对象，验证删除操作


// 二、Proxy更好的支持数组对象的监视
// 使用defineProperty方法来监视数组对象的变化： 重写数组的操作方法
// 如何使用proxy对数组对象进行监视
let arr = [];
const arrProxy = new Proxy(arr, {
    set(target, prop, value) {
        console.log(`Setting ${prop} to ${value}`);
        target[prop] = value; // 设置数组元素
        return true; // 返回 true 表示设置成功
        // return Reflect.set(target, prop, value);
    }
})
arrProxy.push(1); // 添加元素，触发 set 拦截器
arrProxy.push(2); // 添加元素，触发 set 拦截器

// 三、proxy是以非侵入的方式监管了对象的读写
// 就是一个已经定义好的对象，直接使用proxy来代理它，而defineProperty需要先定义好属性，然后再用defineProperty来代理它。
// 就是一个已经定义好的对象，不去要对对象本身进行操作，就可以进行修改 


//proxy 对象 

const person = {
    name: 'John',
    age: 30
};
const proxy = new Proxy(person, { 
    get: function (target, prop) {
        return target[prop] || 'default'; // 如果属性不存在，返回 'default' 值
        // console.log(target, prop);
        // return 100;
    },
    set: function (target, prop, value) {
        if(prop === 'age' && typeof value !== 'number') {
            throw new Error('Age must be a number');
        } else {
            target[prop] = value; // 设置属性值
            return true; // 返回 true 表示设置成功
        }
    },

});


console.log(proxy.name); // 访问属性，触发 get 拦截器
proxy.age = 25; // 设置属性，触发 set 拦截器
console.log(proxy.age); // 访问属性，触发 get 拦截器
console.log(proxy); // 输出整个 proxy 对象
console.log(proxy.nonExistentProperty); // 访问不存在的属性，触发 get 拦截器，返回 'default'
console.log(person); // 输出原始对象，验证代理的效果


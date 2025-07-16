const person = {
    name: 'John',
    age: 30
};

console.log('name' in person); // 检查对象是否具有指定属性
console.log(delete person.age); // 删除对象的属性
console.log(Object.keys(person)); // 获取对象的所有属性名

// Reflect 统一提供一套用于操作对象的 API，使得操作对象更加方便和统一。 13个方法
console.log(Reflect.has(person, 'name')); // 检查对象是否具有指定属性
console.log(Reflect.get(person, 'name')); // 获取对象的属性值
console.log(Reflect.set(person, 'name', 'Tom')); // 设置对象的属性值
console.log(Reflect.deleteProperty(person, 'age')); // 删除对象的属性
console.log(Reflect.ownKeys(person)); // 获取对象的所有属性名
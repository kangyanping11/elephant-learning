// static方法

class Person {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }

    // 静态方法
    static create(name) {
        return new Person(name);
    }
    static staticMethod() {
        console.log("This is a static method.");
    }
}

const person = Person.create('John');
person.sayHello(); // 输出: Hello, my name is John
Person.staticMethod(); // 输出: This is a static method.    
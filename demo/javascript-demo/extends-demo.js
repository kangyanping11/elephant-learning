// extends 继承

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`); 
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name); // 调用父类的构造函数
    }

    hello() {
        super.speak(); // 调用父类的方法
        // this.speak(); // 调用父类的方法
        console.log(`Hello, my name is ${this.name}`); // 使用父类的属性
    }
}
const dog = new Dog('Buddy');
dog.speak(); // 输出: Buddy makes a noise.
dog.hello(); // 输出: Hello, my name is Buddy
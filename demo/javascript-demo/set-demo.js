// Set 数据结构

const s = new Set();
s.add(1).add(2).add(3).add(4).add(5).add(3).add(3);
console.log(s); // Set { 1, 2, 3, 4, 5 }
console.log(s.size); // 5，Set 中的元素是唯一的
console.log(s.has(3)); // true，检查 Set 中是否存在元素
console.log(s.has(6)); // false，检查 Set 中是否存在元素
s.delete(2); // 删除元素
console.log(s); // Set { 1, 3, 4, 5 }
console.log(s.size); // 4，删除后 Set 的大小
console.log(s.values()); // SetIterator { 1, 3, 4, 5 }，获取 Set 的值
console.log(s.keys()); // SetIterator { 1, 3, 4, 5 }，获取 Set 的键

// Set 与 Array 的转换
const arr = [...s]; // 将 Set 转换为数组
// 或者使用 Array.from(s)
// const arr = Array.from(s);
console.log(arr); // [1, 3, 4, 5]
const set = new Set(arr); // 将数组转换为 Set
console.log(set); // Set { 1, 3, 4, 5 }
// Set 的遍历
for (const value of s) {
    console.log(value); // 依次输出 Set 中的值
}
// Set 的清空
s.clear(); // 清空 Set
console.log(s); // Set {}
console.log(s.size); // 0，清空后 Set 的大小
// Set 的使用场景
// 1. 去重：Set 可以用来去除数组中的重复元素
let arr1 = [1, 2, 3, 4, 5, 1, 2, 3]; 
const uniqueSet = new Set(arr1);
console.log(uniqueSet); // Set { 1, 2, 3, 4, 5 }

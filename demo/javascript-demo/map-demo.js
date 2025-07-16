// Map 数据结构

const obj = {}
obj[true] = 'value'; // true 转为字符串 'true'
obj[1] = 'value'; // 1 转为字符串 '1'
obj[{a: 1}] = 'value'; // {a: 1} 转为字符串 '[object Object]'

console.log(obj); // { true: 'value', '1': 'value', '[object Object]': 'value' }
console.log(obj['true']); // 'value'


const map = new Map();
map.set(true, 'value'); // true 作为键
map.set(1, 'value'); // 1 作为键
map.set({a: 1}, 'value'); // {a: 1} 作为键
map.set([1,2,3] , 'value'); // 数组作为键
map.set('1', 'value'); // 字符串 '1' 作为键


console.log(map); // Map(4) { true => 'value', 1 => 'value', { a: 1 } => 'value', [ 1, 2, 3 ] => 'value' }

map.set('1', 'new value'); // 更新键为 '1' 的值

console.log(map.get('1')); // 'new value'，获取键为 '1' 的值
console.log(map.get(true)); // 'value'，获取键为 true 的值
console.log(map.get({a: 1})); // undefined，获取键为 {a: 1} 的值，返回 undefined，因为对象是引用类型，每次创建的新对象都是不同的
console.log(map.get([1,2,3])); // 'value'，获取键为 [1,2,3] 的值
console.log(map.has('1')); // true，检查 Map 中是否存在键 '1'       
console.log(map.has({a: 1})); // false，检查 Map 中是否存在键 {a: 1}，返回 false，因为对象是引用类型，每次创建的新对象都是不同的
console.log(map.has([1,2,3])); // true，检查 Map 中是否存在键 [1,2,3]
console.log(map.size); // 5，Map 的大小
console.log(map.keys()); // MapIterator { true, 1, { a: 1 }, [ 1, 2, 3 ], '1' }，获取 Map 的键
console.log(map.values()); // MapIterator { 'value', 'value', 'value', 'value', 'new value' }，获取 Map 的值

// Map 的遍历
for (const [key, value] of map) {
    console.log(`${key}: ${value}`); // 依次输出 Map 中的键值对
}
// Map 的清空
map.clear(); // 清空 Map
console.log(map.size); // 0，Map 的大小
console.log(map); // Map(0) {}，清空后 Map 的内容
// Map 的使用场景
// 1. 存储键值对：Map 可以用来存储键值对，键可以是任意类型
// 2. 频繁的添加和删除：Map 的添加和删除操作比对象更高效
// 3. 保持键的插入顺序：Map 会保持键的插入顺序，而对象不保证键的顺序    
// 4. 使用对象作为键：Map 可以使用对象、数组等任意类型作为键，而对象只能使用字符串或符号作为键
// 5. 需要频繁查找：Map 的查找性能比对象更好，尤其是当键的数量较多时
// 6. 需要频繁删除：Map 的删除性能比对象更好，尤其是当键的数量较多时
// 7. 需要频繁更新：Map 的更新性能比对象更好，尤其是当键的数量较多时
// 8. 需要频繁遍历：Map 的遍历性能比对象更好，尤其是当键的数量较多时
// 9. 需要频繁获取键值对：Map 的获取键值对性能比对象更好，尤其是当键的数量较多时
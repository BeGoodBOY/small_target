//const声明常量，不能修改const声明的值
const PI = 3.14;
// PI = 3.1415; //TypeError: Assignment to constant variable.

// const本质是指向固定的内存地址
// 字符串、数字为存储在固定内存的固定的值
// 对象、数组为存储在固定内存的固定指针
const obj = {};
obj.name = 'libo';

// obj = {};//TypeError: Assignment to constant variable.不可以改变对象引用

// 冻结对象可用Object.freeze()
var freezeObj = obj => {
    Object.freeze(obj);
    Object.keys(obj).forEach((key, i) => {
        if(typeof obj[key] === 'object') {
            freezeObj(obj[key]);
        }
    });
};  
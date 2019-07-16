{
    var a = 1;
    let b = 2;
}

a
//b //ReferenceError: b is not defined


console.log(foo); //undefined
var foo = 2;

//console.log(bar); //ReferenceError: bar is not defined
let bar = 3;   


var tmp = 4;
{
    // console.log(tmp); //ReferenceError: tmp is not defined
    let tmp = 9;
    //块级绑定性，只有块区域有let声明，就忽略外部声明
}

// let块级作用域{}
function f1() {
    let n = 1;
    {
        let n = 12;
    }
    console.log(n);
}

f1(); //1  加入用var声明会输出几呢 哈
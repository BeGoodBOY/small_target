for(let i=0; i<10; i++) {

}

//i; //ReferenceError: i is not defined

var arr1 = [];
for(var i=0; i<10; i++) {
    arr1[i] = function() {
        console.log(i);
    }
}

arr1[7](); //10   i声明只有一个，值为10


var arr2 = [];
for(let i=0; i<10; i++) {
    arr2[i] = function() {
        console.log(i);
    };
}

arr2[3](); //3 let有作用域，每循环一次都会生命一个新的变量i
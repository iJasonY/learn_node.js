'use strict'
var s ='hello';

function greet (name) {
	console.log(s+','+name+'!');
}

function hello () {
	console.log('Hello World !');
}


/* 
>模块中输出变量的两种方法
>>方法1：对mode.exports赋值

module.exports ={
	greet :greet,
	hello : hello
}

 >>方法2：直接用exports

 exports.hello=hello;
 exports.greet =greet;
*/
 module.exports ={
	greet :greet,
	hello : hello
}
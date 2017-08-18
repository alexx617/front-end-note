
http://liubin.org/promises-book/#introduction

http://coderlt.coding.me/2016/07/17/ES6-promise/

如何停掉promise链: https://github.com/xieranmaya/blog/issues/5

Promise 在实例化的时候就会执行，是一条执行语句(new出来的时候就会执行)

Promise 嵌套，状态改变由最内层的promise对象决定

将new Promise出来的数据发送给then或catch.


```
promise.then(function(value) {
    // success
}, function(error) {
    // failure
});

等价于：

promise.then(function(){
    //success
}).catch(function(){
    //failure
})
```


可以在then中return出数据，并且这个数据会以参数的形式传入下一个then

```
var p = new Promise(function(resolve,reject){
  var a=1
  resolve(a);  

}).then(function(data){
  console.log(data)
  return ++data;
}).then( function(data){
  console.log(data)
} )
//打印出来的结果依次是： 1  2 。
```


前一个then的返回结果，可以在后一then的回调中获取(如有前一个then有return就会把返回值返回后一个then),如前一个then错误,后一个then不会被调用.

.then 中指定的方法调用是异步进行的。

不管是then或者catch返回的都是一个新的Promise实例！而每个Primise实例都有最原始的Pending（进行中）到Resolve（已完成），或者Pending（进行中）到Reject（已失败）的过程


then方法可以接受两个回调函数作为参数。第一个回调函数是Promise对象的状态变为Resolved时调用，第二个回调函数是Promise对象的状态变为Rejected时调用。其中，第二个函数是可选的，不一定要提供。


```
Promise.resolve(42).then(function(value){
    console.log(value);
});
```

Promise.resolve是 new Promise() 的语法糖，会让这个promise对象立即进入确定（即resolved）状态,并将 42 传递给后面then里所指定的 onFulfilled 函数。

promise方法链正确写法:

```
var bPromise = new Promise(function (resolve) {
    resolve(100);
});
bPromise.then(function (value) {
    return value * 2;
}).then(function (value) {
    return value * 2;
}).then(function (value) {
    console.log("2: " + value); // => 100 * 2 * 2
});
```

finally

finally方法：用于指定不管Promise对象最后状态如何，都会执行的操作


```
Promise.prototype.finally = function (callback) {
	'use strict';
	let P = this.constructor;
	return this.then(
		value => P.resolve(callback(value)),
		err => P.resolve(callback(err))
	);
};
var p = () => new Promise((resolve, reject) => resolve('success'));
p()
	.then(data => {console.log(data); x+1;})
	.catch(err => {console.log(err.message); y+2;})
	.then(data => console.log(data))
	.finally(data => console.log(data));
```

箭头函数不可加new!

立即执行函数可以写成箭头函数的形式。


```
(() => {
  console.log('Welcome to the Internet.');
})();
```


---

无序传参(函数解构)：
```
function func({x, y, z}) { } 
func({z: 3, y: 2 , x: 1})

或

var a = '占位a';
var c = '占位c';
function name(params) {
    params.a = a;
    params.b = b;
    params.c = c;
    console.log(params);
}

(()=>{
    a = '切换a';
    b = '切换b';
    name({a,b})
})()
```

---


1.2 let指令

1.2.1 实现块级作用域
使用let定义变量不仅可以通过闭包隔离，也可以通过块级作用域。块级作用域用一组大括号定义一个块。

```
if(true){
    let name = 'zfpx';
}
console.log(name);// ReferenceError: name is not defined
1.2.2 不会污染全局对象
if(true){
    let name = 'zfpx';
}
console.log(window.name);//undefined
```

1.2.3 for循环中也可以使用

嵌套循环不会相互影响


```
for (let i = 0; i < 3; i++) {
    console.log("outter：", i);
    for (let i = 0; i < 2; i++) {
        console.log("inner：", i);//outter： 0  inner： 0  inner： 1   outter： 1  inner： 0  inner： 1  outter： 2
    }
}
```


1.2.4 重复定义会报错

```
if(true){
    let a = 1;
    let a = 2; //Identifier 'a' has already been declared
}
```

1.2.5 不存在变量的预解释
  
```
console.log('inner',i);//ReferenceError: i is not defined
  let i = 100;
```


---

1.3 闭包的新写法 

```
;(function () {
    xxx
})();
现在
{
    xxx
}
```

---

2. 常量 
使用const我们可以去声明一个常量，常量一旦赋值就不能再修改了
2.1 常量不能重新赋值 

```
const MY_NAME = 'vicky';
MY_NAME = 'hello';//TypeError: Assignment to constant variable.
```

2.2 变量值可改变
注意const限制的是不能给变量重新赋值，而变量的值本身是可以改变的

```
const names = ['vicky'];
names.push('lily');
console.log("names:"+names);//names:vicky,lily
```

2.3 不同的块级作用域可以多次定义

```
const A = "0";
{
    const A = "A";
    console.log(A)//A
}
{
    const A = "B";
    console.log(A)//B
}
console.log(A)//0
```

---

3. 解构
3.1 解构数组
3.1.1

```
var [name,age] = ['lily',8];
console.log(name,age);//lily 8
```

3.1.2嵌套赋值 

```
let [x, [y], z] = [1, [2.1, 2.2]];
console.log(x, y, z);//1 2.1 undefined

let [x, [y,z]] = [1, [2.1, 2.2]];
console.log(x,y,z);//1 2.1 2.2
```

3.1.3省略赋值 

```
let [, , x] = [1, 2, 3];
console.log(x);//3
```

3.2 解构对象 

```
var {name,age} = obj;
console.log(name,age);//lily 18

var {name: myName, age: myAge} = obj;
console.log(name,myName,age,myAge);//lily lily 18 18
```

3.3 默认值
在赋值和传参的时候可以使用默认值

```
let [a="a",b=2,c = new Error("C must be pointed! ")] = [1,,];
console.log(a,b,c);//1 2 Error: C must be pointed!
```

---

4. 字符串
4.1 模板字符串
模板字符串用反引号(数字1左边的那个键)包含，其中的变量用${}括起来

```
let name = "lily",age = 18;
let desc = `${name} is ${age} years old`;
console.log(desc);//lily is 18 years old

var a = "hello",b = "world";

var htmlStr = `<ul>
<li>${a}</li>
<li>${b}</li>
</ul>`；
console.log(htmlStr);
```

//所有模板字符串的空格和换行，都是被保留的，书写很方便

---

4.2字符串新方法 
includes()：返回布尔值，表示是否找到了参数字符串，功能类似indexOf。

```
[400, 404, 405, 500].includes(500)//true
```


startsWith()：返回布尔值，表示参数字符串是否在源字符串的头部。
endsWith()：返回布尔值，表示参数字符串是否在源字符串的尾部。
第二个参数，表示从第几位开始检索

```
var str = "hello world";
console.log(str.startsWith('e',2));//false
console.log(str.includes('w',3));//true
console.log(str.endsWith('o',5))//true
```

注意：endsWith的行为与其他两个方法有所不同。它针对前n个字符，而其他两个方法针对从第n个位置直到字符串结束

2) startsWith(), endsWith()
在ES6中还可以直接判断一个字符串是否以某个特定子串开头，或是否以某个特定子串结尾。 
以前只能用String.prototype.indexOf()和RegExp.prototype.test()判断：

```
'hello world'.startsWith('hello')
//true'hello world'.endsWith('world')
//true
```


---

数值扩展

ES6将全局方法parseInt()和parseFloat()，移植到Number对象上面，行为完全保持不变

Number.isInteger()用来判断一个值是否为整数。需要注意的是，在JavaScript内部，整数和浮点数是同样的储存方法，所以3和3.0被视为同一个值。

```
Number.isInteger(25) // true
Number.isInteger(25.0) // true
Number.isInteger(25.1) // false
Number.isInteger("15") // false
Number.isInteger(true) // false
```


Math.trunc()方法用于去除一个数的小数部分，返回整数部分
Math.trunc('123.456')// 123

Math.sign方法用来判断一个数到底是正数、负数、还是零。
它会返回五种值。
参数为正数，返回+1；
参数为负数，返回-1；
参数为0，返回0；
参数为-0，返回-0;
其他值，返回NaN。

```
Math.sign(-5) // -1
Math.sign(5) // +1
Math.sign(0) // +0
Math.sign(-0) // -0
Math.sign(NaN) // NaN
Math.sign('foo'); // NaN
Math.sign(); // NaN
```

---

4.3 repeat
repeat方法返回一个新字符串，表示将原字符串重复n次。

```
console.log(('ha').repeat(2));//haha
```


---

5 函数
5.1 默认参数 
可以给定义的函数的参数设置默认值

```
var desc = function(name="lily",age=18){
    console.log(`${name} is ${age} years old`);
}
desc("xiao ming");//xiao ming is 18 years old
```


---

5.3 函数的名字 

ECMAScript 6 给函数添加了一个name属性

```
var desc = function descname(){}
console.log(desc.name);//descname
```

---

5.4 箭头函数
箭头函数简化了函数的的定义方式，一般以 "=>" 操作符左边为输入的参数，而右边则是进行的操作以及返回的值inputs=>output
输入参数如果多于一个要用()包起来，函数体如果有多条语句需要用{}包起来

```
['a','b','c'].forEach(item => console.log(item));//a b c
//之前的写法
['a','b','c'].forEach(function (item) {
    console.log(item);//a b c
});
```

箭头函数根本没有自己的this，导致内部的this就是外层代码块的this。 正是因为它没有this，从而避免了this指向的问题。

```
var Person = {
    name: 'lily',
    getName: function () {
        setTimeout(function(){console.log(this)},1000);//在浏览器执行的话this指向window
        setTimeout(() => console.log(this),1000);//在浏览器执行的话this指向Person
    }
}
Person.getName();
```


5.5函数新方法 
5.5.1 from( Array.from()把对象转为真正的数组)
Array.from({length:100}) 也是创建了一个包含100个length长度的undefined 的数组
将一个数组或者类数组变成数组,会复制一份(用于将对象转换为数组)

```
var oldArr = [1,2,3];
var newArr = Array.from(oldArr);
console.log(newArr);//[ 1, 2, 3 ]
```
例如将字符串转为数组：
```
Array.from('hello') // ["h", "e", "l", "l", "o"]
```


5.5.2 Array.of 
把一组参数转换成数组(字符串也可以)

```
var arr = Array.of(1,2,3,4,5)
console.log(arr)//[1,2,3,4,5]
```


5.5.3 copyWithin (copyWithin(target要替换的位置, start = 0要移动的, end = this.length到这里结束))
在当前数组内部，将指定位置的数组项复制到其他位置(会覆盖原数组项)，然后返回当前数组。使用copyWidthin方法会修改当前数组。

```
console.log([1, 2, 3, 4, 5].copyWithin(0, 1, 2));//[ 2, 2, 3, 4, 5 ]
console.log([1, 2, 3, 4, 5].copyWithin(0, 1, 4));//[ 2, 3, 4, 4, 5 ]
```

5.5.4 find / findIndex
find() 遍历数组直到找到符合条件的元素，返回该元素，若找不到则返回undefined,若只需要拿一个数据时候, 建议使用find
findIndex() 用法跟 find() 类似，但返回值是元素的位置，若找不到则返回-1

```
['hello', 'world', 'es6'].find(function(item){
  if(item === 'world') {
    returntrue;
  }
});
// 'world'

[1, 0, 2].findIndex(function(item){
  if(item === 0) {
    returntrue;
  }
});
```

5.5.5 fill 
就是填充数组的意思 会更改原数组 Array.prototype.fill(value, start, end = this.length);
value：填充值。

start：填充起始位置，可以省略。

end：填充结束位置，可以省略，实际结束位置是end-1。

```
1.采用一默认值填初始化数组
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
arr1.fill(7)
console.log(arr1);//7,7,7,7,7,7,7,7,7,7,7

2.制定开始和结束位置填充
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
arr3.fill(7, 2, 5)
console.log(arr3)//1,2,7,7,7,6,7,8,9,10,11

3.结束位置省略
const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
arr4.fill(7, 2)
console.log(arr4)//1,2,7,7,7,7,7,7,7,7,7

4.创建一个长度为100, 默认值全为0的数组
const array = Array(100).fill(0);//[0,0,0,0,0......]

5.创建3个数组,内容都为[1,2,3];
const array = Array(3).fill([1,2,3]);//[1,2,3],[1,2,3],[1,2,3]

6.创建2个对象,内容都为{'a':'b'};
const obj = Array(3).fill({'a':'b'});//{'a':'b'},{'a':'b'}

```

---

class, extends, super:


```
class Animal {    //一定要class开头，并且没有等号小括号直接大括号，并且打括号里面不是JSON格式
    constructor(){    //constructor内定义的方法和属性是实例对象自己的，而constructor外定义的方法和属性则是所有实例对象可以共享的。
    this.type = 'animal'//this表示实例对象
    }
    says(say){//定义方法
        console.log(this.type + ' says ' + say)
    }
}

let animal = new Animal()
animal.says('hello') //animal says hello
1. 使用class一定要使用new 实例化;
2. class可以使用表达式的形式但是调用时还是要调前者：
    let People = class Man {
        //...
    }
    let me = new People()
```



继承：使用super和extends:
接上例:
class Cat extends Animal 
```
{//extends后面接的是你要继承的对象,这个例子继承了Animal类的所有属性和方法
    constructor(){
        super()
        this.type = 'cat'
    }
}
```



```
let cat = new Cat()
cat.says('hello') //cat says hello
```

super的原理是实例化父类，也就是把你要继承的对象实例化，并把你的this传入。
super要在构造函数中使用时，super关键字单独出现，必须在可以使用this关键字之前使用。
如果不调用super方法，子类就得不到this对象。
必须在constructor方法中调用super方法，否则新建实例时会报错

---

Object 的简洁表示法

直接写变量

```
{x, y}
// 等同于
{
    x: x,
    y: y
}
直接写函数
{
    say() {
        console.log('I am ES6');
    }
}
// 等同于
{
    say: function(){
        console.log('I am ES6')；
    }
}
```


---

//forof
var arr = [1,2,3,4,5]
arr.keys()方法:使用for of的时候遍历下标

```
for(var key of arr.keys()){
    console.log(key)//12345
}
arr.entries():使用for of的时候同时遍历value值和下标(需要两个参数接收)
for(var [key,value] of arr.entries()){
    console.log(key,value)//0,1     1,2      2,3     3,4       4,5
}
```

---

删除json的某一条数据

```
let json = {a:12,b:5};
    delete json.a;
    console.log(json);  // b:5
```

---

//数组推导
允许直接通过原有数组推导生成新数组.

```
var arr = [1,2,3,4,5];
var arr2 = [for(value of arr) value*2];//不能声明value,否则会报错,还可以后面继续写if判断    
console.log(arr2);//2,4,6,8,10
```

---
JSON代码转换成数组:
```
let  json = {
    '0': 'jspang',
    '1': '技术胖',
    '2': '大胖逼逼叨',
    length:3
}
 
let arr=Array.from(json);
console.log(arr)
```

文本,变量,数字,字符串转换为数组:
```
let arr =Array.of(3,4,5,6);
console.log(arr);
```

将数组进行填充,接收三个参数，第一个参数是填充的变量，第二个是开始填充的位置，第三个是填充到的位置。

```
let arr=[0,1,2,3,4,5,6,7,8,9];
arr.fill('jspang',2,5);
console.log(arr);
```

---

//扩展运算符
用于获取函数的多余参数
(如果要传的参数太多,使用这个的话不需要每个都写上实参,用数组形式将多出来的参数包起来就行了,注意,后面不能再有其他参数,会报错)

```
function fn(a,b,c,...rest) {
    console.log(rest)//4,5,6,7,8
    console.log(rest[0])//4
}
fn(1,2,3,4,5,6,7,8);
...也可以用来合并两个对象:
let obj1 = {key1: 'value1', key2: 'value2'}
let obj2 = {
    key3: 'value3',
    ...obj1
}
console.log(obj2)
// {key3: "value3", key1: "value1", key2: "value2"}
// 等价于 Object.assign({key3: 'value3'}, obj1)
```

不管是合并还是拷贝，如果把自定义的属性扩展运算符中的属性同名，则后者会覆盖前者的值


//展开操作符
把...放在数组前面可以把一个数组进行展开

```
let print = function(a,b,c){
    console.log(a,b,c);
}
print([1,2,3]);//[ 1, 2, 3 ] undefined undefined
print(...[1,2,3]);//1 2 3
```


// 可以替代apply

```
var maxVal = Math.max.apply(null,[1,2,3,4,5]);
var maxVal2 = Math.max(...[1,2,3,4,5]);
console.log(maxVal,maxVal2);//5 5
```


// 可以替代concat

```
var arr1 = [1,2],
    arr2 = [3,4],
    arr3 = arr1.concat(arr2),
    arr4 = [...arr1,...arr2];
console.log(arr3);//[ 1, 2, 3, 4 ]
console.log(arr4);//[ 1, 2, 3, 4 ]
```


//类数组的转数组

```
function max(a,b,c) {
    console.log(Math.max(...arguments));
}
max(1, 3, 4);//4
```

//剩余操作符 
剩余操作符可以把其余的参数的值都放到一个叫b的数组里面


```
let rest = function(a,...b){
    console.log(a,b);
}
rest(1,2,3);//1 [2, 3]
```

---

尾调用:某个函数的最后一步是调用另一个函数（注意：内层函数运用了外层函数的变量便不能进行尾调用优化了）

```
functionf(x) {
    returng(x);
}
functiong(params) {
    log('123')
}
f('z')
```

---

所谓的实例方法就是并不是以Array对象开始的，而是必须有一个已经存在的数组，然后使用的方法，这就是实例方法.

---

Set转数组： 

```
Array.from(set)
```

---

快速把json转换成数组:
这就是一个标准的JSON数组格式，跟普通的JSON对比是在最后多了一个length属性。只要是这种特殊的json格式都可以轻松使用ES6的语法转变成数组。在ES6中绝大部分的Array操作都存在于Array对象里。我们就用Array.from(xxx)来进行转换。我们把上边的JSON代码转换成数组，并打印在控制台。


```
let  json={
    '0':'jspang',
    '1':'技术胖',
    '2':'大胖逼逼叨',
    length:3
}
 
let arr=Array.from(json);
console.log(arr)//["jspang", "技术胖", "大胖逼逼叨"]
```

---

in是用来判断对象或者数组中是否存在某个值的
对象判断

```
let obj={
    a:'jspang',
    b:'技术胖'
}
console.log('a' in obj);  //true
```

数组判断
先来看一下ES5判断的弊端，以前会使用length属性进行判断，为0表示没有数组元素。但是这并不准确，或者说真实开发中有弊端。

```
let arr=[,,,,,];
console.log(arr.length);//5
```

上边的代码输出了5，但是数组中其实全是空值，这就是一个坑啊。那用ES6的in就可以解决这个问题。
可用来判断数组是否为空:

```
let arr=[,,,,,];
console.log(0 in arr);//false
 
let arr1=['jspang','技术胖'];
console.log(0 in arr1);  // true
```

注意：这里的0指的是数组下标,判断是否有0这个下标。

**in 与 hasOwnProperty() 的区别**

in 能访问到对象实例的属性和原型对象的属性，而hasOwnProperty()只能访问对象实例本身

```
function Person() {   // 构造函数
}
Person.prototype.name = "zao";
Person.prototype.age = "24";
Person.prototype.job = "Software Engineer";
Person.sayName = function() {
    alert(this.name);
};

var person1 = new Person();

console.log(person1.hasOwnProperty('name'));     // false
console.log("name" in person1);     // true

person1.name = "an"
console.log(person1.name);    // an
console.log(person1.hasOwnProperty('name'));     // true
console.log("name" in person1);      // true

delete person1.name;
console.log(person1.name);      //  "zao"
console.log(person.hasOwnProperty('name'));      // false
console.log("name" in person1);      // true
```


---

对象Key值构建

有时候我们会在后台取出key值，而不是我们前台定义好的，这时候我们如何构建我们的key值那。比如我们在后台取了一个key值，然后可以用[ ] 的形式，进行对象的构建。

```
let key='skill';
varobj={
    [key]:'web'
}
console.log(obj.skill);
```

---

丢弃小数部分,保留整数部分:parseInt()

向上取整,有小数就整数部分加1:Math.ceil()

四舍五入:Math.round()

向下取整:Math.floor()

数字:
```
数字验证Number.isFinite( xx )
可以使用Number.isFinite( )来进行数字验证，只要是数字，不论是浮点型还是整形都会返回true，其他时候会返回false。
leta=11/4;
console.log(Number.isFinite(a));//true
console.log(Number.isFinite('jspang'));//false
console.log(Number.isFinite(NaN));//false
console.log(Number.isFinite(undefined));//false
```
```
NaN验证
NaN是特殊的非数字，可以使用Number.isNaN()来进行验证。下边的代码控制台返回了true。
console.log(Number.isNaN(NaN));
判断是否为整数Number.isInteger(xx)
leta=123.1;
console.log(Number.isInteger(a));//false
整数转换Number.parseInt(xxx)和浮点型转换Number.parseFloat(xxx)
leta='9.18';
console.log(Number.parseInt(a));//9
console.log(Number.parseFloat(a));//9.18
```
// var name = "Michael Jackson";
// function showCelebrityName() {
//     console.log(name);
// }
// function showOrdinaryPersonName() {
//     name = "Johnny Evers";
//     console.log("123");
// }
// function showOrdinaryPersonName() {
//     name = "Johnny Evers";//初始化时没有使用var关键字，所以它是一个全局变量
//     console.log(name);
// }
// showCelebrityName();
// showOrdinaryPersonName();//执行前先读取函数声明↓
// showCelebrityName();
// function showOrdinaryPersonName() {
//     var name = "Johnny Evers";
//     console.log(name);
// }

// function showName() {
//     console.log("First Name: " + name);
//     var name = "Ford";
//     console.log("Last Name: " + name);
// }

// showName(); 


// var name = function () {
// 	var age = "Jack";
// 	console.log (age); 
// }
// name();
// myname(); 
// function myname() {
// 	var age = "Jack";
// 	console.log (age); 
// }

// var myName = "Richard"; // 如果这个变量或者函数其中是赋值了的，那么另外一个将无法覆盖它

// function myName () {
//     console.log ("Rich");
// }

// console.log(myName()); // string


// var getName = function(){
//     console.log(2);
// }
// function getName (){
//     console.log(1);
// }
// getName();

// var myname = "32";
// function showname() {
//     console.log(myname)
//     let myname = '54'
//     console.log(myname)
// }
// console.log(showname());
// console.log(myname);

// var scope = 'global';
// function f(){
//     console.log(scope);
//     var scope = 'local';
//     console.log(scope);
// }
// console.log(f());

// function foo (a) {
//     var b = 2;

//     // something else

//     function bar () {
//        // something else   
//     }

//     var c = 3;
//  }

//  foo(a, b, c);      // 报错，ReferenceError: bar is not defined
// //  console.log(a, b, c);

// getName()
// var getName = function () {
//   alert('closule')
// }
// function getName() {
//   alert('function')
// }
// getName()

// var obj1 = { a: 1, b: 2 }
// obj1.__proto__.myname = 5;//真正描述对象的prototype用的是__proto__属性
// var obj2 = {};
// for (var i in obj1) {//这样克隆的话修改obj2里的值,obj1的值不会变
//     if(obj1.hasOwnProperty(i)){//不包括原型链,不过还是会克隆原型链上的值
//         obj2[i] = obj1[i];
//     }
// }
// obj2.c = 3;
// console.log(obj1);//{ a: 1, b: 2 }
// console.log(obj2);//{ a: 1, b: 2, c: 3}


// var obj1 = { a: 1, b: 2 }
// obj1.__proto__.myname = 5;
// var obj2 = {};
// Object.assign(obj2,obj1);
// console.log(obj1);
// console.log(obj2);
// for (var i in obj1) {//这样克隆的话修改obj2里的值,obj1的值不会变
//     if(obj1.hasOwnProperty(i)){//不包括原型链,不过还是会克隆原型链上的值
//         obj2[i] = obj1[i];
//     }
// }
// obj2.c = 3;
// console.log(obj1);//{ a: 1, b: 2 }
// console.log(obj2);//{ a: 1, b: 2, c: 3}


// var bob = { name: "bob" };
// var tom = { name: "tom" };
// var person = {
//     greet: function () {
//         console.log(this.name)//greet
//     }
// }
// bob.__proto__ = person;
// tom.__proto__ = person;
// bob.greet()//bob
// var Person = function(name) {
//     this.name = name
// }
// Person.prototype.greet = function() {
//     console.log(this.name)
// }
// var bob = new Person("bob");
// bob.greet();
// console.log(bob);

// var person1 = {
//     name: 'cyl',
//     sex: 'male'
// };

// var person1 = {
//     name: 'cyl',
//     sex: 'male'
// };

// var person2 = Object.create(person1);
// console.log(person1);
// console.log(person2);

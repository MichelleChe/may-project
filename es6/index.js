function* objectToEntries(object) {
  const properties = Reflect.ownKeys(object)
  for(const key of properties) {
    yield [key, object[key]]
  }
}


const obj = {
  name: 'may',
  schedule: '123',
  testA: () => {
    console.log('hh')
  },
  c: undefined,
  e: new Date(),
  f: {
    b: 'b',
    d: 'd',
    a: {
      b: 'bb'
    }
  }
}
// const a = objectToEntries(obj)
// for (let [key, value] of a) {
//   console.log(key, value)
// }
// console.log(a.next())
// console.log(a.next())
// console.log(a.next())

// console.log(JSON.parse(JSON.stringify(obj)))
function deepClone(obj) {
  const copyObj = {}
  if (obj === null) return obj
  if (obj instanceof Date) return new Date(obj)
  if (obj instanceof RegExp) return new RegExp(obj)

  if (typeof obj !== 'object') return obj
  for (let key of Object.keys(obj)) {
    if (obj.hasOwnProperty(key)) {
      copyObj[key] = deepClone(obj[key])
    }
  }
  return copyObj
}

const obj1 = deepClone(obj)
// obj.f.d = 'nnnnn'
// obj.f.a.b = '==='
// console.log(obj,obj1)


// const arr = [1, 2, 3, 4, 5]
// prototype是什么
// 每个构造函数都有一个prototype属性
// 每一个对象都有一个_proto_属性指向的是他的构造函数的原型对象prototype
// 对象可以通过_proto_访问到原型对象上的属性

// 创建一个空对象
// 为该对象准备原型链，xx._proto_ == XX.prototype
// 重新绑定this，构造函数的this指向新对象Father.call(this)
// 新对象属性赋值
// 返回this，此时的新对象就有构造函数的方法和属性了

// 按照如下要求实现Person 和 Student 对象
//  a)Student 继承Person 
//  b)Person 包含一个实例变量 name， 包含一个方法 printName
//  c)Student 包含一个实例变量 score， 包含一个实例方法printScore
//  d)所有Person和Student对象之间共享一个方法

// class Person {
//   constructor(name) {
//     this.name = name
//   }
//   printName() {
//     console.log(this.name)
//   }
// }

// class Student extends Person {
//   constructor(name, score) {
//     super(name)
//     this.score = score
//   }
//   printScore() {
//     this.printName()
//     console.log(this.score)
//   }
// }

// const student = new Student('may', 99)
// const person = new Person('hh')
// console.log(student.printName === person.printName)

// Function.prototype.a = () => {
//   console.log(1);
// }
// Object.prototype.b = () => {
//   console.log(2);
// }
// function A() {}
// const a = new A();

// a.a();
// a.b();
// A.a();
// A.b();

// function A() {
// }

// A.prototype.n = 0;

// A.prototype.add = function () {
//   this.n += 1;
// }

// a = new A();
// b = new A();
// a.add();
// console.log(a.n, 'nnn')
// b.add()
// console.log( b.n)


// function Parent() {
//   this.a = 1;
//   this.b = [1, 2, this.a];
//   this.c = { demo: 5 };
//   this.show = function () {
//       console.log(this.a , this.b , this.c.demo );
//   }
// }
// function Child() {
//   this.a = 2;
//   this.change = function () {
//     this.b.push(this.a);
//     this.a = this.b.length;
//     this.c.demo = this.a++;
//   }
// }
// Child.prototype = new Parent();
// var parent = new Parent();
// var child1 = new Child();
// var child2 = new Child();
// child1.a = 11;
// child2.a = 12;
// parent.show(); // 1,[1, 2, 1],5
// child1.show(); // 11, [1, 2, 1], 5
// child2.show(); // 12, [1, 2, 1], 5
// child1.change();
// child2.change();
// parent.show(); // 1,[1, 2, 1],5
// child1.show(); // 5, [1, 2, 1 11, 12], 5
// child2.show(); // 6, [1, 2, 1, 11， 12], 5


// function Fn1(name) {
//   if(name){
//       this.name = name;
//   }
// }
// Fn1.prototype.name="jack"
// let a = new Fn1();
// console.log('a:', a.name); // jack
// function Fn2(name) {
//   this.name = name;
// }
// Fn2.prototype.name="jack" 
// let b = new Fn2();
// console.log('b:', b.name); // undefined


// var Foo = (function() {
//   var x = 0;
//   function Foo() {}
//   Foo.prototype.increment = function() {
//       ++x;
//       console.log(x);
//   };
//   return Foo;
// })();

// var a = new Foo();
// a.increment(); //1
// a.increment(); //2
// var b = new Foo();
// b.increment(); // 3


// var name = 'Jay'
// function Person(name){
//     this.name = name;
//     console.log(this.name)
// }
// var a = Person('Tom') // Tom
// console.log(name) // Jay
// console.log(a) // undefined
// var b = new Person('Michael') // Michael
// console.log(b) // Person { name: 'Michael' }


// var tmp = {};
// var A = function() {};
// A.prototype = tmp;
// var a = new A();
// A.prototype = {};
// var b = Object.create(tmp);
// b.constructor = A.constructor;
// console.log(a instanceof A); // false
// console.log(b instanceof A); // false


// const Book = {
//   price: 32
// }
// const book = Object.create(Book);
// book.type = 'Math';
// delete book.price;
// delete book.type;
// console.log(book.price); // 32
// console.log(book.type); // undefined


function foo() {}
function bar(){
  return{
    method: function(){}
  };
};
foo.prototype = new bar()
console.log(foo.prototype);//false
// 为什么上面的判断返回false？我自己试了一下,如果把bar()里面的return内容去掉就返回true，请教一下大神们为什么？
// functionfoo(){};
// functionbar(){};
// foo.prototype=newbar();
// console.log(foo.prototypeinstanceofbar);//true
// new 过程中遇到return对象，此时的this指向return返回的对象，但是如果返回的是基础数据类型或者null this还是会指向实例对象


// var,let,const var的变量提升是什么原因
// 首先在运行js的时候是运行在执行上下文中，执行上下文有全局执行上下文和函数执行上下文，
// 执行上下文也是有生命周期的，创建阶段=> 执行阶段 => 销毁阶段 ，提升就是在创建阶段产生的
// 创建阶段主要是确定this的指向，确定词法环境和变量环境
// 变量环境也是词法环境，他们的区别是词法环境存储函数和let和const声明的变量而变量环境仅用于存储var声明的变量
// let和const定义的变量在创建阶段没有被赋值而var声明的变量被赋值为undefined
// 创建阶段，会在代码中扫描变量和函数声明，然后将函数声明存储在环境中
// 但变量会被初始化为undefined(var声明的情况下)和保持uninitialized(未初始化状态)(使用let和const声明的情况下)
// 这就是变量提升的实际原因

// 执行上下文和执行栈
// 执行栈是在函数执行的时候才会压入执行完之后被弹出所以是个后进先出的规则

// js中的事件模型
// 事件与事件流，原始时间模型，标准事件模型，ie事件模型
// 事件流主要是：事件捕获，处于目标阶段，事件冒泡

// typeof检测变量是什么类型，但是只是针对基础类型如果是引用类型除了function都会返回object，
// 其中还有个历史遗留问题null也是会返回object
// 判断变量是否存在可以使用typeof xx !== 'undefined'(不能使用if(a)， 若a未声明，则报错)
// instanceof 则是用于检测构造函数的prototype属性是否出现在某个实例对象的原型链上
// (判断A是否是B的实例，用来判断两个对象是否是实例关系而不能判断一个实例对象具体属于什么类型)

// Object.prototype.toString调用的是Object上的tostring方法，对象上的tostring是被重写过的，直接调用会返回一个字符串
// 如果不使用call则会一直返回[object Object]
// Object.prototype.toString()返回"[object Type]"，其中Type是对象类型。
// 如果对象具有Symbol.toStringTag值为字符串的属性，则该值将用作Type. 许多内置对象（包括Map和Symbol）都有一个Symbol.toStringTag.
//  一些早于 ES6 的对象没有Symbol.toStringTag，但仍然有一个特殊的标签。它们包括（标签与下面给出的类型名称相同）：
console.log(Object.prototype.toString.call([]))
console.log(Object.prototype.toString.call(undefined))


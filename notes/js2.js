//对象的创建

// 对象直接量
var obj = {
    name:'gl',
    age:'18'
}
console.log(obj);

// 构造函数
var obj2 = new Object();
obj2.name="guoli";
console.log(obj2.name)

// 自定义构造函数

function Obj (name){
    this.name = name;
    this.age = 15;
    console.log(this)
}
var obj3 = new Obj('张三');
console.log(obj3.name);
console.log(obj3.age)

//原型 prototype
//利用原型特点和概念，可以提取共有属性。将一类对象的共有属性提取出来，
//放到该类对象的原型中，从而不需要每次用new操作符时都重新定义一遍该共有属性。
Person.prototype = {
    eat:function(food){
        console.log('i have eat' + food)
    },
    sleep:function(){
        console.log('i am sleeping')
    }
}
//d定义一个构造函数
function Person(name,age){//构造函数的this指向构造函数，普通函数的this指向window
    this.name=name;
    this.age=age
}
//实例一个构造函数
var person1 = new Person('guoli',20);
person1.eat("apple");
person1.sleep();
console.log(person1.__proto__)

var obj4 = new Object();
console.log(obj4);
document.write(obj4)



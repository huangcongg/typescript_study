​					

##  一 、Typescript介绍、安装、开发工具

### 1、ts是js的超级。安装：

```shell
npm install -g typescript 
//或
cnpm install -g typescript
```



### 2、开发工具vscode，

### 3、常用命令 tsc 编译 tsc -v查看当前版本

```shell
# 查看tsc当前版本
tsc -v
# 编译ts文件
tsc helloworld.ts 
```



### 4、设置自动保存步骤：

* 进入项目目录，执行命令 :tsc --init,生成tsconfig.json


```shell
tsc --init
```



* 打开tsconfig.json，找到**outDir**项目，去掉注释，值修改为"**./js**"

* 打开vscode -> 终端 -> 运行任务 -> typscript -> tsc:监视-tsconfig.json, 再次修改并保存ts文件时，就会在./js目录自动生成对应的js文件

  

## 二、typescript中的数据类型(上)

###  1、boolean类型

### 2、number类型

### 3、string类型

###  4、数组类型

* 第一种定义数组的方式：

```typescript
let arr:number[] = [1, 2, 34, 5435]
```



* 第二种定义数组的方式：

```typescript
let arr:Array<number> = [1, 2, 3, 4,] //泛型
```



###  5、元组类型（tuple）属于数组的一种

```typescript
let arr:[string, number, boolean] = ['ts', 3.18, true] //可以指定数组中每一个元素的类型
```



###  6、枚举类型

* 举例：


```typescript
enum Flag {success = 1,error = -1}

var f:Flag = Flag.success

console.log(f) //输出1
```



* 如果枚举类型里面没有赋值，默认值是他的索引值，从0开始索引，例如：


```typescript
enum Color {red, blue, orange}
var f:Color = Color.blue

console.log(f)  //输出1
```



* 举例：如果要访问的类型没有赋值，但它上一个类型有赋值，则它的默认值是上一个的数值加一，例如


```typescript
enum Color {red, blue = 5, orange}

var f:Color = Color.orange

console.log(f)  //输出6
```



## 三、typescript中的数据类型(下)

###  1、any类型(任意类型)

* 案例：

```typescript
var a:any = 'abc';
a = 1;
a = false;//都不会报错
```



* 任意类型的用处

```typescript
var oBox:any = document.getElementById('box');
oBox.style.color = 'red'; // 没有object类型，用any不会报错
```



###  2、undefined类型

* 适用场景举例：

```typescript
var num:number | undefined
console.log(num)
```



### 3、null类型

* 使用场景距离：

```typescript
var num:number | null | undefined
num = 123
console.log(num)
```



### 4、void类型：表示没有任何类型，一般用于定义方法的时候方法没有返回值

* 举例：

```typescript
function run():void{
	console.log('run')
}
```



###  5、never类型：是其他类型（包括null和undefined）的子类型，代表从不会出现的值。

## 四、函数

###  1、ts中的函数可选参数要在参数名后加？

### 2、默认参数直接在参数后面赋值（不用加?)

### 3、剩余参数（三点运算符）

```typescript
function sum(...result:number[]):number{
}
```



##  五、es5中的类、静态方法、继承

###  es5中实现继承，通常采用对象冒充和原型链继承结合的方式，既可以给实例化构造函数传参，又可以继承原型链中的属性方法

* 举例：

  ```js
  function Person(name,age){
  
  	this.name=name;
  
  	this.age=age;
  
      this.run=function(){
  
         alert(this.name+'在运动');
  
      }
  
  }
  
  function Web(name,age){
  
    Person.call(this,name,age);
  
  }
  
  Person.prototype.sex = '男';
  
  Person.prototype.work = function() {
  
    alert(this.name+'在工作');
  
  }
  
  // Web.prototype=new Person(); 可以直接继承父类的原型链
  
  Web.prototype = Person.prototype;
  
  var w = new Web('lisi',20);
  
  w.run();
  
  w.work();
  ```
  

### 1.ts中的类定义

```typescript
class Person{
    name: string; // 属性，前面省略了public关键字
    constructor(n:string){ // 构造函数，实例化类的时候触发的方法
        this.name = n;
    }
    run():void{
        alert(this.name);
    }
}
var p = new Person('张三');
p.run();
```

```typescript
class Person{
    name: string; // 属性，前面省略了public关键字
    constructor(n:string){ // 构造函数，实例化类的时候触发的方法
        this.name = n;
    }
    getName():string{
       	return this.name
    }
    setName(name:string):void{
        this.name = name
    }
}
var p = new Person('张三');
console.log(p.getName());
p.setName('李四');
console.log(p.getName());
```

### 2、ts中实现继承两个关键字：extends和super，类似于java语言

```typescript
// ts中继承的探讨，父类的方法和子类的方法一致
class Person{
    name:string;
    constructor(name:string){
        this.name = name;
    }
    run():string{
        return `${this.name}在运动`;
    }
}
var p = new Person('王五');
alert(p.run());

class Web extends Person{
    constructor(name:string){
        super(name);
    }
    run():string{
        return `${this.name}在运动-子类`;
    }
    work(){
        alert(`${this.name}在工作`);
    }
}
var w = new Web('李四');
alert(w.run());
w.work();
```

### 3.类里面的修饰符，typescript里面定义属性的时候给我们提供了三种修饰符。

**public**：公有，在**类里面**、**子类**、**类外面**都可以访问

**protected**：保护，在类里面、子类可以访问，类外面不可以访问。

**private**：私有，在类里面可以访问，子类和类外面不可以访问。

属性如果不加 修饰符，默认是公有（public）

具体例子可以用上面的代码修改测试

##  六、ts中的静态属性、静态方法、多态、抽象类

### 1.es5中的静态方法和实例方法

```js
function Person(){
    // 实例方法
    this.run1 = function(){
        
    }
}
Person.name = 'hahaha'; //静态属性 
Person.run2 = function(){ //静态方法
    
}
var p = new Person();
p.run1();
Person.run2();
```

### 2.为什么要用静态属性和静态方法呢？

```js
// jquery中的例子：
function $(element){
    return new Base(element)
}
$.get = function(){ //静态方法,不需要实例化的
    
}
function Base(element){
    this.element = 获取dom节点;
    this.css = function(arr, value){ //实例方法
        this.element.style.attr = value;
    }
}
$('#box').css('color','red');
$.get('url',function(){
    
})
```



### 3、ts中静态属性和静态方法关键字static，

* 静态方法里面只能访问静态属性，
* 静态方法和静态属性由类直接调用

```typescript
class Person{
    public name:string;
    public age:number = 20;
    
    //静态属性
    static sex = '男';
    constructor(name:string){
        this.name = name;
    }
    run(){ // 实例方法
        alert(`${this.name}在运动`)
    }
    work(){
        alert(`${this.name}在工作`)
    }
    static print(){ //静态方法
        alert('print方法'+this.number); //错误调用方法，静态方法里面没法直接调用类里面的属性
        alert('print方法'+Person.sex); //正确调用方法，静态方法里面只能访问静态属性
    }
}
var p = new Person('张三');
p.run();
Person.print();
alert(Person.sex);
```



###  4、多态：

* 父类定义一个方法不去实现，让继承它的子类去实现，每一个子类有不同的表现
* 多态也是**继承**的一种表现，多态属于继承

```typescript
class Animal{
    name:string;
    constructor(name:string) {
        this.name = name;
    }
    eat(){ // 具体吃什么？不知道，让继承他的子类去实现，每一个子类的表现不一样
        console.log('吃的方法');
    }
}
class Dog extends Animal{
    constructor(name:string){
        super(name);
    }
    eat(){
        return this.name + '吃肉';
    }
}
class Cat extends Animal{
    constructor(name:string){
        super(name);
    }
    eat(){
        return this.name + '吃老鼠';
    }
}
```



### 5、抽象类：

* ts中的抽象类：它是提供其他类继承的**基类**，不能直接被实例化
* 用**abstract**关键字定义抽象类和抽象方法，抽象类中的抽象方法**不包含具体实现**并且必须在派生类中实现。
* abstract抽象方法只能放在抽象类里面
* 抽象类和抽象方法用来定义**标准**。例子： **Animal这个抽象类要求他的子类必须包含eat方法**
* 多个子类继承抽象类可以实现多态

```typescript
abstract class Animal{
    public name:string;
    constructor(name:string){ //抽象类里可以写构造函数也可以不写
        this.name = name;
    }
    abstract eat():any;
    run(){
        console.log('其他方法可以不实现');
    }
}
var a = new Animal();//错误写法

class Dog extends Animal{
    constructor(name:any){
        super(name)
    }
    // 抽象类的子类必须实现抽象类里面的抽象方法
    eat(){
        console.log(this.name+'吃粮食');
    }
}
var d = new Dog('小花花');
d.eat();

class Cat extends Animal{
    constructor(name:any){
        super(name)
    }
    run(){
        
    }
    // 抽象类的子类必须实现抽象类里面的抽象方法
    eat(){
        console.log(this.name+'吃老鼠');
    }
}
var c = new Dog('小花花');
c.eat();
```



## 七、ts中的接口的用途，以及属性类型接口

###  1、接口的定义

* 接口的作用：在面向对象编程中，接口是一种规范的定义，它定义了行为和动作的**规范**，在程序设计里面，接口起到一种限制和规范的作用。接口定义了某一批类所需要遵守的规范，接口不关心这些类的内部状态数据，也不关心这些类里方法的实现细节，它只规定这批类里必须提供某些方法，提供这些方法的类就可以满足实际需要。ts中的接口类似于java，同时还增加了更灵活的接口类型，包括属性、函数、可索引和类等。
* 定义**标准**

### 2、属性类接口

#### 对json的约束

```typescript
// ts中定义方法
function printLabel():void{
    console.log('printLabel');
}
printLabel();

// ts中定义方法传入参数:普通类型约束
function printLabel(label:string):void{
    console.log('printLabel');
}
printLabel('hahaha');

// ts中定义方法传入参数对json进行约束
function printLabel(labelInfo:{label:string}):void{
    console.log('printLabel');
}
printLabel('hahaha'); // 错误的写法
printLabel({name:'张三'}); // 错误的写法
printLabel({label:'张三'}); // 正确的写法






```

#### 接口: 对批量方法传入参数进行约束

```typescript
// 对批量方法传入参数进行约束
// 接口:行为和动作的规范,对批量方法进行约束
// 就是传入对象的约束:属性接口
interface FullName{
    firstName:string; //注意以;结束
    secondName:string;
}
function printName(name:FullName){
    // 必须传入对象:firstName,secondName
    console.log(name.firstName+'--'+name.secondName);
}
printName('123'); // 错误的写法
printName({
    age:20,
    firstName:'张',
    secondName:'三'
}); // 错误的写法

// 正确的写法
var obj = { // 传入的参数必须包含firstName和secondName
    age:20,
    firstName:'张',
    secondName:'三'
};
printName(obj);

//--------------------------------------------
//对批量方法传入参数进行约束
interface FullName{
    firstName:string; //注意以;结束
    secondName:string;
}
function printName(name:FullName){
    // 必须传入对象:firstName,secondName
    console.log(name.firstName+'--'+name.secondName);
}
function printInfo(name:FullName){
    // 必须传入对象:firstName,secondName
    console.log(name.firstName+name.secondName);
}
var obj = { // 传入的参数必须包含firstName和secondName
    age:20,
    firstName:'张',
    secondName:'三'
};
printName(obj);
printInfo({
    firstName:'李',
    secondName:'四'
})
```

#### 接口: 可选属性

```typescript
// 可选属性
interface FullName{
    firstName:string;
    secondName?:string; //属性后面加个?,代表这个参数可传可不传
}
function getName(name:FullName){
    console.log(name)
}
//参数的顺序可以不一样
getName({
    firstName:'firstName'
})
//-----------------------------
//可选属性接口的一个例子:实现ajax
interface Config{
    type:string;
    url:string;
    data?:string;
    dataType:string;
}
function ajax(config:Config){
    var xhr = new XMLHttpRequest();
    xhr.open(config.type,config.url,true);
    xhr.send(config.data);
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            console.log('成功');
            if(config.dataType=='json'){
                console.log(JSON.parse(xhr.reponseText));
            }else{
            	console.log(xhr.responseText);                              
            }
        }
    }
}
ajax({
    type:'get',
    data:'name=zhangsan'
    url:'http://a.itying.com/api/productlist',
    dataType:'json'
})
```



### 3、函数类型接口

对方法传入的参数 以及返回值进行约束，可以批量约束 

#### 加密的函数类型接口

```typescript
interface encrypt{
    (key:string,value:string):string;
}
var md5:encrypt = function(key:string,value:string):string{
    // 模拟操作
    return key + value;
}
console.log(md5('name','zhangsan'))

var sha1:encrypt = function(key:string,value:string):string{
    // 模拟操作
    return key +'-------'+ value;
}
console.log(sha1('name','lisi'))

```

### 4、可索引接口

对**数组、对象**的约束，不常用

* 对数组的约束

  ```typescript
  // ts中定义数组的方式
  var arr:number[] = [2342,235325]
  var arr:Array<string> = ['111','222']
  
  //对数组的约束
  interface UserArr{
  
  	[index:number]: string
  
  }
  
  var arr:UserArr=['aaa','bbb'];
  console.log(arr[0])
  
  var arr:UserArr = [123,'bbb']; //错误写法
  ```
  
  
  
  对对象的约束：
  
  ```typescript
  interface UserObj{
  
  	[index:string]: string
  
  }
  
  var arr:UserObj={name:'zhangsan'};
  
  console.log(arr[0]);
  ```
  
  

###  5、类类型接口

对类的约束，和抽象类有点相似，实现类接口用implements关键字

```typescript
interface Animal{
    name:string;
    eat(str:string):void;
}
class Dog implements Animal{
    name:string;
    constructor(name:string){
        this.name = name;
    }
    eat(){ //参数不传也可以
        console.log(this.name+'吃粮食')
    }
}
var d = new Dog('小黑');
d.eat()

class Cat implements Animal{
    name:string;
    constructor(name:string){
        this.name = name;
    }
    eat(food:string){ //参数不传也可以
        console.log(this.name+'吃'+food)
    }
}
var c = new Cat('小花');
c.eat('老鼠')
```

**抽象类和类类型接口的区别：**

* 抽象类里面可以有方法的实现，但是接口完全都是抽象的，不存在方法的实现；
* 子类只能继承一个抽象类，而接口可以被多个实现；
* 抽象方法可以是public，protected，但是接口只能是public，默认的；
* 抽象类可以有构造器，而接口不能有构造器；

###  6、接口扩展

接口可以继承接口，实现接口的扩展

```typescript
interface Animal{
    eat():void;
}
interface Person extends Animal{
    work():void;
}
class Programmer{
    public name:string;
    constructor(name:string){
        this.name = name;
    }
    coding(code:string){
        console.log(this.name+code)
    }
}
class Web extends Programmer implements Person{
    constructor(name:string){
        super(name)
    }
    eat(){
        console.log(this.name+'喜欢吃馒头');
    }
    work(){
        console.log(this.name+'写代码');
    }
}
var w = new Web('小李');
w.work();
w.eat();
w.coding('写ts代码');
```



##  八、泛型

通俗理解：泛型就是解决**类、接口、方法**的复用性、以及对**不特定数据类型**的支持

### 1.问题引出：

```typescript
// 只能返回string类型的数据
function getData(value:string):string{
    return value;
}
// 同时返回string类型和number类型(代码冗余),
// 需要定义两个函数
function getData(value:string):string{
    return value;
}
function getData(value:number):number{
    return value;
}
// 用any类型
function getData(value:any):any{
    return value;
}
getData(123);
getData('str');

//但是any类型有个问题
function getData(value:string):string{
    return 'hahaha';
}
```

**any放弃了类型检查，我需要实现：传入什么类型，返回什么类型**

###  2.泛型函数：

* 可以支持不特定的数据类型，
* 要求：传入的参数和返回的参数一致

```typescript
// 例子：
//T表示泛型,具体什么类型是调用这个方法的时候确定的
function getData<T>(value:T):T{
	return value;
}
// 使用：
getData<number>(123);
// 另外一个例子：
function getData<T>(value:T):any{
	return '1421341234';
}
getData<number>(123);//参数必须是number
getData<string>('这是一个泛型');
```

### 3.泛型类

```typescript
// 泛型类:比如有个最小堆算法,需要同时支持返回数字和字符串两种类型。通过类的泛型来实现

// 只支持number类型
class MinClass {
    public list:number[] = [];
    add(num:number){
        this.list.push(num);
    }
    min():number{
        var minNum = this.list[0];
        for(var i = 0; i < this.list.length; i++) {
            if(minNum > this.list[i]){
                minNum = this.list[i];
            }
        }
        return minNum;
    }
}
var m = new MinClass();
m.add(3);
m.add(22);
m.add(23);
m.add(2);
alert(m.min());

// 类的泛型
class MinClas<T>{
    public list:T[] = [];
    add(value:T):void{
        this.list.push(value);
    }
    min():T{
        var minNum = this.list[0];
        for(var i = 0; i < this.list.length; i++) {
            if(minNum > this.list[i]){
                minNum = this.list[i];
            }
        }
        
        return minNum;
    }
}
var m1 = new MinClas<number>(); // 实例化类，并且制定了类的T代表的类型是number
m1.add(1);
m1.add(3);
m1.add(2);
alert(m1.min());


var m1 = new MinClas<string>(); // 实例化类，并且制定了类的T代表的类型是number
m1.add('a');
m1.add('c');
m1.add('v');
alert(m1.min());
```

### 4.泛型接口

```typescript
//函数类型接口回顾：
interface ConfigFn{
    (value1:string,value2:string):string;
}
var setData:ConfigFn = function(value1:string,value2:string):string{
    return value1+value2;
}
setData('name', '张三'); //这个接口只支持string类型

//如果我想让我的这个接口既支持string类型，又支持number类型呢？
interface ConfigFn{
    <T>(value:T):T;
}
var getData:ConfigFn = function<T>(value:T):T{
    return value;
}
getData<string>('张三');
getData<string>(1234); //报错，指定的类型和传入的类型不一致。

```

```typescript
//另一种写法
interface ConfigFn<T>{
    (value:T):T;
}
function getData<T>(value:T):T{
    return value;
}
var myGetData:ConfigFn<string> = getData;

myGetData('20'); // 正确的写法
myGetData(20); // 错误的写法

```

### 5.泛型类：把类当作参数的泛型类

泛类：泛型可以帮助我们避免重复的代码以及对不特定数据类型的支持（类型校验），下面我们看看把类当作参数的泛型类。

1.定义个类

2.把类作为参数来约束数据传入的类型

```typescript
/*
定义一个User的类，这个类的作用就是映射数据库字段
然后定义一个MysqlDb的类，这个类用于操作数据库
然后把User类作为参数传入到MysqlDb中
var user = new User({
	username:'张三',
	password:'123456'
})
var Db = new MysqlDb();
Db.add(user);
*/

class User{
    username:string | undefined;
    password:string | undefined;
}
class MysqlDb{
    add(user:User):boolean{
        console.log(user);
        return true;
    }
}
var u = new User();
u.username = '张三';
u.password = '123456';
var db = new MysqlDb();
db.add(u);
```

```typescript
class ArticleCate{
    title:string | undefined;
    desc:string | undefined;
    status:number | undefined;
}
class MysqlDb{
    add(info:ArticleCate):boolean{
        console.log(info);
        return true;
    }
}
var a = new ArticleCate();
a.title = '国内';
a.desc = '国内新闻';
a.status = 1;

var db = new MysqlDb();
db.add(a);
```



```typescript
// 为避免MysqlDb类重复封装，可以定义泛型类
class MysqlDb<T>{ //操作数据库的泛型类
    add(info:T):boolean{
        console.log(info);
        return true;
    }
    update(info:T,id:number):boolean{
        console.log(info);
        console.log(id);
        return true;
    }
}

// 1.定义一个User类，和数据库进行映射
class User{
    username:string | undefined;
    password:string | undefined;
}
var u = new User();
u.username = '张三';
u.password = '123456';
var db = new MysqlDb<User>();
db.add('12342134'); //错误写法
db.add(u); //正确写法

// 2.定义一个文章分类表，和数据库进行映射
class ArticleCate{
    title:string | undefined;
    desc:string | undefined;
    status:number | undefined;
    constructor(params:{
        title:string | undefined,
    	desc:string | undefined,
    	status?:number | undefined
    }){
        this.title = params.title;
        this.desc = params.desc;
        this.status = params.status;
    }
}

//增加数据
var a = new ArticleCate({
    title:'分类',
    desc:'1111', 
});
// 类当作参数的泛型类
var db = new MysqlDb<ArticleCate>();
db.add(a);

//修改数据
var a = new ArticleCate({
    title:'分类111',
    desc:'2222', 
});
a.status = 0;
var db = new MysqlDb<ArticleCate>();
db.update(a,12);
```

# 九、TypeScript类型、接口、类、泛型综合使用

**ts封装统一操作mysql mongodb mssql的底层库**

```typescript
/*
功能：定义一个操作数据库的库，支持Mysql、Mssql、MongoDb
要求：Mysql、Mssql、MongoDb功能一样，都有add、update、delete、get方法
注意：约束统一的规范、以及代码重用
解决方案：需要约束规范所以要定义接口，需要代码重用所以用到泛型
1.接口：在面向对象的编程中，接口是一种规范的定义，他定义了行为和动作的规范
2.泛型：通俗理解，泛型就是解决类、接口、方法的复用性。
*/
interface DBI<T>{
    add(info:T):boolean;
    update(info:T,id:number):boolean;
    delete(id:number):boolean;
    get(id:number):any[];
}
// 定义一个操作mysql数据库的类，注意：要实现泛型接口，这个实现接口的类也应该是泛型类
class MysqlDb<T> implements DBI<T>{
    constructor(){
        console.log('数据库建立连接');
    }
    add(info:T):boolean{
        console.log(info);
        return true;
    }
    update(info:T,id:number):boolean{
    	throw new Error('Method not implemented.');
    }
    delete(id:number):boolean{
    	throw new Error('Method not implemented.');
    }
    get(id:number):boolean{
    	var list = [
            {
                title: 'xxxx',
                desc: 'xxxxxxxx'
            },
            {
                title: 'xxxx',
                desc: 'xxxxxxxx'
            },
        ]
        return list;
    }
}
// 定义一个操作mssql数据库的类
class MsSqlDb<T> implements DBI<T>{
    constructor(){
        console.log('数据库建立连接');
    }
    add(info:T):boolean{
    	console.log(info);
        return true;
    }
    update(info:T,id:number):boolean{
    	throw new Error('Method not implemented.');
    }
    delete(id:number):boolean{
    	throw new Error('Method not implemented.');
    }
    get(id:number):boolean{
    	var list = [
            {
                title: 'xxxx',
                desc: 'xxxxxxxx'
            },
            {
                title: 'xxxx',
                desc: 'xxxxxxxx'
            },
        ]
        return list;
    }
}
//操作用户表，定义一个User类和数据表做映射
class User{
    username:string | undefined;
    password:string | undefined;
}
var u = new User();
u.username = '张三';
u.password = '123456';

var oMysql = new MysqlDb<User>();
oMysql.add(u);

var oMssql = new MssqlDb<User>();
oMssql.add(u);

// 获取User表 ID=4的数据
var data = oMssql.get(4);
console.log(data);
```

# 十、ts模块

**模块的概念（官方）**：

关于术语的一点说明：请务必注意一点，ts1.5里术语名已经发生了变化。“内部模块”现在称作“**命名空间**”。

“外部模块”现在则简称为“**模块**”，模块在其自身的作用域里执行，而不是在全局作用域里；

这意味着定义在模块里的变量、函数、类等等在模块外部是不可见的，除非你明确的使用export形式之一导出它们。

相反，如果想使用其他模块导出的变量、函数、类、接口等的时候，你必须要导入他们，可以使用import形式之一。

**模块的概念（自己理解）**：

我们可以把一些公共的功能单独抽离成一个文件作为一个模块。

模块里面的变量、函数、类等默认是私有的，如果我们要在外部访问模块里的数据（变量、函数、类），

我们需要通过export暴露模块里的数据（变量、函数、类……）。

暴漏后我们通过import引入模块就可以使用模块里面暴漏的数据（变量、函数、类……）。

## 一般普通模块使用

```typescript
// moduls/db.ts文件
var dbUrl = 'xxxxxx';
export function getData():any[]{
    console.log('获取数据库的数据');
    return [
        {
            title:'12343214'
        },
        {
            title:'1234'
        }
    ]
}
export function save(){
    console.log('保存数据成功');
}
```

```typescript
// index.ts文件：
import { getData,save } from './modules/db';
getData();
save();
//可以通过nodejs测试
```

## 另外一种使用方式

```typescript
// moduls/db.ts文件,另外一种export方式
var dbUrl = 'xxxxxx';
function getData():any[]{
    console.log('获取数据库的数据');
    return [
        {
            title:'12343214'
        },
        {
            title:'1234'
        }
    ]
}
function save(){
    console.log('保存数据成功');
}
export {
	dbUrl,
    getData,
    save
}
```

```typescript
// index.ts文件，别名形式
import {dbUrl,getData} from './modules/db';
console.log(dbUrl);
getData();

//也可以用别名
import {dbUrl,getData as get} from './modules/db';
console.log(dbUrl);
get();
```

## export default模式

```typescript
// moduls/db.ts文件
var dbUrl = 'xxxxxx';
function getData():any[]{
    console.log('获取数据库的数据');
    return [
        {
            title:'12343214'
        },
        {
            title:'1234'
        }
    ]
}
export default getData;
```

```typescript
// index.ts文件，别名形式
import getData from './modules/db';
getData();

```

## 例子：模块化封装db库

```typescript
// modules/db.ts
interface DBI<T>{
    add(info:T):boolean;
    update(info:T,id:number):boolean;
    delete(id:number):boolean;
    get(id:number):any[];
}
// 定义一个操作mysql数据库的类，注意：要实现泛型接口，这个实现接口的类也应该是泛型类
export class MysqlDb<T> implements DBI<T>{
    constructor(){
        console.log('数据库建立连接');
    }
    add(info:T):boolean{
        console.log(info);
        return true;
    }
    update(info:T,id:number):boolean{
    	throw new Error('Method not implemented.');
    }
    delete(id:number):boolean{
    	throw new Error('Method not implemented.');
    }
    get(id:number):boolean{
    	var list = [
            {
                title: 'xxxx',
                desc: 'xxxxxxxx'
            },
            {
                title: 'xxxx',
                desc: 'xxxxxxxx'
            },
        ]
        return list;
    }
}
// 定义一个操作mssql数据库的类
export class MsSqlDb<T> implements DBI<T>{
    constructor(){
        console.log('数据库建立连接');
    }
    add(info:T):boolean{
    	console.log(info);
        return true;
    }
    update(info:T,id:number):boolean{
    	throw new Error('Method not implemented.');
    }
    delete(id:number):boolean{
    	throw new Error('Method not implemented.');
    }
    get(id:number):boolean{
    	var list = [
            {
                title: 'xxxx',
                desc: 'xxxxxxxx'
            },
            {
                title: 'xxxx',
                desc: 'xxxxxxxx'
            },
        ]
        return list;
    }
}
```

```typescript
// index.ts
import {MsSqlDb} from './modules/db'

//操作用户表，定义一个User类和数据表做映射
class User{
    username:string | undefined;
    password:string | undefined;
} 
var u = new User();
u.username = '张三';
u.password = '123456';


var oMssql = new MssqlDb<User>();
oMssql.add(u);

// 获取User表 ID=4的数据
var data = oMssql.get(4);
console.log(data);
```

进一步封装User，拆解index.ts

```typescript
// model/user.ts
import {MsSqlDb} from '../modules/db';
//定义数据库的映射
class UserClass{
    username:string | undefined;
    password:string | undefined;
} 

var userModel = new MssqlDb<UserClass>();
export {
	UserClass,userModel
}
```

```typescript
// model/article.ts
import {MsSqlDb} from '../modules/db';
//定义数据库的映射
class ArticleClass{
    title:string | undefined;
    desc:string | undefined;
} 

var articleModel = new MssqlDb<ArticleClass>();
export {
	ArticleClass,articleModel
}
```



```typescript
// index.ts
import {UserClass,userModel} from './model/user';
import {ArticleClass,articleModel} from './model/article';

// 增加数据
var u = new UserClass();
u.username = '张三';
p.password = '123456';
userModel.add(u);

//获取user表数据
var res = userModel.get(123);
console.log(res);

//获取article表数据
var aRes = articleModel.get(1);
console.log(aRes);
```


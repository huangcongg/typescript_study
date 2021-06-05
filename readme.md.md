​					

##  一 、Typescript介绍、安装、开发工具

### 1、ts是js的超级。安装：npm install -g typescript 或cnpm install -g typescript

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

* 打开tsconfig.json，找到outDir项目，去掉注释，值修改为"./js"

* 打开vscode->终端->运行任务->typscript->tsc:监视-tsconfig.json,再次修改并保存ts文件时，就会在./js目录自动生成对应的js文件

  

## 二、typescript中的数据类型(上)

###  1、boolean类型

### 2、number类型

### 3、string类型

###  4、数组类型

* 第一种定义数组的方式：let arr:number[]=[1,2,34,5435]
* 第二种定义数组的方式：let arr:Array<number>=[1,2,3,4,] //泛型

###  5、元组类型（tuple）属于数组的一种

* let arr:[string,number,boolean]=['ts',3.18,true] //可以指定数组中每一个元素的类型

###  6、枚举类型

* 举例：

  * enum Flag {success=1,error=-1}

  * var f:Flag=Flag.success

  * console.log(f) //输出1

* 如果枚举类型里面没有赋值，默认值是他的索引值，从0开始索引，例如：

  * enum Color {red,blue,orange}
  * var f:Color=Color.blue

  * console.log(f)  //输出1

* 举例：如果要访问的类型没有赋值，但它上一个类型有赋值，则它的默认值是上一个的数值加一，例如

  * enum Color {red,blue=5,orange}

  * var f:Color=Color.orange

  * console.log(f)  //输出6

## 三、typescript中的数据类型(下)

###  1、any类型(任意类型)

* 案例：
  * var a:any='abc';
  * a=1;
  * a=false;//都不会报错
* 任意类型的用处
  * var oBox:any=document.getElementById('box');
  * oBox.style.color='red'; //没有object类型，用any不会报错

###  2、undefined类型

* 适用场景举例：
  * var num:number | undefined
  * console.log(num)

### 3、null类型

* 使用场景距离：
  * var num:number | null | undefined
  * num = 123
  * console.log(num)

### 4、void类型：表示没有任何类型，一般用于定义方法的时候方法没有返回值

* 举例：
  * function run():void{
  * console.log('run')
  * }

###  5、never类型：是其他类型（包括null和undefined）的子类型，代表从不会出现的值。

## 四、函数

###  1、ts中的函数可选参数要在参数名后加？

### 2、默认参数直接在参数后面赋值（不用加?)

### 3、剩余参数（三点运算符）

* function sum(...result:number[]):number{
*  }

##  五、es5中的类、静态方法、继承

###  1、es5中实现继承，通常采用对象冒充和原型链继承结合的方式，既可以给实例化构造函数传参，又可以继承原型链中的属性方法

* 举例：

  * function Person(name,age){

      this.name=name;

      this.age=age;

      this.run=function(){

    ​    alert(this.name+'在运动');

      }

    }

    function Web(name,age){

      Person.call(this,name,age);

    }

    Person.prototype.sex='男';

    Person.prototype.work=function(){

      alert(this.name+'在工作');

    }

    // Web.prototype=new Person(); 可以直接继承父类的原型链

    Web.prototype=Person.prototype;

    var w=new Web('lisi',20);

    w.run();

    w.work();

### 2、ts中实现继承两个关键字：extends和super，类似于java语言

##  六、ts中的静态属性、静态方法、多态、抽象类

### 1、静态属性和静态方法关键字static，

* 静态方法里面只能访问静态属性，
* 静态方法和静态属性由类直接调用

###  2、多态：

* 父类定义一个方法不去实现，让继承它的子类去实现，每一个子类有不同的表现
* 多态属于继承

### 3、抽象类：

* ts中的抽象类：它是提供其他类继承的基类，不能直接被实例化
* 用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。
* abstract抽象方法只能放在抽象类里面
* 抽象类和抽象方法定义标准。例子：标准：Animal这个抽象类要求他的子类必须包含eat方法
* 多个子类继承抽象类可以实现多态

## 七、ts中的接口的用途，以及属性类型接口

###  1、接口的定义

* 接口的作用：在面向对象编程中，接口是一种规范的定义，它定义了行为和动作的规范，在程序设计里面，接口起到一种限制和规范的作用。接口定义了某一批类所需要遵守的规范，接口不关心这些类的内部状态数据，也不关心这些类里方法的实现细节，它只规定这批类里必须提供某些方法，提供这些方法的类就可以满足实际需要。ts中的接口类似于java，同时还增加了更灵活的接口类型，包括属性、函数、可索引和类等。
* 定义标准

### 2、属性类接口

* 对批量方法传入参数进行 约束

### 3、函数类型接口

* 对方法传入的参数 以及返回值进行约束，可以批量约束

### 4、可索引接口

* 数组、对象的约束，不常用

* 例子：对数组的约束

  interface UserArr{

  [index:number]: string

  }

  var arr:UserArr=['aaa','bbb'];

  对数组的约束：

  * interface UserObj{

    [index:string]: string

    }

    var arr:UserObj={aaa:'zhangsan'};

    console.log(arr[0]);

###  5、类类型接口

* 对类的约束，和抽象类有点相似，实现类接口用implements关键字

###  6、接口扩展

* 接口可以继承接口，实现接口的扩展

##  八、泛型

###  1、any放弃了类型检查，我需要实现：传入什么类型，返回什么类型

###  2、泛型：可以支持不特定的数据类型，要求：传入的参数和返回的参数一致

* 例子：
* function getData<T>(value:T):T{
* return '哈哈哈';
* }
* 使用：
* getData<number>(123);
* 另外一个例子：
* function getData<T>(value:T):any{
* return '1421341234';
* }
* getData<number>(123);//参数必须是number
* getData<string>('这是一个泛型');
[TOC]



# 开始吧

## 新程序员的TypeScript

恭喜你选择TypeScript作为你的第一语言之一ーー你已经做出了正确的决定！

您可能已经听说过，TypeScript 是 JavaScript 的一种“风格”或“变体”。在现代编程语言中，TypeScript (TS)和 JavaScript (JS)之间的关系是相当独特的，因此了解这种关系将有助于您理解 TypeScript 是如何添加到 JavaScript 中的。

### 什么是 JavaScript? 简史

JavaScript (也被称为 ECMAScript)最初只是一个简单的浏览器脚本语言。在它被发明出来的时候，人们期望它被用于嵌入到网页中的短代码片段ーー编写几十行以上的代码有些不同寻常。正因为如此，早期的浏览器执行这些代码的速度相当缓慢。随着时间的推移，JS 变得越来越流行，网络开发者开始使用它来创建交互式体验。

Web 浏览器开发人员通过优化他们的执行引擎(javascript 动态编译)和扩展可以用它做的事情(添加 api)来回应 JS 使用量的增加，这反过来又使 Web 开发人员使用它更多。在现代网站上，你的浏览器经常运行跨越数十万行代码的应用程序。这是“网络”长期而渐进的发展，从一个简单的静态页面网络开始，逐渐演变成一个各种丰富应用程序的平台。

不仅如此，JS 已经变得非常流行，可以在浏览器之外使用，比如使用 node.JS 实现 JS 服务器。JS 的“随处运行”特性使其成为跨平台开发的一个有吸引力的选择。现在有很多开发者只使用 JavaScript 来编写他们的整个堆栈！

总而言之，我们有一种专门为快速使用而设计的语言，然后发展成为一种成熟的工具，可以编写具有数百万行代码的应用程序。每种语言都有它自己的怪癖ーー奇怪和令人惊讶的地方，JavaScript 的低级开始使得它有很多这样的怪癖。以下是一些例子:

* JavaScript 的相等运算符(= =)强制了它的参数，导致了意想不到的行为:

  ```js
  if ("" == 0) {
  // It is! But why??
  }
  if (1 < x < 3) {
  // True for *any* value of x!
  }
  ```

* 还允许访问不存在的属性:

  ```ts
  const obj = { width: 10, height: 15 };
  // Why is this NaN? Spelling is hard!
  const area = obj.width * obj.heigth;
  ```

大多数编程语言在出现这类错误时都会抛出一个错误，有些会在编译过程中抛出错误——在任何代码运行之前。当编写小程序时，这种怪癖很烦人，但是可以控制; 当编写带有成百上千行代码的应用程序时，这些不断出现的意外是一个严重的问题。

### TypeScript:静态类型检查器

我们之前说过有些语言根本不允许那些漏洞百出的程序运行。在不运行代码的情况下检测代码中的错误称为静态检查。根据操作的值的类型来确定什么是错误，什么不是错误，这被称为静态类型检查。

打字稿在执行之前检查程序是否有错误，并根据值的类型进行检查，它是一个静态类型检查器。例如，上面的最后一个例子有一个错误，因为 obj 的类型。下面是发现的错误打字稿:

```typescript
const obj = { width: 10, height: 15 };
const area = obj.width * obj.heigth;
//Property 'heigth' does not exist on type '{ width: number; height: number; }'. Did you mean 'height'?
```

#### 一个类型化的 JavaScript 超集

和 JavaScript 有什么关系呢？

#### 语法

是 JavaScript 的超集: JS 语法因此是合法的 TS。语法是指我们编写文本以形成程序的方式。例如，这段代码有一个语法错误，因为它缺少 a) :

```typescript
let a = (4
//')' expected.
```

TypeScript不认为任何 JavaScript 代码是一个错误，因为它的语法。这意味着你可以把任何正常工作的 JavaScript 代码放到一个TypeScript文件中，而不用担心它是怎么写的。

#### 类型

但是，TypeScript 是一个类型化超集，这意味着它添加了关于如何使用不同类型值的规则。关于 obj.heigth 的早期错误不是语法错误: 它是以不正确的方式使用某种类型的值(类型)的错误。

另一个例子是 JavaScript 代码，你可以在你的浏览器中运行，它会记录一个值:

```js
console.log(4 / []);
```

这个语法合法的程序记录 Infinity。但是 TypeScript 认为数组的除法是一个无意义的操作，并且会发出一个错误:

```typescript
console.log(4 / []);
//The right-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.
```

你可能真的想用数组除以一个数，也许只是为了看看会发生什么，但是大多数时候，这是一个编程错误。TypeScript的类型检查器被设计成允许正确的程序通过，同时仍然能够捕获尽可能多的常见错误。(稍后，我们将了解可以用来配置TypeScript如何严格检查代码的设置。)

如果您将一些代码从 JavaScript 文件移动到 TypeScript 文件，您可能会看到类型错误，这取决于代码的编写方式。这些可能是代码的合理问题，或者是TypeScript过于保守。在本指南中，我们将演示如何添加各种TypeScript语法来消除这些错误。

####  运行时行为

TypeScript也是一种保留 JavaScript 运行时行为的编程语言。例如，在 JavaScript 中除以零会产生 Infinity，而不是抛出运行时异常。作为一个原则，TypeScript 从不改变 JavaScript 代码的运行时行为。

这意味着如果你把代码从 JavaScript 转移到 TypeScript，它肯定会以同样的方式运行，即使 TypeScript 认为代码有类型错误。

保持与 JavaScript 相同的运行时行为是 TypeScript 的一个基本承诺，因为这意味着您可以轻松地在两种语言之间进行转换，而不必担心可能导致程序停止工作的细微差别。

#### 被擦除的类型

粗略地说，一旦 TypeScript 的编译器完成了对代码的检查，它就会删除这些类型以生成结果的“已编译”代码。这意味着，一旦编译了代码，生成的纯 JS 代码没有类型信息。

这也意味着TypeScript永远不会根据推断出的类型更改程序的行为。底线是，尽管在编译期间可能会看到类型错误，但类型系统本身与程序运行时的工作方式无关。

最后，TypeScript 不提供任何额外的运行时库。您的程序将使用与 JavaScript 程序相同的标准库(或外部库) ，因此不需要学习其他特定于TypeScript的框架。

#### 学习 JavaScript 和 TypeScript

我们经常会遇到这样的问题: “我应该学习 JavaScript 还是TypeScript?”。

答案是，如果你不学习 JavaScript，你就无法学习TypeScript！分享了 JavaScript 的语法和运行时行为，所以你所学到的任何关于 JavaScript 的知识都可以同时帮助你学习TypeScript。

有很多很多资源可以让程序员学习 JavaScript; 如果你正在编写TypeScript，你不应该忽略这些资源。例如，标记 javascript 的 StackOverflow 问题是TypeScript的20倍，但是所有的 javascript 问题也适用于TypeScript。

如果您正在搜索“如何在TypeScript中对列表进行排序”之类的内容，请记住: TypeScript 是 JavaScript 的运行时，带有编译时类型检查器。在TypeScript中对列表进行排序的方式和在 JavaScript 中是一样的。如果您找到了一个直接使用TypeScript的资源，那也很好，但是不要把自己局限于认为您需要为如何完成运行时任务的日常问题提供特定于TypeScript的答案。

## 为 JavaScript 程序员设计的TypeScript

和 JavaScript 之间有着不同寻常的关系。提供了所有 JavaScript 的特性，并且在这些特性之上增加了一层: TypeScript 的类型系统。

例如，JavaScript 提供了类似string和number这样的语言原语，但是它不检查你是否一贯地分配这些原语。TypeScript检查。

这意味着您现有的工作 JavaScript 代码也是 TypeScript 代码。TypeScript的主要好处是它可以突出显示代码中的意外行为，降低出现 bug 的可能性。

本教程提供了一个TypeScript的简要概述，重点介绍了它的类型系统。

### Types by Inference通过推理的类型

TypeScript熟悉 JavaScript 语言，在很多情况下会为你生成类型。例如，在创建变量并将其分配给特定值时，TypeScript 将使用该值作为类型。

```typescript
let helloWorld = "Hello World";
        
//let helloWorld: string
```

通过理解 JavaScript 的工作原理，TypeScript 可以构建一个接受 JavaScript 代码但具有类型的类型系统。这提供了一个类型系统，无需添加额外的字符就可以在代码中显式显示类型。这就是为什么 TypeScript 在上面的例子中知道 helloWorld 是一个字符串。

您可能已经在 visualstudiocode 中编写了 JavaScript，并具有编辑器自动完成功能。Visual Studio Code 在底层使用了 TypeScript，使得使用 JavaScript 更加容易。

### Defining Types定义类型

您可以在 JavaScript 中使用各种各样的设计模式。但是，有些设计模式使得类型难以自动推断(例如，使用动态编程的模式)。为了涵盖这些情况，TypeScript 支持 JavaScript 语言的一个扩展，它为你提供了告诉 TypeScript 类型应该是什么。

例如，要创建包含 name: string 和 id: number 的隐式类型的对象，可以写入:

```typescript
const user = {
  name: "Hayes",
  id: 0,
};
```

你可以使用一个接口声明来显式地描述这个对象的形状:

```typescript
interface User {
  name: string;
  id: number;
}
```

然后你可以在变量声明之后使用类似: TypeName 的语法声明一个 JavaScript 对象符合你的新接口的形状:

```typescript
const user: User = {
  name: "Hayes",
  id: 0,
};
```

如果你提供的对象与你提供的接口不匹配，TypeScript 会警告你:

```typescript
interface User {
  name: string;
  id: number;
}

const user: User = {
  username: "Hayes",
//Type '{ username: string; id: number; }' is not assignable to type 'User'.Object literal may only specify known properties, and 'username' does not exist in type 'User'.
  id: 0,
};
```

因为 JavaScript 支持类和面向对象程序设计，所以 TypeScript 也是如此，你可以对类使用一个接口声明:

```typescript
interface User {
  name: string;
  id: number;
}

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user: User = new UserAccount("Murphy", 1);
```

你可以使用接口对参数进行注释，并将值返回给函数:

```typescript
function getAdminUser(): User {
  //...
}

function deleteUser(user: User) {
  // ...
}
```

在 JavaScript 中已经有一小组基本类型可用: boolean、 bigint、 null、 number、 string、 symbol 和 undefined，您可以在接口中使用它们。TypeScript 扩展了这个列表，比如 any (allow anything)、 unknown (确保使用这个类型的人声明了类型是什么)、 never (这种类型不可能发生)和 void (返回未定义或没有返回值的函数)。

您将看到构建类型有两种语法: interfaces和types。你应该更喜欢接口。需要特殊功能时使用类型。

### Composing Types构建类型

使用 TypeScript，您可以通过组合简单的类型来创建复杂的类型。有两种流行的方法可以做到这一点: 用unions（联合），和用Generics（泛型）。

#### Unions联合

使用联合，您可以声明一个类型可以是许多类型之一。例如，你可以将布尔类型描述为 true 或 false:

```typescript
type MyBool = true | false;
```

注意: 如果你把鼠标悬停在 MyBool 上面，你会看到它被归类为布尔值。这是结构类型系统的一个属性。以下是更多关于这个的信息。

一个流行的联合类型用例是描述允许值为的字符串或数字字面量的集合:

```typescript
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;
```

联合也提供了一种处理不同类型的方法。例如，你可能有一个接受数组或字符串的函数:

```typescript
function getLength(obj: string | string[]) {
  return obj.length;
}
```

要知道变量的类型，使用 typeof:

| Type 类型          | Predicate 断言                     |
| :----------------- | :--------------------------------- |
| string 弦          | `typeof s === "string"`            |
| number 数字        | `typeof n === "number"`            |
| boolean 布尔       | `typeof b === "boolean"`           |
| undefined 未定义的 | `typeof undefined === "undefined"` |
| function 函数      | `typeof f === "function"`          |
| array 数组         | `Array.isArray(a)`                 |

例如，你可以让一个函数返回不同的值，这取决于它传递的是字符串还是数组:

```typescript
function wrapInArray(obj: string | string[]) {
  if (typeof obj === "string") {
    return [obj];
           //(parameter) obj: string
  } else {
    return obj;
  }
}
```

#### Generics泛型

泛型为类型提供变量。一个常见的例子是数组。没有泛型的数组可以包含任何内容。带泛型的数组可以描述数组包含的值。

```typescript
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;
```

你可以声明你自己使用泛型的类型:

```typescript
interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}

// This line is a shortcut to tell TypeScript there is a
// constant called `backpack`, and to not worry about where it came from.
declare const backpack: Backpack<string>;

// object is a string, because we declared it above as the variable part of Backpack.
const object = backpack.get();

// Since the backpack variable is a string, you can't pass a number to the add function.
backpack.add(23);
// Argument of type 'number' is not assignable to parameter of type 'string'.
```

### Structural Type System结构类型系统

TypeScript的核心原则之一是类型检查关注值的形状。这有时被称为“ duck typing”或“ structural typing”。

在结构类型系统中，如果两个对象具有相同的形状，则认为它们是同一类型的。

```typescript
interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

// logs "12, 26"
const point = { x: 12, y: 26 };
logPoint(point);
```

point 变量永远不会被声明为 Point 类型。但是，TypeScript在类型检查中将point的形状与Point的形状进行比较。它们具有相同的形状，因此代码可以通过。

形状匹配只需要匹配对象字段的一个子集。

```typescript
const point3 = { x: 12, y: 26, z: 89 };
logPoint(point3); // logs "12, 26"

const rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect); // logs "33, 3"

const color = { hex: "#187ABF" };
logPoint(color);
//	Argument of type '{ hex: string; }' is not assignable to parameter of type 'Point'.Type '{ hex: string; }' is missing the following properties from type 'Point': x, y

```

类和对象符合形状的方式没有区别:

```typescript
class VirtualPoint {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const newVPoint = new VirtualPoint(13, 56);
logPoint(newVPoint); // logs "13, 56"
```

如果对象或类具有所有必需的属性，无论实现细节如何，TypeScript 都会说它们匹配。

# 手册

## 1、TypeScript手册

### 关于这本手册

在被引入编程社区20多年后，JavaScript 现在已经成为有史以来最广泛使用的跨平台语言之一。作为一个为网页添加琐碎的交互性的小脚本语言，JavaScript 已经成长为一种前端和后端应用程序的首选语言。虽然用 JavaScript 编写的程序的大小、范围和复杂性都呈指数级增长，但 JavaScript 语言表达不同代码单元之间关系的能力却没有。结合 JavaScript 特有的运行时语义，语言和程序复杂性之间的不匹配使得 JavaScript 的开发成为一项难以规模化管理的任务。

程序员编写的最常见的错误类型可以被描述为类型错误: 在需要不同类型值的地方使用了某种类型的值。这可能是由于简单的拼写错误、未能理解库的 API 表面、对运行时行为的错误假设或其他错误。TypeScript 的目标是成为 JavaScript 程序的静态类型检查器——换句话说，它是一个在代码运行(静态)之前运行的工具，并确保程序的类型是正确的(类型检查)。

如果你打算在没有 JavaScript 背景的情况下开始ts，并且打算把ts作为你的第一种语言，我们建议你首先从 Mozilla Web 文档开始阅读关于 JavaScript 的文档。如果你有其他语言的经验，你应该能够通过阅读手册快速学会 JavaScript 语法。

### 这本手册是如何构建的

该手册分为两部分:

* 手册

手册旨在成为一份向普通程序员解释打字脚本的综合性文档。你可以在左边的导航栏里从上到下阅读这本手册。

您应该期望每一章节或每一页都能为您提供对给定概念的深刻理解。手册并不是一个完整的语言规范，但是它是一个关于语言的所有特性和行为的全面指南。

完成本演练的读者应该能够:	

> 阅读和理解常用的ts语法和模式
>
> 解释重要编译器选项的效果
>
>  在大多数情况下正确预测类型系统行为

为简明扼要起见，《手册》的主要内容将不探讨所涵盖特征的每一个边缘案例或细节。你可以在参考文章中找到关于特定概念的更多细节。

- 参考文件

导航手册下面的参考部分是为了更好地理解ts的特定部分是如何工作的。你可以从头到尾地阅读它，但是每个部分都旨在对单一概念提供更深入的解释——这意味着没有连续性的目标。

### 非目标

《手册》还打算成为一份简明的文件，可以在几个小时内轻松阅读。为了简短起见，某些话题不会被涉及。

具体来说，这本手册没有完全介绍 JavaScript 的核心基础知识，比如函数、类和闭包。在适当的地方，我们将包括背景阅读的链接，你可以用它来阅读这些概念。

该手册也不打算成为语言规范的替代品。在某些情况下，将跳过边缘案例或行为的正式描述，以利于高层次的、易于理解的解释。相反，有一些单独的参考页面更加精确和形式化地描述了ts行为的许多方面。参考页面不是为不熟悉打字稿的读者准备的，所以他们可能使用了你还没有读过的高级术语或参考主题。

最后，手册不会介绍ts如何与其他工具交互，除非有必要。诸如如何用 webpack、 rollup、 parcel、 react、 babel、 closure、 lerna、 rush、 bazel、 preact、 vue、 angular、 svelte、 jquery、 yarn 或 npm 配置ts的主题已经超出了范围——你可以在网上的其他地方找到这些资源。

### 开始吧

## 2、基本知识

欢迎来到手册的第一页，如果这是你第一次使用打字稿，你可以从“开始吧”开始

JavaScript 中的每个值都有一组行为，您可以通过运行不同的操作来观察它们。这听起来很抽象，但是作为一个简单的例子，考虑一下我们可能在一个名为 message 的变量上运行的一些操作。

```js
// Accessing the property 'toLowerCase'
// on 'message' and then calling it
message.toLowerCase();
// Calling 'message'
message();
```

如果我们分解它，第一行可运行的代码访问一个名为 toLowerCase 的属性，然后调用它。第二个试图直接调用message。

但是假设我们不知道message的值——这是很常见的——我们不能可靠地说我们试图运行这些代码会得到什么结果。每个操作的行为完全取决于我们最初拥有的值。

* message可调用吗？
* 有个叫toLowerCase的属性吗？
* 如果有，toLowerCase可调用吗？
* 如果message和toLowerCase都是可调用的，它返回什么？

这些问题的答案通常是当我们写js代码的时候在我们脑袋里会思考的事情，并且我们不得不希望我们保持所有的细节正确。

让我们看看下面定义的message

```typescript
const message = "Hello World!";
```

正如我们可能猜到的，如果我们尝试运行message.toLowerCase(),我们会得到只有小写字母的同样的字符串。

代码的第二行怎么了？如果你对js熟悉，你会知道这是一个exception的错误。

```typescript
TypeError: message is not a function
```

如果我们能够避免像这样的错误就太好了。

当我们运行我们的代码，js runtime选择做什么的方式是通过弄清楚值的类型-它有哪种行为和能力。那是TypeError暗指的部分-就是说字符串“Hello World！”不能作为函数来调用。

对于一些类型，比如原类型string和number，我们能够通过typeof操作符在runtime辨别他们的类型。但是对于像函数的其他类型，没有相应的runtime机制来辨别他们的类型。例如，考虑这个函数：

```js
function fn(x) {
    return x.flip();
}
```

我们通过阅读代码可以发现这个函数只有在具有可调用flip属性的对象时才会工作，但是当代码运行时，js不以我们能检查的方式显示这个信息。在纯js中如果想要知道带特定值的fn做什么，就调用它并且看看发生了什么。这种行为使在代码运行之前预测它会做什么很困难，这意味着想要知道当你正在写代码时你的代码将要做什么会很困难。

以这种方式看，一个type是描述哪个值能被传递给fn并且哪个会崩溃的概念。js只提供动态类型检查-运行代码看看发生什么。

另一种选择是使用静态类型系统在运行之前去预测代码会发生什么。

### 静态类型检查

返回TypeError想想，我们最早把一个字符串当作函数调用。大多数人不喜欢运行代码的时候出现错误-这些被认为是bug！并且当我们写新代码时，我们尽我们的努力避免引入新bug。

如果我们刚刚添加一些代码，保存我们的文件，重运行代码，并且立即看到错误，我们可能能够很快地隔离这个错误；但是那不总是那种情况。我们可能还没有足够充分的测试这个特性，因此我们可能实际上从来没有进入抛出的潜在的错误。或者如果我们足够幸运的目击到这个错误，我们可能已经终止大量的重构，并且添加被强迫挖掘的大量不同的代码。

理想的是，我们可能有一个工具帮助我们在我们的代码运行之前发现这些bug。那是像ts这样的静态类型检查做的事情。静态类型系统描述当我们运行我们的程序时我们的值会变成的形状和行为。一个像ts类型检查器使用哪个信息并且告诉我们什么时候事情可能正在离轨道。

```typescript
const message = "hello!";
message();
//This expression is not callable.Type 'String' has no call signatures.
```

在我们首先运行代码之前，用ts写上面的例子将会向我们提示错误。

### 非例外故障

目前我们一直在讨论运行时错误的某些事情-JavaScript运行时告诉我们它认为某些东西是荒谬的。之所以会出现这些情况，是因为 ECMAScript 规范明确指出，当遇到意外情况时，该语言应该如何表现。

例如，规范说，试图调用不可调用的东西应该抛出错误。也许这听起来像是“显而易见的行为”，但是您可以想象，访问对象上不存在的属性也应该抛出错误。相反，JavaScript 给出了不同的行为，并返回未定义的值:

```typescript
const user = {
  name: "Daniel",
  age: 26,
};
user.location; // returns undefined
```

最终，静态类型系统必须调用系统中应该标记为错误的代码，即使它是“有效的”JavaScript，不会立即抛出错误。在 TypeScript 中，下面的代码会产生一个关于未定义位置的错误:

```typescript
const user = {
  name: "Daniel",
  age: 26,
};

user.location;
// Property 'location' does not exist on type '{ name: string; age: number; }'.
```

虽然有时候这意味着在你能表达的东西上有所取舍，但是我们的目的是在我们的程序中捕捉合法的 bug。而且ts捕捉了很多合法的漏洞。

例如：错别字（typos），

```typescript
const announcement = "hello World!";

//How quickly can you spot the typos?
announcement.toLocaleLowercase();
announcement.toLocalLowerCase();

//We probably meant to write this...
announcement.toLocaleLowerCase();
```

未调用的函数，

```typescript
function flipCoin() {
    //Meant to be Math.random()
    return Math.random < 0.5;
    // Operator  '<' cannot be applied to types '() => number' and 'number'.
}
```

或基本逻辑错误。

```typescript
const value = Math.random() < 0.5 ? "a" : "b";
if (value !== "a") {
  // ...
} else if (value === "b") {
//This condition will always return 'false' since the types '"a"' and '"b"' have no overlap.
  // Oops, unreachable
}
```

### 工具类型

当我们在代码中出错时ts能捕捉bug。那很棒，但是ts能第一时间阻止我们出现bug。

类型检查器有信息来检测是否我们访问了变量的正确属性和其他属性。一旦它有信息，它也能开始建议你可能想要使用哪个属性。

这意味着可以利用 TypeScript 来编辑代码,并且核心类型检查器能提供错误信息和当你在把编辑器敲代码时代码自动完成。这是人们在讨论ts中的工具时经常提到的一部分。

![image-20210626101239668](TypeScriptDoc.assets/image-20210626101239668.png)

ts非常重视工具，而且在输入时不仅仅是自动完成和错误提示。一个支持ts的编辑器可以提供“快速修复”来自动修复错误，重构代码以方便地重新组织代码，以及有用的导航功能，用于跳转到变量的定义，或查找给定变量的所有引用。所有这些都构建在类型检查器之上，并且是完全跨平台的，因此您喜欢的编辑器很可能具有可用的ts支持。

### tsc，类型编译器

我们一直在谈论类型检查，但是我们还没有使用我们的类型检查器。让我们来了解一下我们的新朋友 tsc，编译器。首先，我们需要通过 npm 获取它。

```shell
npm install -g typescript
```

这将在全局安装ts编译器 tsc。如果您希望从本地节点 _ 模块包运行 tsc，可以使用 npx 或类似的工具。

现在让我们移动到一个空文件夹并且尝试写我们的第一个ts程序:hello.ts:

```typescript
// Greets the world.
console.log("hello world!");
```

注意，这里没有修饰; 这个“ hello world”程序看起来与用 JavaScript 编写的“ hello world”程序一模一样。然后现在让我们来通过运行命令tsc对他做类型检查，这是通过ts包为我们安装的。

```shell
tsc hello.ts
```

嗒嗒！

等等，“嗒嗒”到底是什么？我们运行了 tsc，什么都没发生！嗯，没有类型错误，所以我们没有得到任何输出在我们的控制台，因为没有什么要报告。

但再次检查-我们得到了一些文件输出代替。如果我们查看我们的工作目录文件夹，我们会看到一个 hello.js 文件在 hello.ts 旁边。这是在 tsc 编译或转换为纯 JavaScript 文件之后，hello.ts 文件的输出。如果我们检查内容，我们会看到ts在处理了一个.ts文件之后输出了什么:

```js
// Greets the world.
console.log("Hello world!");
```

在这种情况下，几乎没有什么需要ts转换的地方，所以它看起来和我们写的一模一样。编译器试图发出清晰可读的代码，这些代码看起来像是人们编写的代码。虽然这并不总是那么容易，但是 TypeScript 始终如一地缩进，注意我们的代码跨越不同代码行的时间，并尽量保留注释。

如果我们引入了一个类型检查错误呢? 让我们重写 hello.ts:

```typescript
// This is an industrial-grade general-purpose greeter function:
function greet(person, date) {
  console.log(`Hello ${person}, today is ${date}!`);
}

greet("Brendan");
```

如果我们再一次运行tsc hello.ts，注意到我们在命令行出现一个错误！

```shell
Expected 2 arguments, but got 1.
```

ts正在告诉我们我们忘记了像greet函数传递一个参数，这是正确的。到目前为止我们仅仅写了标准的js，然后类型检查器依然能够返现我们代码的错误。谢谢ts！

### 发出错误

一件你可能还没有从上一个例子注意到的事情是我们的hello.js文件再次改变了。如果我们打开这个文件，我们会看到它的内容看起来基本上和我们的输入文件一样。考虑到 tsc 报告了一个关于我们代码的错误，这可能有点令人惊讶，但这是基于ts的核心价值之一: 大多数时候，你会比ts更清楚。

为了重申以前的观点，类型检查代码限制了可以运行的程序类型，因此类型检查器可以在哪些类型的事情上进行权衡。在大多数情况下，这是可以的，但是在某些情况下，这些检查会成为障碍。例如，想象自己将 JavaScript 代码迁移到 TypeScript 并引入类型检查错误。最终，您将抽出时间为类型检查器清理东西，但是原始的 JavaScript 代码已经在工作了！为什么把它转换成ts就不能运行了呢？

所以ts不会妨碍你。当然，随着时间的推移，你可能需要对错误采取更多的防御措施，并使ts更加严格。在这种情况下，您可以使用 -- noEmitOnError 编译器选项。尝试更改 hello.ts 文件并使用该标志运行 tsc:

```shell
tsc --noEmitOnError hello.ts
```

你会发现hello.js再也不会更新。

### 显式类型

到目前为止，我们还没有告诉TypeScript person是什么，date是什么。让我们编辑代码，告诉 TypeScript person是一个字符串，那个date应该是一个 Date 对象。我们还将在date上使用 toDateString ()方法。

```typescript
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
```

我们所做的就是在 person 和 date 上添加类型注释来描述什么类型的值可以调用 greet。你可以阅读签名作为“ greet 采用字符串类型的人，和日期类型的date”。

有了这个，TypeScript 可以告诉我们其他一些可能被错误调用的情况。例如......

```typescript
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet("Maddison", Date());
//Argument of type 'string' is not assignable to parameter of type 'Date'.
```

Huh? TypeScript reported an error on our second argument, but why?

哈？ts在第二行报告一个错误，不是为什么呢？也许令人惊讶的是，在 JavaScript 中调用 Date ()将返回一个字符串。另一方面，构造一个带有new Date ()的 Date 实际上给了我们所期望的。

无论如何，我们可以快速修复这个错误:

```typescript
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet("Maddison", new Date());
```

请记住，我们并不总是需要编写明确的类型注释。在许多情况下，即使我们省略了类型，TypeScript 甚至可以为我们推断(或者“推断出”)类型。

![image-20210626180849938](TypeScriptDoc.assets/image-20210626180849938.png)

尽管我们没有告诉打字脚本 msg 有类型字符串，但是它能够解决这个问题。这是一个特性，当类型系统最终推断出相同的类型时，最好不要添加注释。

`注意: 上面的代码示例中的消息冒泡。如果你在这个单词上徘徊，你的编辑就会这么做。`

### 擦除类型

让我们看看当我们用tsc编译上面的函数greet成js文件会发生什么：

```typescript
"use strict";
function greet(person, date) {
    console.log("Hello " + person + ", today is " + date.toDateString() + "!");
}
greet("Maddison", new Date());
```

这里注意两件事：

1. person和date参数不再有类型注释。
2. 模板字符串-用回勾(`字符)的字符串-被转换成用+连接的普通字符串。

后面我们会详细讨论第二点，但是现在让我们关注第一点。类型注释不是 JavaScript 的一部分(或者说 ECMAScript 是迂腐的) ，所以真的没有任何浏览器或者其他运行时可以不经修改就运行ts。这就是为什么ts首先需要一个编译器——它需要某种方法去掉或转换任何特定于ts的代码，以便您可以运行它。大多数特定于ts的代码都会被擦除，同样，这里的类型注释也被完全擦除。

`记住：类型注释从来不会改变你程序的运行时行为。`

### 下调

与上面的另一个区别是，我们的模板字符串被由：

```typescript
`Hello ${person}, today is ${date.toDateString()}!`;
```

重写成：

```ts
"Hello " + person + ", today is " + date.toDateString() + "!";
```

为什么会这样呢？

模板字符串是 ECMAScript 2015版本的一个特性，称为 ECMAScript 2015(也就是 ECMAScript 6、 ES2015、 ES6等等——不要问)。ts能够将新版本的 ECMAScript 代码重写到旧版本，如 ECMAScript 3或 ECMAScript 5(又名 ES3和 ES5)。从一个更新或“更高”的 ECMAScript 版本下降到一个更旧或“更低”版本的过程有时被称为下调。

默认情况下，ts的目标是 ES3，一个非常老的 ECMAScript 版本。我们可以使用 -- target 标志选择一些更新的内容。使用-- target es2015将ts更改为针对 ECMAScript 2015，这意味着代码应该能够在支持 ECMAScript 2015的任何地方运行。因此，运行 tsc -- target es2015 hello.ts 可以得到以下输出:

```js
function greet(person, date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
greet("Maddison", new Date());
```

`虽然默认的目标是 ES3，但目前大多数浏览器都支持 ES2015。因此，大多数开发人员可以安全地将 ES2015或以上指定为目标，除非与某些古老浏览器的兼容性很重要。`

### 精确性

不同的用户使用ts在类型检查器中寻找不同的东西。有些人正在寻找一个更松散的选择-在经验，可以帮助验证他们的程序只有一些部分，仍然有体面的工具。这是 TypeScript 的默认体验，其中类型是可选的，推断采用最宽松的类型，并且不检查潜在的 null/undefined 值。就像 tsc 在面对错误时发出的信号一样，这些默认值被放置在适当的位置以避免您的干扰。如果您正在迁移现有的 JavaScript，这可能是一个可取的第一步。

相比之下，很多用户更喜欢让 TypeScript 尽可能直接地进行验证，这就是为什么该语言也提供了严格的设置。这些严格的设置将静态类型检查从开关(无论您的代码是否被检查)转变为更接近于刻度盘的设置。你拨号拨得越远，越多的ts会为你检查。这可能需要一些额外的工作，但一般来说，从长远来看，这样做是值得的，并且可以进行更彻底的检查和更精确的工具。如果可能的话，一个新的代码库应该总是启用这些严格的检查。

TypeScript 有几个类型检查严格性标志，可以打开或关闭，除非另有说明，否则我们所有的示例都是在启用它们的情况下编写的。CLI 中的 -- strict 标志，或者叫做“ strict”: 在 tsconfig.json 中为 true，可以同时切换所有选项，但是我们可以单独选择退出。你应该知道的两个最重要的检查是 noImplicitAny 和 strictnullcheck。

#### `noImplicitAny`

回想一下，在某些地方，TypeScript 并没有尝试为我们推断任何类型，而是回到了最宽松的类型: any。这并不是最糟糕的事情——毕竟，回到any都只是纯粹的 JavaScript 体验。

然而，使用any常常首先都会违背使用ts的初衷。您的程序输入的类型越多，您得到的验证和工具就越多，这意味着您在编码过程中遇到的 bug 就越少。打开 noImplicitAny 标志将对任何类型被隐式推断为 any 的变量发出错误。

#### `strictNullChecks`

默认情况下，像 null 和 undefined 这样的值可以分配给任何其他类型。这可以让编写代码变得更容易，但是忘记处理 null 和未定义的代码会导致世界上无数的 bug ——有些人认为这是一个十亿美元的错误！Stricttnullchecks 标志使处理 null 和 undefined 变得更加明确，使我们不必担心是否忘记处理 null 和 undefined。

## 3、日常类型

在本章中，我们将介绍一些在 JavaScript 代码中值的最常见的类型，并解释在 TypeScript 中描述这些类型的相应方法。这并不是一个详尽的列表，以后的章节将描述更多命名和使用其他类型的方法。

类型还可以出现在许多地方，而不仅仅是类型注释。当我们了解类型本身时，我们还将了解可以引用这些类型来形成新结构的位置。

我们将首先回顾一下在编写 JavaScript 或ts代码时可能遇到的最基本和最常见的类型。这些将在以后形成更复杂类型的核心构建块。

### 原语: 字符串、数字和布尔值

js有三种非常常用的原语: 字符串、数字和布尔值。每个都有一个相应的ts类型。正如您可能预期的那样，如果对这些类型的值使用 javascript typeof 操作符，您将看到这些名称: 

* string 表示字符串值，如“ Hello，world”
* number 表示类似42的数字。JavaScript 对于整数没有一个特殊的运行时值，所以没有与 int 或 float 等价的东西——一切都只是number
* boolean是有两个值 true 和 false 的 Number Boolean。

> 类型名字 String、 Number 和 Boolean (以大写字母开头)是合法的，但是引用一些特殊的内置类型，这些类型很少出现在代码中。对于类型，总是使用字符串、数字或布尔值。

### 数组

为了指定像【1，2，3】这样的数组类型，你可以使用语法`number[]`;这个语法适用于任何类型(例如:string[]是一个字符串的数组，等等)。你也可以写成`Array<number>`,效果一样。当我们学到泛型的时候会了解关于语法`T<U>`的更多。

> 注意[number]是不同的东西；参考元组类型部分

### `any`

ts也有一个特殊类型，any，你可以在任何你不想要由特殊值引起类型检查错误的地方使用。

当一个值的类型是 any 时，你可以访问它的任何属性(反过来也可以是 any 类型的属性) ，像调用函数一样调用它，将它赋给(或从)任何类型的值，或者几乎所有其他在语法上合法的属性:

```typescript
let obj: any = { x: 0 };
// 以下代码行都不会抛出编译器错误。使用‘ any’将禁用所有进一步的类型检查，并且假定您比 TypeScript 更了解环境。
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;
```

当你不想仅仅为了让ts相信某一行代码是可行的而写出一个长类型时，any 类型是很有用的。

`noImplicitAny`

如果不指定类型，并且 TypeScript 不能从上下文推断出类型，编译器通常会默认为any。

不过，您通常希望避免这种情况，因为没有对any进行检查。使用编译器标记 noImplicitAny 将任何隐含的any标记为错误。

### 变量的类型注释

使用 const、 var 或 let 声明变量时，可以选择添加类型注释以显式指定变量的类型:

```typescript
let myName: string = "Alice";
```

>ts不使用“类型在左边”风格的声明，比如 int x = 0; 类型注释总是紧跟在输入的内容之后。

然而，在大多数情况下，这是不必要的。只要有可能，TypeScript 就会尝试自动推断代码中的类型。例如，变量的类型是基于其初始化器的类型来推断的:

```typescript
// No type annotation needed -- 'myName' inferred as type 'string'
let myName = "Alice";
```

在大多数情况下，您不需要明确地学习推理的规则。如果你刚开始使用，尝试使用比你想象的更少的类型注释——你可能会惊讶于你需要 TypeScript 来完全理解发生了什么。

### 函数

函数是 JavaScript 中传递数据的主要方式。允许您指定函数的输入和输出值的类型。

#### 参数类型注释

在声明函数时，可以在每个参数后面添加类型注释，以声明函数接受哪些类型的参数。参数类型注释跟在参数名后面:

```typescript
// Parameter type annotation
function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}
```

当一个参数具有类型注释时，该函数的参数将被检查:

```typescript
// Would be a runtime error if executed!
greet(42);
//Argument of type 'number' is not assignable to parameter of type 'string'.
```

> 即使您的参数上没有类型注释，TypeScript 仍然会检查您传递的参数数量是否正确。

#### 返回类型注释

你也可以添加返回类型注释，返回类型注释会出现在参数列表之后:

```typescript
function getFavoriteNumber(): number {
  return 26;
}
```

很像变量类型注释，您通常不需要返回类型注释，因为 TypeScript 将根据函数的返回语句推断其返回类型。上面示例中的类型注释不会改变任何东西。有些代码库为了文档目的，为了防止意外的更改，或者仅仅为了个人喜好，会显式地指定返回类型。

#### 匿名函数

匿名函数与函数声明略有不同。当一个函数出现在可以决定如何调用它的地方时，该函数的参数将自动给定类型。

例如：

![image-20210626214526635](TypeScriptDoc.assets/image-20210626214526635.png)

尽管参数 s 没有类型注释，但 TypeScript 使用 forEach 函数的类型以及数组的推断类型来确定 s 将具有的类型。

这个过程称为上下文类型化，因为函数发生的上下文告诉了它应该具有什么类型。与推理规则类似，您不需要明确地了解这种情况是如何发生的，但是了解它确实发生了可以帮助您注意到何时不需要类型注释。稍后，我们将看到更多示例，说明值出现的上下文如何影响其类型。

### 对象类型

除了基本类型之外，最常见的类型是对象类型。这指的是任何带有属性的 JavaScript 值，这几乎是所有的属性！要定义对象类型，只需列出其属性及其类型。

例如，这里有一个接受点状对象的函数:

```typescript
// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
```

在这里，我们用具有两个属性(x 和 y)的类型对参数进行了注释，这两个属性都是 number 类型。您可以使用，或; 来分隔属性，最后一个分隔符是可选的。

每个属性的类型部分也是可选的。如果没有指定类型，则假定它是any类型。

#### 可选属性

对象类型还可以指定其部分或全部属性是可选的。要做到这一点，添加一个？在属性名称后面:

```typescript
function printName(obj: { first: string; last?: string }) {
  // ...
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });
```

在 JavaScript 中，如果你访问一个不存在的属性，你会得到一个未定义的值，而不是一个运行时错误。因此，当您从可选属性读取时，在使用它之前必须检查未定义的属性。

```typescript
function printName(obj: { first: string; last?: string }) {
  // Error - might crash if 'obj.last' wasn't provided!
  console.log(obj.last.toUpperCase());
Object is possibly 'undefined'.
  if (obj.last !== undefined) {
    // OK
    console.log(obj.last.toUpperCase());
  }

  // A safe alternative using modern JavaScript syntax:
  console.log(obj.last?.toUpperCase());
}
```

### 联合类型

ts的类型系统允许您使用大量的操作符在现有类型的基础上构建新的类型。现在我们知道了如何编写一些类型，是时候开始以有趣的方式组合它们了。

#### 定义一个联合类型

组合类型的第一种方法是联合类型。联合类型是由两个或多个其他类型组成的类型，表示可能是其中任何一个类型的值。我们将这些类型中的每一种称为联合成员。

让我们编写一个可以操作字符串或数字的函数:

```typescript
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");
// Error
printId({ myID: 22342 });
/*
类型“{ myID: number; }”的参数不能分配给类型“ string | number”的参数。类型“{ myID: number; }”不能分配给类型“ number”。*/
```

#### 与联合类型合作

如果 union 对每个成员都有效，则 TypeScript 将只允许您使用 union 进行处理。例如，如果你有联合字符串 | 数字，你不能使用只能在字符串上使用的方法:

```typescript
function printId(id: number | string) {
  console.log(id.toUpperCase());
/*
Property 'toUpperCase' does not exist on type 'string | number'.Property 'toUpperCase' does not exist on type 'number'.
*/
}
```

解决方案是用代码缩小联合，就像在 JavaScript 中不使用类型注释一样。当 TypeScript 可以根据代码的结构推断出某个值的更特定的类型时，就会发生收缩。

例如，TypeScript 知道只有一个字符串值才有一个“ string”的typeof值:

```typescript
function printId(id: number | string) {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}
```

另一个例子是使用类似于 Array.isArray 的函数:

```typescript
function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    // Here: 'x' is 'string[]'
    console.log("Hello, " + x.join(" and "));
  } else {
    // Here: 'x' is 'string'
    console.log("Welcome lone traveler " + x);
  }
}
```

注意，在 else 分支中，我们不需要做任何特殊的操作——如果 x 不是字符串[] ，那么它一定是一个字符串。

有时你会遇到一个所有成员都有共同点的联合。例如，数组和字符串都有一个切片方法。如果联合中的每个成员都有一个共同属性，则可以使用该属性而不进行收缩:

```typescript
// Return type is inferred as number[] | string
function getFirstThree(x: number[] | string) {
  return x.slice(0, 3);
}
```

>类型的联合似乎具有这些类型的属性的交集，这可能令人困惑。这并非偶然——联合的名称来自于类型理论。联合number | string由每个类型的值的联合组成。请注意，给定两个集合，每个集合都有相应的事实，只有这些事实的交集适用于集合本身的并。例如，如果我们有一个房间的高个子戴着帽子，而另一个房间的西班牙人戴着帽子，在合并了这些房间之后，我们唯一知道的就是每个人都必须戴着帽子。

### 类型别名

我们通过直接在类型注释中编写对象类型和联合类型来使用它们。这很方便，但是通常希望多次使用同一类型并使用单个名称引用它。

类型别名就是这样——任何类型的名称。类型别名的语法是:

```typescript
type Point = {
  x: number;
  y: number;
};

// 与前面的例子完全相同
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });
```

实际上，您可以使用类型别名为任何类型提供名称，而不仅仅是对象类型。例如，类型别名可以命名联合类型:

```typescript
type ID = number | string;
```

请注意别名只是别名——您不能使用别名来创建同一类型的不同的“版本”。当您使用别名时，就像您编写了别名类型一样。换句话说，这段代码可能看起来是非法的，但是根据ts来看是可以的，因为这两种类型都是同一类型的别名:

```typescript
type UserInputSanitizedString = string;

function sanitizeInput(str: string): UserInputSanitizedString {
  return sanitize(str);
}

// 创建一个经过净化的输入
let userInput = sanitizeInput(getInput());

// 仍然可以用字符串重新分配
userInput = "new input";
```

### 接口

接口声明是命名对象类型的另一种方式:

```typescript
interface Point {
  x: number;
  y: number;
}

function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });
```

就像我们上面使用类型别名时一样，这个示例的工作方式就像我们使用了匿名对象类型一样。TypeScript 只关心我们传递给 printCoord 的值的结构——它只关心它是否具有预期的属性。仅仅关注类型的结构和功能，这就是为什么我们称ts为结构类型系统。

#### 类型别名和接口之间的区别

类型别名和接口非常相似，在许多情况下，您可以在它们之间自由选择。接口的几乎所有特性都是类型可用的，**关键区别在于不能重新打开类型以添加新的属性，而接口总是可扩展的**.

| 接口                                                         | 类型                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| 扩展接口                                                     | 通过交叉点扩展类型                                           |
| interface Animal {   name: string }<br />interface Bear extends Animal {   honey: boolean } <br />const bear = getBear()  <br />bear.name <br />bear.honey | type Animal = {   name: string } <br />type Bear = Animal & {    honey: Boolean  } <br />const bear = getBear(); <br />bear.name;<br />bear.honey; |

向现有接口添加新字段:

```typescript
interface Window {
  title: string
}

interface Window {
  ts: TypeScriptAPI
}

const src = 'const a = "Hello World"';
window.ts.transpileModule(src, {});
```

类型创建后不能更改:

```typescript
type Window = {
  title: string
}

type Window = {
  ts: TypeScriptAPI
}

 // Error: Duplicate identifier 'Window'.

```

在以后的章节中你会学到更多关于这些概念的知识，所以如果你不能马上理解所有这些知识，不要担心。

* 在ts版本4.2之前，类型别名可能会出现在错误消息中，有时会替代等效的匿名类型(这可能是可取的，也可能不是)。接口将始终在错误消息中命名。
* 类型别名可能不参与声明合并，但接口可以。
* 接口只能用于声明对象的形状，而不能重命名原语。
* 接口名称将始终以原始形式出现在错误消息中，但仅当它们按名称使用时才会出现。

在大多数情况下，你可以根据个人喜好进行选择，ts会告诉你它是否需要其他类型的声明。如果你想要一个启发式，使用interface，直到你需要使用来自type的特性。

### 类型断言(as)

有时候你会得到一个值的类型信息，而ts是不能知道的。

例如，如果你正在使用document.getElementById,ts仅仅知道这将返回某种htmlElement，但是你可能知道你的页面将总是有一个带给定id的一个HTMLCanvasElement。

在这种情况下，你可以用一个类型断言来指定一个更明确的类型：

```typescript
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
```

和类型注释一样，类型断言会被编译器移除，并且不会影响你代码的运行时行为。

你也可以用尖括号语法（除非代码在.tsx 文件中），那是等价的：

```typescript
const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");
```

> 提醒: 因为类型断言是在编译时删除的，所以不存在与类型断言关联的运行时检查。如果类型断言错误，则不会生成异常或 null。

ts只允许类型断言转换为更具体或更不具体的类型版本。这条规则可以防止“不可能”的强制性条款，比如:

```typescript
const x = "hello" as number;
/* 
Conversion of type 'string' to type 'number' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
*/
```

有时这个规则可能过于保守，不允许更复杂的有效强制。如果出现这种情况，您可以使用两个断言，首先是针对 any (或者我们将在后面介绍的 unknown) ，然后是所需的类型:

```typescript
const a = (expr as any) as T;
```

### 文字类型

除了一般类型字符串和数字之外，我们还可以在类型位置中引用特定的字符串和数字。

考虑这个问题的一种方法是考虑 JavaScript 是如何以不同的方式声明变量的。Var 和 let 都允许改变变量内部的值，而 const 不允许。这反映在 TypeScript 如何为文本创建类型上。

![image-20210627003616973](TypeScriptDoc.assets/image-20210627003616973.png)

文字类型本身并不是很有价值:

```typescript
let x: "hello" = "hello";
// OK
x = "hello";
// ...
x = "howdy";
//Type '"howdy"' is not assignable to type '"hello"'.
```



拥有一个只能有一个值的变量是没有多大用处的！

但是，通过将文字组合成联合，可以表达一个更有用的概念——例如，只接受一组已知值的函数:

```typescript
function printText(s: string, alignment: "left" | "right" | "center") {
  // ...
}
printText("Hello, world", "left");
printText("G'day, mate", "centre");
//Argument of type '"centre"' is not assignable to parameter of type '"left" | "right" | "center"'.
```

数值文字类型的工作原理是相同的:

```typescript
function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}
```

当然，你可以把它们和非文字类型结合起来:

```typescript
interface Options {
  width: number;
}
function configure(x: Options | "auto") {
  // ...
}
configure({ width: 100 });
configure("auto");
configure("automatic");
// Argument of type '"automatic"' is not assignable to parameter of type 'Options | "auto"'.
```

还有一种文字类型: 布尔文字。只有两种布尔文字类型，正如您可能猜到的，它们是 true 和 false 类型。类型 boolean 本身实际上只是 union true | false 的别名。

#### 字面推理

当使用对象初始化变量时，TypeScript 假定该对象的属性稍后可能更改值。例如，如果你写了这样的代码:

```typescript
const obj = { counter: 0 };
if (someCondition) {
  obj.counter = 1;
}
```

不会假设将1分配给先前有0的字段是一个错误。另一种说法是 obj.counter 必须具有类型number，而不是0，因为类型用于决定读取和写入行为。

这同样适用于字符串:

```typescript
const req = { url: "https://example.com", method: "GET" };
handleRequest(req.url, req.method);
// 类型“ string”的参数不能分配给类型“ GET”| “ POST”的参数
```

在上面的示例中，req.method 被推断为 string，而不是“ GET”。因为代码可以在 req 的创建和 handleRequest 的调用之间进行计算，handleRequest 可以为 req.method 分配一个新字符串，比如“ GUESS”，所以 TypeScript 认为这段代码有错误。

有两种方法可以解决这个问题。

1. 您可以通过在任一位置添加类型断言来更改推断:

   ```typescript
   // Change 1:
   const req = { url: "https://example.com", method: "GET" as "GET" };
   // Change 2
   handleRequest(req.url, req.method as "GET");
   ```

   更改1意味着“我希望 req.method 始终具有文本类型‘GET’ ”，这样可以防止“ GUESS”被赋值到后面的字段。Change 2意味着“因为其他原因，我知道 req.method 的值为“ GET”

2. 可以使用 const 将整个对象转换为文本类型:

   ```
   const req = { url: "https://example.com", method: "GET" } as const;
   handleRequest(req.url, req.method);
   ```

As const 后缀的作用类似于 const，但是对于类型系统，确保所有属性都被分配为文本类型，而不是字符串或数字之类的更一般的版本。

### `null`和`undefined`

JavaScript 有两个用于表示缺失或未初始化值的基本值: null 和 undefined。

有两个相同名字的对应类型。这些类型的行为取决于是否启用了 stritnullchecks 选项。

#### `strictNullChecks`off

关闭 strictnullcheck 后，仍然可以正常访问可能为 null 或undefined的值，null 和undefined的值可以分配给任何类型的属性。这类似于没有空检查的语言(例如 c # 、 Java)的行为。缺乏对这些值的检查往往是 bug 的一个主要来源; 我们总是建议人们在他们的代码库中开启strictNullChecks，如果这样做可行。

#### `strictNullChecks`on

开启strictNullChecks，当一个值为空或未定义时，您需要在对该值使用方法或属性之前测试这些值。就像在使用可选属性之前检查未定义的值一样，我们可以使用收缩来检查可能为 null 的值:

```typescript
function doSomething(x: string | null) {
  if (x === null) {
    // do nothing
  } else {
    console.log("Hello, " + x.toUpperCase());
  }
}
```

#### 非空断言运算符(后缀`!`)

ts还有一种特殊的语法，用于在不进行任何显式检查的情况下从类型中删除 null 和undefined的内容。写作！在任何表达式之后都是一个类型断言，该值不是 null 或undefined的:

```typescript
function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed());
}
```

就像其他类型断言一样，这不会改变代码的运行时行为，因此只使用它是很重要的！当您知道该值不能为null或undefined时。

### 枚举

枚举是由 TypeScript 添加到 JavaScript 的一个特性，它允许描述一个值，这个值可以是一组可能的命名常量之一。与大多数ts特性不同，这不是 JavaScript 的类型级别增加，而是添加到语言和运行时中的。正因为如此，这是一个你应该知道存在的特性，但是除非你确定，否则可以推迟使用。您可以在 Enum 参考页面中阅读更多有关 Enum 的内容。

### 不太常见的原语

值得一提的是 JavaScript 中的其余原语，它们在类型系统中表示。虽然我们不会在这里深入探讨。

##### `bigint`

从 ES2020开始，JavaScript 中有一个用于非常大的整数的原语，BigInt:

```typescript
// Creating a bigint via the BigInt function
const oneHundred: bigint = BigInt(100);

// Creating a BigInt via the literal syntax
const anotherHundred: bigint = 100n;
```

您可以在 TypeScript 3.2发行说明中了解更多关于 BigInt 的信息。

##### `symbol`

JavaScript 中有一个原语，用于通过函数 Symbol ()创建一个全局唯一引用:

```typescript
const firstName = Symbol("name");
const secondName = Symbol("name");

if (firstName === secondName) {
/This condition will always return 'false' since the types 'typeof firstName' and 'typeof secondName' have no overlap.
  // Can't ever happen
```

你可以在 Symbols 参考页面了解更多关于它们的信息。

## 4、收缩

假设我们有一个名为 padLeft 的函数。

```typescript
function padLeft(padding: number | string, input: string): string {
  throw new Error("Not implemented yet!");
}
```

如果 padding 是一个number，那么它将把这个数字当作我们想要预置到input的空格数。如果padding是一个string，它应该只是预先padding到input。让我们尝试实现当 padLeft 传递一个number作为padding时的逻辑。

```typescript
function padLeft(padding: number | string, input: string) {
  return new Array(padding + 1).join(" ") + input;
/Operator '+' cannot be applied to types 'string | number' and 'number'.
}
```

啊哦，我们在 padding + 1上得到一个错误。正在警告我们，向一个数字 | 字符串添加一个数字可能不会给我们想要的，这是正确的。换句话说，我们没有明确地检查填充是否是一个数字，也没有处理它是一个字符串的情况，所以让我们确切地这样做。

```typescript
function padLeft(padding: number | string, input: string) {
  if (typeof padding === "number") {
    return new Array(padding + 1).join(" ") + input;
  }
  return padding + input;
}
```

如果这看起来像是一段乏味的 JavaScript 代码，那么这就是问题所在。除了我们放置的注释，这个 TypeScript 代码看起来像 JavaScript。理想的是ts的类型系统旨在让编写典型的 JavaScript 代码变得尽可能简单，而不用为了类型安全而拼命工作。

虽然看起来不怎么样，但实际上这里有很多隐藏的东西。就像 TypeScript 如何使用静态类型分析运行时值一样，它将类型分析覆盖在 JavaScript 的运行时控制流结构上，比如 if/else、条件三极结构、循环、 truthiness 检查等，这些都会影响这些类型。

在我们的 if 检查中，TypeScript 看到 typeof padding = = = “ number”，并将其理解为一种称为类型保护的特殊形式的代码。ts遵循可能的执行路径，我们的程序可以采用这些路径来分析给定位置上某个值的最具体的可能类型。它查看这些特殊检查(称为类型保护)和赋值，将类型细化为比声明的更特定的类型的过程称为缩小。在许多编辑器中，我们可以在这些类型更改时观察它们，我们甚至会在示例中这样做。

![image-20210627192916958](TypeScriptDoc.assets/image-20210627192916958.png)

有几种不同的 TypeScript 结构可以用于收缩。

### `typeof`类型保护

正如我们所看到的，JavaScript 支持typeof的运算符，它可以给出运行时值类型的非常基本的信息。希望返回一组特定的字符串:

- `"string"`
- `"number"`
- `"bigint"`
- `"boolean"`
- `"symbol"`
- `"undefined"`
- `"object"`
- `"function"`

正如我们在 padLeft 中看到的，这个操作符经常出现在许多 JavaScript 库中，而且 TypeScript 可以理解它来缩小不同分支中的类型。

在 TypeScript 中，根据 typeof 返回的值进行检查是一种类型保护。因为 TypeScript 编码 typeof 如何对不同的值进行操作，所以它知道 JavaScript 的一些怪异之处。例如，注意在上面的列表中，typeof 没有返回字符串 null。看看下面的例子:

```typescript
function printAll(strs: string | string[] | null) {
  if (typeof strs === "object") {
    for (const s of strs) {
/Object is possibly 'null'.
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  } else {
    // do nothing
  }
}
```

在 printAll 函数中，我们尝试检查 strs 是否是一个对象，以确定它是否是一个数组类型(现在可能是强调数组在 JavaScript 中是对象类型的好时机)。但事实证明，在 JavaScript 中，typeof null 实际上是“ object”！这是历史上不幸的事件之一。

有足够经验的用户可能不会感到惊讶，但并不是每个人都在 JavaScript 中遇到过这种情况; 幸运的是，TypeScript 让我们知道 strs 只限于 string [] | null 而不是 string[].

这可能是一个很好的切入点，我们称之为“真实性”检查。

### 真实性缩小

Truthiness 可能不是你可以在字典里找到的词，但是你可以在 JavaScript 中听到这个词。

在 JavaScript 中，我们可以在条件句、 & & s、 | | s、 if 语句、布尔否定(!)中使用任何表达式，以及更多。例如，if语句不期望它们的条件总是具有 boolean 类型。

```typescript
function getUsersOnlineMessage(numUsersOnline: number) {
  if (numUsersOnline) {
    return `There are ${numUsersOnline} online now!`;
  }
  return "Nobody's here. :(";
}
```

在 JavaScript 中，像if的结构首先“强制”它们的条件为boolean以便理解它们，然后根据结果是true或false来选择它们的分支。值如

- `0`
- `NaN`
- `""` (the empty string)
- `0n` (the `bigint` version of zero)
- `null`
- `undefined`

都强迫为false，其他值强制为true。你总是可以强制值为boolean，方法是在Boolean函数中运行它们，或者使用较短的双布尔否定。(后者的优点是，TypeScript 将一个窄的文字布尔类型推断为 true，而将前者推断为布尔类型。)

```typescript
// both of these result in 'true'
Boolean("hello"); // type: boolean, value: true
!!"world";        // type: true,    value: true
```

利用这种行为是相当流行的，尤其是为了防范类似 null 或undefined的值。作为一个例子，让我们尝试在 printAll 函数中使用它。

```typescript
function printAll(strs: string | string[] | null) {
  if (strs && typeof strs === "object") {
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  }
}
```

您会注意到，我们已经通过检查 strs 是否真实而消除了上面的错误。这至少可以防止我们在运行代码时出现可怕的错误，比如:

```typescript
TypeError: null is not iterable
```

请记住，对原语的 truthiness 检查通常容易出错。作为一个例子，考虑一个不同的尝试编写 printAll

```typescript
function printAll(strs: string | string[] | null) {
  // !!!!!!!!!!!!!!!!
  //  DON'T DO THIS!
  //   KEEP READING
  // !!!!!!!!!!!!!!!!
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}
```

我们将整个函数包装在一个真实的检查中，但这有一个微妙的缺点: 我们可能不再正确地处理空字符串大小写。

不会对我们造成任何伤害，但是如果你对 JavaScript 不是很熟悉的话，这种行为是值得注意的。通常可以帮助你在早期就发现 bug，但是如果你选择对值什么都不做，那么它就只能做这么多，而不需要过多的规定。如果你愿意，你可以确保你处理这样的情况与一个链接。

关于 truthiness 的收缩的最后一个词是，带! 的布尔否定从否定的分支中过滤掉。

```typescript
function multiplyAll(
  values: number[] | undefined,
  factor: number
): number[] | undefined {
  if (!values) {
    return values;
  } else {
    return values.map((x) => x * factor);
  }
}
```

### 等号缩小

ts也用switch语句和像===，!==，和!=这样的等号检查来缩小类型。例如：

```typescript
function example(x: string | number, y: string | boolean) {
  if (x === y) {
    // We can now call any 'string' method on 'x' or 'y'.
    x.toUpperCase();
//(method) String.toUpperCase(): string
      
    y.toLowerCase();
//(method) String.toLowerCase(): string
      
  } else {
    console.log(x);
//(parameter) x: string | number
      
    console.log(y);
//(parameter) y: string | boolean
  }
}
```

当我们在上面的例子中检查 x 和 y 都相等时，TypeScript 知道它们的类型也必须相等。因为字符串是 x 和 y 都可以接受的唯一通用类型，所以 TypeScript 知道 x 和 y 必须是第一个分支中的字符串。

检查特定的文字值(相对于变量)也可以工作。在我们关于 truthiness 收缩的部分中，我们编写了一个 printAll 函数，这个函数很容易出错，因为它不小心没有正确处理空字符串。相反，我们可以做一个特定的检查来阻止 null，而 TypeScript 仍然可以正确地从 strs 的类型中删除 null。

```typescript
function printAll(strs: string | string[] | null) {
  if (strs !== null) {
    if (typeof strs === "object") {
      for (const s of strs) {             
						//parameter) strs: string[]
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
                   //(parameter) strs: string
    }
  }
}
```

js的宽松的带 = = 和！= 的相等性检查也正确地缩小范围。如果您不熟悉，检查某个值是否 = = null 实际上不仅检查它是否特定为 null 值，还检查它是否可能undefined。这同样适用于 = = undefined: 它检查一个值是 null 还是 undefined。

```typescript
interface Container {
  value: number | null | undefined;
}

function multiplyValue(container: Container, factor: number) {
  // Remove both 'null' and 'undefined' from the type.
  if (container.value != null) {
    console.log(container.value);
							//(property) Container.value: number

    // Now we can safely multiply 'container.value'.
    container.value *= factor;
  }
}
```



### in操作符缩小

Javascript 有一个运算符用于确定一个对象是否有一个带名称的属性: in 运算符。考虑到了这一点，将其作为一种缩小潜在类型的方法。

例如，使用代码："value" in x，其中“ value”是一个字符串文字，而 x 是一个联合类型。“ true”分支缩小了具有可选或必需属性值的 x 类型，而“ false”分支缩小到具有可选或缺少属性值的类型。

```typescript
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }

  return animal.fly();
}
```

为了重新迭代可选属性将在两侧存在以缩小范围，例如，一个人可以游泳和飞行(使用合适的设备) ，因此应该显示在in检查的两侧:

```typescript
type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Human = {  swim?: () => void, fly?: () => void };

function move(animal: Fish | Bird | Human) {
  if ("swim" in animal) { 
    animal
		//(parameter) animal: Fish | Human
  } else {
    animal
      	//(parameter) animal: Bird | Human
  }
}
```

### `instanceof`缩小

JavaScript 有一个运算符用于检查一个值是否是另一个值的“实例”。更具体地说，在 JavaScript x instanceof Foo 中检查 x 的原型链是否包含 Foo.prototype。虽然我们在这里不会深入讨论，当我们进入类的时候你会看到更多，但是对于大多数可以用 new 构造的值来说，它们仍然是有用的。正如您可能已经猜到的，instanceof 也是一个类型保护器，并且ts在 instanceof s 保护的分支中变窄。

```typescript
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
               
(parameter) x: Date
  } else {
    console.log(x.toUpperCase());
               
(parameter) x: string
  }
}
```

### 赋值

正如我们前面提到的，当我们分配任何变量时，TypeScript 会查看分配的右侧，并适当地缩小左侧。

```typescript
let x = Math.random() < 0.5 ? 10 : "hello world!";
   // let x: string | number
x = 1;

console.log(x);
           //let x: number
x = "goodbye!";

console.log(x);
           //let x: string
```

请注意，这些分配都是有效的。尽管在第一次赋值后观察到的 x 类型改变为 number，但我们仍然能够将字符串赋值给 x。这是因为 x 的声明类型—— x 开头的类型——是string | number，并且始终根据声明的类型检查可分配性。

如果我们将一个布尔值赋给 x，我们会看到一个错误，因为它不是声明类型的一部分。

```typescript
let x = Math.random() < 0.5 ? 10 : "hello world!";
   
let x: string | number
x = 1;

console.log(x);
           //let x: number
x = true;
/Type 'boolean' is not assignable to type 'string | number'.

console.log(x);
           //let x: string | number
```

### 控制流分析

到目前为止，我们已经通过了一些基本的例子来说明ts在特定的分支中是如何变窄的。但是，除了从每个变量中寻找类型守卫(ifs、 whiles、 conditionals 等等)之外，还有更多的工作要做。例如

```typescript
function padLeft(padding: number | string, input: string) {
  if (typeof padding === "number") {
    return new Array(padding + 1).join(" ") + input;
  }
  return padding + input;
}
```

padLeft 从它的第一个 if 块返回。TypeScript 能够分析这段代码，并发现在填充(padding)是一个数字(number)的情况下，主体的其余部分(return padding + input;)是不可达的。因此，它能够从函数其余部分的填充(padding)的类型(从string | number缩小到string)中删除数字。

这种基于可达性的代码分析称为控制流分析，当遇到类型保护和赋值时，TypeScript 使用这种流分析来缩小类型。当分析一个变量时，控制流可以一次又一次地分离和重新合并，并且可以观察到该变量在每个点具有不同的类型。

```typescript
function example() {
  let x: string | number | boolean;

  x = Math.random() < 0.5;

  console.log(x);
             //let x: boolean

  if (Math.random() < 0.5) {
    x = "hello";
    console.log(x);
               //let x: string
  } else {
    x = 100;
    console.log(x);
               //let x: number
  }

  return x;
        //let x: string | number
}
```

### 使用类型谓词

到目前为止，我们已经使用现有的 JavaScript 构造来处理收缩，但是有时候您希望更直接地控制整个代码中类型的变化。

要定义一个用户定义的类型保护，我们只需要定义一个返回类型为类型谓词的函数:

```typescript
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
```

Pet is Fish 是本例中的类型谓词。谓词接受表单 parameterName is Type，其中 parameterName 必须是来自当前函数签名的参数的名称。

任何时候 isFish 都是通过某个变量调用的，如果原始类型兼容，那么 TypeScript 会将该变量缩小到特定的类型。

```typescript
// Both calls to 'swim' and 'fly' are now okay.
let pet = getSmallPet();

if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}
```

注意，ts不仅知道pet是 if 分支中的一条鱼，它还知道在 else 分支中没有鱼，所以你必须有一只鸟。

你可以使用类型保护 isFish 来过滤一组 Fish | Bird 并获得一组 Fish:

```typescript
const zoo: (Fish | Bird)[] = [getSmallPet(), getSmallPet(), getSmallPet()];
const underWater1: Fish[] = zoo.filter(isFish);
// or, equivalently
const underWater2: Fish[] = zoo.filter(isFish) as Fish[];

// The predicate may need repeating for more complex examples
const underWater3: Fish[] = zoo.filter((pet): pet is Fish => {
  if (pet.name === "sharkey") return false;
  return isFish(pet);
});
```

此外，类可以使用 this is Type 来缩小它们的类型。

### 区分的联合

到目前为止，我们看到的大多数示例都集中在使用简单类型(如字符串、布尔值和数字)缩小单个变量。虽然这种情况很常见，但在 JavaScript 中，大多数时候我们将处理稍微复杂一些的结构。

出于某种动机，让我们想象一下我们正在尝试编码像圆圈和方块这样的形状。圆圈记录它们的半径，方块记录它们的边长。我们将使用一个叫 kind 的字段来判断我们处理的是哪种形状。这是第一次尝试定义形状（Shape）。

```typescript
interface Shape {
  kind: "circle" | "square";
  radius?: number;
  sideLength?: number;
}
```

注意，我们使用字符串类型的联合: “circle”和“square”来告诉我们应该分别将形状视为圆还是正方形。通过使用“ circle”| “ square”代替"string"，我们可以避免拼写错误。

```typescript
function handleShape(shape: Shape) {
  // oops!
  if (shape.kind === "rect") {
/This condition will always return 'false' since the types '"circle" | "square"' and '"rect"' have no overlap.
    // ...
  }
}
```

我们可以编写一个 getrea 函数，该函数基于处理圆形或正方形时的正确逻辑来应用。我们首先来处理圆圈。

```typescript
function getArea(shape: Shape) {
  return Math.PI * shape.radius ** 2;
/Object is possibly 'undefined'.
}
```

根据strictNullChecks，给我们一个错误-这是适当的，因为radius可能没有定义。但是，如果我们对kind属性执行适当的检查会怎样呢？

```typescript
function getArea(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
/Object is possibly 'undefined'.
  }
}
```

嗯，ts还是不知道该怎么做。我们遇到了这样一个问题: 我们比类型检查器更了解我们的值。我们可以尝试使用非空断言(a！在 shape.radius 之后)来说radius确实存在。

但这并不理想。我们必须对那些非空断言(!)的类型检查器喊一点来使人信服它 shape.radius 是定义好的，但是如果我们移动代码，这些断言就很容易出错。此外，在 strictNullChecks 之外，我们还可以偶尔访问这些字段中的任何一个(因为可选属性只是假定在读取它们时始终存在)。我们肯定可以做得更好。

这种 Shape 编码的问题在于，类型检查器无法根据kind属性知道是否存在radius或sideLength。我们需要把我们所知道的告诉类型检查器。考虑到这一点，让我们再次定义 Shape。(2)

```typescript
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

type Shape = Circle | Square;
```

这里，我们正确地将 Shape 分成两种类型，它们对于 kind 属性有不同的值，但是 radius 和 sideLength 在它们各自的类型中被声明为必需的属性。

让我们看看当我们尝试访问一个 Shape 的半径(radius)时会发生什么。

```typescript
function getArea(shape: Shape) {
  return Math.PI * shape.radius ** 2;
/Property 'radius' does not exist on type 'Shape'.Property 'radius' does not exist on type 'Square'.
}
```

就像我们对形状(Shape)的第一个定义一样，这仍然是个错误。当 radius 是可选的时候，我们得到了一个错误(仅在 strictnullcheck 中) ，因为 TypeScript 无法判断属性是否存在。现在 Shape 是一个联合体，ts告诉我们形状(Shape)可能是一个正方形(Square)，而正方形(Square)上没有定义半径(radius)！这两种解释都是正确的，但是只有我们对形状(Shape)的新编码仍然会引起strickNullChecks之外的错误。

但是如果我们再次检查kind属性呢？

```typescript
function getArea(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
                      //(parameter) shape: Circle
  }
}
```

这样就消除了错误！当联合中的每个类型都包含具有文本类型的公共属性时，TypeScript 将其视为一个区分联合，并可以缩小联合的成员范围。

在这种情况下，kind 指的是公共属性(这被认为是 Shape 的判别属性)。检查 kind 属性是否为“ circle”，删除了 Shape 中没有 具有“circle”类型的kind 属性的所有类型。将形状缩小到 Circle 类型。

同样的检查也适用于 switch 语句。现在，我们可以尝试编写我们的完整的 getrea 没有任何讨厌的！的非空断言。

```typescript
function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
                        //(parameter) shape: Circle
    case "square":
      return shape.sideLength ** 2;
              //(parameter) shape: Square
  }
}
```

这里重要的是形状(Shap)的编码。将正确的信息传达给ts——圆形(circle)和方形(Square)实际上是两种带有特定kind字段的独立类型——至关重要。这样做可以让我们编写类型安全的 TypeScript 代码，它看起来与我们本来要编写的 JavaScript 没有什么不同。从那里，类型系统就能够做“正确”的事情，并在 switch 语句的每个分支中找出类型。

> 顺便说一句，尝试使用上面的例子并删除一些返回的关键字。您将看到，类型检查可以帮助避免在不小心通过 switch 语句中的不同子句时出现 bug。

区分结合不仅仅是用来讨论圆形和方形的。它们非常适合用 JavaScript 表示任何类型的消息传递模式，比如通过网络发送消息(客户机/服务器通信) ，或者在状态管理框架中编码突变。

### `never`类型

当缩小范围时，您可以将联合的选项减少到删除了所有的可能性并且没有剩余的选项。在这些情况下，TypeScript 将使用一个 never 类型来表示一个不应该存在的状态。

### 彻底检查

Never 类型可以分配给每个类型; 然而，没有任何类型可以分配给 never (除了它本身)。这意味着您可以使用收缩，并依赖于never在 switch 语句中进行详尽的检查。

例如，在 getrea 函数中添加一个缺省值，该函数尝试将形状分配为 never，当所有可能的情况都没有处理时，将会引发。

```typescript
type Shape = Circle | Square;

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}
```

向 Shape union 添加一个新成员，将导致ts错误:

```typescript
interface Triangle {
  kind: "triangle";
  sideLength: number;
}

type Shape = Circle | Square | Triangle;

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape;
/Type 'Triangle' is not assignable to type 'never'.
      return _exhaustiveCheck;
  }
}
```

## 5、更多关于函数的资料

函数是任何应用程序的基本构建块，无论它们是从另一个模块导入的本地函数，还是类上的方法。它们也是值，就像其他值一样，TypeScript 有许多方法来描述函数的调用方式。让我们学习如何编写描述函数的类型。

### 函数类型表达式

描述函数最简单的方法是使用函数类型表达式。这些类型在语法上类似于箭头函数:

```typescript
function greeter(fn: (a: string) => void) {
  fn("Hello, World");
}

function printToConsole(s: string) {
  console.log(s);
}

greeter(printToConsole);
```

语法(a: string) = > void 表示“具有一个类型为 string 的参数(名为 a)的函数，该函数没有返回值”。就像函数声明一样，如果没有指定参数类型，它就是隐式的any。

> 请注意，参数名是必需的。函数类型(string) = > void 表示“一个具有类型为 any 的参数 string 的函数”！

当然，我们可以使用类型别名来命名函数类型:

```typescript
type GreetFunction = (a: string) => void;
function greeter(fn: GreetFunction) {
  // ...
}
```

### 调用签名

在 JavaScript 中，函数除了可调用之外，还可以具有属性。但是，函数类型表达式语法不允许声明属性。如果我们想用属性来描述可调用的东西，我们可以用对象类型来写一个调用签名:

```typescript
type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}
```

注意，与函数类型 表达式-(使用: 在参数列表和 返 回类型之间的语法)稍 有不同，而不是 = > 。

### 构造签名

函数也可以用new操作符来调用。引用这些作为构造函数，因为它们通常创建一个新对象。你可以通过在调用签名前添加 new 关键字来写一个构造签名:

```typescript
type SomeConstructor = {
  new (s: string): SomeObject;
};
function fn(ctor: SomeConstructor) {
  return new ctor("hello");
}
```

有些对象，比如 JavaScript 的 Date 对象，可以使用或不使用 new 来调用。您可以任意组合调用和构造同一类型的签名

```typescript
interface CallOrConstruct {
  new (s: string): Date;
  (n?: number): number;
}
```

### 泛型函数

通常编写一个函数，其中输入的类型与输出的类型相关，或者两个输入的类型以某种方式相关。让我们暂时考虑一个返回数组第一个元素的函数:

```typescript
function firstElement(arr: any[]) {
  return arr[0];
}
```

这个函数完成它的工作，但不幸的是返回类型为 any。如果函数返回数组元素的类型会更好。

在 TypeScript 中，泛型用于描述两个值之间的对应关系。我们通过在函数签名中声明一个类型参数来实现:

```typescript
function firstElement<Type>(arr: Type[]): Type {
  return arr[0];
}
```

通过向这个函数添加类型参数 Type 并在两个地方使用它，我们在函数的输入(数组)和输出(返回值)之间创建了一个链接。现在，当我们调用它，一个更具体的类型出现了:

```typescript
// s is of type 'string'
const s = firstElement(["a", "b", "c"]);
// n is of type 'number'
const n = firstElement([1, 2, 3]);
```

####  推论

注意，我们不必在这个示例中指定 Type。类型是由ts自动推断选择的。

我们也可以使用多个type参数，例如，一个独立版本的 map 看起来像这样:

```typescript
function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
  return arr.map(func);
}

// Parameter 'n' is of type 'string'
// 'parsed' is of type 'number[]'
const parsed = map(["1", "2", "3"], (n) => parseInt(n));
```

注意，在这个示例中，TypeScript 可以根据函数表达式的返回值(数字)推断出 Input 类型参数的类型(来自给定的字符串数组) ，以及 Output 类型参数。

#### 约束（extends子句）

我们已经编写了一些通用函数，它们可以处理任何类型的值。有时候，我们希望关联两个值，但是只能对值的某个子集进行操作。在这种情况下，我们可以使用约束来限制类型参数可以接受的类型种类。

让我们编写一个函数，返回两个值中较长的一个。要做到这一点，我们需要一个长度属性，它是一个数字。我们通过写一个 extends 子句将类型参数约束为该类型:

```typescript
function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}

// longerArray is of type 'number[]'
const longerArray = longest([1, 2], [1, 2, 3]);
// longerString is of type 'string'
const longerString = longest("alice", "bob");
// Error! Numbers don't have a 'length' property
const notOK = longest(10, 100);
/Argument of type 'number' is not assignable to parameter of type '{ length: number; }'.
```

在这个例子中几乎没有什么有趣的东西值得注意。我们允许ts推断出longest的返回类型。返回类型推断也适用于泛型函数。

因为我们将 Type 限制为{ length: number } ，所以允许访问A 和 b 参数的.length属性。如果没有类型约束，我们将无法访问这些属性，因为这些值可能是没有长度属性的其他类型。

根据参数推断出 longerArray 和 longerString 的类型。记住，泛型都是关于用同一类型关联两个或多个值的！

最后，正如我们所希望的，对 longest (10,100)的调用被拒绝，因为number类型没有.length属性。

#### 使用约束值

下面是处理泛型约束时的一个常见错误:

```typescript
function minimumLength<Type extends { length: number }>(
  obj: Type,
  minimum: number
): Type {
  if (obj.length >= minimum) {
    return obj;
  } else {
    return { length: minimum };
/Type '{ length: number; }' is not assignable to type 'Type'.'{ length: number; }' is assignable to the constraint of type 'Type', but 'Type' could be instantiated with a different subtype of constraint '{ length: number; }'.
  }
}
```

这个函数可能看起来像是 OK-Type 被限制为{ length: number } ，并且函数返回 Type 或匹配该限制的值。问题在于，该函数承诺返回与传入的对象类型相同的对象，而不仅仅是匹配约束的对象。如果这些代码是合法的，你可以编写一些肯定不能工作的代码:

```typescript
// 'arr' gets value { length: 6 }
const arr = minimumLength([1, 2, 3], 6);
// and crashes here because arrays have
// a 'slice' method, but not the returned object!
console.log(arr.slice(0));
```

#### 指定类型参数

通常可以在泛型调用中推断预期的类型参数，但并不总是如此。例如，假设你写了一个函数来组合两个数组:

```typescript
function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2);
}
```

通常用不匹配的数组调用这个函数是错误的:

```typescript
const arr = combine([1, 2, 3], ["hello"]);
/Type 'string' is not assignable to type 'number'.
```

但是，如果你打算这么做，你可以手动指定 Type:

```typescript
const arr = combine<string | number>([1, 2, 3], ["hello"]);
```

#### 编写良好泛型函数的指南

编写泛型函数很有趣，而且很容易被类型参数冲昏头脑。拥有太多的类型参数，或者在不需要它们的地方使用约束，可能会导致推理不太成功，使函数调用者感到沮丧。

##### 下推类型参数

这里有两种编写类似函数的方法:

```typescript
function firstElement1<Type>(arr: Type[]) {
  return arr[0];
}

function firstElement2<Type extends any[]>(arr: Type) {
  return arr[0];
}

// a: number (good)
const a = firstElement1([1, 2, 3]);
// b: any (bad)
const b = firstElement2([1, 2, 3]);
```

乍一看，这两个函数似乎完全相同，但 firstElement1是编写这个函数的更好方法。它的推断返回类型是 Type，但 firstElement2的推断返回类型是 any，因为 TypeScript 必须使用约束类型解析 arr [0]表达式，而不是在调用期间“等待”解析元素。

> 规则: 如果可能的话，使用类型参数本身而不是约束它

##### 使用更少的类型参数

下面是另外一对类似的函数:

```typescript
function filter1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
  return arr.filter(func);
}

function filter2<Type, Func extends (arg: Type) => boolean>(
  arr: Type[],
  func: Func
): Type[] {
  return arr.filter(func);
}
```

我们创建了一个类型参数 Func，它不关联两个值。这总是一个危险信号，因为这意味着调用者想要指定类型参数，就必须无缘无故地手动指定一个额外的类型参数。Func 什么都不做，只是让函数更难阅读和推理！

> 规则: 总是使用尽可能少的类型参数

##### 类型参数应该出现两次

有时候我们忘记了一个函数可能不需要是泛型的:

```typescript
function greet<Str extends string>(s: Str) {
  console.log("Hello, " + s);
}

greet("world");
```

我们也可以很容易地写出一个更简单的版本:

```typescript
function greet(s: string) {
  console.log("Hello, " + s);
}
```

请记住，类型参数用于关联多个值的类型。如果类型参数在函数签名中只使用一次，那么它不关联任何东西。

> 规则: 如果一个类型参数只出现在一个位置，请强烈重新考虑是否实际需要它

### 可选参数

函数通常带有可变数量的参数。例如，number的toFixed方法有一个可选的数字计数:

```typescript
function f(n: number) {
  console.log(n.toFixed()); // 0 arguments
  console.log(n.toFixed(3)); // 1 argument
}
```

我们可以在ts中通过将参数后面加?标记为可选的 :

```typescript
function f(x?: number) {
  // ...
}
f(); // OK
f(10); // OK
```

尽管该参数被指定为类型 number，但是 x 参数实际上具有类型 number | undefined，因为 JavaScript 中未指定的参数获得了的值undefined。

你也可以提供一个参数默认值:

```typescript
function f(x = 10) {
  // ...
}
```

现在在 f 的主体中，x 的类型为 number，因为任何未定义的参数都将被替换为10。请注意，当一个参数是可选的时候，调用方总是可以传递undefined，因为这只是模拟了一个“缺少的”参数:

```typescript
declare function f(x?: number): void;
// cut
// All OK
f();
f(10);
f(undefined);
```

####  回调函数中的可选参数

一旦你了解了可选参数和函数类型表达式，在编写调用回调函数时很容易出现以下错误:

```typescript
function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}
```

人们在写index?作为一个可选参数时通常打算做的是，他们希望这两个调用都是合法的:

```typescript
myForEach([1, 2, 3], (a) => console.log(a));
myForEach([1, 2, 3], (a, i) => console.log(a, i));
```

这实际上意味着回调可以用一个参数调用。换句话说，函数定义表明实现可能是这样的:

```typescript
function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    // I don't feel like providing the index today
    callback(arr[i]);
  }
}
```

反过来，ts会强化这种意义，并发出不太可能出现的错误:

```typescript
myForEach([1, 2, 3], (a, i) => {
  console.log(i.toFixed());
/Object is possibly 'undefined'.
});
```

在 JavaScript 中，如果调用一个参数比本身具有的参数多的函数，额外的参数就会被忽略。ts的行为也是这样的。具有较少参数的函数(具有相同的类型)总是可以取代具有较多参数的函数。

> 在为回调编写函数类型时，永远不要编写可选参数，除非您想在不传递该参数的情况下调用该函数

### 函数重载

一些 JavaScript 函数可以通过各种参数计数和类型来调用。例如，您可以编写一个函数来生成一个接受时间戳(一个参数)或月/日/年规范(三个参数)的 Date。

在ts中，我们可以通过写重载签名来指定一个可以以不同方式调用的函数。要做到这一点，写一些函数签名(通常是两个或更多) ，后面跟着函数体:

```typescript
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
const d3 = makeDate(1, 3);
/No overload expects 2 arguments, but overloads do exist that expect either 1 or 3 arguments.
```

在这个例子中，我们写了两个重载: 一个接受一个参数，另一个接受三个参数。前两个签名称为重载签名。

然后，我们编写了一个具有兼容签名的函数实现。函数有一个实现签名，但这个签名不能直接调用。即使我们在必需的参数之后写了一个带有两个可选参数的函数，它也不能用两个参数来调用！

#### 重载签名和实现签名

这是一个常见的困惑来源。通常人们写这样的代码并不理解为什么会有错误:

```typescript
function fn(x: string): void;
function fn() {
  // ...
}
// Expected to be able to call with zero arguments
fn();
/Expected 1 arguments, but got 0.
```

同样，用于写函数体的签名不能从外部“看到”。

> 从外部看不到实现的签名。在编写重载函数时，应该始终在函数的实现上方有两个或多个签名。

实现签名还必须与重载签名兼容。例如，这些函数有错误，因为实现签名与重载不匹配:

```typescript
function fn(x: boolean): void;
// Argument type isn't right
function fn(x: string): void;
/This overload signature is not compatible with its implementation signature.
function fn(x: boolean) {}
```

```typescript
function fn(x: string): string;
// Return type isn't right
function fn(x: number): boolean;
/This overload signature is not compatible with its implementation signature.
function fn(x: string | number) {
  return "oops";
}
```

#### 写“好”的重载

与泛型一样，在使用函数重载时也应该遵循一些准则。遵循这些原则将使您的函数更容易调用、更容易理解和更容易实现。

让我们考虑一个返回字符串或数组长度的函数:

```typescript
function len(s: string): number;
function len(arr: any[]): number;
function len(x: any) {
  return x.length;
}
```

这个函数很好; 我们可以用字符串或数组调用它。但是，我们不能用一个字符串或数组的值来调用它，因为 TypeScript 只能将一个函数调用解析为一个重载:

```typescript
len(""); // OK
len([0]); // OK
len(Math.random() > 0.5 ? "hello" : [0]);
/No overload matches this call.
  Overload 1 of 2, '(s: string): number', gave the following error.
    Argument of type 'number[] | "hello"' is not assignable to parameter of type 'string'.
      Type 'number[]' is not assignable to type 'string'.
  Overload 2 of 2, '(arr: any[]): number', gave the following error.
    Argument of type 'number[] | "hello"' is not assignable to parameter of type 'any[]'.
      Type 'string' is not assignable to type 'any[]'.
```

因为两个重载有相同的参数计数和相同的返回类型，我们可以改写一个非重载版本的函数:

```typescript
function len(x: any[] | string) {
  return x.length;
}
```

这样好多了！调用方可以使用任意一种值来调用这个函数，作为额外的好处，我们不需要找出正确的实现签名。

> 如果可能的话，总是倾向于使用联合类型的参数，而不是重载

#### 在一个函数中声明`this`

ts将通过代码流分析推断函数中的this应该是什么，例如:

```typescript
const user = {
  id: 123,

  admin: false,
  becomeAdmin: function () {
    this.admin = true;
  },
};
```

ts明白函数 user.becomeAdmin 有一个对应的this,这是外部对象user。对于很多情况来说，这已经足够了，但是在很多情况下，你需要更多地控制this代表的对象。JavaScript 规范规定不能有一个名为 this 的参数，因此 TypeScript 使用这个语法空间在函数体中声明为this类型。

```typescript
interface DB {
  filterUsers(filter: (this: User) => boolean): User[];
}

const db = getDB();
const admins = db.filterUsers(function (this: User) {
  return this.admin;
});
```

这种模式在回调样式的 api 中很常见，其中另一个对象通常控制调用函数的时间。注意，你需要使用function而不是箭头函数来获得这个行为:

```typescript
interface DB {
  filterUsers(filter: (this: User) => boolean): User[];
}

const db = getDB();
const admins = db.filterUsers(() => this.admin);
/The containing arrow function captures the global value of 'this'.Element implicitly has an 'any' type because type 'typeof globalThis' has no index signature.
```

### 其他需要了解的类型

在使用函数类型时，还有一些其他类型需要识别，这些类型经常出现。像所有类型一样，您可以在任何地方使用它们，但是这些类型在函数的上下文中特别相关。

#### void

Void 表示不返回值的函数的返回值。当函数没有返回语句，或者返回语句没有返回任何明确的值时，它就是被推断出的类型:

```typescript
// The inferred return type is void
function noop() {
  return;
}
```

在 JavaScript 中，不返回任何值的函数将隐式返回undefined的值。然而，void 和 undefined 在ts中并不是一回事。在本章的最后还有更多的细节。

> void不等于undefined。

#### object

特殊类型object引用任何不是基元的值(string、number、boolean、symbol、 null 或undefined)。这不同于空对象类型{} ，也不同于全局类型 Object。很有可能你永远不会使用 Object。

> object不是Object。总是使用object!

注意，在 JavaScript 中，函数值是对象: 它们具有属性，在原型链中具有 Object.prototype，是 instanceof Object，可以在它们上面调用 Object.keys，等等。由于这个原因，函数类型在ts中被认为是对象。

#### unknown

unknown类型表示任何值。这类似于any类型，但是更安全，因为任何基于unknown值的操作都是不合法的:

```typescript
function f1(a: any) {
  a.b(); // OK
}
function f2(a: unknown) {
  a.b();
/Object is of type 'unknown'.
}
```

这在描述函数类型时非常有用，因为您可以描述接受任何值但函数体中没有any值的函数。

相反，你可以描述一个返回未知类型值的函数:

```typescript
function safeParse(s: string): unknown {
  return JSON.parse(s);
}

// Need to be careful with 'obj'!
const obj = safeParse(someRandomString);
```

#### never

有些函数从不返回值:

```typescript
function fail(msg: string): never {
  throw new Error(msg);
}
```

Never 类型表示从未观察到的值。在返回类型中，这意味着函数抛出异常或终止程序的执行。

当ts确定联合中没有剩余的内容时，never也会出现。

```typescript
function fn(x: string | number) {
  if (typeof x === "string") {
    // do something
  } else if (typeof x === "number") {
    // do something else
  } else {
    x; // has type 'never'!
  }
}
```

#### Function

全局类型 Function 描述了类似 bind、 call、 apply 等属性在 JavaScript 的所有函数值上的表现。它还有一个特殊属性，即 Function 类型的值总是可以被调用; 这些调用返回any:

```typescript
function doSomething(f: Function) {
  f(1, 2, 3);
}
```

这是一个非类型化的函数调用，通常最好避免这种情况，因为any返回类型都是不安全的。

如果您需要接受一个任意函数，但不打算调用它，那么 type () = > void 通常更安全。

### Rest Parameters and ArgumentsRest

#### Rest Parameters剩余参数   (数组的解构)

除了使用可选参数或重载使函数可以接受各种固定的参数数量，我们还可以定义使用 rest 参数接受无限个参数的函数。

在所有其他参数之后会出现一个 rest 参数，它使用... 语法:

```typescript
function multiply(n: number, ...m: number[]) {
  return m.map((x) => n * x);
}
// 'a' gets value [10, 20, 30, 40]
const a = multiply(10, 1, 2, 3, 4);
```

在 TypeScript 中，这些参数上的类型注释隐式地是 any []而不是 any，并且给出的任何类型注释都必须是 Array < t > 或 t []这样的形式，或者是一个 tuple 类型(我们将在后面学习)。

#### Rest Arguments

相反，我们可以使用 spread 语法从数组中提供可变数量的参数。例如，数组的 push 方法接受任意数量的参数:

```typescript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
arr1.push(...arr2);
```

注意，一般来说，TypeScript 并不假定数组是不可变的，这会导致一些令人惊讶的行为:

```typescript
// Inferred type is number[] -- "an array with zero or more numbers",
// not specifically two numbers
const args = [8, 5];
const angle = Math.atan2(...args);
/Expected 2 arguments, but got 0 or more.
```

对于这种情况，最好的解决办法有点取决于你的代码，但是一般来说，const上下文是最直接的解决方案:

```typescript
// Inferred as 2-length tuple
const args = [8, 5] as const;
// OK
const angle = Math.atan2(...args);
```

使用 rest 参数可能需要在针对旧的运行时（runtimes）打开 downlevelIteration(降级迭代)。

### Parameter Destructuring参数析构

可以使用参数析构化来方便地将作为参数提供的对象解压缩到函数体中的一个或多个局部变量中。在 JavaScript 中，它是这样的:

```typescript
function sum({ a, b, c }) {
  console.log(a + b + c);
}
sum({ a: 10, b: 3, c: 9 });
```

对象的类型注释在析构化语法之后:

```typescript
function sum({ a, b, c }: { a: number; b: number; c: number }) {
  console.log(a + b + c);
}Try
```

这看起来有点冗长，但是你也可以在这里使用命名类型:

```typescript
// Same as prior example
type ABC = { a: number; b: number; c: number };
function sum({ a, b, c }: ABC) {
  console.log(a + b + c);
}
```

### 函数的可赋值性

#### 返回类型`void`

函数的 void 返回类型可以产生一些不寻常但是预期的行为。

返回类型为 void 的上下文类型不会强制函数不返回某些内容。另一种说法是，带有 void 返回类型(type vf = () = > void)的上下文函数类型在实现时可以返回任何其他值，但它将被忽略。

因此，type () = > void 的下列实现是有效的:

```typescript
type voidFunc = () => void;

const f1: voidFunc = () => {
  return true;
};

const f2: voidFunc = () => true;

const f3: voidFunc = function () {
  return true;
};
```

当其中一个函数的返回值被赋给另一个变量时，它将保留 void 类型:

```typescript
const v1 = f1();

const v2 = f2();

const v3 = f3();
```

这种行为的存在使得下面的代码时有效的，即使是 Array.prototype.push 返回一个数字和一个 Array.prototype.forEach 方法需要一个返回类型为 void 的函数。

```typescript
const src = [1, 2, 3];
const dst = [0];

src.forEach((el) => dst.push(el));
```

还有另外一个需要注意的特殊情况，当文本函数定义具有 void 返回类型时，该函数不能返回任何内容。

```typescript
function f2(): void {
  // @ts-expect-error
  return true;
}

const f3 = function (): void {
  // @ts-expect-error
  return true;
};
```

关于 void 的更多信息，请参考其他文档条目:

- [v1 handbook V1手册](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)
- [v2 handbook V2手册](https://www.typescriptlang.org/docs/handbook/2/functions.html#void)
- [FAQ - “Why are functions returning non-void assignable to function returning void?” 常见问题-“为什么函数返回非无效可分配的函数返回无效?”](https://github.com/Microsoft/TypeScript/wiki/FAQ#why-are-functions-returning-non-void-assignable-to-function-returning-void)

## 6、对象类型

在 JavaScript 中，我们分组和传递数据的基本方式是通过对象。在打字稿中，我们通过对象类型来表示这些内容。

正如我们所见，他们可以是匿名的:

```typescript
function greet(person: { name: string; age: number }) {
  return "Hello " + person.name;
}
```

或者可以通过接口命名

```typescript
interface Person {
  name: string;
  age: number;
}

function greet(person: Person) {
  return "Hello " + person.name;
}
```

或者是别名。

```typescript
type Person = {
  name: string;
  age: number;
};

function greet(person: Person) {
  return "Hello " + person.name;
}
```

在上面的三个示例中，我们已经编写了一些函数，它们接受包含属性名(必须是字符串)和年龄(必须是数字)的对象。

### Property Modifiers属性修饰符

对象类型中的每个属性可以指定两个事项: 类型、属性是否可选以及是否可以将属性写入。

#### 可选属性

大多数时候，我们会发现自己处理的对象可能有一个属性集。在这些情况下，我们可以通过在他们的名字结尾处添加一个问号(?)将这些属性标记为可选的。

```typescript
interface PaintOptions {
  shape: Shape;
  xPos?: number;
  yPos?: number;
}

function paintShape(opts: PaintOptions) {
  // ...
}

const shape = getShape();
paintShape({ shape });
paintShape({ shape, xPos: 100 });
paintShape({ shape, yPos: 100 });
paintShape({ shape, xPos: 100, yPos: 100 });
```

在本例中，xPos 和 yPos 都被认为是可选的。我们可以选择提供其中任何一个，因此上面对 paintShape 的每个调用都是有效的。所有可选性真正说的是，如果属性是设置的，它最好有一个特定的类型。

```typescript
interface PaintOptions {
  shape: Shape;
  xPos?: number;
  yPos?: number;
}

function paintShape(opts: PaintOptions) {
  // ...
}

const shape = getShape();
paintShape({ shape });
paintShape({ shape, xPos: 100 });
```

我们也可以从这些属性中进行读取——但是当我们在 strictNullChecks 下读取时，TypeScript 会告诉我们它们可能是undefined的。

```typescript
function paintShape(opts: PaintOptions) {
  let xPos = opts.xPos;
                   //(property) PaintOptions.xPos?: number | undefined
  let yPos = opts.yPos;
                   //(property) PaintOptions.yPos?: number | undefined
  // ...
}
```

在 JavaScript 中，即使这个属性从来没有被设置过，我们仍然可以访问它——它只会给我们一个undefined的值。我们只能特殊地处理undefined。

```typescript
function paintShape(opts: PaintOptions) {
  let xPos = opts.xPos === undefined ? 0 : opts.xPos;
       //let xPos: number
  let yPos = opts.yPos === undefined ? 0 : opts.yPos;
       //let yPos: number
  // ...
}
```

请注意，这种为未指定值设置默认值的模式非常常见，以至于 JavaScript 有语法支持它。

```typescript
function paintShape({ shape, xPos = 0, yPos = 0 }: PaintOptions) {
  console.log("x coordinate at", xPos);
                                  
var xPos: number
  console.log("y coordinate at", yPos);
                                  
var yPos: number
  // ...
}
```

在这里，我们为 paintShape 的参数使用了析构模式，并为 xPos 和 yPos 提供了默认值。现在，xPos 和 yPos 都肯定存在于 paintShape 的 body 中，但是对于任何调用 paintShape 的人来说都是可选的。

> 请注意，目前没有将类型注释放置在析构化模式中的方法。这是因为下面的语法在 JavaScript 中已经有了不同的含义。

```typescript
function draw({ shape: Shape, xPos: number = 100 /*...*/ }) {
  render(shape);
/Cannot find name 'shape'. Did you mean 'Shape'?
  render(xPos);
/Cannot find name 'xPos'.
}
```

在对象析构模式中，Shape: Shape 意味着“获取属性形状并在局部将其重新定义为名为 Shape 的变量。同样，xPos: number 创建一个名为 number 的变量，其值基于参数的 xPos。

#### `readonly`Properties 只读属性

属性也可以标记为 TypeScript 的只读属性。虽然它不会在运行时改变任何行为，但是在类型检查期间不能写入标记为 readonly 的属性。

```typescript
interface SomeType {
  readonly prop: string;
}

function doSomething(obj: SomeType) {
  // We can read from 'obj.prop'.
  console.log(`prop has the value '${obj.prop}'.`);

  // But we can't re-assign it.
  obj.prop = "hello";
/Cannot assign to 'prop' because it is a read-only property.
}
```

使用 readonly 修饰符并不一定意味着一个值是完全不可变的，或者换句话说，它的内部内容不能被更改。这只是意味着属性本身不能被重写。

```typescript
interface Home {
  readonly resident: { name: string; age: number };
}

function visitForBirthday(home: Home) {
  // We can read and update properties from 'home.resident'.
  console.log(`Happy birthday ${home.resident.name}!`);
  home.resident.age++;
}

function evict(home: Home) {
  // But we can't write to the 'resident' property itself on a 'Home'.
  home.resident = {
/Cannot assign to 'resident' because it is a read-only property.
    name: "Victor the Evictor",
    age: 42,
  };
}
```

管理 readonly 意味着什么的预期是很重要的。在开发ts的过程中，向用户表明应该如何使用一个对象是非常有用的。在检查这两个类型是否兼容时，TypeScript 没有考虑这两个类型上的属性是否是只读的，因此只读属性也可以通过别名来改变。

```typescript
interface Person {
  name: string;
  age: number;
}

interface ReadonlyPerson {
  readonly name: string;
  readonly age: number;
}

let writablePerson: Person = {
  name: "Person McPersonface",
  age: 42,
};

// works
let readonlyPerson: ReadonlyPerson = writablePerson;

console.log(readonlyPerson.age); // prints '42'
writablePerson.age++;
console.log(readonlyPerson.age); // prints '43'
```

#### Index Signatures索引签名

有时候，您不能提前知道类型属性的所有名称，但是您知道值的形状。

在这些情况下，你可以使用索引签名来描述可能的值的类型，例如:

```typescript
interface StringArray {
  [index: number]: string;
}

const myArray: StringArray = getStringArray();
const secondItem = myArray[1];
          //const secondItem: string
```

上面，我们有一个 StringArray 接口，它有一个索引签名。这个索引签名声明当一个 StringArray 被一个数字索引时，它将返回一个字符串。

索引签名属性类型必须是“字符串”或“数字”。

##### 支持两种类型的索引器是可能的。

可以支持这两种类型的索引器，但是从数值索引器返回的类型必须是从字符串索引器返回的类型的子类型。这是因为当使用数字作为索引时，JavaScript 实际上会在将数字作为索引对象之前将其转换为字符串。这意味着使用“100”(数字)作为索引与使用“100”(字符串)作为索引是一样的，因此两者需要保持一致。

```typescript
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

// Error: indexing with a numeric string might get you a completely separate type of Animal!
interface NotOkay {
  [x: number]: Animal;
/Numeric index type 'Animal' is not assignable to string index type 'Dog'.
  [x: string]: Dog;
}
```

虽然字符串索引签名是描述“字典”模式的一种强大的方式，但是它们也要求所有属性都匹配它们的返回类型。这是因为字符串索引声明 obj.property 也可以作为 obj [“ property”]使用。在下面的示例中，name 的类型与字符串索引的类型不匹配，并且类型检查器会给出一个错误:

```typescript
interface NumberDictionary {
  [index: string]: number;

  length: number; // ok
  name: string;
/Property 'name' of type 'string' is not assignable to string index type 'number'.
}
```

但是，如果索引签名是属性类型的并集，则可以接受不同类型的属性:

```typescript
interface NumberOrStringDictionary {
  [index: string]: number | string;
  length: number; // ok, length is a number
  name: string; // ok, name is a string
}
```

最后，您可以使索引签名只读，以防止分配给他们的索引:

```typescript
interface ReadonlyStringArray {
  readonly [index: number]: string;
}

let myArray: ReadonlyStringArray = getReadOnlyStringArray();
myArray[2] = "Mallory";
/Index signature in type 'ReadonlyStringArray' only permits reading.
```

不能设置 myArray [2] ，因为索引签名是只读的。

### Extending Types扩展类型

有些类型可能是其他类型的特定版本，这种情况很常见。例如，我们可能有一个 BasicAddress 类型，它描述了在美国发送信件和包裹所必需的字段。

```typescript
interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}
```

在某些情况下，这就足够了，但是如果一个地址的建筑物有多个单元，那么地址通常会有一个单元号。然后我们可以用 unit 来描述一个地址。

```typescript
interface AddressWithUnit {
  name?: string;
  unit: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}
```

这样就可以了，但是这里的缺点是我们必须重复 BasicAddress 中的所有其他字段，而我们的更改只是附加的。相反，我们可以扩展原来的 BasicAddress 类型，只需添加 AddressWithUnit 所特有的新字段。

```typescript
interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}

interface AddressWithUnit extends BasicAddress {
  unit: string;
}
```

接口上的 extends 关键字允许我们有效地从其他命名类型中复制成员，并添加任何我们想要的新成员。这对于减少我们必须编写的类型声明样板的数量，以及发出意图，表明同一个属性的多个不同声明可能是相关的，非常有用。例如，AddressWithUnit 不需要重复 street 属性，而且因为 street 源于 BasicAddress，读者会知道这两种类型在某种程度上是相关的。

接口也可以从多种类型扩展。

```typescript
interface Colorful {
  color: string;
}

interface Circle {
  radius: number;
}

interface ColorfulCircle extends Colorful, Circle {}

const cc: ColorfulCircle = {
  color: "red",
  radius: 42,
};
```

### Intersection Types交叉类型

接口允许我们通过扩展其他类型来构建新的类型。提供了另一种称为交集类型的构造，主要用于组合现有的对象类型。

使用 & 运算符定义交集类型。

```typescript
interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}

type ColorfulCircle = Colorful & Circle;
```

在这里，我们将“五彩”和“圆”相交，产生了一个新的类型，它包含了“五彩”和“圆”的所有成员。

```typescript
function draw(circle: Colorful & Circle) {
  console.log(`Color was ${circle.color}`);
  console.log(`Radius was ${circle.radius}`);
}

// okay
draw({ color: "blue", radius: 42 });

// oops
draw({ color: "red", raidus: 42 });
/Argument of type '{ color: string; raidus: number; }' is not assignable to parameter of type 'Colorful & Circle'.Object literal may only specify known properties, but 'raidus' does not exist in type 'Colorful & Circle'. Did you mean to write 'radius'?
```

### Interfaces vs. Intersections接口与交叉点

我们刚刚研究了两种组合类型的方法，这两种类型相似，但实际上略有不同。对于接口，我们可以使用 extends 子句从其他类型进行扩展，而且我们可以对交叉点进行类似的操作，并使用类型别名命名结果。两者之间的主要区别在于**如何处理冲突**，这种区别通常是在接口和交集类型的类型别名之间选择一个而不是另一个的主要原因之一。

### Generic Object Types泛型对象类型

让我们假设 Box 类型可以包含任何值——字符串、数字、长颈鹿（`Giraffe`s）等等。

```typescript
interface Box {
  contents: any;
}
```

现在，contents 属性被键入为 any，这是可行的，但是可能导致以后的事故。

我们可以使用 unknown，但这意味着在我们已经知道contents类型的情况下，我们需要进行预防性检查，或者使用容易出错的类型断言。

```typescript
interface Box {
  contents: unknown;
}

let x: Box = {
  contents: "hello world",
};

// we could check 'x.contents'
if (typeof x.contents === "string") {
  console.log(x.contents.toLowerCase());
}

// or we could use a type assertion
console.log((x.contents as string).toLowerCase());
```

一种类型安全的方法是为每种类型的contents分配不同的 Box 类型。

```typescript
interface NumberBox {
  contents: number;
}

interface StringBox {
  contents: string;
}

interface BooleanBox {
  contents: boolean;
}
```

但这意味着我们必须创建不同的函数，或者重载函数，才能对这些类型进行操作。

```typescript
function setContents(box: StringBox, newContents: string): void;
function setContents(box: NumberBox, newContents: number): void;
function setContents(box: BooleanBox, newContents: boolean): void;
function setContents(box: { contents: any }, newContents: any) {
  box.contents = newContents;
}
```

那是一大堆样板文件。此外，我们以后可能需要引入新的类型和重载。这是令人沮丧的，因为我们的盒子类型和重载实际上都是相同的。

相反，我们可以创建一个泛型 Box 类型，它声明一个类型参数。

```typescript
interface Box<Type> {
  contents: Type;
}
```

你可以这样理解: “ a Box of Type 是一种contents具有 Type 类型的东西”。稍后，当我们引用 Box 时，我们必须给出一个类型参数来代替 Type。

```typescript
let box: Box<string>;
```

可以将 Box 看作是一个实际类型的模板，其中 Type 是一个占位符，将被其他类型替换。当 TypeScript 看到 Box < string > 时，它将用 string 替换 Box < Type > 中的每个 Type 实例，并最终处理类似{ contents: string }的内容。换句话说，Box < string > 和我们早期的 StringBox 工作方式相同。

```typescript
interface Box<Type> {
  contents: Type;
}
interface StringBox {
  contents: string;
}

let boxA: Box<string> = { contents: "hello" };
boxA.contents;
        //(property) Box<string>.contents: string

let boxB: StringBox = { contents: "world" };
boxB.contents;
        //(property) StringBox.contents: string
```

Box 是可重用的，因此类型可以被任何东西替代。这意味着当我们需要一个新类型的 Box 时，我们根本不需要声明一个新的 Box 类型(尽管如果我们想要的话，我们当然可以这样做)。

```typescript
interface Box<Type> {
  contents: Type;
}

interface Apple {
  // ....
}

// Same as '{ contents: Apple }'.
type AppleBox = Box<Apple>;
```

这也意味着我们可以完全通过使用泛型函数来避免重载。

```typescript
function setContents<Type>(box: Box<Type>, newContents: Type) {
  box.contents = newContents;
}
```

值得注意的是，类型别名也可以是泛型的。我们可以定义新的 Box < type > 接口，它是:

```typescript
interface Box<Type> {
  contents: Type;
}
```

通过使用一个类型别名替代:

```typescript
type Box<Type> = {
  contents: Type;
};
```

与接口不同，类型别名可以描述的不仅仅是对象类型，因此我们还可以使用它们来编写其他类型的泛型帮助器类型。

```typescript
type OrNull<Type> = Type | null;

type OneOrMany<Type> = Type | Type[];

type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>;
           //type OneOrManyOrNull<Type> = OneOrMany<Type> | null

type OneOrManyOrNullStrings = OneOrManyOrNull<string>;
               //type OneOrManyOrNullStrings = OneOrMany<string> | null
```

稍后我们将回到别名类型。

#### The `Array` Type

泛型对象类型通常是某种独立于它们所包含的元素类型而工作的容器类型。数据结构以这种方式工作非常理想，这样它们就可以在不同的数据类型之间重用。

事实证明，我们在整个手册中都使用了类似的类型: Array 类型。每当我们写出 number []或 string []这样的类型时，它实际上只是 Array < number > 和 Array < string > 的简写。

```typescript
function doSomething(value: Array<string>) {
  // ...
}

let myArray: string[] = ["hello", "world"];

// either of these work!
doSomething(myArray);
doSomething(new Array("hello", "world"));
```

与上面的 Box 类型非常相似，Array 本身也是一种泛型类型。

```typescript
interface Array<Type> {
  /**
   * Gets or sets the length of the array.
   */
  length: number;

  /**
   * Removes the last element from an array and returns it.
   */
  pop(): Type | undefined;

  /**
   * Appends new elements to an array, and returns the new length of the array.
   */
  push(...items: Type[]): number;

  // ...
}
```

现代 JavaScript 还提供了其他泛型的数据结构，比如 Map < k，v > ，Set < t > ，Promise < t > 。所有这一切真正意味着，由于 Map、 Set 和 Promise 的行为方式，它们可以与任何类型的集合一起工作。

#### The `ReadonlyArray` Type

ReadonlyArray 是一种特殊类型，用于描述不应该更改的数组。

```typescript
function doStuff(values: ReadonlyArray<string>) {
  // We can read from 'values'...
  const copy = values.slice();
  console.log(`The first value is ${values[0]}`);

  // ...but we can't mutate 'values'.
  values.push("hello!");
/Property 'push' does not exist on type 'readonly string[]'.
}
```

很像属性的 readonly 修饰符，它主要是一个我们可以用于意图的工具。当我们看到一个函数返回 ReadonlyArrays 时，它告诉我们，我们根本不打算改变内容，当我们看到一个函数使用 ReadonlyArrays 时，它告诉我们，我们可以将任何数组传递到该函数，而不用担心它会改变其内容。

与 Array 不同，我们不能使用 ReadonlyArray 构造函数。

```typescript
new ReadonlyArray("red", "green", "blue");
/'ReadonlyArray' only refers to a type, but is being used as a value here.
```

相反，我们可以将规则的`Array`s分配给 `ReadonlyArray`s。

```typescript
const roArray: ReadonlyArray<string> = ["red", "green", "blue"];
```

正如 TypeScript 为 Array < Type > 提供了一种简化语法，使用 Type [] ，它也为 ReadonlyArray < Type > 提供了一种简化语法，使用 readonly Type []。

```typescript
function doStuff(values: readonly string[]) {
  // We can read from 'values'...
  const copy = values.slice();
  console.log(`The first value is ${values[0]}`);

  // ...but we can't mutate 'values'.
  values.push("hello!");
/Property 'push' does not exist on type 'readonly string[]'.
}
```

需要注意的最后一点是，与只读属性修饰符不同，可分配性在常规数组和 `ReadonlyArray`s 之间不是双向的。

```typescript
let x: readonly string[] = [];
let y: string[] = [];

x = y;
y = x;
/The type 'readonly string[]' is 'readonly' and cannot be assigned to the mutable type 'string[]'.
```

#### Tuple Types元组类型

Tuple 类型是另一种 Array 类型，它确切地知道它包含多少个元素，以及它在特定位置包含哪些类型。

```typescript
type StringNumberPair = [string, number];
```

在这里，StringNumberPair 是字符串和数字的元组类型。与 ReadonlyArray 一样，它在运行时没有表示，但对于ts非常重要。对于类型系统，StringNumberPair 描述其0索引包含字符串且其1索引包含数字的数组。

```typescript
function doSomething(pair: [string, number]) {
  const a = pair[0];
       //const a: string
  const b = pair[1];
       //const b: number
  // ...
}

doSomething(["hello", 42]);
```

如果我们尝试索引超过元素的数量，我们会得到一个错误。

```typescript
function doSomething(pair: [string, number]) {
  // ...

  const c = pair[2];
Tuple type '[string, number]' of length '2' has no element at index '2'.
}
```

我们也可以使用 JavaScript 的数组析构来重构元组。

```typescript
function doSomething(stringHash: [string, number]) {
  const [inputString, hash] = stringHash;

  console.log(inputString);
                  //const inputString: string

  console.log(hash);
               //const hash: number
}
```

> 元组类型在大量基于约定的 api 中非常有用，其中每个元素的意义都是“显而易见的”。这给了我们灵活性，当我们去析构化变量时，我们可以随意给它们命名。在上面的示例中，我们可以将元素0和1命名为我们想要的名称。
>
> 然而，由于不是每个用户都对显而易见的事物持有相同的观点，因此值得重新考虑使用具有描述性属性名称的对象是否对您的 API 更好。

除了这些长度检查之外，像这样的简单元组类型等价于为特定索引声明属性的数组版本的类型，以及用数值文本类型声明长度的类型。

```typescript
interface StringNumberPair {
  // specialized properties
  length: 2;
  0: string;
  1: number;

  // Other 'Array<string | number>' members...
  slice(start?: number, end?: number): Array<string | number>;
}
```

您可能感兴趣的另一件事是，通过写出一个问号(？在元素的类型之后)。可选的 tuple 元素只能出现在结尾，并且还会影响长度的类型。

```typescript
type Either2dOr3d = [number, number, number?];

function setCoordinate(coord: Either2dOr3d) {
  const [x, y, z] = coord;
              //const z: number | undefined

  console.log(`Provided coordinates had ${coord.length} dimensions`);
                                                  //(property) length: 2 | 3
}
```

元组还可以有 rest 元素，这些元素必须是数组/元组类型。

```typescript
type StringNumberBooleans = [string, number, ...boolean[]];
type StringBooleansNumber = [string, ...boolean[], number];
type BooleansStringNumber = [...boolean[], string, number];
```

- `StringNumberBooleans` 描述一个元组，它的前两个元素对应的是string和number，但是它可能有任意数量的boolean跟随。
- `StringBooleansNumber` 描述一个元组，它的第一个元素是string，然后是任意数量的boolean，最后一个number结束。
- `BooleansStringNumber` 描述一个元组，它的起始元素是任意数量d额`boolean`， 结尾一个`string` ， 然后一个`number`.

带有 rest 元素的 tuple 没有设置“长度”——它只有一组位于不同位置的已知元素。

```typescript
const a: StringNumberBooleans = ["hello", 1];
const b: StringNumberBooleans = ["beautiful", 2, true];
const c: StringNumberBooleans = ["world", 3, true, false, true, false, true];
```

为什么可选元素和 rest 元素可能有用？好吧，它允许ts将参数列表对应元组。元组类型可以在[rest parameters and arguments](https://www.typescriptlang.org/docs/handbook/2/functions.html#rest-parameters-and-arguments)中使用，例如:

```typescript
function readButtonInput(...args: [string, number, ...boolean[]]) {
  const [name, version, ...input] = args;
  // ...
}
```

基本上等同于:

```typescript
function readButtonInput(name: string, version: number, ...input: boolean[]) {
  // ...
}
```

当您想要接受带有 rest 参数的可变数量的参数，并且需要最少数量的元素，但又不想引入中间变量时，这种方法非常方便。

#### `readonly`Tuple Types元组类型

关于元组类型的最后一个注意事项-元组类型有只读变量，可以通过在它们前面添加只读修饰符来指定-就像数组速记语法一样。

```typescript
function doSomething(pair: readonly [string, number]) {
  // ...
}
```

正如您可能期望的那样，在ts中不允许向只读元组的任何属性写入。

```typescript
function doSomething(pair: readonly [string, number]) {
  pair[0] = "hello!";
/Cannot assign to '0' because it is a read-only property.
}
```

在大多数代码中，元组倾向于被创建并且不被修改，所以尽可能地将类型注释为只读元组是一个很好的缺省值。这一点也很重要，因为带有 const 断言的数组文字将使用只读元组类型进行推断。

```typescript
let point = [3, 4] as const;

function distanceFromOrigin([x, y]: [number, number]) {
  return Math.sqrt(x ** 2 + y ** 2);
}

distanceFromOrigin(point);
/Argument of type 'readonly [3, 4]' is not assignable to parameter of type '[number, number]'. The type 'readonly [3, 4]' is 'readonly' and cannot be assigned to the mutable type '[number, number]'.
```

在这里，distanceFromOrigin 从不修改其元素，但是需要一个可变元组。由于 point 的类型被推断为只读[3,4] ，它不会与[ number，number ]兼容，因为这个类型不能保证 point 的元素不会发生变异。

## 7、类型操作

### 从类型创建类型

ts的类型系统非常强大，因为它允许用其他类型来表示类型。

这个想法最简单的形式是泛型，我们实际上有各种各样的类型运算符可用。也可以用我们已有的值来表示类型。

通过组合各种类型的运算符，我们可以用一种简洁的、可维护的方式来表示复杂的操作和值。在本节中，我们将讨论用现有类型或值表示新类型的方法。

- [Generics 泛型](https://www.typescriptlang.org/docs/handbook/2/generics.html) -  接受参数的类型
- [Keyof 类型操作符键](https://www.typescriptlang.org/docs/handbook/2/keyof-types.html) - 使用`keyof` 运算符来创建新类型
- [Typeof 类型操作符](https://www.typescriptlang.org/docs/handbook/2/typeof-types.html) - 使用`typeof` 运算符来创建新类型
- [Indexed Access Types 索引访问类型](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html) - 使用`Type['a']`语法来访问类型的子集
- [Conditional Types 条件类型](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html) - 类型类似于类型系统中的 if 语句
- [Mapped Types 映射类型](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html) - 通过映射现有类型中的每个属性创建类型
- [Template Literal Types 模板文字类型](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html) - 通过模板字符串改变属性的映射类型

### 泛型

软件工程的一个主要部分是构建组件，这些组件不仅具有定义良好和一致的 api，而且还是可重用的。能够处理今天的数据和明天的数据的组件将为您提供构建大型软件系统的最灵活的能力。

在 c # 和 Java 这样的语言中，工具箱中用来创建可重用组件的主要工具之一是泛型，也就是说，能够创建一个可以跨多种类型而不是单一类型工作的组件。这允许用户使用这些组件并使用他们自己的类型。

#### 泛型的Hello World

首先，让我们来做泛型的“ hello world”: 标识函数。恒等函数是一个函数，它将返回所有传入的内容。您可以以类似于 echo 命令的方式来考虑这个问题。

如果没有泛型，我们将不得不给身份函数一个特定的类型:

```typescript
function identity(arg: number): number {
  return arg;
}
```

或者，我们可以使用任意类型来描述身份函数:

```typescript
function identity(arg: any): any {
  return arg;
}
```

虽然使用 any 肯定是泛型的，因为它会导致函数接受 arg 类型的任何和所有类型，但是当函数返回时，我们实际上正在丢失关于该类型是什么的信息。如果我们传入一个数字，那么我们得到的唯一信息就是任何类型都可以返回。

相反，我们需要一种捕获参数类型的方法，这种方法也可以用来表示返回的内容。这里，我们将使用一个类型变量，这是一种特殊的变量，用于类型而不是值。

```typescript
function identity<Type>(arg: Type): Type {
  return arg;
}
```

我们现在已经为标识函数添加了一个类型变量 Type。这种类型允许我们捕获用户提供的类型(例如数字) ，这样我们以后就可以使用这些信息。在这里，我们再次使用 Type 作为返回类型。经过检查，我们现在可以看到参数和返回类型使用了相同的类型。这允许我们在函数的一端输入该类型的信息，而在另一端输出该类型的信息。

我们说这个版本的标识函数是泛型的，因为它可以在一系列类型中工作。与使用 any 不同，它与使用数字作为参数和返回类型的第一个恒等式函数一样精确(也就是说，它不会丢失任何信息)。

一旦我们编写了泛型标识函数，我们可以用两种方法之一来调用它。第一种方法是将所有参数，包括类型参数，传递给函数:

```typescript
let output = identity<string>("myString");
      //let output: string
```

在这里，我们显式地将 Type 设置为 string，作为函数调用的参数之一，用参数周围的 < > 表示，而不是()。

第二种方式也许也是最常见的。这里我们使用类型参数推断ーー也就是说，我们希望编译器根据我们传入的参数的类型自动为我们设置 Type 的值:

```typescript
let output = identity("myString");
      //let output: string
```

注意，我们不必显式地将类型传递到尖括号中(< >) ; 编译器只需查看值“ myString”，并将 Type 设置为其类型。虽然类型参数推断是一个有用的工具，可以使代码更短，更具可读性，但是你可能需要显式地传入类型参数，就像我们在前面的例子中所做的那样，当编译器无法推断出类型时，就像在更复杂的例子中可能发生的那样。

#### 使用泛型类型变量

当您开始使用泛型时，您将注意到，当您创建诸如 identity 之类的泛型函数时，编译器将强制您在函数体中正确使用任何泛型类型的参数。也就是说，您实际上将这些参数视为它们可以是任意和所有类型。

让我们从前面的identity函数开始:

```typescript
function identity<Type>(arg: Type): Type {
  return arg;
}
```

如果我们还想在每次调用时将参数 arg 的长度记录到控制台，该怎么办？我们可能会写下这样的话:

```typescript
function loggingIdentity<Type>(arg: Type): Type {
  console.log(arg.length);
/Property 'length' does not exist on type 'Type'.
  return arg;
}
```

当我们这样做的时候，编译器会给我们一个错误，我们正在使用Arg 的长度成员，但我们没有说过 arg 有这个成员。记住，我们前面说过这些类型变量代表任何和所有类型，所以使用这个函数的人可以传入一个数字，而这个数字没有长度成员。

假设我们实际上希望这个函数处理 Type 数组，而不是直接处理 Type。因为我们使用数组，所以长度成员应该可用。我们可以像创建其他类型的数组一样来描述它:

```typescript
function loggingIdentity<Type>(arg: Type[]): Type[] {
  console.log(arg.length);
  return arg;
}
```

可以将 loggingIdentity的类型读取为“ 泛型函数loggingIdentity接受类型参数 Type 和参数 arg (类型数组)并返回类型数组”如果我们传入一个数字数组，我们会得到一个数字数组返回，就像 Type 会绑定到 number 一样。这允许我们使用泛型类型变量 Type 作为正在使用的类型的一部分，而不是整个类型，从而提供了更大的灵活性。

我们也可以用这种方式来编写示例:

```typescript
function loggingIdentity<Type>(arg: Array<Type>): Array<Type> {
  console.log(arg.length); // Array has a .length, so no more error
  return arg;
}
```

您可能已经从其他语言熟悉了类型的这种风格。在下一节中，我们将介绍如何创建自己的泛型类型，如 Array < type > 。

####  泛型类型

在前面的部分中，我们创建了适用于一系列类型的泛型标识函数。在本节中，我们将探讨函数本身的类型以及如何创建泛型接口。

泛型函数的类型与非泛型函数类似，类型参数列在前面，类似于函数声明:

```typescript
function identity<Type>(arg: Type): Type {
  return arg;
}

let myIdentity: <Type>(arg: Type) => Type = identity;
```

我们也可以为类型中的泛型类型参数使用不同的名称，只要类型变量的数量和类型变量的使用方式是一致的。

```typescript
function identity<Type>(arg: Type): Type {
  return arg;
}

let myIdentity: <Input>(arg: Input) => Input = identity;
```

我们也可以将泛型类型写作为对象文本类型的调用签名:

```typescript
function identity<Type>(arg: Type): Type {
  return arg;
}

let myIdentity: { <Type>(arg: Type): Type } = identity;
```

这使我们编写了第一个泛型接口。让我们把前面例子中的 object literal 移动到一个接口:

```typescript
interface GenericIdentityFn {
  <Type>(arg: Type): Type;
}

function identity<Type>(arg: Type): Type {
  return arg;
}

let myIdentity: GenericIdentityFn = identity;
```

在类似的示例中，我们可能希望将泛型参数移动为整个接口的参数。这让我们知道哪些类型是泛型的(比如 Dictionary < string > 而不仅仅是 Dictionary)。这使得 type 参数对接口的所有其他成员可见。

```typescript
interface GenericIdentityFn<Type> {
  (arg: Type): Type;
}

function identity<Type>(arg: Type): Type {
  return arg;
}

let myIdentity: GenericIdentityFn<number> = identity;
```

请注意，我们的示例已经变得稍有不同。与描述泛型函数不同，我们现在有一个非泛型函数签名，它是泛型类型的一部分。当我们使用 GenericIdentityFn 时，我们现在还需要指定相应的类型参数(这里: number) ，有效地锁定底层调用签名将使用的内容。理解何时将类型参数直接放在调用签名上，何时将其放在接口本身上，将有助于描述类型的哪些方面是泛型的。

除了泛型接口，我们还可以创建泛型类。请注意，不可能创建泛型的 enums 和 namespaces。

#### 泛型类

泛型类具有与泛型接口类似的形状。泛型类的名称后面的尖括号(< >)中有一个泛型类型参数列表。

```typescript
class GenericNumber<NumType> {
  zeroValue: NumType;
  add: (x: NumType, y: NumType) => NumType;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};
```

这是对 GenericNumber 类的字面使用，但是您可能已经注意到没有任何东西限制它只使用数字类型。我们可以用字符串或者更复杂的对象来代替。

```typescript
let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function (x, y) {
  return x + y;
};

console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));
```

就像使用 interface 一样，将 type 参数放在类本身上可以让我们确保类的所有属性都使用相同的类型。

正如我们在关于类的章节中所介绍的，类的类型有两个方面: 静态方面和实例方面。泛型类只是泛型的实例端而不是静态端，因此在处理类时，静态成员不能使用类的类型参数。

正如我们在关于类的章节中所介绍的，类的类型有两个方面: 静态方面和实例方面。泛型类只是泛型的实例端而不是静态端，因此在处理类时，静态成员不能使用类的类型参数。

#### 泛型约束

如果您还记得前面的一个例子，那么有时您可能想要编写一个泛型函数，它可以在一组类型上工作，在这些类型上，您可以了解这组类型将具有哪些功能。在我们的 loggingIdentity示例中，我们希望能够访问arg的 length 属性，但是编译器不能证明每个类型都有长度属性，所以它警告我们，我们不能做出这种假设。

```typescript
function loggingIdentity<Type>(arg: Type): Type {
  console.log(arg.length);
/Property 'length' does not exist on type 'Type'.
  return arg;
}
```

与使用任何和所有类型不同，我们希望约束这个函数使其能够使用任何和所有同样具有长度属性。只要类型有这个成员，我们就允许它，但是它至少需要有这个成员。要做到这一点，我们必须将我们的需求列为 Type 可以是什么的约束。

为此，我们将创建一个描述约束的接口。在这里，我们将创建一个接口，它有一个单一的长度属性，然后我们使用这个接口和 extends 关键字来表示我们的约束:

```typescript
interface Lengthwise {
  length: number;
}

function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
  console.log(arg.length); // Now we know it has a .length property, so no more error
  return arg;
}
```

因为泛型函数现在受到约束，它将不再适用于任何和所有类型:

```typescript
loggingIdentity(3);
/Argument of type 'number' is not assignable to parameter of type 'Lengthwise'.
```

相反，我们需要传入具有所有必需属性的类型:

```typescript
loggingIdentity({ length: 10, value: 3 });
```

####  在泛型约束中使用类型参数

可以声明受其他类型参数约束的类型参数。例如，这里我们想从给定名称的对象获取一个属性。我们想要确保我们不会意外地抓取 obj 上不存在的属性，所以我们将在两种类型之间设置一个约束:

```typescript
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a");
getProperty(x, "m");
/Argument of type '"m"' is not assignable to parameter of type '"a" | "b" | "c" | "d"'.
```

#### 在泛型中使用类类型

当使用泛型在 TypeScript 中创建工厂时，必须通过类的构造函数引用类类型。比如说,

```typescript
function create<Type>(c: { new (): Type }): Type {
  return new c();
}
```

一个更高级的示例使用 prototype 属性来推断和约束构造函数和类类型的实例端之间的关系。

```typescript
class BeeKeeper {
  hasMask: boolean = true;
}

class ZooKeeper {
  nametag: string = "Mikle";
}

class Animal {
  numLegs: number = 4;
}

class Bee extends Animal {
  keeper: BeeKeeper = new BeeKeeper();
}

class Lion extends Animal {
  keeper: ZooKeeper = new ZooKeeper();
}

function createInstance<A extends Animal>(c: new () => A): A {
  return new c();
}

createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask;
```

此模式用于为混合器(mixins)设计模式提供动力。

### keyof类型操作符键

操作符 keyof 接受一个对象类型，并生成一个字符串或数字字面联合的键:

```typescript
type Point = { x: number; y: number };
type P = keyof Point;
    //type P = keyof Point
```

如果类型有字符串或数字索引签名，keyof 将返回这些类型:

```typescript
type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish;
    //type A = number

type Mapish = { [k: string]: boolean };
type M = keyof Mapish;
    //type M = string | number
```

注意，在这个例子中，m 是string| number ー这是因为 JavaScript 对象键总是被强制为字符串，所以 obj [0]总是与 obj [“0”]相同。

当与映射类型组合时，keyof types 变得特别有用，稍后我们将对此进行更多的了解。

### typeof 类型操作符

#### The `typeof`type operator

js已经有一个typeof操作符，你可以在表达式上下文中使用:

```typescript
// Prints "string"
console.log(typeof "Hello world");
```

ts增加了一个typeof操作符，你可以在类型上下文中使用它来引用变量或属性的类型:

```typescript
let s = "hello";
let n: typeof s;
   //let n: string
```

这对于基本类型并不十分有用，但是结合其他类型操作符，您可以使用 typeof 方便地表示许多模式。例如，让我们首先查看预定义的类型 **ReturnType < t >** 。它接受一个函数类型并生成它的返回类型:

```typescript
type Predicate = (x: unknown) => boolean;
type K = ReturnType<Predicate>;
    //type K = boolean
```

如果我们尝试在函数名上使用 ReturnType，我们会看到一个指导性错误:

```typescript
function f() {
  return { x: 10, y: 3 };
}
type P = ReturnType<f>;
/'f' refers to a value, but is being used as a type here. Did you mean 'typeof f'?
```

记住，值和类型不是一回事。为了引用值 f 的类型，我们使用 typeof:

```typescript
function f() {
  return { x: 10, y: 3 };
}
type P = ReturnType<typeof f>;
    /*type P = {
        x: number;
        y: number;
    }*/
```

#### 局限性

ts有意地限制了你可以使用 typeof 的表达式的种类。

具体来说，在标识符(即变量名)或其属性上使用 typeof 是合法的。这有助于避免编写你认为正在执行但实际上并没有执行的代码时出现的困惑:

```typescript
// Meant to use = ReturnType<typeof msgbox>
let shouldContinue: typeof msgbox("Are you sure you want to continue?");
/',' expected.
```

### 索引访问类型

我们可以使用一个索引访问类型来查找另一个类型上的特定属性:

```typescript
type Person = { age: number; name: string; alive: boolean };
type Age = Person["age"];
     //type Age = number
```

索引类型本身是一种类型，因此我们可以使用联合、keyof或其他类型:

```typescript
type I1 = Person["age" | "name"];
     //type I1 = string | number

type I2 = Person[keyof Person];
     //type I2 = string | number | boolean

type AliveOrName = "alive" | "name";
type I3 = Person[AliveOrName];
     //type I3 = string | boolean
```

如果你尝试索引一个不存在的属性，你甚至会看到一个错误:

```typescript
type I1 = Person["alve"];
/Property 'alve' does not exist on type 'Person'.
```

使用任意类型进行索引的另一个示例是使用 number 来获取数组元素的类型。我们可以把它和 typeof 结合起来，方便地捕获数组文字的元素类型:

```typescript
const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];

type Person = typeof MyArray[number];
       /*type Person = {
            name: string;
            age: number;
        }*/
type Age = typeof MyArray[number]["age"];
     //type Age = number
// Or
type Age2 = Person["age"];
      //type Age2 = number
```

你只能在索引的时候使用类型，这意味着你不能使用 const 作为变量引用:

```typescript
const key = "age";
type Age = Person[key];
/Type 'any' cannot be used as an index type.'key' refers to a value, but is being used as a type here. Did you mean 'typeof key'?
```

但是，你可以使用类似的类型别名进行重构:

```typescript
type key = "age";
type Age = Person[key];
```

### 条件类型

在大多数有用的程序的核心，我们必须根据输入做出决定。程序没有什么不同，但是考虑到值可以很容易地反思，这些决定也是基于输入的类型。条件类型帮助描述输入和输出类型之间的关系。

```typescript
interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}

type Example1 = Dog extends Animal ? number : string;
        //type Example1 = number

type Example2 = RegExp extends Animal ? number : string;
        //type Example2 = string
```

条件类型的形式看起来有点像 JavaScript 中的条件表达式(condition? trueExpression: falseExpression) :

```typescript
SomeType extends OtherType ? TrueType : FalseType;
```

当 extends 左侧的类型可以分配给右侧的类型时，您将在第一个分支(“ true”分支)中获得类型; 否则您将在后一个分支(“ false”分支)中获得类型。

从上面的例子中，条件类型可能不会立即显得有用-我们可以告诉自己是否 Dog 扩展 Animal 并选择数字或字符串！但是，条件类型的强大功能来自与泛型一起使用它们。

例如，我们来看看下面的 createLabel 函数:

```typescript
interface IdLabel {
  id: number /* some fields */;
}
interface NameLabel {
  name: string /* other fields */;
}

function createLabel(id: number): IdLabel;
function createLabel(name: string): NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel {
  throw "unimplemented";
}
```

这些 createLabel 的重载描述了一个基于输入类型进行选择的 JavaScript 函数。注意以下几点:

1. 如果一个库不得不在其 API 中一遍又一遍地做出相同的选择，这就变得很麻烦
2. 我们不得不创建三个重载：一种情况是我们确定类型（一个是字符串 ，一个是数字），另一种情况（接收string|number）.对于 createLabel 可以处理的每一个新类型，重载的数量成指数增长。

相反，我们可以将逻辑编码为条件类型:

```typescript
type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;
```

然后，我们可以使用该条件类型将重载简化为单个函数，而不需要重载。

```typescript
function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
  throw "unimplemented";
}

let a = createLabel("typescript");
   //let a: NameLabel

let b = createLabel(2.8);
   //let b: IdLabel

let c = createLabel(Math.random() ? "hello" : 42);
//let c: NameLabel | IdLabel
```

#### 条件类型约束

通常，条件类型中的检查将为我们提供一些新的信息。就像使用类型守卫进行窄化可以给我们提供更具体的类型一样，条件类型的真正分支将通过我们检查的类型进一步约束泛型。

例如，让我们来看看下面的例子:

```typescript
type MessageOf<T> = T["message"];
/Type '"message"' cannot be used to index type 'T'.
```

在本例中，由于 t 不知道有一个名为 message 的属性，所以会出现ts错误。我们可以限制 t，而且ts也不会再抱怨:

```typescript
type MessageOf<T extends { message: unknown }> = T["message"];

interface Email {
  message: string;
}

interface Dog {
  bark(): void;
}

type EmailMessageContents = MessageOf<Email>;
              //type EmailMessageContents = string
```

但是，如果我们希望 MessageOf 采用任何类型，并且在消息属性不可用的情况下默认为 never，那又会怎样呢？我们可以通过移除约束并引入条件类型来实现:

```typescript
type MessageOf<T> = T extends { message: unknown } ? T["message"] : never;

interface Email {
  message: string;
}

interface Dog {
  bark(): void;
}

type EmailMessageContents = MessageOf<Email>;
              //type EmailMessageContents = string

type DogMessageContents = MessageOf<Dog>;
             //type DogMessageContents = never
```

在真正的分支中，TypeScript 知道 t 将具有一个消息属性。

作为另一个例子，我们也可以写一个类型叫 Flatten，它把数组类型平坦化为它们的元素类型，但是不使用其他类型:

```typescript
type Flatten<T> = T extends any[] ? T[number] : T;

// Extracts out the element type.
type Str = Flatten<string[]>;
     //type Str = string

// Leaves the type alone.
type Num = Flatten<number>;
     //type Num = number
```

当 Flatten 给定一个数组类型时，它使用一个带有数字的索引访问来提取 string []的元素类型。否则，它只返回给定的类型。

#### 在条件类型中推断

条件类型为我们提供了一种使用 infer 关键字从真实分支中比较的类型推断出结果的方法。例如，我们可以在 Flatten 中推断元素类型，而不是使用索引访问类型“手动”获取它:

```typescript
type Flatten<Type> = Type extends Array<infer Item> ? Item : Type;
```

在这里，我们使用 infer 关键字声明性地引入了一个新的泛型类型变量 Item，而不是指定如何在 true 分支中检索 t 的元素类型。这使我们不必去考虑如何挖掘和分析我们感兴趣的类型的结构。

我们可以使用 infer 关键字编写一些有用的 helper 类型别名。例如，对于简单的情况，我们可以从函数类型中提取返回类型:

```typescript
type GetReturnType<Type> = Type extends (...args: never[]) => infer Return
  ? Return
  : never;

type Num = GetReturnType<() => number>;
     //type Num = number

type Str = GetReturnType<(x: string) => string>;
     //type Str = string

type Bools = GetReturnType<(a: boolean, b: boolean) => boolean[]>;
      //type Bools = boolean[]
```

当从具有多个调用签名的类型(例如重载函数的类型)进行推断时，从最后一个签名进行推断(据推测，这是最宽松的捕捉所有情况)。不可能基于参数类型列表执行重载解析。

```typescript
declare function stringOrNum(x: string): number;
declare function stringOrNum(x: number): string;
declare function stringOrNum(x: string | number): string | number;

type T1 = ReturnType<typeof stringOrNum>;
     
type T1 = string | number
```

#### 分配条件类型

当条件类型作用于泛型类型时，它们在给定联合类型时成为分配类型。例如，以下面的例子为例:

```typescript
type ToArray<Type> = Type extends any ? Type[] : never;
```

如果我们将联合类型插入 ToArray，那么条件类型将应用于该联合的每个成员。

```typescript
type ToArray<Type> = Type extends any ? Type[] : never;

type StrArrOrNumArr = ToArray<string | number>;
           //type StrArrOrNumArr = string[] | number[]
```

这里发生的是 StrOrNumArray 分布在:

```typescript
string | number;
```

并且通过联合的每一个成员类型，映射到有效的值:

```typescript
ToArray<string> | ToArray<number>;
```

所以我们就剩下:

```typescript
string[] | number[];
```

通常，分开性是默认的行为。为了避免这种行为，可以用方括号将 extends 关键字的每一边包围起来。

```typescript
type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never;

// 'StrOrNumArr' is no longer a union.
type StrOrNumArr = ToArrayNonDist<string | number>;
         //type StrOrNumArr = (string | number)[]
```

### 映射类型

当你不想重复自己的时候，有时候一种类型需要基于另一种类型。

映射类型建立在索引签名的语法之上，索引签名用于声明未提前声明的属性类型:

```typescript
type OnlyBoolsAndHorses = {
  [key: string]: boolean | Horse;
};

const conforms: OnlyBoolsAndHorses = {
  del: true,
  rodney: false,
};
```

映射类型是一种泛型类型，它使用 PropertyKeys (通常通过 keyof 创建)的联合来迭代键以创建类型:

```typescript
type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};
```

在本例中，OptionsFlags 将获取 Type 类型中的所有属性，并将其值更改为布尔值。

```typescript
type FeatureFlags = {
  darkMode: () => void;
  newUserProfile: () => void;
};

type FeatureOptions = OptionsFlags<FeatureFlags>;
           /*type FeatureOptions = {
                darkMode: boolean;
                newUserProfile: boolean;
            }*/
```

#### 映射修饰符

在映射过程中可以使用两个额外的修饰符: readonly 和? ，它们分别影响可变性和可选性。

您可以通过使用-或 + 作为前缀来删除或添加这些修饰符。如果您没有添加前缀，则假定为 + 。

```typescript
// Removes 'readonly' attributes from a type's properties
type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};

type LockedAccount = {
  readonly id: string;
  readonly name: string;
};

type UnlockedAccount = CreateMutable<LockedAccount>;
           /*type UnlockedAccount = {
                id: string;
                name: string;
            }*/
```

```typescript
// Removes 'optional' attributes from a type's properties
type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};

type MaybeUser = {
  id: string;
  name?: string;
  age?: number;
};

type User = Concrete<MaybeUser>;
      /*type User = {
            id: string;
            name: string;
            age: number;
        }*/
```

#### 通过as重新映射key

在 TypeScript 4.1及以后的版本中，您可以使用映射类型中的 as 子句重新映射映射类型中的键:

```typescript
type MappedTypeWithNewProperties<Type> = {
    [Properties in keyof Type as NewKeyType]: Type[Properties]
}
```

你可以利用一些特性，比如模板文字类型，从以前的属性中创建新的属性名:

```typescript
type Getters<Type> = {
    [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
};

interface Person {
    name: string;
    age: number;
    location: string;
}

type LazyPerson = Getters<Person>;     
        /*type LazyPerson = {
            getName: () => string;
            getAge: () => number;
            getLocation: () => string;
        }*/
```

你可以通过一个条件类型生成 never 来过滤掉键:

```typescript
// Remove the 'kind' property
type RemoveKindField<Type> = {
    [Property in keyof Type as Exclude<Property, "kind">]: Type[Property]
};

interface Circle {
    kind: "circle";
    radius: number;
}

type KindlessCircle = RemoveKindField<Circle>;          
            /*type KindlessCircle = {
                radius: number;
            }*/
```

#### 进一步探索

在这个类型操作部分，映射类型可以很好地与其他特性一起工作，例如，这里是一个使用条件类型的映射类型，根据对象的属性 pii 是否设置为文字 true，返回 true 或 false:

```typescript
type ExtractPII<Type> = {
  [Property in keyof Type]: Type[Property] extends { pii: true } ? true : false;
};

type DBFields = {
  id: { format: "incrementing" };
  name: { type: string; pii: true };
};

type ObjectsNeedingGDPRDeletion = ExtractPII<DBFields>;
                 /*type ObjectsNeedingGDPRDeletion = {
                    id: false;
                    name: true;
                }*/
```

### 模板文字类型

模板文字类型建立在字符串文字类型之上，并且能够通过联合扩展成许多字符串。

它们与 JavaScript 中的模板文字字符串具有相同的语法，但是用于类型位置。当与具体文本类型一起使用时，模板文本通过连接内容生成一个新的字符串文本类型。

```typescript
type World = "world";

type Greeting = `hello ${World}`;
        
type Greeting = "hello world"
```

当在插值位置使用联合时，类型是每个联合成员可以表示的每个可能的字符串文字的集合:

```typescript
type EmailLocaleIDs = "welcome_email" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";

type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;
          //type AllLocaleIDs = "welcome_email_id" | "email_heading_id" | "footer_title_id" | "footer_sendoff_id"
```

对于模板文字中的每个插值位置，联合是十字乘:

```typescript
type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;
type Lang = "en" | "ja" | "pt";

type LocaleMessageIDs = `${Lang}_${AllLocaleIDs}`;
            //type LocaleMessageIDs = "en_welcome_email_id" | "en_email_heading_id" | "en_footer_title_id" | "en_footer_sendoff_id" | "ja_welcome_email_id" | "ja_email_heading_id" | "ja_footer_title_id" | "ja_footer_sendoff_id" | "pt_welcome_email_id" | "pt_email_heading_id" | "pt_footer_title_id" | "pt_footer_sendoff_id"
```

我们通常建议人们对大型字符串联合使用提前生成，但这在小型情况下很有用。

#### 类型内的字符串联合

当基于类型中的现有字符串定义新字符串时，模板字符的威力就来了。

```typescript
const person = makeWatchedObject({
  firstName: "Saoirse",
  lastName: "Ronan",
  age: 26,
});

person.on("firstNameChanged", (newValue) => {
  console.log(`firstName was changed to ${newValue}!`);
});
```

注意，在监听事件“ firstNameChanged”时，不仅仅是“ firstName”，模板文本提供了一种在类型系统中处理这种类型的字符串操作的方法:

```c#
type PropEventSource<Type> = {
    on(eventName: `${string & keyof Type}Changed`, callback: (newValue: any) => void): void;
};

/// Create a "watched object" with an 'on' method
/// so that you can watch for changes to properties.
declare function makeWatchedObject<Type>(obj: Type): Type & PropEventSource<Type>;
```

有了这个，我们就可以构建一些在给出错误属性时会出错的东西:

```typescript
const person = makeWatchedObject({
  firstName: "Saoirse",
  lastName: "Ronan",
  age: 26
});

person.on("firstNameChanged", () => {});

// It's typo-resistent
person.on("firstName", () => {});
/Argument of type '"firstName"' is not assignable to parameter of type '"firstNameChanged" | "lastNameChanged" | "ageChanged"'.

person.on("frstNameChanged", () => {});
/Argument of type '"frstNameChanged"' is not assignable to parameter of type '"firstNameChanged" | "lastNameChanged" | "ageChanged"'.

```

#### 使用模板文字进行推理

请注意最后的示例如何没有重用原始值的类型。回调函数使用了 any。模板文字类型可以从替换位置推断。

我们可以使上一个示例成为泛型，从 eventName 字符串的各个部分推断出关联的属性。

```c#
type PropEventSource<Type> = {
    on<Key extends string & keyof Type>
        (eventName: `${Key}Changed`, callback: (newValue: Type[Key]) => void ): void;
};

declare function makeWatchedObject<Type>(obj: Type): Type & PropEventSource<Type>;

const person = makeWatchedObject({
  firstName: "Saoirse",
  lastName: "Ronan",
  age: 26
});

person.on("firstNameChanged", newName => {
                                
(parameter) newName: string
    console.log(`new name is ${newName.toUpperCase()}`);
});

person.on("ageChanged", newAge => {
                          
(parameter) newAge: number
    if (newAge < 0) {
        console.warn("warning! negative age");
    }
})
```

在这里，我们使on成为了一个泛型方法。

当用户使用字符串“ firstnamecchanged”调用时，TypeScript 将尝试推断 Key 的正确类型。为此，它将键与“ Changed”之前的内容进行匹配，并推断字符串“ firstName”。一旦 TypeScript 发现了这一点，on 方法就可以获取原始对象的 firstName 类型，在本例中是 string。类似地，当使用“ agecchanged”调用时，TypeScript 会查找属性年龄的类型，即 number。

推理可以以不同的方式组合，通常用于解构字符串，并以不同的方式重构它们。

####  内部字符串操作类型

为了帮助进行字符串操作，TypeScript 包含了一组可用于字符串操作的类型。这些类型是编译器内置的，用于提高性能，在.d.ts文件不能被发现，包含在ts中。

##### `Uppercase<StringType>`

将字符串中的每个字符转换为大写版本。

###### Example 例子

```c#
type Greeting = "Hello, world"
type ShoutyGreeting = Uppercase<Greeting>
           //type ShoutyGreeting = "HELLO, WORLD"

type ASCIICacheKey<Str extends string> = `ID-${Uppercase<Str>}`
type MainID = ASCIICacheKey<"my_app">
       //type MainID = "ID-MY_APP"
```

##### `Lowercase<StringType>`

将字符串中的每个字符转换为等效的小写形式。

###### Example 例子

```c#
type Greeting = "Hello, world"
type QuietGreeting = Lowercase<Greeting>
          //type QuietGreeting = "hello, world"

type ASCIICacheKey<Str extends string> = `id-${Lowercase<Str>}`
type MainID = ASCIICacheKey<"MY_APP">
       //type MainID = "id-my_app"
```

##### `Capitalize<StringType>`

将字符串中的第一个字符转换为等效的大写字母。

###### Example 例子

```typescript
type LowercaseGreeting = "hello, world";
type Greeting = Capitalize<LowercaseGreeting>;
        //type Greeting = "Hello, world"
```

##### `Uncapitalize<StringType>`

将字符串中的第一个字符转换为等效的小写形式。

###### Example 例子

```typescript
type UppercaseGreeting = "HELLO WORLD";
type UncomfortableGreeting = Uncapitalize<UppercaseGreeting>;
              //type UncomfortableGreeting = "hELLO WORLD"
```

**关于内部字符串操作类型的技术细节:**

在 TypeScript 4.1中，这些内部函数的代码直接使用 JavaScript 字符串运行时函数进行操作，并且不知道区域设置。

```typescript
function applyStringMapping(symbol: Symbol, str: string) {
    switch (intrinsicTypeKinds.get(symbol.escapedName as string)) {
        case IntrinsicTypeKind.Uppercase: return str.toUpperCase();
        case IntrinsicTypeKind.Lowercase: return str.toLowerCase();
        case IntrinsicTypeKind.Capitalize: return str.charAt(0).toUpperCase() + str.slice(1);
        case IntrinsicTypeKind.Uncapitalize: return str.charAt(0).toLowerCase() + str.slice(1);
    }
    return str;
}
```

## 8、类

TypeScript 提供了对 ES2015中引入的 class 关键字的完全支持。

与其他 JavaScript 语言特性一样，TypeScript 添加了类型注释和其他语法，允许您表达类和其他类型之间的关系。

### 类成员

下面是最基本的类——一个空类:

```typescript
class Point {}
```

这个类还不是很有用，所以让我们开始添加一些成员。

#### 字段

字段声明在类上创建一个公共可写属性:

```typescript
class Point {
  x: number;
  y: number;
}

const pt = new Point();
pt.x = 0;
pt.y = 0;
```

与其他位置一样，类型注释是可选的，但如果没有指定，则为隐式注释为any。

字段也可以有初始化器; 当类被实例化时，这些会自动运行:

```typescript
class Point {
  x = 0;
  y = 0;
}

const pt = new Point();
// Prints 0, 0
console.log(`${pt.x}, ${pt.y}`);
```

就像使用 const、 let 和 var 一样，class 属性的初始化器将用于推断其类型:

```typescript
const pt = new Point();
pt.x = "0";
/Type 'string' is not assignable to type 'number'.
```

##### `严格属性初始化`

strictPropertyInitialization 设置控制是否需要在构造函数中初始化类字段。

```typescript
class BadGreeter {
  name: string;
/Property 'name' has no initializer and is not definitely assigned in the constructor.
}
```

```typescript
class GoodGreeter {
  name: string;

  constructor() {
    this.name = "hello";
  }
}
```

注意，需要在构造函数本身中初始化字段。ts不会分析您从构造函数中调用的方法来检测初始化，因为派生类可能会覆盖这些方法并且无法初始化成员。

如果您打算通过构造函数以外的方法(例如，可能有一个外部库为您填充了类的一部分)确切地初始化字段，那么您可以使用确定的赋值断言运算符，！:

```typescript
class OKGreeter {
  // Not initialized, but no error
  name!: string;
}
```

##### `readonly只读`

字段可以用 readonly 修饰符作为前缀。这样可以防止赋值到构造函数之外的字段。

```typescript
class Greeter {
  readonly name: string = "world";

  constructor(otherName?: string) {
    if (otherName !== undefined) {
      this.name = otherName;
    }
  }

  err() {
    this.name = "not ok";
/Cannot assign to 'name' because it is a read-only property.
  }
}
const g = new Greeter();
g.name = "also not ok";
/Cannot assign to 'name' because it is a read-only property.

```

#### Constructors构造函数

类构造函数与函数非常相似。你可以添加带有类型注释、默认值的参数、和重载:

```typescript
class Point {
  x: number;
  y: number;

  // Normal signature with defaults
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}
```

```typescript
class Point {
  // Overloads
  constructor(x: number, y: string);
  constructor(s: string);
  constructor(xs: any, y?: any) {
    // TBD
  }
}
```

类构造函数签名和函数签名只有一些区别:

- 构造函数不能有类型参数——它们属于外部类声明，我们将在后面学习
- 构造函数不能有返回类型注释——返回的总是类实例类型

##### Super Calls 超级调用

就像在 JavaScript 中一样，如果您有一个基类，那么在像`this.`这样使用这个基类的成员之前，您需要在构造函数体中调用 super ():

```typescript
class Base {
  k = 4;
}

class Derived extends Base {
  constructor() {
    // Prints a wrong value in ES5; throws exception in ES6
    console.log(this.k);
/'super' must be called before accessing 'this' in the constructor of a derived class.
    super();
  }
}
```

在 JavaScript 中，忘记调用 super 是一个很容易犯的错误，但是 TypeScript 会告诉你什么时候需要调用。

#### Methods方法

类上的函数属性称为方法。方法可以使用与函数和构造函数相同的所有类型注释:

```typescript
class Point {
  x = 10;
  y = 10;

  scale(n: number): void {
    this.x *= n;
    this.y *= n;
  }
}
```

除了标准的类型注释，TypeScript 没有给方法添加任何新的内容。

注意，在方法体内部，仍然必须通过以下`this.`访问字段和其他方法。方法体中不合格的名称总是指封闭域中的某些内容:

```typescript
let x: number = 0;

class C {
  x: string = "hello";

  m() {
    // This is trying to modify 'x' from line 1, not the class property
    x = "world";
/Type 'string' is not assignable to type 'number'.
  }
}
```

#### Getters / SettersGetters/Setters

类也可以有访问器:

```typescript
class C {
  _length = 0;
  get length() {
    return this._length;
  }
  set length(value) {
    this._length = value;
  }
}
```

> 注意，有字段支持且没有额外逻辑的 get/set 对在 JavaScript 中很少有用。如果在 get/set 操作期间不需要添加额外的逻辑，那么可以公开public公共字段。

ts对访问器有一些特殊的推理规则:

- 如果`get` 存在但不存在`set`, 该属性会自动`readonly`
- 如果没有指定 setter 参数的类型，则从 getter 的返回类型推断出来
- Getters 和 setters 必须具有相同的[Member Visibility 成员能见度](https://www.typescriptlang.org/docs/handbook/2/classes.html#member-visibility)

自从 TypeScript 4.3以来，可以使用不同类型的访问器来getting和setting。

```typescript
class Thing {
    _size = 0;

    get size(): number {
        return this._size;
    }

    set size(value: string | number | boolean) {
        let num = Number(value);

        // Don't allow NaN, Infinity, etc

        if (!Number.isFinite(num)) {
            this._size = 0;
            return;
        }

        this._size = num;
    }
}
```

#### Index Signatures索引签名

类可以声明索引签名; 它们的工作方式与其他对象类型的索引签名相同:

```typescript
class MyClass {
  [s: string]: boolean | ((s: string) => boolean);

  check(s: string) {
    return this[s] as boolean;
  }
}
```

因为索引签名类型还需要捕获方法的类型，所以很难有效地使用这些类型。一般来说，最好将索引数据存储在另一个位置，而不是存储在类实例本身。

### Class Heritage类继承

与其他具有面向对象特性的语言一样，JavaScript 中的类可以从基类继承。

#### `implements`子句

您可以使用 implements 子句来检查类是否满足特定的接口。如果类未能正确实现接口，将发出一个错误:

```typescript
interface Pingable {
  ping(): void;
}

class Sonar implements Pingable {
  ping() {
    console.log("ping!");
  }
}

class Ball implements Pingable {
/Class 'Ball' incorrectly implements interface 'Pingable'.Property 'ping' is missing in type 'Ball' but required in type 'Pingable'.
  pong() {
    console.log("pong!");
  }
}
```

类也可能实现多接口，例如：`class C implements A, B {`.

##### Cautions 警告

一定要理解`implements`子句仅仅是检查类能够被当作一个接口类型。它根本就没有改变类或者方法的类型。一个常见的错误是假定一个`implements`子句会改变类类型-实际上它没有改变。

```typescript
interface Checkable {
  check(name: string): boolean;
}

class NameChecker implements Checkable {
  check(s) {
/Parameter 's' implicitly has an 'any' type.
    // Notice no error here
    return s.toLowercse() === "ok";
                 //any
  }
}

```

在本例中，我们可能预期 s 的类型会受到 check 的 name: string 参数的影响。它不受check的影响-implements 子句不会改变类体的检查方式或者推断出的类型。

类似地，实现一个带有可选属性的接口并不会创建该属性:

```typescript
interface A {
  x: number;
  y?: number;
}
class C implements A {
  x = 0;
}
const c = new C();
c.y = 10;
/Property 'y' does not exist on type 'C'.
```

#### `extends`子句

类可以从基类扩展。派生类具有其基类的所有属性和方法，并定义其他成员。

```typescript
class Animal {
  move() {
    console.log("Moving along!");
  }
}

class Dog extends Animal {
  woof(times: number) {
    for (let i = 0; i < times; i++) {
      console.log("woof!");
    }
  }
}

const d = new Dog();
// Base class method
d.move();
// Derived class method
d.woof(3);
```

##### Overriding Methods 覆盖方法

派生类还可以重写基类字段或属性。你可以使用`super.`语法来访问基类方法。请注意，由于 JavaScript 类是一个简单的查找对象，因此不存在“超级字段”的概念。

TypeScript 强制派生类始终是其基类的子类型。

例如，这里有一个合法的方法来覆盖一个方法:

```typescript
class Base {
  greet() {
    console.log("Hello, world!");
  }
}

class Derived extends Base {
  greet(name?: string) {
    if (name === undefined) {
      super.greet();
    } else {
      console.log(`Hello, ${name.toUpperCase()}`);
    }
  }
}

const d = new Derived();
d.greet();
d.greet("reader");
```

派生类遵循其基类契约非常重要。请记住，这是非常普遍的(并且总是合法的!)通过基类引用来引用派生类实例:

```typescript
// Alias the derived instance through a base class reference
const b: Base = d;
// No problem
b.greet();
```

如果派生类没有遵循基类的规则怎么办？

```typescript
class Base {
  greet() {
    console.log("Hello, world!");
  }
}

class Derived extends Base {
  // Make this parameter required
  greet(name: string) {
/Property 'greet' in type 'Derived' is not assignable to the same property in base type 'Base'.Type '(name: string) => void' is not assignable to type '() => void'.
    console.log(`Hello, ${name.toUpperCase()}`);
  }
}
```

如果我们不顾错误编译了这段代码，这个示例就会崩溃:

```typescript
const b: Base = new Derived();
// Crashes because "name" will be undefined
b.greet();
```

##### Initialization Order 初始化顺序

在某些情况下，JavaScript 类初始化的顺序可能会令人惊讶:

```typescript
class Base {
  name = "base";
  constructor() {
    console.log("My name is " + this.name);
  }
}

class Derived extends Base {
  name = "derived";
}

// Prints "base", not "derived"
const d = new Derived();
```

这里发生了什么？

由 JavaScript 定义的类初始化顺序是:

- 初始化基类字段
- 基类构造函数运行
- 初始化派生类字段
- 派生类构造函数运行

这意味着基类构造函数在自己的构造函数中看到了自己的 name 值，因为派生类字段初始化还没有运行。

##### 继承内置类型

> 注意: 如果您不打算从数组、错误、映射等内置类型继承，则可以跳过本节

在 ES2015中，返回对象的构造函数隐式地用this值替换任何 super (...)调用方。生成的构造函数代码必须捕获 super (...)的任何潜在返回值，并将其替换为这个返回值。

因此，子类化 Error、 Array 和其他元素可能无法正常工作。这是因为 Error，Array 和类似的构造函数使用 ECMAScript 6的 new.target 来调整原型链; 然而，当调用 ECMAScript 5中的构造函数时，无法确保 new.target 的值。默认情况下，其他底层编译器通常具有相同的限制。

对于下面这样的子类:

```typescript
class MsgError extends Error {
  constructor(m: string) {
    super(m);
  }
  sayHello() {
    return "hello " + this.message;
  }
}
```

你会发现:

- methods may be `undefined` on objects returned by constructing these subclasses, so calling `sayHello` will result in an error. 方法可能是`undefined`，通过构造这些子类返回的对象，所以调用`sayHello`会导致错误
- `instanceof` 将在子类的实例和它们的实例之间被破坏，因此`(new MsgError()) instanceof `会返回`false`。

作为建议，您可以在任何 super (...)调用之后立即手动调整原型。

```typescript
class MsgError extends Error {
  constructor(m: string) {
    super(m);

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, MsgError.prototype);
  }

  sayHello() {
    return "hello " + this.message;
  }
}
```

但是，MsgError 的任何子类都必须手动设置原型。对于不支持 Object.setPrototypeOf 的运行时，您可以使用 _ proto _。

不幸的是，这些变通方法不会在 Internet Explorer 10和之前起作用。人们可以手动地将方法从原型复制到实例本身(例如，MsgError.prototype 复制到实例本身) ，但是原型链本身不能修复。

### Member Visibility成员可见性

您可以使用 TypeScript 来控制类以外的代码是否可以看到某些方法或属性。

#### `public`

类成员的默认可见性是 public。 public 成员可以在任何地方访问:

```typescript
class Greeter {
  public greet() {
    console.log("hi!");
  }
}
const g = new Greeter();
g.greet();
```

因为 public 已经是默认的可见性修饰符，所以您不需要在类成员上编写它，但是可能出于样式/可读性的原因选择这样做。

#### `protected`

受保护成员只对它们在其中声明的类的子类可见。

```typescript
class Greeter {
  public greet() {
    console.log("Hello, " + this.getName());
  }
  protected getName() {
    return "hi";
  }
}

class SpecialGreeter extends Greeter {
  public howdy() {
    // OK to access protected member here
    console.log("Howdy, " + this.getName());
  }
}
const g = new SpecialGreeter();
g.greet(); // OK
g.getName();
/Property 'getName' is protected and only accessible within class 'Greeter' and its subclasses.
```

##### 暴露保护成员

派生类需要遵循其基类契约，但可以选择公开具有更多功能的基类的子类型。这包括使受保护成员公开:

```typescript
class Base {
  protected m = 10;
}
class Derived extends Base {
  // No modifier, so default is 'public'
  m = 15;
}
const d = new Derived();
console.log(d.m); // OK
```

请注意，Derived 已经能够自由读写 m，因此这并不会有意义地改变这种情况的“安全性”。这里需要注意的主要事情是，在派生类中，如果这种暴露不是有意的，那么我们需要小心重复 protected 修饰符。

##### 跨等级访问`protected` 

不同的 OOP 语言对于通过基类引用访问受保护成员是否合法存在分歧:

```typescript
class Base {
  protected x: number = 1;
}
class Derived1 extends Base {
  protected x: number = 5;
}
class Derived2 extends Base {
  f1(other: Derived2) {
    other.x = 10;
  }
  f2(other: Base) {
    other.x = 10;
/Property 'x' is protected and only accessible through an instance of class 'Derived2'. This is an instance of class 'Base'.
  }
}
```

例如，Java 认为这是合法的。另一方面，c # 和 c + + 选择这段代码应该是非法的。

在这里输入 c # 和 c + + ，因为访问 Derived2中的 x 只能从 Derived2的子类中合法访问，Derived1不是其中之一。此外，如果通过 Derived2引用访问 x 是非法的(当然应该是非法的!)，然后通过基类引用访问它不应该改善这种情况。

参见为什么我不能从派生类访问受保护的成员? 这解释了更多的 c # 的推理。

#### `private`

Private 类似于 protected，但是不允许来自(即使)子类的成员访问:

```typescript
class Base {
  private x = 0;
}
const b = new Base();
// Can't access from outside the class
console.log(b.x);
/Property 'x' is private and only accessible within class 'Base'.
```

```typescript
class Derived extends Base {
  showX() {
    // Can't access in subclasses
    console.log(this.x);
/Property 'x' is private and only accessible within class 'Base'.
  }
}
```

因为私有成员对于派生类是不可见的，派生类不能增加它的可见性:

```typescript
class Base {
  private x = 0;
}
class Derived extends Base {
/Class 'Derived' incorrectly extends base class 'Base'.Property 'x' is private in type 'Base' but not in type 'Derived'.
  x = 1;
}
```

##### 跨实例访问`private` 

不同的 OOP 语言对同一类的不同实例是否可以访问彼此的私有成员存在分歧。尽管 Java、 c # 、 c + + 、 Swift 和 PHP 等语言允许这样做，但 Ruby 不允许。

TypeScript 允许跨实例的私有访问:

```typescript
class A {
  private x = 10;

  public sameAs(other: A) {
    // No error
    return other.x === this.x;
  }
}
```

#### 注意事项

和 TypeScript 类型系统的其他方面一样，private 和 protected 只在类型检查期间强制执行。这意味着 JavaScript 运行时构造，比如 in 或者简单的属性查找，仍然可以访问一个私有或受保护的成员:

```typescript
class MySafe {
  private secretKey = 12345;
}
```

```js
// In a JavaScript file...
const s = new MySafe();
// Will print 12345
console.log(s.secretKey);
```

如果需要保护类中的值不受恶意操作者的侵害，应该使用提供硬运行时隐私的机制，如闭包、弱映射或私有字段。

###  静态成员

类可以有静态成员。这些成员不与类的特定实例关联。它们可以通过类构造器对象本身访问:

```typescript
class MyClass {
  static x = 0;
  static printX() {
    console.log(MyClass.x);
  }
}
console.log(MyClass.x);
MyClass.printX();
```

静态成员还可以使用相同的 public、 protected 和 private 可见性修饰符:

```typescript
class MyClass {
  private static x = 0;
}
console.log(MyClass.x);
/Property 'x' is private and only accessible within class 'MyClass'.
```

静态成员也可以继承:

```typescript
class Base {
  static getGreeting() {
    return "Hello world";
  }
}
class Derived extends Base {
  myGreeting = Derived.getGreeting();
}
```

#### 特殊静态名称

从函数原型中覆盖属性通常是不安全的/不可能的。因为类本身是可以用new调用的函数，所以某些静态名称不能使用。函数属性，如 `name`, `length`, 和`call` ，无法定义为静态成员:

```typescript
class S {
  static name = "S!";
/Static property 'name' conflicts with built-in property 'Function.name' of constructor function 'S'.
}
```

#### 为什么没有静态类？

TypeScript（和 JavaScript） 不像 c # 和 Java 那样有一个称为静态类的构造。

这些结构之所以存在，是因为这些语言强制所有数据和函数都在一个类中; 因为在ts中不存在这种限制，所以不需要它们。只有一个实例的类通常只在 JavaScript/TypeScript 中表示为普通对象。

例如，我们不需要ts中的“静态类”语法，因为一个常规对象(甚至是顶级函数)也可以很好地完成这项工作:

```typescript
// Unnecessary "static" class
class MyStaticClass {
  static doSomething() {}
}

// Preferred (alternative 1)
function doSomething() {}

// Preferred (alternative 2)
const MyHelperObject = {
  dosomething() {},
};
```

### 泛型类

类，就像接口一样，可以是泛型的。当一个泛型类用 new 实例化时，其类型参数的推断方式与函数调用相同:

```typescript
class Box<Type> {
  contents: Type;
  constructor(value: Type) {
    this.contents = value;
  }
}

const b = new Box("hello!");
     //const b: Box<string>
```

类可以像使用接口一样使用泛型约束和默认值。

####  静态成员中的Type参数

这个代码不合法，原因也不明显:

```typescript
class Box<Type> {
  static defaultValue: Type;
/Static members cannot reference class type parameters.
}
```

请记住，类型总是被完全擦除！在运行时，只有一个 `Box.defaultValue` 属性插槽。这意味着设置 `Box<string>.defaultValue` (如果可能的话)也会改变 `Box<number>.default`-不好。泛型类的静态成员永远不能引用类的类型参数。

### 在类运行时中的`this`

重要的是要记住，TypeScript 不会改变 JavaScript 的运行时行为，而且 JavaScript 在某种程度上以具有一些特殊的运行时行为而闻名。

JavaScript的处理方式确实不同寻常:

```typescript
class MyClass {
  name = "MyClass";
  getName() {
    return this.name;
  }
}
const c = new MyClass();
const obj = {
  name: "obj",
  getName: c.getName,
};

// Prints "obj", not "MyClass"
console.log(obj.getName());
```

长话短说，默认情况下，在函数内部的`this`的值取决于函数的调用方式。在这个例子中，因为函数是通过 obj 引用调用的，所以它的值是 obj 而不是类实例。

这很少是你想要发生的! ts提供了一些方法来减轻或防止这种错误。

#### 箭头函数

如果你有一个函数被调用的方式会失去它的`this`上下文，那么使用箭头函数属性来代替方法定义是有意义的:

```typescript
class MyClass {
  name = "MyClass";
  getName = () => {
    return this.name;
  };
}
const c = new MyClass();
const g = c.getName;
// Prints "MyClass" instead of crashing
console.log(g());
```

这有一些取舍:

- `this`值在运行时保证是正确的，即使对于没有用ts检查的代码也是如此
- 这将使用更多的内存，因为每个类实例都有以这种方式定义的每个函数的自己的副本
- 你不能在派生类中使用`super.getName`，因为原型链中没有从中获取基类方法的条目

#### `this`参数

在方法或函数定义中，名为 this 的初始参数在打字稿中具有特殊意义。这些参数在编译过程中被删除:

```typescript
// TypeScript input with 'this' parameter
function fn(this: SomeType, x: number) {
  /* ... */
}
```

```js
// JavaScript output
function fn(x) {
  /* ... */
}
```

ts检查使用 this 参数调用函数是否使用了正确的上下文。与使用箭头函数不同，我们可以在方法定义中添加 this 参数来静态地强制方法被正确调用:

```typescript
class MyClass {
  name = "MyClass";
  getName(this: MyClass) {
    return this.name;
  }
}
const c = new MyClass();
// OK
c.getName();

// Error, would crash
const g = c.getName;
console.log(g());
/The 'this' context of type 'void' is not assignable to method's 'this' of type 'MyClass'.
```

这个方法采用了与箭头函数相反的折衷方法:

- JavaScript 调用方可能仍然不正确地使用类方法而没有实现它
- 每个类定义只分配一个函数，而不是每个类实例分配一个函数
- 基类方法定义仍然可以通过`super.`调用

#### `this`类型

在类中，一个名为 this 的特殊类型动态地引用当前类的类型。让我们看看这有什么用:

```typescript
class Box {
  contents: string = "";
  set(value: string) {
  //(method) Box.set(value: string): this
    this.contents = value;
    return this;
  }
}
```

在这里，TypeScript 推断`set`的返回类型为 `this`，而不是 `Box`。现在让我们为 `Box` 创建一个子类:

```typescript
class ClearableBox extends Box {
  clear() {
    this.contents = "";
  }
}

const a = new ClearableBox();
const b = a.set("hello");
     //const b: ClearableBox
```

你也可以在参数类型注释中使用`this`:

```typescript
class Box {
  content: string = "";
  sameAs(other: this) {
    return other.content === this.content;
  }
}
```

这不同于编写 other: Box ー如果你有一个派生类，它的 sameAs 方法现在只接受同一个派生类的其他实例:

```typescript
class Box {
  content: string = "";
  sameAs(other: this) {
    return other.content === this.content;
  }
}

class DerivedBox extends Box {
  otherContent: string = "?";
}

const base = new Box();
const derived = new DerivedBox();
derived.sameAs(base);
/Argument of type 'Box' is not assignable to parameter of type 'DerivedBox'. Property 'otherContent' is missing in type 'Box' but required in type 'DerivedBox'.
```

#### `this`-基于类型的保护

您可以在类和接口中的方法的返回位置中使用`this is Type`,当与类型收缩(例如 `if` 语句)混合时，目标对象的类型将收缩到指定的 `Type`。

```typescript
class FileSystemObject {
  isFile(): this is FileRep {
    return this instanceof FileRep;
  }
  isDirectory(): this is Directory {
    return this instanceof Directory;
  }
  isNetworked(): this is Networked & this {
    return this.networked;
  }
  constructor(public path: string, private networked: boolean) {}
}

class FileRep extends FileSystemObject {
  constructor(path: string, public content: string) {
    super(path, false);
  }
}

class Directory extends FileSystemObject {
  children: FileSystemObject[];
}

interface Networked {
  host: string;
}

const fso: FileSystemObject = new FileRep("foo/bar.txt", "foo");

if (fso.isFile()) {
  fso.content;
  
const fso: FileRep
} else if (fso.isDirectory()) {
  fso.children;
  
const fso: Directory
} else if (fso.isNetworked()) {
  fso.host;
  
const fso: Networked & FileSystemObject
}
```

此类型保护的一个常见用例是允许对特定字段进行延迟验证。例如，当 hasValue 被验证为真时，这个例子从框中保存的值中移除了一个未定义的值:

```typescript
class Box<T> {
  value?: T;

  hasValue(): this is { value: T } {
    return this.value !== undefined;
  }
}

const box = new Box();
box.value = "Gameboy";

box.value;
     
(property) Box<unknown>.value?: unknown

if (box.hasValue()) {
  box.value;
       
(property) value: unknown
}
```

### 参数属性

ts提供了特殊的语法，可以将构造函数参数转换为具有相同名称和值的类属性。这些属性称为参数属性，通过在构造函数参数前加上一个可见性修饰符 public、 private、 protected 或 readonly 来创建。结果字段得到这些修饰符:

```typescript
class Params {
  constructor(
    public readonly x: number,
    protected y: number,
    private z: number
  ) {
    // No body necessary
  }
}
const a = new Params(1, 2, 3);
console.log(a.x);
             //(property) Params.x: number
console.log(a.z);
/Property 'z' is private and only accessible within class 'Params'.
```

### 类表达式

类表达式与类声明非常相似。唯一真正的区别是类表达式不需要名称，尽管我们可以通过它们最终绑定到的任何标识符引用它们:

```typescript
const someClass = class<Type> {
  content: Type;
  constructor(value: Type) {
    this.content = value;
  }
};

const m = new someClass("Hello, world");
     //const m: someClass<string>
```

### `abstract`类及成员

ts中的类、方法和字段可能是抽象的。

抽象方法或抽象字段是没有提供实现的方法。这些成员必须存在于抽象类中，而抽象类不能直接实例化。

抽象类的作用是作为实现所有抽象成员的子类的基类。当一个类没有任何抽象成员时，它被称为具体的。

让我们来看一个例子

```typescript
abstract class Base {
  abstract getName(): string;

  printName() {
    console.log("Hello, " + this.getName());
  }
}

const b = new Base();
/Cannot create an instance of an abstract class.
```

我们不能用 new 实例化 Base，因为它是抽象的。相反，我们需要创建一个派生类并实现抽象成员:

```typescript
class Derived extends Base {
  getName() {
    return "world";
  }
}

const d = new Derived();
d.printName();
```

注意，如果我们忘记实现基类的抽象成员，我们会得到一个错误:

```typescript
class Derived extends Base {
/Non-abstract class 'Derived' does not implement inherited abstract member 'getName' from class 'Base'.
  // forgot to do anything
}
```

### Abstract Construct Signatures抽象构造签名

有时，您希望接受某个类构造函数，该函数生成从某个抽象类派生的类的实例。

例如，你可能需要编写下面的代码:

```typescript
function greet(ctor: typeof Base) {
  const instance = new ctor();
/Cannot create an instance of an abstract class.
  instance.printName();
}
```

ts正确地告诉您您正在尝试实例化一个抽象类。毕竟，根据 greet 的定义，编写这样的代码是完全合法的，最终会构建一个抽象类:

```typescript
// Bad!
greet(Base);
```

相反，你需要写一个函数来接受带有构造签名的东西:

```typescript
function greet(ctor: new () => Base) {
  const instance = new ctor();
  instance.printName();
}
greet(Derived);
greet(Base);
/Argument of type 'typeof Base' is not assignable to parameter of type 'new () => Base'. Cannot assign an abstract constructor type to a non-abstract constructor type.
```

现在，TypeScript 正确地告诉您可以调用哪个类构造函数—— Derived 可以，因为它是具体的，但 Base 不能。

### 类之间的关系

在大多数情况下，TypeScript 中的类在结构上进行比较，与其他类型相同。

例如，这两个类可以互相替换使用，因为它们是相同的:

```typescript
class Point1 {
  x = 0;
  y = 0;
}

class Point2 {
  x = 0;
  y = 0;
}

// OK
const p: Point1 = new Point2();
```

类似地，即使没有明确的继承，类之间也存在子类型关系:

```typescript
class Person {
  name: string;
  age: number;
}

class Employee {
  name: string;
  age: number;
  salary: number;
}

// OK
const p: Person = new Employee();
```

这听起来很简单，但也有一些案例看起来比其他案例更奇怪。

空类没有成员。在结构类型系统中，没有成员的类型通常是其他任何类型的超类型。因此，如果您编写了一个空类(不要!)任何东西都可以代替它:

```typescript
class Empty {}

function fn(x: Empty) {
  // can't do anything with 'x', so I won't
}

// All OK!
fn(window);
fn({});
fn(fn);
```

## 9、模块

JavaScript 在处理模块化代码方面有着悠久的历史。自2012年开始，TypeScript 已经实现了对许多这些格式的支持，但是随着时间的推移，社区和 JavaScript 规范已经集中在一种称为 ES 模块(或 ES6模块)的格式上。您可能知道它的导入/导出语法。

模块在2015年被添加到 JavaScript 规范中，到2020年已经在大多数 web 浏览器和 JavaScript 运行时中得到广泛支持。

手册将包括 ES模块和前期流行的CommonJS`module.exports =` 语法 两个模块，并且你可以在模块的参考部分找到其他模块模式的相关信息。

### 如何定义 JavaScript 模块

在 TypeScript 中，就像在 ECMAScript 2015中一样，任何包含顶级导入或导出的文件都被视为模块。

相反，没有任何顶级导入或导出声明的文件被视为其内容在全局范围内可用的脚本(因此对模块也是如此)。

模块在它们自己的范围内执行，而不是在全局范围内。这意味着在模块中声明的变量、函数、类等在模块之外不可见，除非使用某种导出形式显式导出它们。相反，要使用从不同模块导出的变量、函数、类、接口等，必须使用导入形式之一导入该变量。

### 非模块

在我们开始之前，重要的是要了解ts认为模块是什么。JavaScript 规范声明，任何没有`export`或顶级`await`的 JavaScript 文件都应该被视为脚本，而不是模块。

在脚本文件中，变量和类型被声明为在共享的全局范围内，并且假设您要么使用 -- outFile 编译器选项将多个输入文件连接到一个输出文件中，要么使用 HTML 中的多个 < script > 标记来加载这些文件(以正确的顺序!).

如果你有一个当前没有任何导入或导出的文件，但是你想要被当作一个模块来处理，添加下面这行代码:

```typescript
export {};
```

不管你的模块目标是什么，这个语法都可以正常工作。

### ts中的模块

在用ts编写基于模块的代码时，需要考虑三个主要问题:

- **Syntax**语法: 我想使用什么语法来导入和导出东西？
- **Module Resolution**模块解析: 模块名称(或路径)和磁盘上的文件之间有什么关系？
- **Module Output Target**模块输出目标: 我发射的 JavaScript 模块应该是什么样的？

### ES 模块语法

一个文件可以通过`export default`声明一个主导出:

```typescript
// @filename: hello.ts
export default function helloWorld() {
  console.log("Hello, world!");
}
```

然后通过以下方式导入:

```typescript
import hello from "./hello.js";
hello();
```

除了默认导出之外，通过省略默认导出，还可以导出多个变量和函数:

```typescript
// @filename: maths.ts
export var pi = 3.14;
export let squareTwo = 1.41;
export const phi = 1.61;

export class RandomNumberGenerator {}

export function absolute(num: number) {
  if (num < 0) return num * -1;
  return num;
}
```

这些可以通过导入语法在另一个文件中使用:

```typescript
import { pi, phi, absolute } from "./maths.js";

console.log(pi);
const absPhi = absolute(phi);
        //const absPhi: number
```

###  额外导入语法

导入可以使用像 `import { old as new }`这样的格式重命名:

```typescript
import { pi as π } from "./maths.js";

console.log(π);
           /*(alias) var π: number
			import π*/
```

您可以将上面的语法混合并匹配为一个导入:

```typescript
// @filename: maths.ts
export const pi = 3.14;
export default class RandomNumberGenerator {}

// @filename: app.ts
import RNGen, { pi as π } from "./maths.js";

RNGen;
 /*(alias) class RNGen
	import RNGen*/

console.log(π);
           /*(alias) const π: 3.14
			import π*/
```

你可以将所有导出的对象放到一个名称空间中，使用 `* as name`:

```typescript
// @filename: app.ts
import * as math from "./maths.js";

console.log(math.pi);
const positivePhi = math.absolute(math.phi);
          //const positivePhi: number
```

你可以导入一个文件，而不是通过`import "./file"`将任何变量包含到你的当前模块中:

```typescript
// @filename: app.ts
import "./maths.js";

console.log("3.14");
```

在这种情况下，`import`什么也不做。但是，`maths.ts` 中的所有代码都会被计算，这可能会触发影响其他对象的副作用。

####  特定于TypeScript的 ES 模块语法

类型可以导出和导入，使用与 JavaScript 值相同的语法:

```typescript
// @filename: animal.ts
export type Cat = { breed: string; yearOfBirth: number };

export interface Dog {
  breeds: string[];
  yearOfBirth: number;
}

// @filename: app.ts
import { Cat, Dog } from "./animal.js";
type Animals = Cat | Dog;
```

ts用`import type`扩展了导入语法，那是一种只能导入类型的导入。

```typescript
// @filename: animal.ts
export type Cat = { breed: string; yearOfBirth: number };
'createCatName' cannot be used as a value because it was imported using 'import type'.
export type Dog = { breeds: string[]; yearOfBirth: number };
export const createCatName = () => "fluffy";

// @filename: valid.ts
import type { Cat, Dog } from "./animal.js";
export type Animals = Cat | Dog;

// @filename: app.ts
import type { createCatName } from "./animal.js";
const name = createCatName();
```

这种语法允许非ts编译器(如 Babel、 swc 或 esbuild)知道可以安全地删除哪些导入。

#### 具有 CommonJS 行为的 ES 模块语法

TypeScript具有直接与 CommonJS 和 AMD 需求相关的 ES Module 语法。在大多数情况下，使用 ES Module 的导入与这些环境的要求是一样的，但是这种语法确保了你的 TypeScript 文件与 CommonJS 输出有1比1的匹配:

```typescript
import fs = require("fs");
const code = fs.readFileSync("hello.ts", "utf8");
```

您可以在模块参考页面中了解更多关于此语法的信息。

### CommonJS 语法

CommonJS是 npm 上大多数模块交付的格式。即使您正在使用上面提到的 ES Modules 语法编写代码，对 CommonJS 语法如何工作有一个简单的了解也会帮助您更容易地进行调试。

#### Exporting 导出

标识符通过在被叫做module的全局上设置exports属性被导出。

```typescript
function absolute(num: number) {
  if (num < 0) return num * -1;
  return num;
}

module.exports = {
  pi: 3.14,
  squareTwo: 1.41,
  phi: 1.61,
  absolute,
};
```

然后这些文件可以通过一个 `require` 语句导入:

```typescript
const maths = require("maths");
maths.pi;
      //any
```

或者你可以使用 JavaScript 中的析构特性简化一下:

```typescript
const { squareTwo } = require("maths");
squareTwo;
   //const squareTwo: any
```

#### CommonJS和 ES 模块互操作

在 CommonJS 和 ES Module 之间有一个不匹配的特性，因为 ES Module 只支持将默认导出作为一个对象，而不支持作为一个函数。TypeScript 有一个编译器标志，以减少 esModuleInterop 中两组不同约束之间的摩擦。

### TypeScript的模块解析选项

模块解析是从 import 或 require 语句获取字符串并确定该字符串指向哪个文件的过程。

TypeScript包括两种解析策略：经典和节点。经典，当编译器标识module不是commonjs时的默认值，包含了向后兼容性。节点策略复制了Node.js在CommonJS模式下的工作方式，并附加了对.ts和.d.ts文件的检查。

有许多 TSConfig 标志影响ts中的模块策略: moduleResolution、 baseUrl、 paths、 rootDirs。

有关这些策略如何工作的详细信息，您可以参考模块解析。

### TypeScript的模块输出选项

有两个选项会影响发出的 JavaScript 输出:

- [`target`](https://www.typescriptlang.org/tsconfig/#target)  它决定了哪些 JS 特性被降级(转换为在旧的 JavaScript 运行时中运行) ，哪些保持不变
- [`module`](https://www.typescriptlang.org/tsconfig/#module) 这决定了模块之间相互交互的代码

您所使用的目标是由您希望在其中运行ts代码的 JavaScript 运行时中可用的特性决定的。这可能是: 你支持的最古老的浏览器，你期望运行的最低版本的 Node.js，或者来自你运行时类似 Electron 的独特约束。

所有模块之间的通信都是通过模块加载器进行的，编译器标志module决定使用哪个模块。在运行时，模块加载程序负责在执行模块之前查找并执行模块的所有依赖项。

例如，下面是一个使用 ES Modules 语法的ts文件，展示了几个不同的模块选项:

```typescript
import { valueOfPi } from "./constants.js";

export const twoPi = valueOfPi * 2;
```

#### `ES2020`

```typescript
import { valueOfPi } from "./constants.js";
export const twoPi = valueOfPi * 2;
```

#### `CommonJS`

```typescript
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twoPi = void 0;
const constants_js_1 = require("./constants.js");
exports.twoPi = constants_js_1.valueOfPi * 2;
```

#### `UMD`

```typescript
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./constants.js"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.twoPi = void 0;
    const constants_js_1 = require("./constants.js");
    exports.twoPi = constants_js_1.valueOfPi * 2;
});
```

> 注意，ES2020实际上与原始 index.ts 相同。

在 TSConfig Reference for module 中，您可以看到所有可用的选项及其发出的 JavaScript 代码的样子。

### TypeScript namespaces命名空间

ts有自己的名称空间模块格式，它比 ES 模块标准早得多。这种语法对于创建复杂的定义文件有很多有用的特性，并且仍然可以在 DefinitelyTyped 中使用。名称空间中的大多数特性都存在于 ES Modules 中，虽然这并不是不推荐使用，但我们建议您使用这些特性来与 JavaScript 的方向保持一致。您可以在名称空间参考页中了解更多关于名称空间的信息。

# 参考

## 工具类型

TypeScript 提供了几种实用程序类型来促进常见的类型转换。这些类型全局可用。

### `Partial<Type>`

构造一个类型，其所有 Type 属性都设置为可选。此实用程序将返回表示给定类型的所有子集的类型。

##### Example 例子

```typescript
interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};

const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});
```

### `Required<Type>`

构造一个包含 Type 设置为 required 的所有属性的类型。与 Partial 相反。

##### Example 例子

```typescript
interface Props {
  a?: number;
  b?: string;
}

const obj: Props = { a: 5 };

const obj2: Required<Props> = { a: 5 };
/Property 'b' is missing in type '{ a: number; }' but required in type 'Required<Props>'.
```

### `Readonly<Type>`

构造具有 Type 的所有属性设置为只读的类型，这意味着不能重新分配构造类型的属性。

##### Example 例子

```typescript
interface Todo {
  title: string;
}

const todo: Readonly<Todo> = {
  title: "Delete inactive users",
};

todo.title = "Hello";
/Cannot assign to 'title' because it is a read-only property.
```

这个实用程序对于表示在运行时失败的赋值表达式(即试图重新分配冻结对象的属性时)很有用。

##### Object.freeze

```typescript
function freeze<Type>(obj: Type): Readonly<Type>;
```

### `Record<Keys,Type>`

构造属性键为 Keys、属性值为 Type 的对象类型。此实用工具可用于将类型的属性映射到另一个类型。

##### Example 例子

```typescript
interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};

cats.boris;
 //const cats: Record<CatName, CatInfo>
```

### `Pick<Type, Keys>`

通过从 Type 中选择一组属性 Keys (字符串文字或字符串文字的并集)来构造类型。

##### Example 例子

```typescript
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};

todo;
 //const todo: TodoPreview
```

### `Omit<Type, Keys`>

通过从 Type 中选取所有属性，然后移除 Keys (字符串文字或字符串文字的并集)来构造类型。

##### Example 例子

```typescript
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreview = Omit<Todo, "description">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770,
};

todo;
 //const todo: TodoPreview

type TodoInfo = Omit<Todo, "completed" | "createdAt">;

const todoInfo: TodoInfo = {
  title: "Pick up kids",
  description: "Kindergarten closes at 5pm",
};

todoInfo;
   //const todoInfo: TodoInfo
```

### `Exclude<Type, ExcludedUnion>`

通过从类型中排除可分配给 ExcludedUnion 的所有联合成员来构造类型。

##### Example 例子

```typescript
type T0 = Exclude<"a" | "b" | "c", "a">;
     //type T0 = "b" | "c"
type T1 = Exclude<"a" | "b" | "c", "a" | "b">;
     //type T1 = "c"
type T2 = Exclude<string | number | (() => void), Function>;
     //type T2 = string | number
```

### `Extract<Type, Union>`

通过从 Type 中提取可分配给 Union 的所有联合成员来构造类型。

##### Example 例子

```typescript
type T0 = Extract<"a" | "b" | "c", "a" | "f">;
     //type T0 = "a"
type T1 = Extract<string | number | (() => void), Function>;
     //type T1 = () => void
```

### `NonNullable<Type>`

通过从 Type 中排除 null 和 undefined 来构造类型。

##### Example 例子

```typescript
type T0 = NonNullable<string | number | undefined>;
     
type T0 = string | number
type T1 = NonNullable<string[] | null | undefined>;
     
type T1 = string[]
```

### `Parameters<Type>`

从函数类型Type的参数中使用的类型构造元组类型。

##### Example 例子

```typescript
declare function f1(arg: { a: number; b: string }): void;

type T0 = Parameters<() => string>;
     //type T0 = []
type T1 = Parameters<(s: string) => void>;
     //type T1 = [s: string]
type T2 = Parameters<<T>(arg: T) => T>;
     //type T2 = [arg: unknown]
type T3 = Parameters<typeof f1>;
     /*type T3 = [arg: {
        a: number;
        b: string;
    }]*/
type T4 = Parameters<any>;
     //type T4 = unknown[]
type T5 = Parameters<never>;
     //type T5 = never
type T6 = Parameters<string>;
/Type 'string' does not satisfy the constraint '(...args: any) => any'.
     //type T6 = never
type T7 = Parameters<Function>;
/Type 'Function' does not satisfy the constraint '(...args: any) => any'.Type 'Function' provides no match for the signature '(...args: any): any'.
     //type T7 = never
```

### `ConstructorParameters<Type>`

从构造函数的参数的类型构造元组或数组类型。它生成具有所有参数类型的元组类型(如果 Type 不是函数，则生成 never 类型)。

##### Example 例子

```typescript
type T0 = ConstructorParameters<ErrorConstructor>;
     //type T0 = [message?: string]
type T1 = ConstructorParameters<FunctionConstructor>;
     //type T1 = string[]
type T2 = ConstructorParameters<RegExpConstructor>;
     //type T2 = [pattern: string | RegExp, flags?: string]
type T3 = ConstructorParameters<any>;
     //type T3 = unknown[]

type T4 = ConstructorParameters<Function>;
/Type 'Function' does not satisfy the constraint 'abstract new (...args: any) => any'.Type 'Function' provides no match for the signature 'new (...args: any): any'.
     //type T4 = never

//我自己添加的例子
class Function1{
  constructor(a:string,b:string){

  }
}
type T5 = ConstructorParameters<typeof Function1>;
```

### `ReturnType<Type>`

构造一个类型，包含函数 Type 的返回类型。

##### Example 例子

```typescript
declare function f1(): { a: number; b: string };
type T0 = ReturnType<() => string>;     
	//type T0 = string
type T1 = ReturnType<(s: string) => void>;     
	//type T1 = void
type T2 = ReturnType<<T>() => T>;     
	//type T2 = unknown
type T3 = ReturnType<<T extends U, U extends number[]>() => T>;     
	//type T3 = number[]
type T4 = ReturnType<typeof f1>;     
    /*type T4 = {
        a: number;
        b: string;
    }*/
type T5 = ReturnType<any>;     
     //type T5 = any
type T6 = ReturnType<never>;     
     //type T6 = never
type T7 = ReturnType<string>;
/Type 'string' does not satisfy the constraint '(...args: any) => any'.Type 'string' does not satisfy the constraint '(...args: any) => any'.     
     //type T7 = any
type T8 = ReturnType<Function>;
/Type 'Function' does not satisfy the constraint '(...args: any) => any'.Type 'Function' provides no match for the signature '(...args: any): any'.
     //type T8 = any
```

### `InstanceType<Type`>

构造由 Type 中构造函数的实例类型组成的类型。

##### Example 例子

```typescript
class C {
  x = 0;
  y = 0;
}

type T0 = InstanceType<typeof C>;
     //type T0 = C
type T1 = InstanceType<any>;
     //type T1 = any
type T2 = InstanceType<never>;
     //type T2 = never
type T3 = InstanceType<string>;
/Type 'string' does not satisfy the constraint 'abstract new (...args: any) => any'.
     //type T3 = any
type T4 = InstanceType<Function>;
/Type 'Function' does not satisfy the constraint 'abstract new (...args: any) => any'.Type 'Function' provides no match for the signature 'new (...args: any): any'.
     //type T4 = any
```

### `ThisParameterType<Type>`

提取函数类型的this参数的类型，如果函数类型没有this参数，则unknown。

##### Example 例子

```typescript
function toHex(this: Number) {
  return this.toString(16);
}

function numberToString(n: ThisParameterType<typeof toHex>) {
  return toHex.apply(n);
}
```

### `OmitThisParameter<Type>`

从 Type 中移除this参数。如果 Type 没有显式声明this参数，则结果只是 Type。否则，将从 Type 创建没有this参数的新函数类型。泛型被擦除，只有最后一个重载签名被传播到新的函数类型中。

##### Example 例子

```typescript
function toHex(this: Number) {
  return this.toString(16);
}

const fiveToHex: OmitThisParameter<typeof toHex> = toHex.bind(5);

console.log(fiveToHex());
```

### `ThisType<Type>`

此实用程序不返回转换后的类型。相反，它可以作为this类型上下文的标记。注意 -- noImplicitThis 标志必须启用才能使用这个实用程序。

##### Example 例子

```typescript
type ObjectDescriptor<D, M> = {
  data?: D;
  methods?: M & ThisType<D & M>; // Type of 'this' in methods is D & M
};

function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
  let data: object = desc.data || {};
  let methods: object = desc.methods || {};
  return { ...data, ...methods } as D & M;
}

let obj = makeObject({
  data: { x: 0, y: 0 },
  methods: {
    moveBy(dx: number, dy: number) {
      this.x += dx; // Strongly typed this
      this.y += dy; // Strongly typed this
    },
  },
});

obj.x = 10;
obj.y = 20;
obj.moveBy(5, 5);
```

在上面的示例中，makeObject 参数中的methods对象具有上下文类型，包括 ThisType < D & M > ，因此methods对象中的方法中的this的类型是{ x: number，y: number } & { moveBy (dx: number，dy: number) : number }。请注意，methods属性的类型如何同时是方法中this类型的推断目标和源。

ThisType < t > 标记接口只是在 lib.d.ts 中声明的一个空接口。除了在对象文本的上下文类型中被识别之外，接口的作用就像任何空接口一样。

### 内部字符串操作类型

#### `Uppercase<StringType>`

#### `Lowercase<StringType>`

#### `Capitalize<StringType>`

#### `Uncapitalize<StringType>`

为了帮助处理模板字符串的字符串操作，TypeScript 包含了一组类型，可以用于类型系统中的字符串操作。您可以在 Template Literal Types 文档中找到它们。

## 装饰器

### 引言

随着 TypeScript 和 ES6中类的引入，现在存在一些需要额外特性来支持注释或修改类和类成员的场景。Decorator 提供了一种为类声明和成员同时添加注释和元编程语法的方法。是 JavaScript 的第二阶段提案，可以作为 TypeScript 的一个实验性特性。

> 注意: 装饰器是一个实验性的特性，可能在将来的版本中改变。

要启用对 decorator 的实验性支持，您必须在命令行或 tsconfig.json 中启用 experimentalDecorators 编译器选项:

**Command Line**:

```shell
tsc --target ES5 --experimentalDecorators
```

**tsconfig.json**:

```json
{
  "compilerOptions": {
    "target": "ES5",
    "experimentalDecorators": true
  }
}
```

### 装饰器

装饰器是一种特殊类型的声明，可以附加到类声明、方法、访问器、属性或参数。装饰器使用形式：@expression，其中 expression 必须计算为一个函数，该函数将在运行时使用关于装饰声明的信息调用。

例如，给定装饰器@sealed，我们可以将 sealed 函数写成:

```typescript
function sealed(target) {
  // do something with 'target' ...
}
```

### 装饰器工厂

如果我们想要自定义如何将装饰符应用于声明，我们可以编写装饰符工厂。Decorator Factory 只是一个函数，它返回的表达式将在运行时由 Decorator 调用。

我们可以用下面的方式编写一个装饰工厂:

```typescript
function color(value: string) {
  // this is the decorator factory, it sets up
  // the returned decorator function
  return function (target) {
    // this is the decorator
    // do something with 'target' and 'value'...
  };
}
```

### 装饰器组合

可以将多个 decorator 应用于一个声明，例如在单行上:

```typescript
@f @g x
```

多行:

```typescript
@f
@g
x
```

当多个 decorator 应用于单个声明时，它们的求值方式类似于数学中的复合函数。在这个模型中，当组合函数 f 和 g 时，得到的组合函数((*f* ∘ *g*)(x)等价于 f (g (x))。

因此，当在一个 TypeScript 声明上计算多个 decorator 时，需要执行以下步骤:

1. 由上至下依次对装饰器表达式求值。
2. 然后，从下到上将结果作为函数调用

如果我们使用 decorator 工厂，我们可以通过下面的例子来观察这个评估顺序:

```typescript
function first() {
  console.log("first(): factory evaluated");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("first(): called");
  };
}

function second() {
  console.log("second(): factory evaluated");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("second(): called");
  };
}

class ExampleClass {
  @first()
  @second()
  method() {}
}
```

它会将输出打印到控制台:

```shell
first(): factory evaluated
second(): factory evaluated
second(): called
first(): called
```

### 装饰器求值

如何将 decorator 应用于类内的各种声明有一个明确的顺序:

1. *参数装饰器*，然后依次是*方法装饰器*，*访问符装饰器*，或*属性装饰器*应用到每个实例成员。
2. *参数装饰器*，然后依次是*方法装饰器*，*访问符装饰器*，或*属性装饰器*应用到每个静态成员。
3. *参数装饰器*应用到构造函数。
4. *类装饰器*应用到类。

### 类装饰器

*类装饰器*在类声明之前被声明（紧靠着类声明）。 类装饰器应用于类构造函数，可以用来监视，修改或替换类定义。 类装饰器不能用在声明文件中( `.d.ts`)，也不能用在任何外部上下文中（比如`declare`的类）。

类装饰器表达式会在运行时当作函数被调用，类的构造函数作为其唯一的参数。

如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明。

> 注意 如果你要返回一个新的构造函数，你必须注意处理好原来的原型链。 在运行时的装饰器调用逻辑中 *不会*为你做这些。

下面是一个应用于 BugReport 类的类 decorator (@sealed)的例子:

```typescript
@sealed
class BugReport {
  type = "report";
  title: string;

  constructor(t: string) {
    this.title = t;
  }
}
```

我们可以使用以下函数声明来定义@sealed decorator:

```typescript
function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}
```

当@sealed 被执行时，它将同时密封构造函数和原型，这样就不会允许类在运行时被子类化。

接下来我们有一个如何重写构造函数来设置新默认值的例子。

```typescript
function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    reportingURL = "http://www...";
  };
}

@reportableClassDecorator
class BugReport {
  type = "report";
  title: string;

  constructor(t: string) {
    this.title = t;
  }
}

const bug = new BugReport("Needs dark mode");
console.log(bug.title); // Prints "Needs dark mode"
console.log(bug.type); // Prints "report"

// Note that the decorator _does not_ change the TypeScript type
// and so the new property `reportingURL` is not known
// to the type system:
bug.reportingURL;
/Property 'reportingURL' does not exist on type 'BugReport'.
```

### 方法装饰器

方法修饰符就在方法声明之前声明。修饰符应用于方法的属性描述符，可用于观察、修改或替换方法定义。方法修饰符不能用于声明文件、重载或任何其他环境上下文(例如声明类)中。

方法 decorator 的表达式在运行时将被作为一个函数调用，具有以下三个参数:

1. 对于静态成员来说是类的**构造函数**，对于实例成员是类的**原型对象**。
2. 成员的**名字**。
3. 成员的属性**描述**符。

> 注意: 如果脚本目标小于 ES5，属性描述符将不被定义。

如果方法装饰器返回一个值，它将用作该方法的属性描述符。

> 注意: 如果脚本目标小于 ES5，返回值将被忽略。

下面是应用于 Greeter 类的方法装饰器 (@enumerable)的示例:

```typescript
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }

  @enumerable(false)
  greet() {
    return "Hello, " + this.greeting;
  }
}
```

我们可以使用下面的函数声明来定义@enumerable 装饰器:

```typescript
function enumerable(value: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = value;
  };
}
```

这里的@enumerable (false) 装饰器是一个装饰器工厂。当调用@enumerable(false) 装饰器时，它修改属性描述符的enumerable属性。

###  访问器装饰器

在访问器声明之前声明访问器装饰器。访问器修饰符应用于访问器的属性描述符，可用于观察、修改或替换访问器的定义。无法在声明文件中或任何其他环境上下文(例如declare类)中使用访问器装饰器。

```typescript
注意: TypeScript 不允许对单个成员的 get 和 set 访问器进行装饰。相反，该成员的所有 decorator 必须应用于按文档顺序指定的第一个访问器。这是因为装饰符应用于属性描述符，该属性描述符将 get 和 set 访问器组合在一起，而不是将每个声明分开。
```

在运行时，accessor decorator 的表达式将被调用为一个函数，具有以下三个参数:

1.  静态成员的类的构造函数，或者实例成员的类的原型
2.  成员的名称
3. 成员的属性描述

> 注意: 如果脚本目标小于 ES5，属性描述将不被定义。

如果访问器 decorator 返回一个值，它将用作成员的属性描述符。

> 注意: 如果脚本目标小于 ES5，返回值将被忽略。

下面是应用于 Point 类成员的 accessor decorator (@configable)的示例:

```typescript
class Point {
  private _x: number;
  private _y: number;
  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }

  @configurable(false)
  get x() {
    return this._x;
  }

  @configurable(false)
  get y() {
    return this._y;
  }
}
```

我们可以使用以下函数声明来定义@configurable decorator:

```typescript
function configurable(value: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.configurable = value;
  };
}
```

### 属性装饰器

属性装饰符就在属性声明之前声明。不能在声明文件中或任何其他环境上下文(例如declare类)中使用属性装饰器。

属性修饰符的表达式在运行时将被作为一个函数调用，具有以下两个参数:

1. 静态成员的类的构造函数，或者实例成员的类的原型
2. 成员的名称

> 注意  *属性描述符*不会做为参数传入属性装饰器，这与TypeScript是如何初始化属性装饰器的有关。 因为目前没有办法在定义一个原型对象的成员时描述一个实例属性，并且没办法监视或修改一个属性的初始化方法。返回值也会被忽略。因此，属性描述符只能用来监视类中是否声明了某个名字的属性。

我们可以用它来记录这个属性的元数据，如下例所示：

```typescript
class Greeter {
  @format("Hello, %s")
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    let formatString = getFormat(this, "greeting");
    return formatString.replace("%s", this.greeting);
  }
}
```

然后定义`@format`装饰器和`getFormat`函数：

```typescript
import "reflect-metadata";
const formatMetadataKey = Symbol("format");
function format(formatString: string) {
  return Reflect.metadata(formatMetadataKey, formatString);
}
function getFormat(target: any, propertyKey: string) {
  return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
```

这个`@format("Hello, %s")`装饰器是个 [装饰器工厂](https://www.tslang.cn/docs/handbook/decorators.html#decorator-factories)。 当 `@format("Hello, %s")`被调用时，它添加一条这个属性的元数据，通过`reflect-metadata`库里的`Reflect.metadata`函数。 当 `getFormat`被调用时，它读取格式的元数据。

> 注意  这个例子需要使用`reflect-metadata`库。 查看 [元数据](https://www.tslang.cn/docs/handbook/decorators.html#metadata)了解`reflect-metadata`库更详细的信息。

### 参数装饰器

*参数装饰器*声明在一个参数声明之前（紧靠着参数声明）。 参数装饰器应用于类构造函数或方法声明。 参数装饰器不能用在声明文件（.d.ts），重载或其它外部上下文（比如 `declare`的类）里。

参数装饰器表达式会在运行时当作函数被调用，传入下列3个参数：

1. 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
2. 成员的名字。
3. 参数在函数参数列表中的索引。

> 注意  参数装饰器只能用来监视一个方法的参数是否被传入。

参数装饰器的返回值会被忽略。

下例定义了参数装饰器（`@required`）并应用于`BugReport`类方法的一个参数：

```typescript
class BugReport {
  type = "report";
  title: string;

  constructor(t: string) {
    this.title = t;
  }

  @validate
  print(@required verbose: boolean) {
    if (verbose) {
      return `type: ${this.type}\ntitle: ${this.title}`;
    } else {
     return this.title; 
    }
  }
}
```

然后，我们可以使用以下函数声明定义@required 和@validate 装饰器:

```typescript
import "reflect-metadata";
const requiredMetadataKey = Symbol("required");

function required(target: Object, propertyKey: string | symbol, parameterIndex: number) {
  let existingRequiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];
  existingRequiredParameters.push(parameterIndex);
  Reflect.defineMetadata( requiredMetadataKey, existingRequiredParameters, target, propertyKey);
}

function validate(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
  let method = descriptor.value!;

  descriptor.value = function () {
    let requiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyName);
    if (requiredParameters) {
      for (let parameterIndex of requiredParameters) {
        if (parameterIndex >= arguments.length || arguments[parameterIndex] === undefined) {
          throw new Error("Missing required argument.");
        }
      }
    }
    return method.apply(this, arguments);
  };
}
```

@ required decorator 添加一个元数据条目，将参数标记为需要的。然后,@validate decorator 将现有的 greet 方法包装在一个函数中，该函数在调用原始方法之前验证参数。

> 此示例需要 reflect-Metadata 库。有关 reflect-Metadata 库的详细信息，请参阅 Metadata。

### 元数据

一些示例使用了 reflect-metadata 库，该库为实验的元数据 API 添加了一个多边形填充。这个库还不是 ECMAScript (JavaScript)标准的一部分。然而，一旦 decorator 被正式采用为 ECMAScript 标准的一部分，这些扩展将被提议采用。

您可以通过 npm 安装这个库:

```shell
npm i reflect-metadata --save
```

TypeScript 包含了对为包含 decorator 的声明发出特定类型元数据的实验支持。要启用这个实验支持，您必须在命令行或 tsconfig.json 中设置 emitDecoratorMetadata 编译器选项:

```shell
tsc --target ES5 --experimentalDecorators --emitDecoratorMetadata
```

**tsconfig.json**:

```json
{
  "compilerOptions": {
    "target": "ES5",
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
```

当启用后，只要`reflect-metadata`库被引入了，设计阶段添加的类型信息可以在运行时使用。

我们可以在下面的例子中看到这一点:

```typescript
import "reflect-metadata";

class Point {
  constructor(public x: number, public y: number) {}
}

class Line {
  private _start: Point;
  private _end: Point;

  @validate
  set start(value: Point) {
    this._start = value;
  }

  get start() {
    return this._start;
  }

  @validate
  set end(value: Point) {
    this._end = value;
  }

  get end() {
    return this._end;
  }
}

function validate<T>(target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<T>) {
  let set = descriptor.set!;
  
  descriptor.set = function (value: T) {
    let type = Reflect.getMetadata("design:type", target, propertyKey);

    if (!(value instanceof type)) {
      throw new TypeError(`Invalid type, got ${typeof value} not ${type.name}.`);
    }

    set.call(this, value);
  };
}

const line = new Line()
line.start = new Point(0, 0)

// @ts-ignore
// line.end = {}

// Fails at runtime with:
// > Invalid type, got object not Point
```

TypeScript编译器可以通过`@Reflect.metadata`装饰器注入设计阶段的类型信息。 你可以认为它相当于下面的TypeScript：

```typescript
class Line {
  private _start: Point;
  private _end: Point;
  @validate
  @Reflect.metadata("design:type", Point)
  set start(value: Point) {
    this._start = value;
  }
  get start() {
    return this._start;
  }
  @validate
  @Reflect.metadata("design:type", Point)
  set end(value: Point) {
    this._end = value;
  }
  get end() {
    return this._end;
  }
}
```

> 注释: 修饰符元数据是一个实验性的特性，可能会在未来的版本中引入突破性的变化。

## 声明合并

ts中的一些独特概念在类型级描述了 JavaScript 对象的形状。对于ts来说，一个特别独特的例子是“声明合并”的概念。理解这个概念将使您在使用现有的 JavaScript 时具有优势。它也为更高级的抽象概念打开了大门。

就本文而言，“声明合并”意味着编译器将两个单独的声明合并为一个定义，声明的名称相同。这个合并定义具有两个原始声明的特征。任何数量的声明都可以合并; 它不仅限于两个声明。

### 基本概念

在 TypeScript 中，声明至少在三个组中的一个组中创建实体: 命名空间、类型或值。 创建命名空间的声明会新建一个命名空间，其中包含使用点符号访问的名称。类型创建声明就是这样做的: 它们创建一个类型，该类型使用声明的形状可见并绑定到给定的名称。最后，创建值声明创建的值在输出 JavaScript 中是可见的。

| Declaration Type 声明类型 | Namespace 命名空间 | Type 类型 | Value 价值 |
| :------------------------ | :----------------- | :-------- | :--------- |
| Namespace 命名空间        | X                  |           | X          |
| Class 类别                |                    | X         | X          |
| Enum 女名女子名           |                    | X         | X          |
| Interface 界面            |                    | X         |            |
| Type Alias 输入 Alias     |                    | X         |            |
| Function 功能             |                    |           | X          |
| Variable 变量             |                    |           | X          |

理解每个声明创建的内容将有助于您理解在执行声明合并时合并了什么内容。

### 合并接口

最简单也许是最常见的声明合并类型是接口合并。在最基本的层次上，merge 机械地将两个声明的成员连接到同名的单个接口中。

```typescript
interface Box {
  height: number;
  width: number;
}
interface Box {
  scale: number;
}
let box: Box = { height: 5, width: 6, scale: 10 };
```

接口的非函数成员应该是唯一的。如果它们不是唯一的，那么它们必须是相同类型的。如果接口声明的非函数成员名称相同，但类型不同，则编译器将发出错误。

对于函数成员，同名的每个函数成员都被视为描述同一函数的重载。同样值得注意的是，在接口 a 与后面的接口 a 合并的情况下，第二个接口的优先级将高于第一个接口。

也就是说，在这个例子中:

```typescript
interface Cloner {
  clone(animal: Animal): Animal;
}
interface Cloner {
  clone(animal: Sheep): Sheep;
}
interface Cloner {
  clone(animal: Dog): Dog;
  clone(animal: Cat): Cat;
}
```

这三个接口将合并为一个声明，如下所示:

```typescript
interface Cloner {
  clone(animal: Dog): Dog;
  clone(animal: Cat): Cat;
  clone(animal: Sheep): Sheep;
  clone(animal: Animal): Animal;
}
```

请注意，每个组的元素保持相同的顺序，但组本身首先与后来的重载集合合并。

这条规则的一个例外是特殊的签名。如果签名有一个参数，其类型是单个字符串文字类型(例如，不是字符串文字的联合) ，那么它将冒泡到合并重载列表的顶部。

例如，下列接口将合并在一起:

```typescript
interface Document {
  createElement(tagName: any): Element;
}
interface Document {
  createElement(tagName: "div"): HTMLDivElement;
  createElement(tagName: "span"): HTMLSpanElement;
}
interface Document {
  createElement(tagName: string): HTMLElement;
  createElement(tagName: "canvas"): HTMLCanvasElement;
}
```

由此产生的合并Document声明如下:

```typescript
interface Document {
  createElement(tagName: "canvas"): HTMLCanvasElement;
  createElement(tagName: "div"): HTMLDivElement;
  createElement(tagName: "span"): HTMLSpanElement;
  createElement(tagName: string): HTMLElement;
  createElement(tagName: any): Element;
}
```

###  合并命名空间

与接口类似，具有相同名称的命名空间也将合并其成员。由于命名空间同时创建一个命名空间和一个值，因此我们需要了解两者如何合并。

为了合并命名空间，将合并每个命名空间中声明的导出接口的类型定义，形成一个单一的命名空间，其中包含合并的接口定义。

为了合并命名空间值，在每个声明站点上，如果命名空间已经与给定的名称一起存在，则通过接受现有命名空间并将导出的第二个命名空间的成员添加到第一个命名空间来进一步扩展命名空间。

在这个例子中，Animals的声明合并:

```typescript
namespace Animals {
  export class Zebra {}
}
namespace Animals {
  export interface Legged {
    numberOfLegs: number;
  }
  export class Dog {}
}
```

相当于:

```typescript
namespace Animals {
  export interface Legged {
    numberOfLegs: number;
  }
  export class Zebra {}
  export class Dog {}
}
```

这种名称空间合并模型是一个很有帮助的起点，但是我们还需要了解对于未导出的成员会发生什么。非导出成员仅在原始(未合并)命名空间中可见。这意味着在合并之后，来自其他声明的合并成员不能看到非导出成员。

我们可以在这个例子中更清楚地看到这一点:

```typescript
namespace Animal {
  let haveMuscles = true;
  export function animalsHaveMuscles() {
    return haveMuscles;
  }
}
namespace Animal {
  export function doAnimalsHaveMuscles() {
    return haveMuscles; // Error, because haveMuscles is not accessible here
  }
}
```

因为 haveMuscles 不会被导出，所以只有共享相同未合并命名空间的 animalsHaveMuscles 函数才能看到该符号。doAnimalsHaveMuscles 函数，即使它是合并的 Animal 命名空间的一部分，也不能看到这个未导出的成员。

### 将命名空间与类、函数和枚举合并

命名空间具有足够的灵活性，可以与其他类型的声明合并。为此，命名空间声明必须遵循它将与之合并的声明。结果声明具有两种声明类型的属性。使用这种能力对 JavaScript 以及其他编程语言中的一些模式进行建模。

### 将命名空间与类合并

这让我们可以表示内部类。

```typescript
class Album {
  label: Album.AlbumLabel;
}
namespace Album {
  export class AlbumLabel {}
}
```

合并成员的可见性规则与合并命名空间部分中描述的规则相同，因此我们必须导出 AlbumLabel 类以便合并后的类能够看到它。最终的结果是在另一个类中管理一个类。还可以使用命名空间向现有类添加更多的静态成员。

除了内部类的模式之外，您可能还熟悉 JavaScript 的实践，即创建一个函数，然后通过在函数中添加属性来进一步扩展函数。ts使用声明合并以类型安全的方式构建类似的定义。

```typescript
function buildLabel(name: string): string {
  return buildLabel.prefix + name + buildLabel.suffix;
}
namespace buildLabel {
  export let suffix = "";
  export let prefix = "Hello, ";
}
console.log(buildLabel("Sam Smith"));
```

类似地，命名空间可以用于使用静态成员扩展 enums:

```typescript
enum Color {
  red = 1,
  green = 2,
  blue = 4,
}
namespace Color {
  export function mixColor(colorName: string) {
    if (colorName == "yellow") {
      return Color.red + Color.green;
    } else if (colorName == "white") {
      return Color.red + Color.green + Color.blue;
    } else if (colorName == "magenta") {
      return Color.red + Color.blue;
    } else if (colorName == "cyan") {
      return Color.green + Color.blue;
    }
  }
}
```

### 不允许的合并

并不是所有的合并在ts中都被允许。目前，类不能与其他类或变量合并。有关模拟类合并的信息，请参阅ts部分中的 mixin。

### 模块增强

虽然 JavaScript 模块不支持合并，但是您可以通过导入和更新现有对象来修补它们。让我们来看一个玩具**observable**的例子:

```typescript
// observable.ts
export class Observable<T> {
  // ... implementation left as an exercise for the reader ...
}
// map.ts
import { Observable } from "./observable";
Observable.prototype.map = function (f) {
  // ... another exercise for the reader
};
```

这在ts中也可以很好地工作，但是编译器不知道 Observable.prototype.map。你可以使用模块增强来告诉编译器:

```typescript
// observable.ts
export class Observable<T> {
  // ... implementation left as an exercise for the reader ...
}
// map.ts
import { Observable } from "./observable";
declare module "./observable" {
  interface Observable<T> {
    map<U>(f: (x: T) => U): Observable<U>;
  }
}
Observable.prototype.map = function (f) {
  // ... another exercise for the reader
};
// consumer.ts
import { Observable } from "./observable";
import "./map";
let o: Observable<number>;
o.map((x) => x.toFixed());
```

模块名称的解析方式与导入/导出中的模块说明符相同。有关更多信息，请参见模块。然后合并扩展中的声明，就好像它们声明在与原始文件相同的文件中一样。

然而，有两个限制要记住:

1.  您不能在扩展中声明新的顶级声明——只能对现有声明进行补丁
2. 默认导出也不能增强，只能命名导出(因为需要通过导出的名称增强导出，并且`default` 是一个保留字-看[#14080 # 14080](https://github.com/Microsoft/TypeScript/issues/14080) 了解详情)

### 全局增强

您还可以从模块内部向全局范围添加声明:

```typescript
// observable.ts
export class Observable<T> {
  // ... still no implementation ...
}
declare global {
  interface Array<T> {
    toObservable(): Observable<T>;
  }
}
Array.prototype.toObservable = function () {
  // ...
};
```

全局增强与模块增强具有相同的行为和限制。

## 枚举

Enums 是 TypeScript 的少数几个特性之一，它不是 JavaScript 的类型级扩展。

枚举允许开发人员定义一组命名的常量。使用枚举可以使记录意图更加容易，或者创建一组不同的案例。ts提供了数字和基于字符串的枚举。

###  数字枚举

我们首先从数字枚举开始，如果你来自其他语言，它可能更为熟悉。枚举可以使用enum关键字定义。

```typescript
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}
```

上面，我们有一个数值枚举，其中 Up 初始化为1。以下所有成员都从该点开始自动递增。换句话说，Direction.Up 的值是1，Down 的值是2，Left 的值是3，Right 的值是4。

如果我们愿意，我们可以完全忽略初始化:

```typescript
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
```

这里，Up 的值是0，Down 的值是1，等等。这种自动递增行为对于我们可能不关心成员值本身，但是确实关心每个值与同一枚举中的其他值不同的情况非常有用。

使用枚举非常简单: 只需将任何成员作为枚举本身的属性访问，并使用枚举的名称声明类型:

```typescript
enum UserResponse {
  No = 0,
  Yes = 1,
}

function respond(recipient: string, message: UserResponse): void {
  // ...
}

respond("Princess Caroline", UserResponse.Yes);
```

数值枚举可以混合使用计算成员和常量成员(见下文)。简而言之，没有初始化的枚举要么需要放在第一位，要么必须放在用数字常量或其他常量枚举成员初始化的数字枚举之后。换句话说，以下内容是不允许的:

```typescript
enum E {
  A = getSomeValue(),
  B,
/Enum member must have initializer.
}
```

### 字符串枚举

字符串枚举是一个类似的概念，但是在运行时有一些细微的差别，如下文所述。在字符串枚举中，必须使用字符串文字或另一个字符串枚举成员对每个成员进行常量初始化。

```typescript
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
```

虽然字符串枚举不具有自动递增行为，但字符串枚举的好处是它们可以很好地“序列化”。换句话说，如果您正在调试并且必须读取一个数值枚举的运行时值，那么该值通常是不透明的——它本身并不传达任何有用的意义(尽管反向映射通常有帮助) ，字符串枚举允许您在代码运行时给出一个有意义且可读的值，与枚举成员本身的名称无关。

### 异构枚举

从技术上讲，enum 可以与字符串和数字成员混合使用，但不清楚为什么要这样做:

```typescript
enum BooleanLikeHeterogeneousEnum {
  No = 0,
  Yes = "YES",
}
```

除非你真的想聪明地利用 JavaScript 的运行时行为，否则建议你不要这样做。

### 计算成员和常量成员

每个枚举成员都有一个与之关联的值，该值可以是常量，也可以是计算值。一个枚举成员被认为是常量，如果:

* 它是枚举中的第一个成员，没有初始化式，在这种情况下，它被赋值为0:

  ```typescript
  // E.X is constant:
  enum E {
  X,
  }
  ```

* 它没有初始值设定项，前面的枚举成员是一个数值常数。在这种情况下，当前枚举成员的值将是前一个枚举成员加一的值。

  ```typescript
  // All enum members in 'E1' and 'E2' are constant.
  
  enum E1 {
  X,
  Y,
  Z,
  }
  
  enum E2 {
  A = 1,
  B,
  C,
  }
  ```

* 使用常量枚举表达式初始化枚举成员。常量枚举表达式是可以在编译时完全计算的 TypeScript 表达式的子集。表达式是一个常量枚举表达式，如果它是:

  1. 一个文本枚举表达式(基本上是一个字符串文本或者一个数值文本)
  2. 对先前定义的常量枚举成员的引用(可以来自不同的枚举)
  3. 带括号的常量 enum 表达式
  4. 一元运算符 `+`, `-`, `~`其中之一应用在了常量枚举表达式
  5. 常量枚举表达式做为二元运算符 `+`, `-`, `*`, `/`, `%`, `<<`, `>>`, `>>>`, `&`, `|`, `^`的操作对象。

  若常数枚举表达式求值后为 `NaN`或 `Infinity`，则会在编译阶段报错。

在所有其他情况下，我们认为是计算成员。

```typescript
enum FileAccess {
  // constant members
  None,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read | Write,
  // computed member
  G = "123".length,
}
```

### 联合枚举与枚举成员的类型

存在一种特殊的非计算的常量枚举成员的子集：字面量枚举成员。 字面量枚举成员是指不带有初始值的常量枚举成员，或者是值被初始化为:

- 任何字符串字面量（例如： `"foo"`， `"bar"`， `"baz"`）
- 任何数字字面量（例如： `1`, `100`）
- 应用了一元 `-`符号的数字字面量（例如： `-1`, `-100`）

当所有枚举成员都拥有字面量枚举值时，它就带有了一种特殊的语义。

首先，枚举成员成为了类型！ 例如，我们可以说某些成员 *只能*是枚举成员的值：

```typescript
enum ShapeKind {
  Circle,
  Square,
}

interface Circle {
  kind: ShapeKind.Circle;
  radius: number;
}

interface Square {
  kind: ShapeKind.Square;
  sideLength: number;
}

let c: Circle = {
  kind: ShapeKind.Square,
/Type 'ShapeKind.Square' is not assignable to type 'ShapeKind.Circle'.
  radius: 100,
};
```

另一个变化是枚举类型本身有效地成为每个枚举成员的联合。使用 union 枚举，类型系统能够利用这样一个事实，即它知道枚举本身中存在的确切值集。正因为如此，TypeScript 可以在我们可能比较错误值的地方捕捉 bug。例如:

```typescript
enum E {
  Foo,
  Bar,
}

function f(x: E) {
  if (x !== E.Foo || x !== E.Bar) {
/This condition will always return 'true' since the types 'E.Foo' and 'E.Bar' have no overlap.
    //
  }
}
```

在这个例子中，我们首先检查 x 是否不是 E.Foo。如果检查成功，那么我们的 | | 将会短路，并且“ If”的主体将会运行。然而，如果检查没有成功，那么 x 只能是 E.Foo，所以看它是否等于 E.Bar 是没有意义的。

### 运行时的枚举

枚举是在运行时存在的真实对象。 例如下面的枚举：

```typescript
enum E {
  X,
  Y,
  Z,
}
```

实际上可以传递给函数

```typescript
enum E {
  X,
  Y,
  Z,
}

function f(obj: { X: number }) {
  return obj.X;
}

// Works, since 'E' has a property named 'X' which is a number.
f(E);
```

### 编译时的枚举

尽管 Enums 是在运行时存在的真实对象，但是关键字的 keyof 与典型对象的工作方式可能不同。相反，使用 keyof typeof 键获得一个 Type，该 Type 将所有枚举键表示为字符串。

```typescript
enum LogLevel {
  ERROR,
  WARN,
  INFO,
  DEBUG,
}

/**
 * This is equivalent to:
 * type LogLevelStrings = 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';
 */
type LogLevelStrings = keyof typeof LogLevel;

function printImportant(key: LogLevelStrings, message: string) {
  const num = LogLevel[key];
  if (num <= LogLevel.WARN) {
    console.log("Log level key is:", key);
    console.log("Log level value is:", num);
    console.log("Log level message is:", message);
  }
}
printImportant("ERROR", "This is a message");
```

### 反向映射

除了为成员创建具有属性名称的对象之外，numeric 枚举成员还可以从枚举值反向映射到枚举名称。例如，在这个例子中:

```typescript
enum Enum {
  A,
}

let a = Enum.A;
let nameOfA = Enum[a]; // "A"
```

将其编译成以下 JavaScript:

```typescript
"use strict";
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
})(Enum || (Enum = {}));
let a = Enum.A;
let nameOfA = Enum[a]; // "A"
```

在这个生成的代码中，枚举被编译成一个对象，该对象同时存储正向(name-> value)和反向(value-> name)映射。对其他枚举成员的引用始终作为属性访问发出，并且从不内联。

请记住，字符串枚举成员根本不会得到反向映射。

### `const`枚举

大多数情况下，枚举是十分有效的方案。 然而在某些情况下需求很严格。 为了避免在额外生成的代码上的开销和额外的非直接的对枚举成员的访问，我们可以使用 `const`枚举。 常量枚举通过在枚举上使用 `const`修饰符来定义。

```typescript
const enum Enum {
  A = 1,
  B = A * 2,
}
```

常量枚举只能使用常量枚举表达式，并且不同于常规的枚举，它们在编译阶段会被删除。 常量枚举成员在使用的地方会被内联进来。 之所以可以这么做是因为，常量枚举不允许包含计算成员。

```typescript
const enum Direction {
  Up,
  Down,
  Left,
  Right,
}

let directions = [
  Direction.Up,
  Direction.Down,
  Direction.Left,
  Direction.Right,
];
```

生成后的代码为：

```typescript
"use strict";
let directions = [
    0 /* Up */,
    1 /* Down */,
    2 /* Left */,
    3 /* Right */,
];
```

### 外部枚举

外部枚举用来描述已经存在的枚举类型的形状。

```typescript
declare enum Enum {
  A = 1,
  B,
  C = 2,
}
```

外部枚举和非外部枚举之间有一个重要的区别，在正常的枚举里，没有初始化方法的成员被当成常数成员。 对于非常数的外部枚举而言，没有初始化方法时被当做需要经过计算的。

### 对象vs枚举

在现代typescript中，当一个对象以as const作为后缀你可能不需要一个枚举 :

```typescript
const enum EDirection {
  Up,
  Down,
  Left,
  Right,
}

const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const;

EDirection.Up;
           
(enum member) EDirection.Up = 0

ODirection.Up;
           
(property) Up: 0

// Using the enum as a parameter
function walk(dir: EDirection) {}

// It requires an extra line to pull out the keys
type Direction = typeof ODirection[keyof typeof ODirection];
function run(dir: Direction) {}

walk(EDirection.Left);
run(ODirection.Right);
```

支持这种格式而不支持 TypeScript 的 enum 的最大理由是，它使代码库与 JavaScript 的状态保持一致，并且当/如果将枚举添加到 JavaScript 中，那么您就可以转移到附加语法。

## 迭代器和生成器

### Iterables

如果对象具有 Symbol.iterator 属性的实现，则认为该对象是可迭代的。一些内置类型，如 Array、 Map、 Set、 String、 Int32Array、 Uint32Array 等，已经实现了它们的 Symbol.iterator 属性。对象上的 iterator 函数负责返回要迭代的值列表。

#### `Iterable`  interface

如果我们想接受上面列出的可迭代的类型，可以使用 Iterable 类型。下面是一个例子:

```typescript
function toArray<X>(xs: Iterable<X>): X[] {
  return [...xs]
}
```

#### `for..of`statements

`for..of` 在一个可迭代的对象上循环，调用在这个对象上的`Symbol.iterator` 属性。这里有一个简单数组上的`for..of`循环的例子:

```typescript
let someArray = [1, "string", false];

for (let entry of someArray) {
  console.log(entry); // 1, "string", false
}
```

#### `for..of`vs.`for..in`statements

 `for..of`和`for..in`均可迭代一个列表；但是用于迭代的值却不同，`for..in`迭代的是对象的 *键* 的列表，而`for..of`则迭代对象的键对应的值。

下面的例子展示了两者之间的区别：

```typescript
let list = [4, 5, 6];
for (let i in list) {
  console.log(i); // "0", "1", "2",
}
for (let i of list) {
  console.log(i); // 4, 5, 6
}
```

另一个区别是`for..in`可以操作任何对象；它提供了查看对象属性的一种方法。 但是 `for..of`关注于迭代对象的值。内置对象`Map`和`Set`已经实现了`Symbol.iterator`方法，让我们可以访问它们保存的值。

```typescript
let pets = new Set(["Cat", "Dog", "Hamster"]);
pets["species"] = "mammals";
for (let pet in pets) {
  console.log(pet); // "species"
}
for (let pet of pets) {
  console.log(pet); // "Cat", "Dog", "Hamster"
}
```

#### Code generation代码生成

##### 目标为 ES5 和 ES3

当定位符合 ES5或 es3的引擎时，迭代器只允许在 Array 类型的值上使用。在非数组上使用for...of是一个错误使用。.即使这些非 array 值实现了 symboli.iterator 属性。

编译器将为 for. . of循环生成一个简单的 for 循环，例如:

```typescript
let numbers = [1, 2, 3];
for (let num of numbers) {
  console.log(num);
}
```

会以下列方式产生:

```typescript
var numbers = [1, 2, 3];
for (var _i = 0; _i < numbers.length; _i++) {
  var num = numbers[_i];
  console.log(num);
}
```

##### 目标为 ECMAScript 2015 或更高

当目标为兼容ECMAScipt 2015的引擎时，编译器会生成相应引擎的`for..of`内置迭代器实现方式。

## JSX

[JSX](https://facebook.github.io/jsx/)是一种嵌入式的类似XML的语法。 它可以被转换成合法的JavaScript，尽管转换的语义是依据不同的实现而定的。 JSX因[React](https://reactjs.org/)框架而流行，但也存在其它的实现。 TypeScript支持内嵌，类型检查以及将JSX直接编译为JavaScript。

### 基本用法

想要使用JSX必须做两件事：

1. 给文件一个`.tsx`扩展名
2. 启用`jsx`选项

TypeScript具有三种JSX模式：`preserve`，`react`和`react-native`。 这些模式只在代码生成阶段起作用 - 类型检查并不受影响。 在`preserve`模式下生成代码中会保留JSX以供后续的转换操作使用（比如：[Babel](https://babeljs.io/)）。 另外，输出文件会带有`.jsx`扩展名。 `react`模式会生成`React.createElement`，在使用前不需要再进行转换操作了，输出文件的扩展名为`.js`。 `react-native`相当于`preserve`，它也保留了所有的JSX，但是输出文件的扩展名是`.js`。

| Mode           | Input     | Output                                            | Output File Extension |
| :------------- | :-------- | :------------------------------------------------ | :-------------------- |
| `preserve`     | `<div />` | `<div />`                                         | `.jsx`                |
| `react`        | `<div />` | `React.createElement("div")`                      | `.js`                 |
| `react-native` | `<div />` | `<div />`                                         | `.js`                 |
| `react-jsx`    | `<div />` | `_jsx("div", {}, void 0);`                        | `.js`                 |
| `react-jsxdev` | `<div />` | `_jsxDEV("div", {}, void 0, false, {...}, this);` | `.js`                 |

你可以通过在命令行里使用`--jsx`标记或[tsconfig.json](https://www.tslang.cn/docs/handbook/tsconfig-json.html)里的选项来指定模式。

> \* 注意: 您可以指定在目标反应 JSX 生成时使用的 JSX 工厂函数，使用 -- jsxFactory 选项(默认为 React.createElement)

### as 操作符

回想一下如何编写类型断言:

```typescript
var foo = <foo>bar;
```

这里断言`bar`变量是`foo`类型的。 因为TypeScript也使用尖括号来表示类型断言，在结合JSX的语法后将带来解析上的困难。因此，TypeScript在`.tsx`文件里禁用了使用尖括号的类型断言。

由于不能够在`.tsx`文件里使用上述语法，因此我们应该使用另一个类型断言操作符：`as`。 上面的例子可以很容易地使用`as`操作符改写：

```typescript
var foo = bar as foo;
```

`as`操作符在`.ts`和`.tsx`里都可用，并且与尖括号类型断言行为是等价的。

### 类型检查

为了理解JSX的类型检查，你必须首先理解固有元素与基于值的元素之间的区别。 假设有这样一个JSX表达式`<expr />`，`expr`可能引用环境自带的某些东西（比如，在DOM环境里的`div`或`span`）或者是你自定义的组件。 这是非常重要的，原因有如下两点：

1. 对于React，固有元素会生成字符串（`React.createElement("div")`），然而由你自定义的组件却不会生成（`React.createElement(MyComponent)`）。
2. 传入JSX元素里的属性类型的查找方式不同。 固有元素属性*本身*就支持，然而自定义的组件会自己去指定它们具有哪个属性。

TypeScript使用[与React相同的规范](http://facebook.github.io/react/docs/jsx-in-depth.html#html-tags-vs.-react-components) 来区别它们。 固有元素总是以一个小写字母开头，基于值的元素总是以一个大写字母开头。

#### 固有元素

固有元素使用特殊的接口`JSX.IntrinsicElements`来查找。 默认地，如果这个接口没有指定，会全部通过，不对固有元素进行类型检查。 然而，如果这个接口存在，那么固有元素的名字需要在`JSX.IntrinsicElements`接口的属性里查找。 例如：

```ts
declare namespace JSX {
    interface IntrinsicElements {
        foo: any
    }
}

<foo />; // 正确
<bar />; // 错误
```

在上例中，`<foo />`没有问题，但是`<bar />`会报错，因为它没在`JSX.IntrinsicElements`里指定。

> 注意：你也可以在`JSX.IntrinsicElements`上指定一个用来捕获所有的字符串索引：

```typescript
declare namespace JSX {
    interface IntrinsicElements {
        [elemName: string]: any;
    }
}
```

#### 基于值的元素

基于值的元素会简单的在它所在的作用域里按标识符查找。

```typescript
import MyComponent from "./myComponent";
<MyComponent />; // ok
<SomeOtherComponent />; // error
```

定义基于值的元素有两种方法:

1. 函数组件
2. 类组件

由于在 JSX 表达式中，这两种类型的基于值的元素彼此无法区分，因此 TS 首先尝试使用重载解析将表达式解析为一个函数组件。如果进程成功，则 TS 完成将表达式解析为其声明。如果该值未能作为函数组件进行解析，则 TS 将尝试将其作为类组件进行解析。如果失败，TS 将报告一个错误。

##### 函数组件

顾名思义，组件被定义为 JavaScript 函数，其第一个参数是 props 对象。TS 强制其返回类型必须可分配给 JSX.Element。

```typescript
interface FooProp {
  name: string;
  X: number;
  Y: number;
}
declare function AnotherComponent(prop: { name: string });
function ComponentFoo(prop: FooProp) {
  return <AnotherComponent name={prop.name} />;
}
const Button = (prop: { value: string }, context: { color: string }) => (
  <button />
);
```

因为函数组件只是一个 JavaScript 函数，所以函数重载也可以在这里使用:

```typescript
interface ClickableProps {
  children: JSX.Element[] | JSX.Element;
}

interface HomeProps extends ClickableProps {
  home: JSX.Element;
}

interface SideProps extends ClickableProps {
  side: JSX.Element | string;
}

function MainButton(prop: HomeProps): JSX.Element;
function MainButton(prop: SideProps): JSX.Element;
function MainButton(prop: ClickableProps): JSX.Element {
  // ...
}
```

> 注: 函数组件以前称为无状态函数组件(SFC)。由于在最近的 react 版本中，Function Components 不再被认为是无状态的，SFC 类型及其别名 StatelessComponent 已被弃用。

##### 类组件

可以定义类组件的类型。但是，要做到这一点，最好理解两个新术语: 元素类类型和元素实例类型。

给定 < Expr/> ，元素类型是 Expr 的类型。所以在上面的例子中，如果 MyComponent 是一个 ES6类，那么类类型就是该类的构造函数和静态函数。如果 MyComponent 是一个工厂函数，那么类类型就是这个函数。

一旦建立了类类型，实例类型就由类类型的构造或调用签名的返回类型的联合确定(以出现的类型为准)。同样，对于 ES6类，实例类型是该类的实例的类型，对于工厂函数，实例类型是从函数返回的值的类型。

```typescript
class MyComponent {
  render() {}
}
// use a construct signature
var myComponent = new MyComponent();
// element class type => MyComponent
// element instance type => { render: () => void }
function MyFactoryFunction() {
  return {
    render: () => {},
  };
}
// use a call signature
var myComponent = MyFactoryFunction();
// element class type => MyFactoryFunction
// element instance type => { render: () => void }
```

元素实例类型很有意思，因为它必须可分配给 JSX.ElementClass，否则将导致错误。默认情况下，JSX.ElementClass 是{} ，但是可以对它进行扩展，将 JSX 的使用限制为只使用符合适当接口的类型。

```typescript
declare namespace JSX {
  interface ElementClass {
    render: any;
  }
}
class MyComponent {
  render() {}
}
function MyFactoryFunction() {
  return { render: () => {} };
}
<MyComponent />; // ok
<MyFactoryFunction />; // ok
class NotAValidComponent {}
function NotAValidFactoryFunction() {
  return {};
}
<NotAValidComponent />; // error
<NotAValidFactoryFunction />; // error
```

### 属性类型检查

类型检查属性的第一步是确定元素属性类型。这在内在元素和基于值的元素之间略有不同。

对于内部元素，它是 JSX.IntrinsicElements 上属性的类型

```typescript
declare namespace JSX {
  interface IntrinsicElements {
    foo: { bar?: boolean };
  }
}
// element attributes type for 'foo' is '{bar?: boolean}'
<foo bar />;
```

对于基于值的元素，它要稍微复杂一些。它由先前确定的元素实例类型上的属性类型决定。由 JSX.ElementAttributesProperty 决定使用哪个属性。它应该用一个属性来声明。然后使用该属性的名称。从 TypeScript 2.8开始，如果没有提供 JSX.ElementAttributesProperty，则将使用类元素的构造函数或函数组件的调用的第一个参数类型。

```typescript
declare namespace JSX {
  interface ElementAttributesProperty {
    props; // specify the property name to use
  }
}
class MyComponent {
  // specify the property on the element instance type
  props: {
    foo?: string;
  };
}
// element attributes type for 'MyComponent' is '{foo?: string}'
<MyComponent foo="bar" />;
```

元素属性类型用于检查 JSX 中的属性。支持可选和必需的属性。

```typescript
declare namespace JSX {
  interface IntrinsicElements {
    foo: { requiredProp: string; optionalProp?: number };
  }
}
<foo requiredProp="bar" />; // ok
<foo requiredProp="bar" optionalProp={0} />; // ok
<foo />; // error, requiredProp is missing
<foo requiredProp={0} />; // error, requiredProp should be a string
<foo requiredProp="bar" unknownProp />; // error, unknownProp does not exist
<foo requiredProp="bar" some-unknown-prop />; // ok, because 'some-unknown-prop' is not a valid identifier
```

> 注意: 如果属性名称不是有效的 JS 标识符(如 data-* 属性) ，那么如果在元素属性类型中没有找到它，则不认为它是错误。

此外，可以使用 JSX.IntrinsicAttributes 接口指定 JSX 框架使用的额外属性，这些属性通常不被组件的属性或参数使用——例如 React 中的 key。进一步说，泛型 JSX.IntrinsicClassAttributes < t > 类型也可以用来指定类组件(而不是函数组件)的同类额外属性。在此类型中，泛型参数对应于类实例类型。在 React 中，这用于允许类型 Ref < t > 的 Ref 属性。一般来说，这些接口上的所有属性都应该是可选的，除非您希望 JSX 框架的用户需要为每个标记提供一些属性。

延展操作符也可以使用：

```typescript
var props = { requiredProp: "bar" };
<foo {...props} />; // ok
var badProps = {};
<foo {...badProps} />; // error
```

### 子类型检查

在 TypeScript 2.3中，TS 引入了子类型检查。Children 是元素属性类型中的特殊属性，其中子 jsxexpression 被插入到属性中。与 TS 使用 JSX.ElementAttributesProperty 确定 props 的名称类似，TS 使用 JSX.ElementChildrenAttribute 确定这些 props 中的子节点的名称。Elementchildrenattribute 应该使用单个属性声明。

```typescript
declare namespace JSX {
  interface ElementChildrenAttribute {
    children: {}; // specify children name to use
  }
}
```

```jsx
<div>
  <h1>Hello</h1>
</div>;
<div>
  <h1>Hello</h1>
  World
</div>;
const CustomComp = (props) => <div>{props.children}</div>
<CustomComp>
  <div>Hello World</div>
  {"This is just a JS expression..." + 1000}
</CustomComp>
```

您可以像指定其他属性一样指定子属性的类型。这将覆盖来自的默认类型(如使用 React typing)。

```jsx
interface PropsType {
  children: JSX.Element
  name: string
}
class Component extends React.Component<PropsType, {}> {
  render() {
    return (
      <h2>
        {this.props.children}
      </h2>
    )
  }
}
// OK
<Component name="foo">
  <h1>Hello World</h1>
</Component>
// Error: children is of type JSX.Element not array of JSX.Element
<Component name="bar">
  <h1>Hello World</h1>
  <h2>Hello World</h2>
</Component>
// Error: children is of type JSX.Element not array of JSX.Element or string.
<Component name="baz">
  <h1>Hello</h1>
  World
</Component>
```

### JSX 结果类型

默认情况下，JSX 表达式的结果类型为 any。您可以通过指定 JSX.Element 接口来自定义类型。但是，无法从这个接口检索有关元素、属性或 JSX 的子接口的类型信息。这是一个黑盒子。

### 嵌入表达式

JSX 允许通过在表达式周围加上花括号(`{}`)在标记之间嵌入表达式。

```jsx
var a = (
  <div>
    {["foo", "bar"].map((i) => (
      <span>{i / 2}</span>
    ))}
  </div>
);
```

上面的代码将导致一个错误，因为您不能用数字除字符串。当使用 preserve 选项时，输出如下:

```tsx
var a = (
  <div>
    {["foo", "bar"].map(function (i) {
      return <span>{i / 2}</span>;
    })}
  </div>
);
```

### React整合

要使用 JSX 和 React，你应该使用 React 类型。这些输入恰当地定义了用于 React 的 JSX 命名空间。

```jsx
/// <reference path="react.d.ts" />
interface Props {
  foo: string;
}
class MyComponent extends React.Component<Props, {}> {
  render() {
    return <span>{this.props.foo}</span>;
  }
}
<MyComponent foo="bar" />; // ok
<MyComponent foo={0} />; // error
```

#### 配置 JSX

有多个编译器标志可以用来自定义 JSX，它既可以作为编译器标志，也可以通过内联每文件 pragmas 工作。要了解更多，请查看他们的 tsconfig 参考页面:

- [`jsxFactory`](https://www.typescriptlang.org/tsconfig/#jsxFactory)
- [`jsxFragmentFactory`](https://www.typescriptlang.org/tsconfig/#jsxFragmentFactory)
- [`jsxImportSource`](https://www.typescriptlang.org/tsconfig/#jsxImportSource)

## 混入(mixins)

除了传统的面向对象层次结构，另一种由可重用组件构建类的流行方法是通过组合更简单的部分类来构建类。您可能熟悉混入的概念或诸如 Scala 之类的语言的特性，这种模式在 JavaScript 社区中也颇受欢迎。

### 一个混入是如何工作的？

该模式依赖于使用具有类继承的泛型来扩展基类。TypeScript的最佳 mixin 支持是通过类表达式模式完成的。你可以在这里阅读更多关于这个模式如何在 JavaScript 中工作的信息。

为了开始，我们需要一个类，它将把 mixin 应用到以下代码之上:

```typescript
class Sprite {
  name = "";
  x = 0;
  y = 0;

  constructor(name: string) {
    this.name = name;
  }
}
```

然后，您需要一个类型和一个工厂函数，该函数返回一个扩展基类的类表达式。

```typescript
// To get started, we need a type which we'll use to extend
// other classes from. The main responsibility is to declare
// that the type being passed in is a class.

type Constructor = new (...args: any[]) => {};

// This mixin adds a scale property, with getters and setters
// for changing it with an encapsulated private property:

function Scale<TBase extends Constructor>(Base: TBase) {
  return class Scaling extends Base {
    // Mixins may not declare private/protected properties
    // however, you can use ES2020 private fields
    _scale = 1;

    setScale(scale: number) {
      this._scale = scale;
    }

    get scale(): number {
      return this._scale;
    }
  };
}
```

这些都设置好之后，你就可以创建一个类，用 mixin 表示基类:

```typescript
// Compose a new class from the Sprite class,
// with the Mixin Scale applier:
const EightBitSprite = Scale(Sprite);

const flappySprite = new EightBitSprite("Bird");
flappySprite.setScale(0.8);
console.log(flappySprite.scale);
```

### 被约束的混入

在上面的表单中，mixin 没有类的基础知识，这使得创建您想要的设计变得困难。

为了对此建模，我们修改原始构造函数类型以接受泛型参数。

```typescript
// This was our previous constructor:
type Constructor = new (...args: any[]) => {};
// Now we use a generic version which can apply a constraint on
// the class which this mixin is applied to
type GConstructor<T = {}> = new (...args: any[]) => T;
```

这允许创建只能使用受约束的基类的类:

```typescript
type Positionable = GConstructor<{ setPos: (x: number, y: number) => void }>;
type Spritable = GConstructor<Sprite>;
type Loggable = GConstructor<{ print: () => void }>;
```

然后你可以创建 mixin，只有当你有一个特定的基础的时候它才能工作:

```typescript
function Jumpable<TBase extends Positionable>(Base: TBase) {
  return class Jumpable extends Base {
    jump() {
      // This mixin will only work if it is passed a base
      // class which has setPos defined because of the
      // Positionable constraint.
      this.setPos(0, 20);
    }
  };
}
```

### 替代模式

这个文档的以前版本推荐一种编写 mixin 的方法，你可以分别创建运行时和类型层次结构，然后在最后合并它们:

```typescript
// Each mixin is a traditional ES class
class Jumpable {
  jump() {}
}

class Duckable {
  duck() {}
}

// Including the base
class Sprite {
  x = 0;
  y = 0;
}

// Then you create an interface which merges
// the expected mixins with the same name as your base
interface Sprite extends Jumpable, Duckable {}
// Apply the mixins into the base class via
// the JS at runtime
applyMixins(Sprite, [Jumpable, Duckable]);

let player = new Sprite();
player.jump();
console.log(player.x, player.y);

// This can live anywhere in your codebase:
function applyMixins(derivedCtor: any, constructors: any[]) {
  constructors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      Object.defineProperty(
        derivedCtor.prototype,
        name,
        Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
          Object.create(null)
      );
    });
  });
}
```

此模式较少依赖于编译器，而更多地依赖于代码库，以确保运行时和类型系统正确地保持同步。

###  约束

代码流分析在 TypeScript 编译器内本机支持 mixin 模式。在一些情况下，您可以触及本机支持的边缘。

##### 装饰器和混入

您不能使用 decorator 通过代码流分析提供 mixin:

```typescript
// A decorator function which replicates the mixin pattern:
const Pausable = (target: typeof Player) => {
  return class Pausable extends target {
    shouldFreeze = false;
  };
};

@Pausable
class Player {
  x = 0;
  y = 0;
}

// The Player class does not have the decorator's type merged:
const player = new Player();
player.shouldFreeze;
/Property 'shouldFreeze' does not exist on type 'Player'.

// It the runtime aspect could be manually replicated via
// type composition or interface merging.
type FreezablePlayer = Player & { shouldFreeze: boolean };

const playerTwo = (new Player() as unknown) as FreezablePlayer;
playerTwo.shouldFreeze;
```

##### 静态属性混入

与其说是一种约束，不如说是一种捕捉。类表达式模式创建单件，因此不能在类型系统中映射它们以支持不同的变量类型。

你可以通过使用函数返回类来解决这个问题，它依据泛型而变化:

```typescript
function base<T>() {
  class Base {
    static prop: T;
  }
  return Base;
}

function derived<T>() {
  class Derived extends base<T>() {
    static anotherProp: T;
  }
  return Derived;
}

class Spec extends derived<string>() {}

Spec.prop; // string
Spec.anotherProp; // string
```

## 模块

从 ECMAScript 2015开始，JavaScript 就有了模块的概念，TypeScript 也有这个概念。	

模块在自己的作用域内执行，而不是在全局作用域中执行; 这意味着在模块中声明的变量、函数、类等在模块外不可见，除非使用某种导出形式显式导出它们。相反，要使用从不同模块导出的变量、函数、类、接口等，必须使用导入形式之一导入该变量。

模块是声明性的; 模块之间的关系是在文件级别的导入和导出中指定的。

模块使用模块加载程序彼此导入。在运行时，模块加载程序负责在执行模块之前查找并执行模块的所有依赖项。JavaScript 中使用的众所周知的模块加载器是 Node.js 的 CommonJS 模块加载器和 Web 应用程序中 AMD 模块的 RequireJS 加载器。

在 TypeScript 中，就像在 ECMAScript 2015中一样，任何包含顶级导入或导出的文件都被视为模块。相反，没有任何顶级导入或导出声明的文件被视为其内容在全局范围内可用的脚本(因此对模块也是如此)。

### Export

#### 导出一个声明

任何一个声明（例如一个变量、函数、类、类型别名、或接口）都能够被以添加export关键字的方式导出。

##### StringValidator.ts

```typescript
export interface StringValidator {
  isAcceptable(s: string): boolean;
}
```

##### ZipCodeValidator.ts

```typescript
import { StringValidator } from "./StringValidator";
export const numberRegexp = /^[0-9]+$/;
export class ZipCodeValidator implements StringValidator {
  isAcceptable(s: string) {
    return s.length === 5 && numberRegexp.test(s);
  }
}
```

#### 导出语句

当“导出”需要为了使用者被重命名时，导出语句是非常方便的。因此上面的例子可以写成：

```typescript
class ZipCodeValidator implements StringValidator {
  isAcceptable(s: string) {
    return s.length === 5 && numberRegexp.test(s);
  }
}
export { ZipCodeValidator };
export { ZipCodeValidator as mainValidator };
```

#### 再导出

通常模块继承其他模块，并部分的暴露他们的一些特性。一个再导出不会在本地导入，也不会引入局部变量。

##### ParseIntBasedZipCodeValidator.ts

```typescript
export class ParseIntBasedZipCodeValidator {
  isAcceptable(s: string) {
    return s.length === 5 && parseInt(s).toString() === s;
  }
}
// Export original validator but rename it
export { ZipCodeValidator as RegExpBasedZipCodeValidator } from "./ZipCodeValidator";
```

可选地，模块可以包含一个或多个模块，并合并他们所有的使用`export * from "module"` 语法的”导出“。

##### AllValidators.ts

```typescript
export * from "./StringValidator"; // exports 'StringValidator' interface
export * from "./ZipCodeValidator"; // exports 'ZipCodeValidator' class and 'numberRegexp' constant value
export * from "./ParseIntBasedZipCodeValidator"; //  exports the 'ParseIntBasedZipCodeValidator' class
// and re-exports 'RegExpBasedZipCodeValidator' as alias
// of the 'ZipCodeValidator' class from 'ZipCodeValidator.ts'
// module.
```

### Import

导入和从模块导出一样简单。导入一个被导出的声明是通过使用下面的导入方式之一完成的：

#### 导入单个模块的导出

```typescript
import { ZipCodeValidator } from "./ZipCodeValidator";
let myValidator = new ZipCodeValidator();
```

导入也可以被重新命名：

```typescript
import { ZipCodeValidator as ZCV } from "./ZipCodeValidator";
let myValidator = new ZCV();
```

#### 将整个模块导入到单个变量中，并使用它访问模块导出

```typescript
import * as validator from "./ZipCodeValidator";
let myValidator = new validator.ZipCodeValidator();
```

#### 只为辅助作用导入一个模块

虽然不推荐实践，但是一些模块设置了一些可供其他模块使用的全局状态。这些模块可能没有任何导出，或者消费者对它们的任何导出都不感兴趣。要导入这些模块，请使用:

```typescript
import "./my-module.js";
```

#### 导入类型

在TypeScript3.8之前，可以使用 `import` 导入类型。使用 TypeScript 3.8，您可以使用 `import` 语句导入类型，或者使用 `import type`。

```typescript
// Re-using the same import
import { APIResponseType } from "./api";
// Explicitly use import type
import type { APIResponseType } from "./api";
```

`import type` 总是被保证从 JavaScript 中删除，像 Babel 这样的工具可以通过 `isolatedModules` 编译器标志对代码做出更好的假设。你可以在3.8发行说明中了解更多。

### Default exports

每个模块可以选择导出一个默认导出。默认导出用关键字`default` 标记; 每个模块只能有一个默认导出。默认导出使用不同的导入形式导入。

默认导出真的很方便。例如，像 jQuery 这样的库可能有一个缺省的 jQuery 或 $导出，我们可能也会以 $或 jQuery 的名称导入。

##### [JQuery.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/jquery/JQuery.d.ts)

```typescript
declare let $: JQuery;
export default $;
```

##### App.ts

```typescript
import $ from "jquery";
$("button.continue").html("Next Step...");
```

类和函数声明可以作为默认导出直接编写。默认导出类和函数声明名称是可选的。

##### ZipCodeValidator.ts

```typescript
export default class ZipCodeValidator {
  static numberRegexp = /^[0-9]+$/;
  isAcceptable(s: string) {
    return s.length === 5 && ZipCodeValidator.numberRegexp.test(s);
  }
}
```

##### Test.ts

```typescript
import validator from "./ZipCodeValidator";
let myValidator = new validator();
```

或

##### StaticZipCodeValidator.ts

```typescript
const numberRegexp = /^[0-9]+$/;
export default function (s: string) {
  return s.length === 5 && numberRegexp.test(s);
}
```

##### Test.ts

```typescript
import validate from "./StaticZipCodeValidator";
let strings = ["Hello", "98052", "101"];
// Use function validate
strings.forEach((s) => {
  console.log(`"${s}" ${validate(s) ? "matches" : "does not match"}`);
});
```

默认导出也可以只是值:

##### OneTwoThree.ts

```typescript
export default "123";
```

##### Log.ts

```typescript
import num from "./OneTwoThree";
console.log(num); // "123"
```

### Export all as x

使用 TypeScript 3.8，您可以使用 `export * as ns`  作为 一个别名，以另一个名称重新导出另一个模块:

```typescript
export * as utilities from "./utilities";
```

这会从一个模块中获取所有的依赖项，并将其作为一个导出字段，你可以这样导入它:

```typescript
import { utilities } from "./index";
```

### `export =`和`import = require()`

CommonJS 和 AMD 通常都具有导出对象的概念，该对象包含来自模块的所有导出。

它们还支持用自定义单个对象替换导出对象。默认导出意在替代这种行为; 然而，这两者是不兼容的。TypeScript支持 export = 对传统的 CommonJS 和 AMD 工作流进行建模。

Export = 语法指定从模块导出的单个对象。这可以是类、接口、命名空间、函数或枚举。

当使用 `export =` 导出模块时，必须使用特定于 typescript 的`import module = require("module")`导入模块。

##### ZipCodeValidator.ts

```typescript
let numberRegexp = /^[0-9]+$/;
class ZipCodeValidator {
  isAcceptable(s: string) {
    return s.length === 5 && numberRegexp.test(s);
  }
}
export = ZipCodeValidator;
```

##### Test.ts

```typescript
import zip = require("./ZipCodeValidator");
// Some samples to try
let strings = ["Hello", "98052", "101"];
// Validators to use
let validator = new zip();
// Show whether each string passed each validator
strings.forEach((s) => {
  console.log(
    `"${s}" - ${validator.isAcceptable(s) ? "matches" : "does not match"}`
  );
});
```

### Code Generation for Modules

根据编译过程中指定的模块目标，编译器将为 Node.js (CommonJS)、 require.js (AMD)、 UMD、 SystemJS 或 ECMAScript 2015本地模块加载系统(ES6)生成适当的代码。有关生成的代码中的定义、要求和注册调用的详细信息，请参阅每个模块加载程序的文档。

这个简单的示例显示了如何将导入和导出期间使用的名称转换为模块加载代码。

##### SimpleModule.ts

```typescript
import m = require("mod");
export let t = m.something + 1;
```

##### AMD / RequireJS SimpleModule.js

```typescript
define(["require", "exports", "./mod"], function (require, exports, mod_1) {
  exports.t = mod_1.something + 1;
});
```

##### CommonJS / Node SimpleModule.js

```typescript
var mod_1 = require("./mod");
exports.t = mod_1.something + 1;
```

##### UMD SimpleModule.js

```js
(function (factory) {
  if (typeof module === "object" && typeof module.exports === "object") {
    var v = factory(require, exports);
    if (v !== undefined) module.exports = v;
  } else if (typeof define === "function" && define.amd) {
    define(["require", "exports", "./mod"], factory);
  }
})(function (require, exports) {
  var mod_1 = require("./mod");
  exports.t = mod_1.something + 1;
});
```

##### System SimpleModule.js

```typescript
System.register(["./mod"], function (exports_1) {
  var mod_1;
  var t;
  return {
    setters: [
      function (mod_1_1) {
        mod_1 = mod_1_1;
      },
    ],
    execute: function () {
      exports_1("t", (t = mod_1.something + 1));
    },
  };
});
```

##### Native ECMAScript 2015 modules SimpleModule.js

```typescript
import { something } from "./mod";
export var t = something + 1;
```

###  简单的例子

下面，我们合并了前面示例中使用的 Validator 实现，它只从每个模块导出一个命名的导出。

要编译，我们必须在命令行上指定一个模块目标。对于 Node.js，使用 -- module commonjs; 对于 require.js，使用 -- module amd。例如:

```typescript
tsc --module commonjs Test.ts
```

在编译时，每个模块将成为一个单独的`.js`文件。与引用标记一样，编译器将遵循 import 语句编译依赖文件。

##### Validation.ts

```typescript
export interface StringValidator {
  isAcceptable(s: string): boolean;
}
```

##### LettersOnlyValidator.ts

```typescript
import { StringValidator } from "./Validation";

const lettersRegexp = /^[A-Za-z]+$/;

export class LettersOnlyValidator implements StringValidator {
  isAcceptable(s: string) {
    return lettersRegexp.test(s);
  }
}
```

##### ZipCodeValidator.ts

```typescript
import { StringValidator } from "./Validation";

const numberRegexp = /^[0-9]+$/;

export class ZipCodeValidator implements StringValidator {
  isAcceptable(s: string) {
    return s.length === 5 && numberRegexp.test(s);
  }
}
```

##### Test.ts

```typescript
import { StringValidator } from "./Validation";
import { ZipCodeValidator } from "./ZipCodeValidator";
import { LettersOnlyValidator } from "./LettersOnlyValidator";

// Some samples to try
let strings = ["Hello", "98052", "101"];

// Validators to use
let validators: { [s: string]: StringValidator } = {};
validators["ZIP code"] = new ZipCodeValidator();
validators["Letters only"] = new LettersOnlyValidator();

// Show whether each string passed each validator
strings.forEach((s) => {
  for (let name in validators) {
    console.log(
      `"${s}" - ${
        validators[name].isAcceptable(s) ? "matches" : "does not match"
      } ${name}`
    );
  }
});
```

### 可选模块加载和其他高级加载场景

在某些情况下，您可能只希望在某些条件下加载模块。在 TypeScript 中，我们可以使用下面所示的模式来实现这个和其他高级的加载场景，以直接调用模块加载器而不损失类型安全性。

编译器检测生成的 JavaScript 中是否使用了每个模块。如果模块标识符只用作类型注释的一部分，而不用作表达式，则不会为该模块发出请求调用。省略未使用的引用是一个很好的性能优化，并且允许可选地加载这些模块。

该模式的核心思想是，import id = require (”...”)语句使我们能够访问模块公开的类型。模块加载程序是动态调用(通过请求)的，如下面的 if 块所示。这利用了引用省略优化，因此只有在需要时才加载模块。为了使这个模式工作，重要的是通过`import`定义的符号只能用在类型位置(即永远不能用在将发射到 JavaScript 的位置)。

为了保证类型安全，我们可以使用 typeof 关键字。当在类型位置中使用 typeof 关键字时，会生成值的类型，在本例中是模块的类型。

##### Node.js里的动态模块加载

```typescript
declare function require(moduleName: string): any;
import { ZipCodeValidator as Zip } from "./ZipCodeValidator";
if (needZipValidation) {
  let ZipCodeValidator: typeof Zip = require("./ZipCodeValidator");
  let validator = new ZipCodeValidator();
  if (validator.isAcceptable("...")) {
    /* ... */
  }
}
```

##### 例子: require.js里的动态模块加载 

```typescript
declare function require(
  moduleNames: string[],
  onLoad: (...args: any[]) => void
): void;
import * as Zip from "./ZipCodeValidator";
if (needZipValidation) {
  require(["./ZipCodeValidator"], (ZipCodeValidator: typeof Zip) => {
    let validator = new ZipCodeValidator.ZipCodeValidator();
    if (validator.isAcceptable("...")) {
      /* ... */
    }
  });
}
```

##### 例子: System.js里的动态模块加载

```typescript
declare const System: any;
import { ZipCodeValidator as Zip } from "./ZipCodeValidator";
if (needZipValidation) {
  System.import("./ZipCodeValidator").then((ZipCodeValidator: typeof Zip) => {
    var x = new ZipCodeValidator();
    if (x.isAcceptable("...")) {
      /* ... */
    }
  });
}
```

### 使用其他 JavaScript 库

为了描述非用ts编写的库的形状，我们需要声明该库公开的 API。

我们将不定义实现的声明称为“环境(ambient)”。通常，它们定义在`.d.ts` 文件。如果您熟悉 c/c + + ，可以将它们看作`.h`档案。让我们来看几个例子。

#### 外部模块

在 Node.js 中，大多数任务都是通过加载一个或多个模块来完成的。我们可以定义每个模块。使用顶级导出声明的 .d.ts 文件，但更方便的做法是将它们写成一个更大的.d.ts 文件。为此，我们使用了类似于外部命名空间的构造，但是我们使用了 module 关键字和引用的模块名称，以后的导入可以使用这些名称。例如:

###### node.d.ts (simplified excerpt)

```typescript
declare module "url" {
  export interface Url {
    protocol?: string;
    hostname?: string;
    pathname?: string;
  }
  export function parse(
    urlStr: string,
    parseQueryString?,
    slashesDenoteHost?
  ): Url;
}
declare module "path" {
  export function normalize(p: string): string;
  export function join(...paths: any[]): string;
  export var sep: string;
}
```

现在我们可以`///<reference>` `node.d.ts`，然后使用 `import URL = require (“ URL”)`或 `import * as URL from “ url”`加载模块。

```typescript
/// <reference path="node.d.ts"/>
import * as URL from "url";
let myUrl = URL.parse("http://www.typescriptlang.org");
```

##### 外部模块简写

如果在使用新模块之前不想花时间写出声明，可以使用一个简短的声明快速开始。

###### declarations.d.ts

```typescript
declare module "hot-new-module";
```

从模块简写导入的所有模块都具有 any 类型。

```typescript
import x, { y } from "hot-new-module";
x(y);
```

##### 模块声明通配符

一些模块加载器(如 SystemJS 和 AMD)允许导入非 javascript 内容。它们通常使用前缀或后缀来表示特殊的加载语义。可以使用通配符模块声明来覆盖这些情况。

```typescript
declare module "*!text" {
  const content: string;
  export default content;
}
// Some do it the other way around.
declare module "json!*" {
  const value: any;
  export default value;
}
```

现在您可以导入匹配“ * ! text”或“ json! *”的内容。

```typescript
import fileContent from "./xyz.txt!text";
import data from "json!http://example.com/data.json";
console.log(data, fileContent);
```

#####  UMD 模块

一些库被设计用于许多模块加载器，或者不用模块加载(全局变量)。这些被称为 UMD 模块。可以通过导入或全局变量访问这些库。例如:

###### math-lib.d.ts

```typescript
export function isPrime(x: number): boolean;
export as namespace mathLib;
```

这个库可以用作模块中的导入:

```typescript
import { isPrime } from "math-lib";
isPrime(2);
mathLib.isPrime(2); // ERROR: can't use the global definition from inside a module:
```

它也可以作为全局变量使用，但只能在脚本内部使用。(脚本是没有导入或导出的文件。)

```typescript
mathLib.isPrime(2);
```

### 创建模块结构指导

#### 1.尽可能地在顶层导出

用户应该更容易地使用你模块导出的内容。 嵌套层次过多会变得难以处理，因此仔细考虑一下如何组织你的代码。

从你的模块中导出一个命名空间就是一个增加嵌套的例子。 虽然命名空间有时候有它们的用处，在使用模块的时候它们额外地增加了一层。 这对用户来说是很不便的并且通常是多余的。

导出类的静态方法也有同样的问题 - 这个类本身就增加了一层嵌套。 除非它能方便表述或便于清晰使用，否则请考虑直接导出一个辅助方法。

#### 2.如果仅导出单个 `class` 或 `function`，使用 `export default`

就像“在顶层上导出”帮助减少用户使用的难度，一个默认的导出也能起到这个效果。 如果一个模块就是为了导出特定的内容，那么你应该考虑使用一个默认导出。 这会令模块的导入和使用变得些许简单。 比如：

##### MyClass.ts

```typescript
export default class SomeType {
  constructor() { ... }
}
```

##### MyFunc.ts

```typescript
export default function getThing() {
  return "thing";
}
```

##### Consumer.ts

```typescript
import t from "./MyClass";
import f from "./MyFunc";
let x = new t();
console.log(f());
```

对用户来说这是最理想的。他们可以随意命名导入模块的类型（本例为`t`）并且不需要多余的时间来找到相关对象。

#### 3.如果要导出多个对象，请将它们全部放在顶级

##### MyThings.ts

```typescript
export class SomeType {
  /* ... */
}
export function someFunc() {
  /* ... */
}
```

相反，导入时：

#### 4.显式列出导入的名称

##### Consumer.ts

```typescript
import { SomeType, someFunc } from "./MyThings";
let x = new SomeType();
let y = someFunc();
```

#### 5.如果要导入大量内容，请使用命名空间导入模式

##### MyLargeModule.ts

```typescript
export class Dog { ... }
export class Cat { ... }
export class Tree { ... }
export class Flower { ... }
```

##### Consumer.ts

```typescript
import * as myLargeModule from "./MyLargeModule.ts";
let x = new myLargeModule.Dog();
```

### 使用再导出进行扩展

你可能经常需要去扩展一个模块的功能。 JS里常用的一个模式是JQuery那样去扩展原对象。 如我们之前提到的，模块不会像全局命名空间对象那样去 *合并*。 推荐的方案是 *不要*去改变原来的对象，而是导出一个新的实体来提供新的功能。

假设`Calculator.ts`模块里定义了一个简单的计算器实现。 这个模块同样提供了一个辅助函数来测试计算器的功能，通过传入一系列输入的字符串并在最后给出结果。

#### Calculator.ts

```typescript
export class Calculator {
  private current = 0;
  private memory = 0;
  private operator: string;
  protected processDigit(digit: string, currentValue: number) {
    if (digit >= "0" && digit <= "9") {
      return currentValue * 10 + (digit.charCodeAt(0) - "0".charCodeAt(0));
    }
  }
  protected processOperator(operator: string) {
    if (["+", "-", "*", "/"].indexOf(operator) >= 0) {
      return operator;
    }
  }
  protected evaluateOperator(
    operator: string,
    left: number,
    right: number
  ): number {
    switch (this.operator) {
      case "+":
        return left + right;
      case "-":
        return left - right;
      case "*":
        return left * right;
      case "/":
        return left / right;
    }
  }
  private evaluate() {
    if (this.operator) {
      this.memory = this.evaluateOperator(
        this.operator,
        this.memory,
        this.current
      );
    } else {
      this.memory = this.current;
    }
    this.current = 0;
  }
  public handleChar(char: string) {
    if (char === "=") {
      this.evaluate();
      return;
    } else {
      let value = this.processDigit(char, this.current);
      if (value !== undefined) {
        this.current = value;
        return;
      } else {
        let value = this.processOperator(char);
        if (value !== undefined) {
          this.evaluate();
          this.operator = value;
          return;
        }
      }
    }
    throw new Error(`Unsupported input: '${char}'`);
  }
  public getResult() {
    return this.memory;
  }
}
export function test(c: Calculator, input: string) {
  for (let i = 0; i < input.length; i++) {
    c.handleChar(input[i]);
  }
  console.log(`result of '${input}' is '${c.getResult()}'`);
}
```

下面使用导出的`test`函数来测试计算器。

#### TestCalculator.ts

```typescript
import { Calculator, test } from "./Calculator";
let c = new Calculator();
test(c, "1+2*33/11="); // prints 9
```

现在扩展它，添加支持输入其它进制（十进制以外），让我们来创建`ProgrammerCalculator.ts`。

#### ProgrammerCalculator.ts

```typescript
import { Calculator } from "./Calculator";
class ProgrammerCalculator extends Calculator {
  static digits = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  constructor(public base: number) {
    super();
    const maxBase = ProgrammerCalculator.digits.length;
    if (base <= 0 || base > maxBase) {
      throw new Error(`base has to be within 0 to ${maxBase} inclusive.`);
    }
  }
  protected processDigit(digit: string, currentValue: number) {
    if (ProgrammerCalculator.digits.indexOf(digit) >= 0) {
      return (
        currentValue * this.base + ProgrammerCalculator.digits.indexOf(digit)
      );
    }
  }
}
// Export the new extended calculator as Calculator
export { ProgrammerCalculator as Calculator };
// Also, export the helper function
export { test } from "./Calculator";
```

新的`ProgrammerCalculator`模块导出的API与原先的`Calculator`模块很相似，但却没有改变原模块里的对象。 下面是测试ProgrammerCalculator类的代码：

#### TestProgrammerCalculator.ts

```typescript
import { Calculator, test } from "./ProgrammerCalculator";
let c = new Calculator(2);
test(c, "001+010="); // prints 3
```

### 不要在模块中使用命名空间

当初次进入基于模块的开发模式时，可能总会控制不住要将导出包裹在一个命名空间里。 模块具有其自己的作用域，并且只有导出的声明才会在模块外部可见。 记住这点，命名空间在使用模块时几乎没什么价值。

在组织方面，命名空间对于在全局作用域内对逻辑上相关的对象和类型进行分组是很便利的。 例如，在C#里，你会从 `System.Collections`里找到所有集合的类型。 通过将类型有层次地组织在命名空间里，可以方便用户找到与使用那些类型。 然而，模块本身已经存在于文件系统之中，这是必须的。 我们必须通过路径和文件名找到它们，这已经提供了一种逻辑上的组织形式。 我们可以创建 `/collections/generic/`文件夹，把相应模块放在这里面。

命名空间对解决全局作用域里命名冲突来说是很重要的。 比如，你可以有一个 `My.Application.Customer.AddForm`和`My.Application.Order.AddForm` -- 两个类型的名字相同，但命名空间不同。 然而，这对于模块来说却不是一个问题。 在一个模块里，没有理由两个对象拥有同一个名字。 从模块的使用角度来说，使用者会挑出他们用来引用模块的名字，所以也没有理由发生重名的情况。

> 有关模块和命名空间的详细讨论，请参阅 [命名空间和模块](https://www.typescriptlang.org/docs/handbook/namespaces-and-modules.html)。

### 危险信号

以下均为模块结构上的危险信号。重新检查以确保你没有在对模块使用命名空间，如果这些适用于你的文件：

- 文件的顶层声明是`export namespace Foo { ... }` （删除`Foo`并把所有内容向上层移动一层）
- 多个文件的顶层具有同样的`export namespace Foo {` （不要以为这些会合并到一个`Foo`中！）

## 模块解析

> 本节假设您对模块有一些基本的了解。有关更多信息，请参阅模块文档。

模块解析是编译器用来确定导入指向的过程。考虑一个 import 语句，比如 import { a } from“ moduleA”; 为了检查 a 的任何用法，编译器需要准确地知道它代表什么，并且需要检查它的定义 moduleA。

这时，编译器会问“ moduleA 的形状是什么?”虽然这听起来很简单，但 moduleA 可以在您自己的.ts/.tsx文件中定义，或在一个你的代码所依赖的 .d.ts文件中定义。

首先，编译器将尝试定位表示导入模块的文件。为此，编译器遵循两种不同的策略之一: 经典策略或节点策略。这些策略告诉编译器在哪里寻找 moduleA。

如果这不起作用，而且如果模块名称是非相对的(在“ moduleA”的情况下是非相对的) ，那么编译器将尝试定位一个外部模块声明。接下来我们将讨论非相对导入。

最后，如果编译器不能解析模块，它将记录一个错误。在这种情况下，错误类似于 error TS2307: Can not find module‘ moduleA’。

### 相对与非相对模块导入

根据模块引用是相对的还是非相对的，对模块导入进行不同的解析。

相对导入是以/、 ./或. ./开头的导入。一些例子包括:

- `import Entry from "./components/Entry";`
- `import { DefaultHeaders } from "../constants/http";`
- `import "/mod";`

任何其他导入均被视为非相对导入，例如:

- `import * as $ from "jquery";`
- `import { Component } from "@angular/core";`

相对导入是相对于导入文件解析的，不能解析为外部模块声明。您应该为您自己的模块使用相对导入，这些模块保证在运行时维护它们的相对位置。

非相对导入可以相对于 baseUrl 解析，也可以通过路径映射解析，我们将在下面讨论。它们还可以解析为外部模块声明。在导入任何外部依赖项时使用非相对路径。

### 模块解析策略

有两种可能的模块解析策略: Node 和 Classic。您可以使用 -- moduleResolution 标志来指定模块解析策略。如果没有指定，则默认为 Node 针对 -- module commonjs，否则为 Classic (包括当 -- module 被设置为 amd、 system、 umd、 es2015、 esnext 等时)。

> 注意: 节点模块解析是 TypeScript 社区中最常用的方法，对于大多数项目都推荐使用。如果在输入和输出ts时遇到解决方案问题，请尝试设置 moduleResolution: “ node”，以查看它是否修复了问题。

#### Classic经典

这曾经是ts的默认解析策略，现在这种策略主要用于向下兼容。

相对导入将相对于导入文件进行解析。因此在源文件`/root/src/folder/A.ts`中的`import {b} from "./moduleB"`会导致下面的查找：

1. `/root/src/folder/moduleB.ts`
2. `/root/src/folder/moduleB.d.ts`

然而、针对非相对模块导入，编译器从包含导入文件的目录开始查找目录树，尝试定位一个匹配的目标文件。

例如：

在源文件`/root/src/folder/A.ts`中, `moduleB`的一个非相对导入，例如`import {b} from "moduleB"`,将会导致针对`"moduleB"`的如下的定位查找：

1.`/root/src/folder/moduleB.ts`

2.`/root/src/folder/moduleB.d.ts`

3.`/root/src/moduleB.ts`

4.`/root/src/moduleB.d.ts`

5.`/root/moduleB.ts`

6.`/root/moduleB.d.ts`

7.`/moduleB.ts`

8.`/moduleB.d.ts`

#### Node节点 

这个解析策略尝试模仿Node.js在运行时的模块解析机制。完整的Node.js解析算法在Node.js模块说明文档里有略述。

##### Node.js怎么解析模块

要理解Typescript遵循的步骤，阐明Node.js模块中的亮点是很重要的。传统上，Node.js的导入是通过调用一个名为require的函数被执行的。Node.js采取的行为是依赖require函数接收的是相对路径还是非相对路径而不同的。

相对路径是非常简单的。作为一个例子，让我们考虑一个文件：`/root/src/moduleA.js`,它包含导入`var x = require("./moduleB")`;Node.js按照下面的顺序解析这个导入:

1. 询问名为`/root/src/moduleB.js`的文件，如果它存在。
2. 询问文件夹`/root/src/moduleB`,如果它包含一个名为package.json的文件，它指定了"main"模块。在我们的例子里，如果Node.js发现文件`/root/src/moduleB/package.json`包含`{“main":"lib/mainModule.js"}`,Node.js将会指向`/root/src/moduleB/lib/mainModule.js`。
3. 询问文件夹`/root/src/moduleB`,如果它包含一个名为index.js的文件。这个文件隐式地被认为是那个文件夹的"main"模块。

你可以在node.js文档里阅读更多关于文件模块和文件夹模块的信息。

然而，一个非相对模块名的解析有所不同。Node将在一个名为node_modules的特殊文件夹里查找你的模块，一个node_modules文件夹可能是在和你当前文件相同的层级，或者在目录链的更高层。Node将遍历这个目录链，浏览每个node_modules直到它发现了你要加载的模块。

跟进上面的例子，考虑如果`/root/src/moduleA.js`使用非相对路径并且有个导入语句`var = require("moduleB");`。然后Node尝试解析`moduleB`，针对每个位置直到有一个起作用。

1. `/root/src/node_modules/moduleB.js`

2. `/root/src/node_modules/moduleB/package.json` (如果它指定了 `"main"` 属性)

3. `/root/src/node_modules/moduleB/index.js`

   

4. `/root/node_modules/moduleB.js`

5. `/root/node_modules/moduleB/package.json` (如果它指定了 `"main"` 属性)

6. `/root/node_modules/moduleB/index.js`

   

7. `/node_modules/moduleB.js`

8. `/node_modules/moduleB/package.json` (如果它指定了 `"main"` 属性)

9. `/node_modules/moduleB/index.js`

注意，Node.js 在步骤(4)和(7)中跳出了一个目录。

你可以在node.js文档里阅读关于从node_modules加载模块的更多过程。

##### TypeScript怎样解析模块

为了查找模块在编译时的目标文件，TypeScript将模仿Node.js运行时解析策略。为了完成这个目标，TypeScript将TypeScript源文件扩展名（.ts,tsx,和.d.ts）覆盖Node的解析逻辑。TypeScript也将在package.json里用一个名为”types“的字段去映射”main“的用途-编译器将使用它来查找”main“定义文件。

例如，在/root/src/moduleA.ts文件里一个像import {b} from "./moduleB"的导入语句，将导致为了搜索”./moduleB"尝试如下的搜索结果：

1. `/root/src/moduleB.ts`
2. `/root/src/moduleB.tsx`
3. `/root/src/moduleB.d.ts`
4. `/root/src/moduleB/package.json` (如果它指定了一个"types"` 属性)
5. `/root/src/moduleB/index.ts`
6. `/root/src/moduleB/index.tsx`
7. `/root/src/moduleB/index.d.ts`

回想node.js查找一个名为moduleB.js的文件，然后是一个适用的package.json,然后是一个index.js。

相似的，一个非相对导入将遵循Node.js解析逻辑，首先 查找一个文件，然后查找一个适用的文件夹。因此import {b} from “moduleB”在源文件/root/src/moduleA.ts中，将导致下面的搜索结果：

1. /root/src/node_modules/moduleB.ts
2. /root/src/node_modules/moduleB.tsx
3. /root/src/node_modules/moduleB.d.ts
4. /root/src/node_modules/moduleB/package.json(如果它指定“types”属性)
5. /root/src/node_modules/@types/moduleB.d.ts
6. /root/src/node_modules/moduleB/index.ts
7. /root/src/node_modules/moduleB/index.tsx
8. /root/src/node_modules/moduleB/index.d.ts



9. /root/node_modules/moduleB.ts
10. /root/node_modules/moduleB.tsx
11. /root/node_modules/moduleB.d.ts
12. /root/node_modules/moduleB/package.json(如果它指定“types”属性)
13. /root/node_modules/@types/moduleB.d.ts
14. /root/node_modules/moduleB/index.ts
15. /root/node_modules/moduleB/index.tsx
16. /root/node_modules/moduleB/index.d.ts



17. /node_modules/moduleB.ts
18. /node_modules/moduleB.tsx
19. /node_modules/moduleB.d.ts
20. /node_modules/moduleB/package.json(如果它指定“types”属性)
21. /node_modules/@types/moduleB.d.ts
22. /node_modules/moduleB/index.ts
23. /node_modules/moduleB/index.tsx
24. /node_modules/moduleB/index.d.ts

不要被这么多步骤吓住---TypeScript依然只在步骤（9）和步骤（17）中跳转目录两次。这实际上不比Node.js更复杂。

### 额外模块解析标识

项目原布局有时候和输出布局不匹配。通常一组构建步骤会导致最终输出。这些包括编译.ts文件成.js，并且从不同源地址拷贝依赖到一个单一输出地址。最终的结果是，运行时的模块可能与包含特们定义的源文件有不同的名称。或者最终输出的模块路径可能不匹配编译时的源文件路径。

TypeScript编译器有一组额外的标识，用于向编译器通报预期将发生在源上的生成最终输出的转换。

需要注意的是，编译器不会执行任何这些转换。它只是使用这些信息来指导将模块导入解析到其定义文件的过程。

#### Base URL基本网址

使用baseUrl是在使用AMD模块加载器的应用程序里一个通用的操作，在这些加载器里模块在运行时被“部署”到一个文件夹里。这些模块的源可以存在不同的文件夹里，但是一个构建脚本会把他们放到一起。

设置baseUrl通知编译器去哪里查找模块。所有带非相对名称的模块导入假定是相对baseUrl的。

baseUrl的值确定为下面之一：

* baseUrl命令行参数的值（如果给定路径是相对的，它是依据当前目录计算的）。
* 在‘tsconfig.json’文件中baseUrl属性的值（如果给定路径是相对的，它是依据‘tsconfig.json’的定位计算的）。

注意，相对模块导入不受设置baseUrl的影响。因为他们总是相对于他们的导入文件被解析。

你可以在RequireJS和SystemJS文档里找到更多关于baseUrl的文档。

#### 路径映射

有时候模块不会直接依据baseUrl定位。例如，一个“jquery”模块的导入将会在运行时被翻译成`“node_modules/jquery/dist/jquery.slim.min.js”`。加载器在运行时使用一个映射配置去映射模块名到文件。具体看RequireJs文档和SystemJS文档。

TypeScript编译器支持在tsconfig.json文件里使用“paths“属性这样的映射声明。这里有一个关于怎样指定jquery的”paths“属性的例子。

```json
{
    "compilerOptions": {
        "baseUrl": ".", // 如果paths被指定，这个必须被指定
        "path": {
            "jquery": ["node_modules/jquery/dist/jquery"] // 这个映射是相对baseUrl的
        }
    }
}
```

请注意“paths”相对于“baseUrl”被解析。例如，当设置“baseUrl”为另一个值而不是“."（tsconfig.json的目录）时，映射必须相应地被改变。假如，你在上面地例子中设置"baseUrl": "./src"，然后jquery将被映射到"../node_modules/jquery/dist/jquery"。

使用”paths“也允许更复杂的映射，包括多个后退地点。考虑一个项目配置，其中一个位置只有一些模块可用，其余模块在另一个位置。一个构建步骤将他们放在同一个地方。项目布局可能看上去像：

```typescript
projectRoot
├── folder1
│   ├── file1.ts (imports 'folder1/file2' and 'folder2/file3')
│   └── file2.ts
├── generated
│   ├── folder1
│   └── folder2
│       └── file3.ts
└── tsconfig.json
```

相应的tsconfig.json将会看上去像：

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "*": ["*", "generated/*"]
    }
  }
}
```

这告诉编译器任何与模式“*”（即所有值）匹配的模块导入，在两个位置进行查找：

1. "*":表示名字不发生改变，所以映射为<moduleName> => <baseUrl>/<moduleName>
2. "generated/*"表示模块名添加了“generated”前缀，所以映射为<moduleName> => <baseUrl>/generated/<moduleName>

按照这个逻辑，编译器将尝试像这样解析这两个导入：

import 'folder1/file2':

1. 模式‘*’被匹配并且通配符捕获到整个模块名称。
2. 尝试列表里的第一个替换：‘*’ -> `folder1/file2`
3. 替换的结果是非相对名 - 与baseUrl合并 -> `projectRoot/folder1/file2.ts`.
4. 文件存在，结束。

import 'folder2/file3':

1. 模式‘*’被匹配并且通配符捕捉到整个模块名
2. 尝试列表里的第一个替换：‘*’ -> `folder2/file3`
3. 替换的结果是非相对名 - 与baseUrl合并 -> `projectRoot/folder2/file3.ts`.
4. 文件不存在，移动到第二个替换。
5. 第二个替换'generated/*' -> `generated/folder2/file3`
6. 替换的结果是非相对名 - 与baseUrl合并 -> `projectRoot/generated/folder2/file3.ts`.
7. 文件存在，结束。

#### 利用`rootDirs`指定虚拟目录

有时候在编译时来自多目录的项目源全部组合在一起去生成一个单一的输出目录。这个可以被看到，以一组源目录创建一个“虚拟”目录的形式。

使用‘rootDirs’，可以告诉编译器生成这个虚拟目录的*roots* , 然后编译器可以在虚拟目录下解析相对模块导入，就好像他们被合并在了一起一样。

例如,考虑这个项目结构：

```typescript
src
 └── views
     └── view1.ts (imports './template1')
     └── view2.ts

 generated
 └── templates
         └── views
             └── template1.ts (imports './view2')

```

在src/views文件夹里的文件是针对一些ui控制器的用户代码。genetated/templates里的文件是ui模板，他绑定由作为构建的一部分的一个模板生成器自动生成的代码。一个构建步骤会拷贝/src/views和/generated/templates/views里的文件到输出的相同目录里。在运行时，一个视图可以假定他的模板和他在同一个目录下，因此应该使用"./template"的相对名称导入他。

为了向编译器指定这个关系，使用“rootDirs"。”rootDirs“指定了一个roots的列表，他的内容会在运行时合并。因此，针对这个例子，tscconfig.json文件应该看上去像：

```json
{
    "compilerOptions": {
        "rootDirs": ["src/views", "generated/templates/views"]
    }
}
```

每次编译器在rootDirs其中之一的一个子文件夹里看到一个相对模块导入，他将会尝试在rootDirs的每个条目里查找这个导入

`rootDirs`的灵活性不限于指定逻辑合并的物理源目录列表。所提供的数组可以包含任意数量的特定、任意目录名，不管他们存在与否。这允许编译器以类型安全的方式捕获复杂的捆绑和运行时特性，如条件包含和项目特定的加载器插件。

考虑一个国际化场景，其中构建工具通过插入一个特殊路径令牌(比如 `# { locale }`)自动生成特定于区域设置的包，作为相对模块路径的一部分，比如`./#{locale}/messages`。在这个假设的设置中，工具枚举了受支持的区域设置，将抽象的路径映射为./zh/messages、./de/messages等等。

假设每个模块导出字符串数组。例如`./zh/messages`可能包含：

```typescript
export default ["您好吗","很高兴认识你"];
```

通过利用 rootDirs，我们可以通知编译器此映射，从而允许它安全地解析`./#{locale}/messages`，即使目录永远不存在。例如，使用以下 tsconfig.json:

```json
{
  "compilerOptions": {
    "rootDirs": ["src/zh", "src/de", "src/#{locale}"]
  }
}
```

编译器现在可以将`import messages from './#{locale}/messages'`解析为`import messages from './zh/messages'`用做工具支持的目的，并允许在开发时不必了解区域信息。

#### 跟踪模块解析

如前所述，编译器在解析模块时可以访问当前文件夹之外的文件。在诊断为什么模块没有解析，或者解析为不正确的定义时，这可能很困难。使用 `-- traceResolution` 启用编译器模块解析跟踪提供了对模块解析过程中发生的事情的了解。

假设我们有一个使用`typescript`模块的示例应用程序。`App.ts` 有一个类似`import * as ts from "typescript"`的导入。

```typescript
│   tsconfig.json
├───node_modules
│   └───typescript
│       └───lib
│               typescript.d.ts
└───src
        app.ts
```

使用 -- traceResolution 调用编译器

```shell
tsc --traceResolution
```

输出的结果，例如:

```shell
======== Resolving module 'typescript' from 'src/app.ts'. ========
Module resolution kind is not specified, using 'NodeJs'.
Loading module 'typescript' from 'node_modules' folder.
File 'src/node_modules/typescript.ts' does not exist.
File 'src/node_modules/typescript.tsx' does not exist.
File 'src/node_modules/typescript.d.ts' does not exist.
File 'src/node_modules/typescript/package.json' does not exist.
File 'node_modules/typescript.ts' does not exist.
File 'node_modules/typescript.tsx' does not exist.
File 'node_modules/typescript.d.ts' does not exist.
Found 'package.json' at 'node_modules/typescript/package.json'.
'package.json' has 'types' field './lib/typescript.d.ts' that references 'node_modules/typescript/lib/typescript.d.ts'.
File 'node_modules/typescript/lib/typescript.d.ts' exist - use it as a module resolution result.
======== Module name 'typescript' was successfully resolved to 'node_modules/typescript/lib/typescript.d.ts'. ========
```

#####  需要注意的事情

* 导入的名称和位置

  ```typescript
  = = = = = = = 解析‘ src/app.ts’中的‘ typescript’模块
  ```

* 编译器遵循的策略

  ```typescript
  没有指定使用“ node.js”的模块解析类型。
  ```

* 从 npm 包导入类型

  ```typescript
  'package.json'有'types'字段'./lib/typescript.d.ts'，引用'node _ modules/typescript/lib/typescript.d.ts'。
  ```

* 最终结果

  ```typescript
  = = = = = = = = 模块名称'typescript'被成功地解析为'node _ modules/typescript/lib/typescript.d.ts'
  ```

#### 使用`--noResolve`

通常，编译器会在开始编译过程之前尝试解析所有模块导入。每次成功地将导入解析为一个文件时，该文件都会添加到编译器稍后将处理的一组文件中。

noResolve 编译器选项指示编译器不要将任何未在命令行上传递的文件“添加”到编译中。它仍将尝试将模块解析为文件，但如果未指定该文件，则不会包含该文件。

例如:

##### app.ts

```typescript
import * as A from "moduleA"; // OK, 'moduleA' passed on the command-line
import * as B from "moduleB"; // Error TS2307: Cannot find module 'moduleB'.
```

```shell
tsc app.ts moduleA.ts --noResolve
```

使用 `-- noResolve` 编译 `app.ts` 应该导致:

* 正确地找到`moduleA`，当它在命令行上传递时
* 找不到`moduleB` 的错误，因为它没有在命令行上被传递。

### 常见问题

#### 为什么排除列表中的模块仍然会被编译器拾取？

`tsconfig.json`  把一个文件夹变成一个“项目”。在不指定任何“ `exclude`”或“ `files`”条目的情况下，包含 `tsconfig.json` 及其所有子目录的文件夹中的所有文件都包含在您的编译中。如果你想要排除一些文件使用“ `exclude`”，如果你想要指定所有的文件而不是让编译器查找它们，使用“ `files`”。

这是 `tsconfig.json` 自动包含。这不会像上面讨论的那样嵌入模块解析。如果编译器将某个文件标识为模块导入的目标，则该文件将包含在编译中，而不管前面的步骤是否将其排除在外。

因此，要从编译中排除一个文件，您需要排除它和所有具有`import`或`/// <reference path="..." />`指令的文件。

## 命名空间

> 关于术语的注意: 需要注意的是，在TypeScript1.5中，术语已经改变。“内部模块”现在是“命名空间”。“外部模块”现在只是“模块”，以便与 ECMAScript 2015的术语保持一致(即模块 x {相当于现在首选的命名空间 x {)。

本文概述了使用 TypeScript 中的名称空间(以前称为“内部模块”)组织代码的各种方法。正如我们在关于术语的说明中所提到的，“内部模块”现在称为“名称空间”。此外，在声明内部模块时使用了 module 关键字的任何地方，都可以而且应该使用 namespace 关键字。这样可以通过使用类似的命名术语重载新用户来避免混淆他们。

### 第一步

让我们从这个程序开始，我们将在整个页面中使用它作为我们的例子。我们已经编写了一小组简单的字符串验证器，您可以编写它们来检查用户在网页表单上的输入，或者检查外部提供的数据文件的格式。

#### 单个文件中的验证器

```typescript
interface StringValidator {
  isAcceptable(s: string): boolean;
}
let lettersRegexp = /^[A-Za-z]+$/;
let numberRegexp = /^[0-9]+$/;
class LettersOnlyValidator implements StringValidator {
  isAcceptable(s: string) {
    return lettersRegexp.test(s);
  }
}
class ZipCodeValidator implements StringValidator {
  isAcceptable(s: string) {
    return s.length === 5 && numberRegexp.test(s);
  }
}
// Some samples to try
let strings = ["Hello", "98052", "101"];
// Validators to use
let validators: { [s: string]: StringValidator } = {};
validators["ZIP code"] = new ZipCodeValidator();
validators["Letters only"] = new LettersOnlyValidator();
// Show whether each string passed each validator
for (let s of strings) {
  for (let name in validators) {
    let isMatch = validators[name].isAcceptable(s);
    console.log(`'${s}' ${isMatch ? "matches" : "does not match"} '${name}'.`);
  }
}
```

###  命名空间

当我们添加更多的验证器时，我们希望有某种组织方案，这样我们就可以跟踪我们的类型，而不用担心与其他对象的命名冲突。与其将许多不同的名称放入全局命名空间，不如将对象封装到一个命名 空间中。

在本例中，我们将把所有与验证器相关的条目移动到名称空间 `Validation` 中。因为我们希望在命名空间之外可以看到这里的接口和类，所以我们在它们之前加上了`export`。相反，变量 lettersRegexp 和 numberRegexp 是实现细节，因此它们不会被导出，并且在名称空间之外的代码中不可见。在文件底部的测试代码中，我们现在需要限定在命名空间之外使用的类型的名称，例如 Validation。LettersOnlyValidator.

### 命名空间验证器

```typescript
namespace Validation {
  export interface StringValidator {
    isAcceptable(s: string): boolean;
  }
  const lettersRegexp = /^[A-Za-z]+$/;
  const numberRegexp = /^[0-9]+$/;
  export class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string) {
      return lettersRegexp.test(s);
    }
  }
  export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
      return s.length === 5 && numberRegexp.test(s);
    }
  }
}
// Some samples to try
let strings = ["Hello", "98052", "101"];
// Validators to use
let validators: { [s: string]: Validation.StringValidator } = {};
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();
// Show whether each string passed each validator
for (let s of strings) {
  for (let name in validators) {
    console.log(
      `"${s}" - ${
        validators[name].isAcceptable(s) ? "matches" : "does not match"
      } ${name}`
    );
  }
}
```

### 分离到多文件

随着应用程序的增长，我们希望将代码分割到多个文件中，以便更易于维护。

#### 多文件名称空间

在这里，我们将把 Validation 命名空间划分为许多文件。尽管这些文件是独立的，但它们可以对同一个命名空间做出贡献，并且可以被使用，就好像它们都在一个地方定义一样。因为文件之间存在依赖关系，所以我们将添加引用标记来告诉编译器文件之间的关系。除此之外，我们的测试代码没有变化。

##### Validation.ts

```typescript
namespace Validation {
  export interface StringValidator {
    isAcceptable(s: string): boolean;
  }
}
```

##### LettersOnlyValidator.ts

```typescript
/// <reference path="Validation.ts" />
namespace Validation {
  const lettersRegexp = /^[A-Za-z]+$/;
  export class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string) {
      return lettersRegexp.test(s);
    }
  }
}
```

##### ZipCodeValidator.ts

```typescript
/// <reference path="Validation.ts" />
namespace Validation {
  const numberRegexp = /^[0-9]+$/;
  export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
      return s.length === 5 && numberRegexp.test(s);
    }
  }
}
```

##### Test.ts

```typescript
/// <reference path="Validation.ts" />
/// <reference path="LettersOnlyValidator.ts" />
/// <reference path="ZipCodeValidator.ts" />

// Some samples to try
let strings = ["Hello", "98052", "101"];

// Validators to use
let validators: { [s: string]: Validation.StringValidator } = {};
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();

// Show whether each string passed each validator
for (let s of strings) {
  for (let name in validators) {
    console.log(
      `"${s}" - ${
        validators[name].isAcceptable(s) ? "matches" : "does not match"
      } ${name}`
    );
  }
}
```

一旦涉及到多个文件，我们需要确保加载所有已编译的代码。有两种方法可以做到这一点。

首先，我们可以使用`--outFile` 标志连接输出，将所有输入文件编译成一个 JavaScript 输出文件:

```shell
tsc --outFile sample.js Test.ts
```

编译器将根据文件中的引用标记自动对输出文件进行排序。您还可以单独指定每个文件:

```typescript
tsc --outFile sample.js Validation.ts LettersOnlyValidator.ts ZipCodeValidator.ts Test.ts
```

第二种方式，我们可以编译每一个文件（默认方式），那么每个源文件都会对应生成一个JavaScript文件。 然后，在页面上通过 `<script>`标签把所有生成的JavaScript文件按正确的顺序引进来，比如：

##### MyTestPage.html (excerpt)

```html
<script src="Validation.js" type="text/javascript" />
<script src="LettersOnlyValidator.js" type="text/javascript" />
<script src="ZipCodeValidator.js" type="text/javascript" />
<script src="Test.js" type="text/javascript" />
```

### 别名

另一种简化命名空间的方法是使用 `import q = x.y.z` 为常用对象创建更短的名称。不要与用于加载模块的 `import x = require (“ name”)`语法混淆，这种语法只是为指定的符号创建一个别名。您可以对任何类型的标识符使用这些类型的导入(通常称为别名) ，包括从模块导入创建的对象。

```typescript
namespace Shapes {
  export namespace Polygons {
    export class Triangle {}
    export class Square {}
  }
}
import polygons = Shapes.Polygons;
let sq = new polygons.Square(); // Same as 'new Shapes.Polygons.Square()'
```

请注意，我们没有使用 require 关键字，而是直接从要导入的符号的限定名中赋值。这类似于使用 var，但也适用于导入符号的类型和名称空间含义。重要的是，对于值，import 是一个与原始符号不同的引用，因此对有别名的 var 的更改不会反映在原始变量中。

### 使用其他 JavaScript 库

为了描述非用JavaScript编写的库的形状，我们需要声明该库公开的 API。由于大多数 JavaScript 库只公开少数顶级对象，因此命名空间是表示它们的好方法。

我们将不定义实现的声明称为“外部”。它们通常定义在`.d.ts`文件。如果您熟悉 c/c + + ，可以将它们看作.h文件。让我们来看几个例子。

#### 外部命名空间

流行的库 D3在一个名为 `d3`的全局对象中定义了它的功能。因为这个库是通过 `<script>` 标记加载的(而不是模块加载器) ，所以它的声明使用名称空间来定义它的形状。为了让 TypeScript 编译器看到这个形状，我们使用外部命名空间声明。例如，我们可以这样开始写:

##### D3.d.ts (simplified excerpt)

```typescript
declare namespace D3 {
  export interface Selectors {
    select: {
      (selector: string): Selection;
      (element: EventTarget): Selection;
    };
  }
  export interface Event {
    x: number;
    y: number;
  }
  export interface Base extends Selectors {
    event: Event;
  }
}
declare var d3: D3.Base;
```

## 命名空间和模块

本文概述了使用TypeScript中的模块和名称空间组织代码的各种方法。我们还将介绍一些关于如何使用命名空间和模块的高级主题，并解决在TypeScript中使用命名空间和模块时的一些常见缺陷。

有关 ES 模块的详细信息，请参阅模块文档。有关TypeScript命名空间的详细信息，请参阅命名空间文档。

注意: 在很老的 TypeScript 命名空间版本中，这些早期的 JavaScript 模块系统被称为“内部模块”。

### 使用模块

模块可以同时包含代码和声明。

模块还对模块加载程序(如 CommonJs/Require.js)或支持 ES 模块的运行时具有依赖性。模块为捆绑提供了更好的代码重用、更强的隔离和更好的工具支持。

值得注意的是，对于 Node.js 应用程序，模块是默认的，**我们推荐使用现代代码中的模块而不是名称空间**。

从 ECMAScript 2015开始，模块是语言的本机部分，应该得到所有兼容引擎实现的支持。因此，对于新的项目模块将是推荐的代码组织机制。

### 使用命名空间

命名空间是一种特定于TypeScript的代码组织方式。

命名空间只是全局命名空间中的 JavaScript 对象。这使得命名空间成为一个非常简单的构造。与模块不同，它们可以跨多个文件，并且可以使用 `--outFile` 连接。名称空间是在 Web 应用程序中构造代码的好方法，在 HTML 页面中将所有依赖项都包含为 `<script>` 标记。

就像所有的全局命名空间污染一样，很难识别组件依赖关系，特别是在大型应用程序中。

### 命名空间和模块的缺陷

在本节中，我们将描述使用名称空间和模块时的各种常见缺陷，以及如何避免它们。

#### `/// <reference>`-ing a module

一个常见的错误是尝试使用`/// <reference ... />` 语法来引用模块文件，而不是使用`import`语句。为了理解这个区别，我们首先需要理解编译器怎样根据导入路径（例如 `import x from "...";`, `import x = require("...");`, 等等的`...`。）定位一个模块的类型信息。

编译器将选择合适的路径尝试找到`.ts`，`.tsx`，然后是`.d.ts`。如果找不到指定的文件，编译器将查找外部模块声明。回想一下，这些需要在`.d.ts`文件被声明。

- `myModules.d.ts`

  ```typescript
  // In a .d.ts file or .ts file that is not a module:
  declare module "SomeModule" {
  export function fn(): string;
  }
  ```

- `myOtherModule.ts`

  我的另一个模型

  ```typescript
  /// <reference path="myModules.d.ts" />
  import * as m from "SomeModule";
  ```

这里的 reference 标记允许我们定位包含环境模块声明的声明文件。这就是几个TypeScript样本所使用的 node.d.ts 文件被使用的方式。

#### 不必要的命名空间

如果你要把一个程序从命名空间转换成模块，很容易就会得到这样一个文件:

- `shapes.ts`

  ```typescript
  export namespace Shapes {
      export class Triangle {
        /* ... */
      }
      export class Square {
        /* ... */
      }
  }
  ```

顶层模块“`Shapes`”在这里毫无理由地包装`Triangle`和`Square`。这让模块的使用者感到困惑和恼火:

- `shapeConsumer.ts`

  ```typescript
  import * as shapes from "./shapes";
  let t = new shapes.Shapes.Triangle(); // shapes.Shapes?
  ```

TypeScript中模块的一个关键特性是，两个不同的模块永远不会将名称贡献给同一个范围。因为模块的使用者决定分配它的名称，所以不需要主动将导出的符号包装在命名空间中。

为了重申为什么不应该尝试对模块内容命名，命名空间的一般思想是提供结构的逻辑分组，并防止名称冲突。因为模块文件本身已经是一个逻辑分组，其顶级名称由导入它的代码定义，所以不必为导出的对象使用额外的模块层。

下面是一个修改过的例子:

- `shapes.ts`

  ```typescript
  export class Triangle {
  /* ... */
  }
  export class Square {
  /* ... */
  }
  ```

- `shapeConsumer.ts

  ```typescript
  import * as shapes from "./shapes";
  let t = new shapes.Triangle();
  ```

### 模块的权衡

正如 JS 文件和模块之间有一个一对一对应，TypeScript 在模块源文件和它们生成的 JS 文件之间有一个一对一对应。这样做的一个后果是，不可能根据目标模块系统连接多个模块源文件。例如，你不能在目标为 commonjs 或 umd 时使用 outFile 选项，但是在 TypeScript 1.8或更高版本中，可以在目标为 amd 或system时使用 outFile。

## 符号

从 ECMAScript 2015开始，symbol 是一种基本的数据类型，就像 number 和 string 一样。

通过调用 Symbol 构造函数创建Symbol值。

```typescript
let sym1 = Symbol();
let sym2 = Symbol("key"); // optional string key
```

符号是不可变的，而且是独一无二的。

```typescript
let sym2 = Symbol("key");
let sym3 = Symbol("key");
sym2 === sym3; // false, symbols are unique
```

就像字符串一样，符号也可以用作对象属性的键。

```typescript
const sym = Symbol();
let obj = {
  [sym]: "value",
};
console.log(obj[sym]); // "value"
```

还可以将符号与计算属性声明结合起来，以声明对象属性和类成员。

```typescript
const getClassNameSymbol = Symbol();
class C {
  [getClassNameSymbol]() {
    return "C";
  }
}
let c = new C();
let className = c[getClassNameSymbol](); // "C"
```

### 著名的符号

除了用户自定义的符号，还有一些众所周知的内置符号。内置符号用于表示内部语言行为。

以下是一些著名的符号:

#### `Symbol.hasInstance`

确定构造函数对象是否将对象识别为构造函数的实例之一的方法。由 instanceof 运算符的语义调用。

#### `Symbol.isConcatSpreadable`

一个布尔值，指示对象应该通过 Array.prototype.concat 被展平为其数组元素。

#### `Symbol.iterator`

返回对象的默认迭代器的方法。由 for-of 语句的语义调用。

#### `Symbol.match`

匹配正则表达式与字符串的正则表达式方法，由 String.prototype.match 方法调用。

#### `Symbol.replace`

替换字符串中匹配子字符串的正则表达式方法。由 String.prototype.replace 方法调用。

#### `Symbol.search`

返回与正则表达式匹配的字符串中的索引的正则表达式方法。由 String.prototype.search 方法调用。

#### `Symbol.species`

函数值属性，是用于创建派生对象的构造函数。

#### `Symbol.split`

在与正则表达式匹配的索引处拆分字符串的正则表达式方法。由 String.prototype.split 方法调用。

#### `Symbol.toPrimitive`

一种将对象转换为相应的基元值的方法。由 ToPrimitive 抽象操作调用。

#### `Symbol.toStringTag`

用于创建对象的默认字符串说明的 String 值。由内置方法 Object.prototype.toString 调用。

#### `Symbol.unscopables`

一个对象，其自己的属性名是从关联对象的“ with”环境绑定中排除的属性名。

## 三斜杠指令

三重斜杠指令是包含单个 XML 标记的单行注释。注释的内容用作编译器指令。

三重斜杠指令只在其包含文件的顶部有效。三重斜杠指令前面只能有单行或多行注释，包括其他三重斜杠指令。如果它们出现在语句或声明之后，它们将被视为常规的单行注释，并且没有特殊含义。

### `/// <reference path="..." />`

`/// <reference path="..." />`指令是这个组里最常用的指令。它作为文件之间的依赖的声明服务。

三斜杠指令指导编译器在编译过程中包含额外的文件。

在使用 -- out 或 -- outFile 时，它们还充当对输出进行排序的方法。在预处理通过之后，文件按照与输入相同的顺序生成到输出文件位置。

### 预处理输入文件

编译器对输入文件执行预处理，以解析所有的三重斜杠引用指令。在此过程中，将向编译中添加其他文件。

这个过程从一组根文件开始; 这些是在命令行或 tsconfig.json 文件中的“ files”列表中指定的文件名。这些根文件按照指定的相同顺序进行预处理。在将文件添加到列表之前，将处理其中的所有三重斜杠引用，并包括它们的目标。按照在文件中看到的顺序，以深度优先的方式解析三重斜杠引用。

如果使用相对路径，则相对于包含文件解析三斜杠引用路径。

### Errors错误

引用不存在的文件是错误的。文件对自身有三斜杠引用是错误的。

### 使用`--noResolve`

如果指定了编译器标志 -- noResolve，则会忽略三斜杠引用; 它们既不会导致添加新文件，也不会更改所提供文件的顺序。

### `/// <reference types="..." />`

类似于`/// <reference path="..." />`指令，作为依赖的声明，`/// <reference types="..." />` 指令声明对包的依赖。

解析这些包名称的过程类似于解析 import 语句中的模块名称的过程。将三斜杠引用类型指令看作是声明包的导入是一种简单的方法。

例如，在声明文件中包含`//< reference types = " node"/>` 声明该文件使用`@types/node/index.d.ts` 中声明的名称; 因此，该包需要与声明文件一起包含在编译中。

只有在手动创建 d.ts 文件时才使用这些指令。

对于在编译期间生成的声明文件，编译器会自动为您添加`/// <reference types="..." />` ; 当且仅当生成的文件使用来自被引用包的任何声明时，才会在生成的声明文件中添加 `/// <reference types="..." />`。

若要在`.ts`文件里声明一个对`@types`包的依赖，使用`--types`命令行选项或在`tsconfig.json`里指定。 查看 [在`tsconfig.json`里使用`@types`，`typeRoots`和`types`](https://www.tslang.cn/docs/handbook/tsconfig-json.html#types-typeroots-and-types)了解详情。	

### `/// <reference lib="..." />`

此指令允许文件显式包含现有的内置 lib 文件。

内置的 lib 文件以与 tsconfig.json 中的“ lib”编译器选项相同的方式被引用(例如，使用 lib = “ es2015”而不是 lib = “ lib.es2015.d.ts”等)。

对于依赖内置类型的声明文件作者，如 DOM api 或内置 JS 运行时构造函数(如 Symbol 或 Iterable) ，建议使用 triple-slash-reference lib 指令。以前这些.d.ts 文件必须添加此类类型的转发/重复声明。

例如，将`/// <reference lib="es2017.string" />` 添加到编译中的某个文件等价于使用 `--lib es2017.string` 进行编译。

```typescript
/// <reference lib="es2017.string" />
"foo".padStart(4);
```

### `/// <reference no-default-lib="true"/>`

此指令将文件标记为默认库。您将在 lib.d.ts 的顶部看到这个注释及其不同的变体。

该指令指示编译器不要在编译中包含默认库(即 lib.d.ts)。这里的影响类似于在命令行上传递 -- noLib。

还要注意，当传递了`--skipDefaultLibCheck`时，编译器只会忽略检查带有`/// <reference no-default-lib="true"/>`的文件。

### `/// <amd-module />`

默认情况下，AMD 模块是匿名生成的。当使用其他工具来处理结果模块时，这可能会导致问题，比如捆绑器(例如 r.js)。

`Amd-module` 指令允许向编译器传递一个可选的模块名称:

##### amdModule.ts

```typescript
///<amd-module name="NamedModule"/>
export class C {}
```

将导致将名称 NamedModule 赋值给模块，作为调用 AMD define 的一部分:

##### amdModule.js

```js
define("NamedModule", ["require", "exports"], function (require, exports) {
  var C = (function () {
    function C() {}
    return C;
  })();
  exports.C = C;
});
```

### `/// <amd-dependency />`

> 注意: 此指令已被弃用。请使用`import "moduleName";`语句代替。

`//< amd-dependency path = " x"/>` 通知编译器在结果模块的 require 调用中需要注入一个非 ts 模块依赖项。

`Amd-dependency` 指令还可以有一个可选的 name 属性; 这允许为 amd-dependency 传递一个可选的名称:

```typescript
/// <amd-dependency path="legacy/moduleA" name="moduleA"/>
declare var moduleA: MyType;
moduleA.callStuff();
```

生成的 JS 代码:

```js
define(["require", "exports", "legacy/moduleA"], function (
  require,
  exports,
  moduleA
) {
  moduleA.callStuff();
});
```

## 类型兼容性

TypeScript中的类型兼容性基于结构子类型。结构类型是一种仅基于成员关联类型的方法。这与名义类型形成对比。考虑下面的代码:

```typescript
interface Pet {
  name: string;
}
class Dog {
  name: string;
}
let pet: Pet;
// OK, because of structural typing
pet = new Dog();
```

在名义上类型化的语言(如 c # 或 Java)中，等价的代码将是一个错误，因为 Dog 类没有将自己显式地描述为 Pet 接口的一个实现者。

TypeScript的结构类型系统是基于 JavaScript 代码的典型编写方式设计的。因为 JavaScript 广泛使用匿名对象，比如函数表达式和对象文本，所以用结构类型系统而不是名义类型系统来表示 JavaScript 库中的关系要自然得多。

### 关于可靠性的注意事项

TypeScript的类型系统允许在编译时无法知道的某些操作是安全的。当一个类型系统具有这个属性时，就说它不“健全”。允许不健全行为的地方已经被仔细考虑过了，在本文中我们将解释这些发生的地方和背后的激励场景。

####  开始

TypeScript的结构类型系统的基本规则是，如果 y 和 x 有至少相同的成员，那么 x 和 y 是兼容的。例如：考虑下面的融合名为Pet的接口代码，它有一个name属性。

```typescript
interface Pet {
  name: string;
}
let pet: Pet;
// dog's inferred type is { name: string; owner: string; }
let dog = { name: "Lassie", owner: "Rudd Weatherwax" };
pet = dog;
```

为了检查 dog 是否可以被分配给 pet，编译器检查 pet 的每个属性以在 dog 中找到相应的兼容属性。在这种情况下，dog 必须有一个名为 name 的成员，该成员是一个字符串。确实如此，所以赋值是允许的。

在检查函数调用参数时也使用了同样的赋值规则:

```typescript
interface Pet {
  name: string;
}
let dog = { name: "Lassie", owner: "Rudd Weatherwax" };
function greet(pet: Pet) {
  console.log("Hello, " + pet.name);
}
greet(dog); // OK
```

注意，dog 有一个额外的 owner 属性，但是这不会产生错误。在检查兼容性时，只考虑目标类型的成员(本例中为 Pet)。

这个比较过程递归地进行，探索每个成员和子成员的类型。

####  比较两个函数

虽然比较基本类型和对象类型相对比较简单，但涉及到哪些类型的函数应该被认为是兼容的问题。让我们从两个函数的基本例子开始，这两个函数只有参数列表不同:

```typescript
let x = (a: number) => 0;
let y = (b: number, s: string) => 0;
y = x; // OK
x = y; // Error
```

为了检查 x 是否可以赋值给 y，我们首先看一下参数列表。X 中的每个参数必须在 y 中有一个相应的参数，并且具有兼容的类型。注意，不考虑参数的名称，只考虑它们的类型。在这种情况下，x 的每个参数在 y 中都有一个相应的兼容参数，因此允许赋值。

第二个赋值是一个错误，因为 y 有一个必需的第二个参数，而 x 没有，所以不允许赋值。

你可能想知道为什么我们允许像示例 y = x 中那样‘丢弃’参数。允许这种赋值的原因是，在 JavaScript 中忽略额外的函数参数实际上是相当普遍的。例如，Array # foreach 为回调函数提供三个参数: 数组元素、其索引和包含数组。然而，提供一个只使用第一个参数的回调是非常有用的:

```typescript
let items = [1, 2, 3];
// Don't force these extra parameters
items.forEach((item, index, array) => console.log(item));
// Should be OK!
items.forEach((item) => console.log(item));
```

现在让我们来看看返回类型是如何处理的，使用两个只有返回类型不同的函数:

```typescript
let x = () => ({ name: "Alice" });
let y = () => ({ name: "Alice", location: "Seattle" });
x = y; // OK
y = x; // Error, because x() lacks a location property
```

类型系统强制源函数的返回类型为目标类型返回类型的子类型。

### 函数参数双向协变

在比较函数参数类型时，如果源参数可以分配给目标参数，或者反之亦然，则分配成功。这是不合理的，因为调用方可能最终得到一个接受更专门化类型的函数，但调用专门化类型较少的函数。实际上，这种类型的错误是很少见的，并且允许使用许多常见的 JavaScript 模式。一个简单的例子:

```typescript
enum EventType {
  Mouse,
  Keyboard,
}
interface Event {
  timestamp: number;
}
interface MyMouseEvent extends Event {
  x: number;
  y: number;
}
interface MyKeyEvent extends Event {
  keyCode: number;
}
function listenEvent(eventType: EventType, handler: (n: Event) => void) {
  /* ... */
}
// Unsound, but useful and common
listenEvent(EventType.Mouse, (e: MyMouseEvent) => console.log(e.x + "," + e.y));
// Undesirable alternatives in presence of soundness
listenEvent(EventType.Mouse, (e: Event) =>
  console.log((e as MyMouseEvent).x + "," + (e as MyMouseEvent).y)
);
listenEvent(EventType.Mouse, ((e: MyMouseEvent) =>
  console.log(e.x + "," + e.y)) as (e: Event) => void);
// Still disallowed (clear error). Type safety enforced for wholly incompatible types
listenEvent(EventType.Mouse, (e: number) => console.log(e));
```

当这种情况通过编译器标志 strictFunctionTypes 发生时，可以让 TypeScript 引发错误。

### 可选参数和剩余参数

在比较函数兼容性时，可选参数和所需参数是可互换的。源类型的额外可选参数不是错误，源类型中没有对应参数的目标类型的可选参数不是错误。

当一个函数有一个 rest 参数时，它就被当作是一系列可选参数。

从类型系统的角度来看，这是不合理的，但是从运行时的角度来看，可选参数的概念通常不能很好地执行，因为在该位置传递未定义的参数对于大多数函数是等效的。

激励的例子是一个函数的常见模式，它接受一个回调函数，然后用一些可预测的参数(对程序员来说)调用它，但是对于类型系统来说参数的数量是未知的:

```typescript
function invokeLater(args: any[], callback: (...args: any[]) => void) {
  /* ... Invoke callback with 'args' ... */
}
// Unsound - invokeLater "might" provide any number of arguments
invokeLater([1, 2], (x, y) => console.log(x + ", " + y));
// Confusing (x and y are actually required) and undiscoverable
invokeLater([1, 2], (x?, y?) => console.log(x + ", " + y));
```

### 带有重载的函数

当函数有重载时，源类型中的每个重载都必须通过目标类型上的兼容签名进行匹配。这确保了在与源函数相同的所有情况下都可以调用目标函数。

### 枚举

枚举与数字兼容，数字与枚举兼容。不同枚举类型的枚举值被认为是不兼容的。比如说,

```typescript
enum Status {
  Ready,
  Waiting,
}
enum Color {
  Red,
  Blue,
  Green,
}
let status = Status.Ready;
status = Color.Green; // Error
```

### 类

类的工作方式与对象文本类型和接口类似，但有一个例外: 它们同时具有静态类型和实例类型。比较类类型的两个对象时，只比较实例的成员。静态成员和构造函数不影响兼容性。

```typescript
class Animal {
  feet: number;
  constructor(name: string, numFeet: number) {}
}
class Size {
  feet: number;
  constructor(numFeet: number) {}
}
let a: Animal;
let s: Size;
a = s; // OK
s = a; // OK
```

### 类中的私有成员和受保护成员

类中的私有成员和受保护成员影响其兼容性。当检查类的实例是否兼容时，如果目标类型包含私有成员，则源类型还必须包含来自同一类的私有成员。同样，这也适用于具有受保护成员的实例。这允许赋值与其超类兼容，但不允许赋值与来自不同继承层次结构的类兼容，否则它们具有相同的形状。

### 泛型

由于 TypeScript 是结构类型系统，类型参数只在作为成员类型的一部分使用时才会影响结果类型。比如说,

```typescript
interface Empty<T> {}
let x: Empty<number>;
let y: Empty<string>;
x = y; // OK, because y matches structure of x
```

在上面的例子中，x 和 y 是兼容的，因为它们的结构不使用类型参数进行微分。通过添加一个成员到 Empty < t > 来改变这个例子，可以看到这是如何工作的:

```typescript
interface NotEmpty<T> {
  data: T;
}
let x: NotEmpty<number>;
let y: NotEmpty<string>;
x = y; // Error, because x and y are not compatible
```

通过这种方式，具有指定的类型参数的泛型类型与非泛型类型类似。

对于没有指定其类型参数的泛型类型，可以通过在所有未指定的类型参数上指定`any`来检查兼容性。然后检查结果类型的兼容性，就像在非泛型情况下一样。

比如说,

```typescript
let identity = function <T>(x: T): T {
  // ...
};
let reverse = function <U>(y: U): U {
  // ...
};
identity = reverse; // OK, because (x: any) => any matches (y: any) => any
```

###  高级主题

#### 子类型与赋值

到目前为止，我们使用了“ compatible”，这不是语言规范中定义的术语。在 TypeScript 中，有两种兼容性: 子类型和赋值。这些不同之处仅在于，赋值扩展了规则的子类型兼容性，允许赋值与任意子类型之间以及赋值与相应数值与枚举之间的相互作用。

语言中不同的地方使用两种兼容机制中的一种，这取决于具体情况。出于实用目的，类型兼容性取决于赋值兼容性，即使在 implements 和 extends 子句的情况下也是如此。

#### `Any`,`unknown`,`object`,`void`,`undefined`,`null`, 和`never`可复制型

下列表格概括了一些抽象类型之间的可赋值性。行表示每一个赋值给谁。列表示什么可赋值给他们。 ”✓”指示合并，仅仅当 [`--strictNullChecks`](https://www.typescriptlang.org/tsconfig#strictNullChecks)关闭的时候它是适配的。

|             |         |        |       |           |       |       |      |
| :---------: | :-----: | :----: | :---: | :-------: | :---: | :---: | ---- |
|     any     | unknown | object | void  | undefined | null  | never |      |
|    any →    |         | **✓**  | **✓** |   **✓**   | **✓** | **✓** | ✕    |
|  unknown →  |  **✓**  |        |   ✕   |     ✕     |   ✕   |   ✕   | ✕    |
|  object →   |  **✓**  | **✓**  |       |     ✕     |   ✕   |   ✕   | ✕    |
|   void →    |  **✓**  | **✓**  |   ✕   |           |   ✕   |   ✕   | ✕    |
| undefined → |  **✓**  | **✓**  |   ✓   |   **✓**   |       |   ✓   | ✕    |
|   null →    |  **✓**  | **✓**  |   ✓   |     ✓     |   ✓   |       | ✕    |
|   never →   |  **✓**  | **✓**  | **✓** |   **✓**   | **✓** | **✓** |      |

重申基本类型：

* 任何东西都可以分配给它自己。
* `any`和`unknown`都是相同的，就什么是可赋值给他们。不同的是，`unknown`是不可以赋值给除`any`之外的任何类型。
* unknown和never就像是对方的倒置。任何东西都可以赋值给unknown，never可以赋值给任何类型。没有任何类型是不可以赋值给never的，unknown是不可以赋值给除any之外的任何类型的。
* void不可以赋值给任何类型，并且不可以被任何类型赋值，但有以下例外：any，unknown，never，undefined，和null（如果--strictNullChecks关闭，请参见表格了解详情）。
* 当--strictNullChecks关闭，null和undefined和never相似：可以赋值给大多数类型，大多数类型不可以赋值给他们。他们可以赋值给彼此。
* 当--strictNullChecks打开，null和undefined表现得像void：不会赋值给任何类型，不会从任何类型赋值，除了any，unknown，never，和void（undefined总是可以赋值给void）。

## 类型推断

在 TypeScript 中，有几个地方在没有显式类型注释时使用类型推断提供类型信息。例如，在这段代码中

```typescript
let x = 3;
   //let x: number
```

X 变量的类型被推断为 number。这种推断发生在初始化变量和成员、设置参数默认值和确定函数返回类型时。

在大多数情况下，类型推断是直接的。在接下来的部分中，我们将探究类型推断方式中的一些细微差别。

###  最佳通用类型

当由多个表达式进行类型推断时，这些表达式的类型用于计算“最佳公共类型”。比如说,

```typescript
let x = [0, 1, null];
   //let x: (number | null)[]
```

要在上面的例子中推断 x 的类型，我们必须考虑每个数组元素的类型。对于数组的类型，我们有两个选择: number 和 null。最佳通用类型算法考虑每个候选类型，并选择与所有其他候选类型兼容的类型。

因为必须从提供的候选类型中选择最佳公共类型，所以在某些情况下，类型共享一个公共结构，但没有一个类型是所有候选类型的超类型。例如:

```typescript
let zoo = [new Rhino(), new Elephant(), new Snake()];
    //let zoo: (Rhino | Elephant | Snake)[]
```

理想情况下，我们可能希望 zoo 被推断为 Animal [] ，但是因为数组中没有严格属于 Animal 类型的对象，所以我们不会推断数组元素的类型。为了纠正这个错误，当没有一个类型是所有其他候选类型的超类型时，显式地提供类型:

```typescript
let zoo: Animal[] = [new Rhino(), new Elephant(), new Snake()];
    //let zoo: Animal[]
```

如果没有找到最佳公共类型，则结果推断为联合数组类型(Rhino | Elephant | Snake)[]。

### 上下文类型

类型推断在TypeScript中的某些情况下也适用于“其他方向”。这就是所谓的“上下文类型”。当表达式的类型由其位置隐含时，就会发生上下文类型。例如:

```typescript
window.onmousedown = function (mouseEvent) {
  console.log(mouseEvent.button); //<- OK
  console.log(mouseEvent.kangaroo); //<- Error!
};
```

这里，TypeScript 类型检查器使用 Window.onmousedown 函数的类型来推断赋值右侧的函数表达式的类型。这样做时，它能够推断 mouseEvent 参数的类型，该参数确实包含一个button属性，但不包含kangaroo属性。

TypeScript很聪明，能够推断其他上下文中的类型:

```typescript
window.onscroll = function (uiEvent) {
  console.log(uiEvent.button); //<- Error!
};
```

基于上面的函数被赋值给 `Window.onscroll` 这一事实，TypeScript知道 uilevent 是一个 uilevent，而不是像前面的示例那样的 MouseEvent。对象不包含button属性，因此 TypeScript 将抛出一个错误。

如果这个函数不在上下文类型的位置，函数的参数将隐式地具有any类型，并且不会发出任何错误(除非您使用 -- noImplicitAny 选项) :

```typescript
const handler = function (uiEvent) {
  console.log(uiEvent.button); //<- OK
};
```

我们也可以显式地为函数的参数提供类型信息，以覆盖任何上下文类型:

```typescript
window.onscroll = function (uiEvent: any) {
  console.log(uiEvent.button); //<- Now, no error is given
};
```

但是，此代码将记录undefined的内容，因为 uiEvent 没有名为 button 的属性。

上下文类型在许多情况下都适用。常见的情况包括函数调用的参数、赋值的右边、类型断言、对象和数组文字的成员以及返回语句。上下文类型还充当最佳通用类型中的候选类型。例如:

```typescript
function createZoo(): Animal[] {
  return [new Rhino(), new Elephant(), new Snake()];
}
```

在本例中，最佳通用类型有一组四个候选类型: Animal、 Rhino、 Elephant 和 Snake。其中，动物可以选择最好的通用类型算法。

## 变量声明

let 和 const 是 JavaScript 中变量声明的两个相对较新的概念。正如我们前面提到的，let 在某些方面类似于 var，但是允许用户避免一些用户在 JavaScript 中遇到的常见“陷阱”。

`const` 是`let`的扩展，它可以防止对变量的重新赋值。

由于 TypeScript 是 JavaScript 的一个扩展，这种语言自然而然地支持 let 和 const。在这里，我们将详细说明这些新的声明，以及为什么它们比 var 更可取。

如果你已经随手使用过 JavaScript，下一节可能是一个刷新记忆的好方法。如果您非常熟悉 JavaScript 中 var 声明的所有怪异之处，那么您可能会发现跳过这些内容会更容易。

### `var`声明

在 JavaScript 中声明一个变量通常是通过 var 关键字来完成的。

```typescript
var a = 10;
```

正如您可能已经知道的那样，我们刚刚声明了一个名为 a 的变量，其值为10。

我们也可以在函数中声明一个变量:

```typescript
function f() {
  var message = "Hello, world!";
  return message;
}
```

我们也可以在其他函数中访问这些变量:

```typescript
function f() {
  var a = 10;
  return function g() {
    var b = a + 1;
    return b;
  };
}
var g = f();
g(); // returns '11'
```

在上面的示例中，g 捕获了在 f 中声明的变量 a。在 g 被调用的任何一点上，a 的值都会和 f 中的 a 的值绑定在一起。即使 g 被调用了，它也能够访问和修改 a。

```typescript
function f() {
  var a = 1;
  a = 2;
  var b = g();
  a = 3;
  return b;
  function g() {
    return a;
  }
}
f(); // returns '2'
```

### 作用域规则

对于其他语言，var 声明有一些奇怪的作用域规则:

```typescript
function f(shouldInitialize: boolean) {
  if (shouldInitialize) {
    var x = 10;
  }
  return x;
}
f(true); // returns '10'
f(false); // returns 'undefined'
```

有些读者可能会对这个例子反复思考。变量 x 是在 if 块内声明的，但是我们能够从该块外部访问它。这是因为 var 声明可以在它们的包含函数、模块、名称空间或全局作用域中的任何地方访问——这些我们将在后面介绍——不管包含的块是什么。有些人称之为变量范围或函数范围。参数也是函数范围的。

这些作用域规则可能导致几种类型的错误。他们加剧的一个问题是，多次声明同一个变量并不是一个错误:

```typescript
function sumMatrix(matrix: number[][]) {
  var sum = 0;
  for (var i = 0; i < matrix.length; i++) {
    var currentRow = matrix[i];
    for (var i = 0; i < currentRow.length; i++) {
      sum += currentRow[i];
    }
  }
  return sum;
}
```

对于一些有经验的 JavaScript 开发人员来说，可能很容易识别出来，但是内部 for-loop 会意外地覆盖变量 i，因为我引用的是同一个函数范围的变量。正如经验丰富的开发人员现在所知道的，类似的错误通过了代码审查，并可能成为无穷无尽的挫折源。

###  捕获变量的怪癖

快速猜一下下面这个片段的输出是什么:

```typescript
for (var i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100 * i);
}
```

对于那些不熟悉 setTimeout 的用户，它会尝试在一定的毫秒之后执行一个函数(尽管等待其他任何东西停止运行)。

准备好了吗? 来看看:

```typescript
10
10
10
10
10
10
10
10
10
10
```

许多 JavaScript 开发人员都非常熟悉这种行为，但是如果你感到惊讶的话，你肯定不是唯一的一个。大多数人希望输出是

```typescript
0
1
2
3
4
5
6
7
8
9
```

还记得我们前面提到的变量捕获吗？我们传递给 setTimeout 的每个函数表达式实际上都从相同的作用域引用相同的 i。

让我们花一分钟考虑一下这意味着什么。setTimeout 将在某个毫秒数之后运行一个函数，但仅在 for 循环停止执行之后; 当 for 循环停止执行时，i 的值为10。所以每次调用给定的函数，它都会打印出10！

一个常见的方法是使用 IIFE ——即时调用函数表达式——在每次迭代中捕获 i:

```typescript
for (var i = 0; i < 10; i++) {
  // capture the current state of 'i'
  // by invoking a function with its current value
  (function (i) {
    setTimeout(function () {
      console.log(i);
    }, 100 * i);
  })(i);
}
```

这种奇怪的图案实际上相当普遍。参数列表中的 i 实际上影射了 for 循环中声明的 i，但是因为我们给它们命名相同，所以我们不必过多地修改循环体。

### `let`声明

到目前为止，您已经发现 var 存在一些问题，这正是 let 语句被引入的原因。除了使用关键字之外，还可以使用 var 语句的相同方式编写语句。

```typescript
let hello = "Hello!";
```

关键的区别不在于语法，而在于语义，我们现在将深入探讨语义。

### 块作用域

当使用 let 声明变量时，它使用所谓的词法作用域或块作用域。与使用 var 声明的变量不同，变量的作用域泄漏到它们的包含函数，块作用域变量在它们最近的包含块或 for-loop 之外不可见。

```typescript
function f(input: boolean) {
  let a = 100;
  if (input) {
    // Still okay to reference 'a'
    let b = a + 1;
    return b;
  }
  // Error: 'b' doesn't exist here
  return b;
}
```

这里，我们有两个局部变量 a 和 b。 a 的作用域局限于 f 的主体，而 b 的作用域局限于包含 if 语句的块。

Catch 子句中声明的变量也有类似的作用域规则。

```typescript
try {
  throw "oh no!";
} catch (e) {
  console.log("Oh well.");
}
// Error: 'e' doesn't exist here
console.log(e);
```

块作用域变量的另一个属性是，在实际声明它们之前，不能读取或写入它们。虽然这些变量在其整个范围内都是”存在的”，但在其声明之前的所有点都是其时间死区的一部分。这只是一种复杂的说法，你不能在 let 语句之前访问它们，幸运的是 TypeScript 会让你知道这一点。

```typescript
a++; // illegal to use 'a' before it's declared;
let a;
```

需要注意的是，您仍然可以在声明块范围的变量之前捕获它。唯一的问题是，在声明之前调用该函数是非法的。如果目标是 ES2015，现代运行时将抛出一个错误; 然而，目前 TypeScript 是许可的，不会将其作为错误报告。

```typescript
function foo() {
  // okay to capture 'a'
  return a;
}
// illegal call 'foo' before 'a' is declared
// runtimes should throw an error here
foo();
let a;
```

更多关于时间死区的信息，请参阅 Mozilla Developer Network 地理杂志的相关内容。

###  重申和隐藏

对于 var 声明，我们提到，声明变量的次数并不重要，重要的是得到一个变量。

```typescript
function f(x) {
  var x;
  var x;
  if (true) {
    var x;
  }
}
```

在上面的例子中，x 的所有声明实际上都指向同一个 x，这是完全有效的。这通常会导致 bug 的产生。值得庆幸的是，let声明不那么宽容。

```typescript
let x = 10;
let x = 20; / error: can't re-declare 'x' in the same scope
```

这两个变量不一定都需要为TypeScript进行块范围划分，以告诉我们存在问题。

```typescript
function f(x) {
  let x = 100; // error: interferes with parameter declaration
}
function g() {
  let x = 100;
  var x = 100; // error: can't have both declarations of 'x'
}
```

这并不是说块范围的变量永远不能用函数范围的变量声明。块范围的变量只需要在一个明显不同的块中声明。

```typescript
这并不是说块范围的变量永远不能用函数范围的变量声明。块范围的变量只需要在一个明显不同的块中声明。

function f(condition, x) {
  if (condition) {
    let x = 100;
    return x;
  }
  return x;
}
f(false, 0); // returns '0'
f(true, 0); // returns '100'
```

在更嵌套的作用域中引入新名称的行为称为隐藏。这有点像一把双刃剑，因为它可以在意外阴影的情况下自行引入某些 bug，同时也可以防止某些 bug 的产生。例如，假设我们使用 let 变量编写了前面的 sumMatrix 函数。

```typescript
function sumMatrix(matrix: number[][]) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    var currentRow = matrix[i];
    for (let i = 0; i < currentRow.length; i++) {
      sum += currentRow[i];
    }
  }
  return sum;
}
```

这个版本的循环实际上将正确地执行求和，因为内部循环的 i 在外部循环中阴影为 i。

为了编写更清晰的代码，通常应该避免隐藏。虽然在某些情况下，利用它可能是合适的，你应该使用你的最佳判断。

### 块作用域的变量捕获

当我们第一次涉及到用 var 声明捕获变量的思想时，我们简要地介绍了一旦捕获变量是如何工作的。为了更好地理解这一点，每次运行一个作用域时，它都会创建一个变量的“环境”。该环境及其捕获的变量可以在其作用域内的所有内容都完成执行之后仍然存在。

```typescript
function theCityThatAlwaysSleeps() {
  let getCity;
  if (true) {
    let city = "Seattle";
    getCity = function () {
      return city;
    };
  }
  return getCity();
}
```

因为我们已经从它的环境中捕获了`city`，所以我们仍然能够访问它，尽管事实上 if 块已经完成了执行。

回想一下前面的 setTimeout 示例，我们最终需要使用 IIFE 为 for 循环的每次迭代捕获变量的状态。实际上，我们所做的就是为捕获的变量创建一个新的变量环境。这是一个有点痛苦的过程，但幸运的是，你再也不用在TypeScript中这样做了。

let声明在作为循环的一部分声明时具有截然不同的行为。这些声明不仅仅是向循环本身引入一个新的环境，而是在某种程度上为每个迭代创建一个新的作用域。因为这就是我们用IIEE正在做的任何事，我们可以改变我们以前的 setTimeout 例子，只使用一个 let 声明。

```typescript
for (let i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100 * i);
}
```

正如所料，这个会打印出来

```typescript
0
1
2
3
4
5
6
7
8
9
```

### `const`声明

Const 声明是声明变量的另一种方式。

```typescript
const numLivesForCat = 9;
```

它们就像 let 声明，但是，顾名思义，它们的值一旦被绑定就不能更改。换句话说，它们具有与 let 相同的作用域规则，但不能重新赋值给它们。

这不应与它们所引用的值是不可变的这一概念相混淆。

```typescript
const numLivesForCat = 9;
const kitty = {
  name: "Aurora",
  numLives: numLivesForCat,
};
// Error
kitty = {
  name: "Danielle",
  numLives: numLivesForCat,
};
// all "okay"
kitty.name = "Rory";
kitty.name = "Kitty";
kitty.name = "Cat";
kitty.numLives--;
```

除非采取特定措施来避免它，否则 const 变量的内部状态仍然是可修改的。幸运的是，TypeScript 允许您指定对象的成员是只读的。关于接口的章节有详细介绍。

### `let`vs.`const`

鉴于我们有两种具有类似作用域语义的声明类型，我们自然会问应该使用哪一种。像大多数宽泛的问题一样，答案是: 要看情况而定。

应用最小特权原则，除了计划修改的声明之外，所有声明都应使用 const。其基本原理是，如果一个变量不需要被写入，那么在同一个代码库中工作的其他人就不能自动地写入对象，并且需要考虑他们是否真的需要重新赋值给该变量。在推理数据流时，使用 const 还可以使代码更具可预测性。

运用你最好的判断力，如果可行的话，与你团队的其他成员商量此事。

这本手册大多数使用 let 声明。

### 解构

另一个 ECMAScript 2015的特性是解构。有关完整的参考资料，请参阅《 Mozilla Developer Network 文章。在本节中，我们将简要介绍一下。

#### 解构数组

最简单的解构形式是数组解构赋值:

```typescript
let input = [1, 2];
let [first, second] = input;
console.log(first); // outputs 1
console.log(second); // outputs 
```

这将创建两个名为 first 和 second 的新变量，这相当于使用索引，但要方便得多:

```typescript
first = input[0];
second = input[1];
```

析构化也可以处理已声明的变量:

```typescript
// swap variables
[first, second] = [second, first];
```

以及函数的参数:

```typescript
function f([first, second]: [number, number]) {
  console.log(first);
  console.log(second);
}
f([1, 2]);
```

你可以为列表中剩下的项目创建一个变量，使用... :

```typescript
let [first, ...rest] = [1, 2, 3, 4];
console.log(first); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]
```

当然，因为这是 JavaScript，你可以忽略你不关心的尾随元素:

```typescript
let [first] = [1, 2, 3, 4];
console.log(first); // outputs 1
```

或者其他元素:

```typescript
let [, second, , fourth] = [1, 2, 3, 4];
console.log(second); // outputs 2
console.log(fourth); // outputs 4
```

#### 解构元组

元组可以像数组一样被解构化; 解构化变量得到相应元组元素的类型:

```typescript
let tuple: [number, string, boolean] = [7, "hello", true];
let [a, b, c] = tuple; // a: number, b: string, c: boolean
```

将元组拆分到元素的范围之外是一个错误:

```typescript
let [a, b, c, d] = tuple; // Error, no element at index 3
```

与使用数组一样，您可以使用... 对元组的其余部分进行重构，以得到一个更短的元组:

```typescript
let [a, ...bc] = tuple; // bc: [string, boolean]
let [a, b, c, ...d] = tuple; // d: [], the empty tuple
```

或者忽略尾随元素，或者其他元素:

```typescript
let [a] = tuple; // a: number
let [, b] = tuple; // b: string
```

#### 解构对象

你也可以解构对象:

```typescript
let o = {
  a: "foo",
  b: 12,
  c: "bar",
};
let { a, b } = o;
```

这将创建来自 o.a 和 o.b 的新变量 a 和 b。注意，如果不需要，可以跳过 c。

像数组解构一样，你可以不用声明就有赋值:

```typescript
({ a, b } = { a: "baz", b: 101 });
```

注意，我们必须在这个语句外层加上括号。正常JavaScript把一个`{`解析为block的开始。

你可以使用这样的语法`...`为对象的剩余元素里创建一个变量。

```typescript
let { a, ...passthrough } = o;
let total = passthrough.b + passthrough.c.length;
```

##### 属性重命名

你也可以给属性起不同的名字:

```typescript
let { a: newName1, b: newName2 } = o;
```

在这里，语法开始变得混乱。你可以把: newName1读作“ a as newName1”。方向是从左到右，就像你写的那样:

```typescript
let newName1 = o.a;
let newName2 = o.b;
```

令人困惑的是，这里的冒号并不表示类型。如果您指定了类型，那么仍然需要在整个解构化之后写入类型:

```typescript
let { a, b }: { a: string; b: number } = o;
```

##### 默认值

默认值允许您在属性未定义的情况下指定默认值:

```typescript
function keepWholeObject(wholeObject: { a: string; b?: number }) {
  let { a, b = 1001 } = wholeObject;
}
```

在这个例子中，b？表示 b 是可选的，所以可能没有定义。keepWholeObject 现在有了 wholeObject 的变量以及属性 a 和 b，即使 b 没有定义。

##### 函数声明

析构化也可以用在函数声明中。对于简单的情况，这是很直接的:

```typescript
type C = { a: string; b?: number };
function f({ a, b }: C): void {
  // ...
}
```

但是为参数指定默认值更为常见，并且使用析构化正确地指定默认值可能比较棘手。首先，您需要记住将模式放在缺省值之前。

```typescript
function f({ a = "", b = 0 } = {}): void {
  // ...
}
f();
```

> 上面的代码片段是类型推断的一个例子，在手册的前面已经解释过了。

然后，您需要记住为解构属性而不是主初始值设定项上的可选属性设置默认值。记住 c 的定义是 b 可选的:

```typescript
function f({ a, b = 0 } = { a: "" }): void {
  // ...
}
f({ a: "yes" }); // ok, default b = 0
f(); // ok, default to { a: "" }, which then defaults b = 0
f({}); // error, 'a' is required if you supply an argument
```

小心使用解构。正如前面的示例所示，除了最简单的解构表达式之外，任何表达式都是令人困惑的。对于深嵌套的解构化来说尤其如此，即使没有重命名、默认值和类型注释，也很难理解它。尝试保持解构表达式小而简单。您始终可以编写解构化将自己生成的赋值。

#### 展开

展开运算符与解构运算符相反。它允许您将一个数组扩展到另一个数组中，或者将一个对象扩展到另一个对象中。例如:

```typescript
let first = [1, 2];
let second = [3, 4];
let bothPlus = [0, ...first, ...second, 5];
```

这就给了两加值[0,1,2,3,4,5]。传播创造了一个`first`和`second`的浅拷贝。它们不会因为展开而改变。

你也可以展开对象:

```
let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { ...defaults, food: "rich" };
```

现在的`search`是`{ food: “ rich”，price: “ $$”，ambiance: “ noisy”}`。对象展开和数组展开更复杂。像数组展开一样，他从左到右进行，但结果仍然是一个对象。这意味着在展开对象中稍后出现的属性会覆盖先前出现的属性。因此，如果我们修改前面的例子，使其在结尾处展开：

```typescript
let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { food: "rich", ...defaults };
```

然后`defaults`中的`food`属性覆盖了`food: "rich"`,这不是我们在这种情况下想要的。

对象展开还有其他一些令人惊讶的限制。首先，它只包含对象自己的可枚举属性。基本上，这意味着当你展开一个对象的实例时，你会丢失方法:

```typescript
class C {
  p = 12;
  m() {}
}
let c = new C();
let clone = { ...c };
clone.p; // ok
clone.m(); // error!
```

其次，TypeScript 编译器不允许类型参数从泛型函数展开。这一特性将在该语言的未来版本中得到体现。


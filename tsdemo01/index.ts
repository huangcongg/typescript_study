// let str:string="你好 ts"
// let str1:string = '你好typescript'


//布尔类型
// var flag:boolean=true
// flag = false

// var a:number = 123
// console.log(a);
// // a = "string"//错误写法
// // a=false//错误写法
// a=12.3
// console.log(a);

// var str:string = 'this is ts'
// // str=12 //错误写法
// // str=false //错误写法
// str = '你好ts'
// console.log(str);

//第一种定义数组的方式：
// let arr:number[]=[1,2,3]
// console.log(arr);

//第二种定义数组的方式
// let arr:Array<number>=[1,2,3,4,] //泛型

// //元组类型
// let arr:[string,number,boolean]=['ts',3.18,true] //可以指定数组中每一个元素的类型
// console.log(arr);

//枚举类型
// enum Flag {success=1,error=-1}

// var f:Flag=Flag.success

// console.log(f) 

//undefined类型
// var num:number | undefined
// console.log(num)

//null类型
// let num:number | null | undefined
// num=132
// console.log(num)

//never类型,是其他类型（包括null和undefined）的子类型，代表从不会出现的值。
// var a:never
// a=(()=>{
//     throw new Error('错误');
// })()
// class Person{
//     name:string;
//     constructor(n:string){
//         this.name=n;
//     }
//     run():void{
//         alert(this.name);
//     }
// }
// let p = new Person('zhangsan');
// p.run();
// class Person{
//     name:string;
//     constructor(n:string){
//         this.name=n;
//     }
//     run():void{
//         alert(this.name);
//     }
// }
// class Web extends Person{
    
// }
// let p = new Web('web');
// p.run();

//属性接口
// interface Config{
//     type:string;
//     url:string;
//     data:string;
//     dataType:string;
// }
// function ajax(config:Config){
//     let xhr = new XMLHttpRequest();
//     xhr.open(config.type,config.url,true);
//     xhr.send(config.data);
//     xhr.onreadystatechange=function(){
//         if(xhr.readyState==4&&xhr.status==200){
//             console.log(JSON.parse(xhr.responseText));
            
//         }else{
//             console.log(xhr.responseText);
            
//         }
//     }
// }
// ajax({
//     type:'get',
//     data:'zhangsan',
//     url:'http://a.itying.com/api/productlist',//api
//     dataType:'json'
// })

interface UserArr{
    [index:number]:string
}
var arr:UserArr=['aaa','bbb'];
console.log(arr[0]);

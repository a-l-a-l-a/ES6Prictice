/* var a = 2;
{
    var a = 3;
}
console.log(a)

let b = 2;
{
    let b = 3;
}
console.log(b);

const c = 2; */

/**
 * 解构
 */
// let [a,b,c] = [1,2,3];
// let [a,[b,c]] = [1,[2,3]];

// let [foo=true,d] = [undefined,2];//undefined输出默认值，null则是输出null
// console.log(foo);
// console.log(d);

// let obj;
// ({obj} = {obj:'alala'});
// console.log(obj);

// let {a,b} = {
//     a:'1',
//     b:'2'
// }
// console.log(a+b);

// const [a,b,c,d,e,f]="JSPang";//字符串解构
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);

/**
 * 扩展运算符和rest运算符
 */
// 预留位置
/* function alala (...arg) {
    console.log(arg[0])
    console.log(arg[1])
    console.log(arg[2])
    console.log(arg[3])
}
alala(1,2,3); */

/* let arr1 = [1,2,3];
let arr2 = arr1;
arr2.push(4,5,6);
console.log(arr1);
console.log(arr2); */

// let arr1 = [1,2,3];
// let arr2 = [...arr1];
// arr2.push(4,5,6);
// console.log(arr1);
// console.log(arr2);

// function jspang(first,second,...arg){
//         for(let val of arg){
//             console.log(val);
//         }
//     }
// jspang(0,1,2,3,4,5,6,7);

/**
 * 字符串模板
 */
/* let alala = ' 啊啦啦 ';
let blog = '我是'+alala+',大家好';
let blog6 = `<b>我是${alala},大家好</b>`
console.log(blog6);
document.write(blog6); */

/* let jspang='技术胖';
let blog = `我是你的老朋友技术胖。这节课我们学习字符串模版。<br>`;
document.write(blog.indexOf('技术胖'));
document.write(blog.includes('技胖'));
document.write(blog.startsWith('技胖'));
document.write(blog.startsWith('我是'));
document.write(blog.repeat(3)); */

/**
 * es6的数字操作
 */
/* let binary = 0b11;//0b开头代表是二进制；（b不区分大小写）
console.log(binary);

let o = 0o11;//0o开头代表是八进制；（o不区分大小写）
console.log(o);

let str = '我是字符串';

console.log("是否是数字:"+Number.isFinite(o));//判断是否是数字
console.log("是否是整数:"+Number.isInteger(o));//判断是否是整数
console.log("是否是NaN:"+Number.isNaN(NaN));//判断是否是NaN

let a='9.0';
console.log(Number.parseInt(a)); 
console.log(Number.parseFloat(a)); */

/* let a = Math.pow(2,53)-1;
console.log(a); //9007199254740991

console.log(Number.MAX_SAFE_INTEGER)//最大安全整数
console.log(Number.MIN_SAFE_INTEGER)//最小安全整数 */

/* let a= Math.pow(2,53)-1;
console.log(Number.isSafeInteger(a));//true */

/**
 * 新增的数组知识
 */
// JSON数组格式转换
/* let json = {
    '0':'alala',
    '1':'啊啦啦',
    '2':'adasdf',
    length:3//有这个的json就可以通过以下的from方法变成数组
}
let arr = Array.from(json);
console.log(arr); */

/* let arr = Array.of(1,2,3,4);//它负责把一堆文本或者变量转换成数组
console.log(arr);

let arr1 = Array.of('1','2','3','4');
console.log(arr1); */

/* let arr=[1,2,6,3,4,5,7,8,9];
console.log(arr.find(function(value,index,arr){//value表当前查找的值，index代表当前的索引，arr表示当前的数组
    console.log(value)
    return value > 4;
})) */

/* let arr=[0,1,2,3,4,5,6,7,8,9];
arr.fill('alala',2,5);//2到5索引之间用‘alala’代替，包2不包5
console.log(arr); */

/* let arr=['jspang','技术胖','大胖逼逼叨']
let list=arr.entries();
console.log(list);
console.log(list.next().value);
console.log(list.next().value);
console.log(list.next().value); */

/* let arr=['jspang','技术胖','大胖逼逼叨']
for (let [item,index] of arr){
    console.log(item+" "+index);
} */

/* let arr=['jspang','技术胖','大胖逼逼叨']
for (let [index,val] of arr.entries()){
    console.log(index+':'+val);
} */

/**
 * 箭头函数(不能当构造函数使用，不能有new)
 */
/* var add = (a,b=1) => {
    return a+b;
}
console.log(add(1,2)) */


/**
 * ES6中的函数和数组补漏
 */

//对象的函数解构
/* let json = {
    a: 'alala',
    b:'啊啦啦',
    d:'a'
}
function fun({a,b='alala',d}){
    console.log(a,b,d)
}
fun(json); */

//数组的函数解构
/* let arr = [1,2,3,4];
function fun(a,b,c,d,e){
    console.log(a,b,c,d)
}
fun(...arr); */

// in的用法
/* let obj = {    
    a: 'jspang',
    b: '技术胖'
}
console.log('a' in obj);   //true */

/* let arr = [,,];
console.log(arr.length)
console.log(0 in arr);

let arr1 = ['alala',''];
console.log(0 in arr1); */

//数组的遍历方法
/* let arr=['jspang','技术胖','前端教程']; 
arr.forEach((val,index)=>console.log(index,val)); */

/* let arr=['jspang','技术胖','前端教程'];
arr.filter(x=>console.log(x)); */

/* let arr=['jspang','技术胖','前端教程'];
arr.some(x=>console.log(x)); */
/* some() 方法用于检测数组中的元素是否满足指定条件（函数提供）。
some() 方法会依次执行数组的每个元素：
如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测。
如果没有满足条件的元素，则返回false。
注意： some() 不会对空数组进行检测。
注意： some() 不会改变原始数组。 */

/* let arr=['jspang','技术胖','前端教程'];
console.log(arr.map(x=>'web'));
// map在这里起到一个替换的作用 */

//数组转换字符串的方法
/* let arr = [1,2,3];
console.log(arr.join('|'));//默认逗号隔开
console.log(arr.toString());//只是逗号隔开 */


/**
 * ES6中的对象
 */
//对象赋值
/* let a='a';
let b='b';
let obj = {a,b};
console.log(obj); */

//对象key值构建
/* let key = 'skill';
var obj = {
    [key]:'web'
}
console.log(obj.skill);
// 有时候我们会在后台取出key值，而不是我们前台定义好的，这时候我们如何构建我们的key值那。比如我们在后台取了一个key值，然后可以用[ ] 的形式，进行对象的构建 */

// Object.is()对象比较
/* var obj1 = { name: 'alala'};
var obj2 = { name: 'alala'};
console.log(obj1.name === obj2.name);
console.log(Object.is(obj1.name,obj2.name));
console.log(+0 === -0);  //true
console.log(NaN === NaN ); //false
console.log(Object.is(+0,-0)); //false
console.log(Object.is(NaN,NaN)); //true
//，===为同值相等，is()为严格相等 */

// 合并对象
/* var a={a:'jspang'};
var b={a:'技术胖'};
var c={c:'web'};

let d = Object.assign(a,b,c)
console.log(d); */

/* var arr = [1,2];
var arr2 = [3,4];
var arr3 = arr.concat(arr2)
var arr4 = arr + arr2;
console.log(arr3) */


/**
 * Symbol在对象中的作用
 */

/* var g = Symbol('a');
console.log(g);
console.log(g.toString()); */

/**
 * Set和WeakSet数据结构
 */
// Set
/* let setArr = new Set(['a','b','c','d','c']);
console.log(setArr);//Set自动去重
setArr.add('前端职场')//追加add
console.log(setArr)
setArr.delete('前端职场');//删除delete
console.log(setArr);
console.log(setArr.has('前端职场'));//判断Set中是否存在‘前端职场’;
for(item of setArr){
    console.log(item);
}
console.log(setArr.size);//size属性查看set的数量

setArr.forEach((value,index)=>{console.log(index+':'+value)})

setArr.clear();//清空setArr
console.log(setArr); */

// WeakSet
/* let weakobj = new WeakSet();
let obj = {a:'a',b:'b'};
let obj1 = obj;
weakobj.add(obj);
weakobj.add(obj1);
console.log(weakobj); */

/**
 * map的数据结构
 */
/* let json = {
    name:'alala',
    skill:'web'
}
console.log(json.name);
let map = new Map();
map.set(json,'iam');//设置map
console.log(map.get(json));//获取map的值
map.delete(json);
console.log(map.get(json));
console.log(map.size);
console.log(map.has(json));
console.log(map.clear()); */


/**
 * 用Proxy进行预处理
 */
//第一个大括号是放置对象体，第二个大括号是放置预处理机制get、set、apply
/* let pro = new Proxy({
    add:function(val){
        return val+100
    },
    name:'alala'
},{
    get:function(target,key,property){//target是pro
        console.log('come in Get')
        // console.log(target[key])
        return target[key];
    },
    set:function(target,key,value,receiver){
        console.log('do set')
        return target[key] = value;
    },
    apply:function(target,ctx,args){
        console.log('do apply');
    }
})
// pro.name = '啊啦啦';
// console.log(pro.name);
console.log(pro.add(2)); */

/* let target = function(){
    return 'alala';
}
let handler = {
    apply:function(target,ctx,args){
        console.log('do apply');
        return Reflect.apply(...arguments);
    }
}
let pro = new Proxy(target,handler);
console.log(pro()); */


/**
 * promise对象的使用（承诺）
 */
/* let state = 1;
function step1(resolve,reject){//第一个参数：成功的时候的返回值。第二个参数：失败时候的返回值（可换别的）
    console.log('1开始');
    if(state == 1){
        resolve('1完成');
    }else{
        reject('1错误');
    }
}
function step2(resolve,reject){
    console.log('2开始');
    // state=2;
    if(state == 1){
        resolve('2完成');
    }else{
        reject('2错误');
    }
}
function step3(resolve,reject){
    console.log('3开始');
    if(state == 1){
        resolve('3完成');
    }else{
        reject('3错误');
    }
}

new Promise(step1).then(function(val){
    console.log(val);
    return new Promise(step2);
}).then(function(val){
    console.log(val);
    return new Promise(step3);
}).then(function(val){
    console.log(val);
}) */


/**
 * class类
 */
//类里面跟的都是方法，方法和方法之间直接分开就行
/* class Coder {
    name(val){
        console.log(val);
        return val;
    }

    add(){
        return this.a+this.b;
    }

    constructor(a,b){//用constructor来定义 类 的参数
        this.a = 1;
        this.b = 2;
    }
}
let alala = new Coder(1,2);
alala.name('alala');
console.log(alala.add());
class Htmler extends Coder {//类的继承

}
let all = new Htmler;
all.name('all'); */


/**
 * 模块化操作
 */
import {sex} from "./temp.js" 
console.log(sex+2)   // boy

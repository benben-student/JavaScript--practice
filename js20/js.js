//思考题内容
var str1 = "世界灿烂盛大，欢迎回\'家\'";
var str2 = "在月色与雪色之间\n \t你是第三种绝色";
console.log(str1);
console.log(str2);
console.log("====================");

//字符串拼接
var a = 10;
var b = "源源";
var c = 8;
console.log(a + c);//数字直接相加
console.log(b + a + "岁啦");//只要有字符串就拼接
//隐式转换
var d = "10";
console.log(a - d);
console.log(a * d);
console.log(a / d);
console.log(a % d);

//转换成整数
console.log(parseInt("10"));
console.log(parseInt("10abc"));//10
console.log(parseInt("sd4365"));//NaN

//转换成小数
console.log(parseFloat("10"));
console.log(parseFloat("10.3abc"));//10.3
console.log(parseFloat("sd4.365"));//NaN

 //Number()
 console.log(Number("10"));
 console.log(Number("10.3abc"));//NaN
console.log(Number("sd4.365"));//NaN
 
//转换成字符串
console.log(a);
console.log(a.toString());
console.log(typeof a.toString());
console.log("================");
var nul;
console.log(nul);
console.log(String(nul));
console.log(typeof String(nul));
nul = null;
console.log(typeof String(nul));

//面试题
var str = "10";
var str1 = "18aaa";
console.log(+str);
console.log(-str);
console.log(str1 - 0);
console.log(str1 + 0);
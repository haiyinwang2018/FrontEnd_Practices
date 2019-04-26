//质数代码验证
/*
for (var i = 2; i <= 100; i++) {
	var count = 0;
	for (var j = 1; j <= i; j++) {
		if (i % j == 0) {
			count++;
		}
	}
	if (count == 2) {
		console.log(i);
	}
}
*/
//测试短路运算实现条件分支
 /*var a= 17;
 var b;
 b = (a >= 18&& console.log("你已经成年了"));
 console.log(b);*/

 //测试两个数字能否整除
/*var a = 32;
var b = 17;
a%b == 0 && console.log(a+"可以整除"+b);

//比较两个数字大小
switch(a-b>=0){

	case  true:
		console.log("大数为"+a);
		break;
	case false:
		console.log("大数为"+b);
		break;
}
true||console.log("我被计算了么")*/


/*avar a = 3 * 6 % 9;
 *var b = parseInt(3.8)== "3" ? 0:1;
 *console.log(a/b);*/

//switch case 练习测试

//三元运算符练习

/*
var age ;
age = 17;
age >= 18 ? console.log("你成年了"):console.log("你未成年");*/

/*var year , index;
year = 2004;
index = year%100 ==0 ? 400 : 4 ;
if(year % index == 0){
	console.log("你好，你输入的年份是闰年");
}else {
	console.log("您好你输入的年份不是闰年");
}*/
//算工资

/*var salary,yearOfWorking,bonusForYear;
salary = 10000;
yearOfWorking = 2;
bonusForYear = 0;*/
/*if(yearOfWorking >=2){
	bonusForYear = salary > 12000 ? salary * 3.2 : salary*3;
	console.log("您的年终奖是"+bonusForYear);
}else if(yearOfWorking >=1){
	bonusForYear = salary > 10000 ? salary * 1.7 : salary*1.5;
	console.log("您的年终奖是"+bonusForYear);
}else if(yearOfWorking > 0){
	bonusForYear = salary > 8000 ? salary * 1.2 : salary*1;
	console.log("您的年终奖是"+bonusForYear);
}*/

/*var str = '37249802857958';
var arr = str.split("")
var num=0;
console.log(arr);
while(arr.length){
	num+=Number(arr.pop());
}
console.log(num);*/
// console.log(parseInt("10.34我是非数字字符串"))
// yearOfWorking<1?alert (salary>8000? salary*1.2: salary*1) :yearOfWorking>=1&&yearOfWorking<2?alert(salary>10000? salary*1.7 : salary*1.5  ) :alert(salary>12000? salary*3.2 : salary*3  )

// 2&&0? console.log("我被计算了"):console.log("我也被计算了");


/*

*
*
*  循环语句练习*/
/*for (var i = 3;i < 7; i++) {
	console.log(i++);
}
for(var i=1;i==8848;i+=2){
	console.log(i);
}*/
/*
var i=3;
var j =6;
for (;i<j; i++) {
	i +=2;
	j++;
	console.log(i);
}
*/

// for(let i =1, j =1; i <= 999 || j <= 999; i > 999 ? j++: i++){
// 	console.log(i + "+" +j);
// }
/*for(let i = 1 ; i <= 9; i ++){
	for(let j = 0; j <= 9 ; j ++){
		for (let k = 0; k <= 9; k++){
			if(Math.pow(i,3)+Math.pow(j,3)+Math.pow(k,3)==(i*100+j*10+k)){
				console.log("水仙花数是" + i + j+ k );
			}
		}
	}
}*/

/*
for( let i = 1; i <= 999; i++){
	let gewei = parseInt(i /Math.pow(10,0))%10;
	let shiwei = parseInt(i /Math.pow(10,1))%10;
	let baiwei = parseInt(i / Math.pow(10,2))%10;
	let sum = Math.pow(gewei,3)+Math.pow(baiwei ,3)+Math.pow(shiwei,3);
	if(sum == i){
		console.log(i);
	}
}
var sum = 0;
for( let i =1 ; i <= 100; i ++){
	sum = sum +i;
}
console.log(sum);

for (let i = 3 ; i < 8 ; i ++){
	for(let j = 2; j < 5 ; j ++ ){
		console.log("计算的过程"+ i + "*" + j)
	}
}

{
	let sum = 0;
	for (let i = 3 ; i < 8 ; i ++){
		for (let j = 2 ; j < 5 ; j ++){
			sum++;
			console.log(i + "*" + j);
		}
	}
	console.log("你总共计算了：" + sum +"次");
}
*/

//九九乘法表

/*{
	for(let i = 1 ; i <= 9; i++){
		let str = "";
		for (j = 1; j <= i ; j++){
			str += i + "*" + j + "=" + i*j +"\t ";
		}
		console.log(str);
	}
}*/
//金字塔练习
/*{
	for (let i = 1; i <= 9 ; i+=2){
		let str = "";

		for (let k =10 ; k >= i; k -=2){
			str += " ";
		}
		for(let j = 1 ; j <= i ; j ++){
			str += "*";
		}
			console.log(str);
	}
}*/

/*
{
	//a为用户的输入的数字, b为每一个数
	let a = 5;
	let b = 0;
	if(a < 2){
		console.log("这种数字暂时不处理");

	} else{

		let sum = 0;
		for(let i =2 ; i <= a ; i ++){
			b = (i +1)/i ;
			sum += b;
		}
		console.log("哈哈我算出来了,结果是:"+ sum );
	}
}
{
//	输出所给数字的约数
	let a = 10;
	for( i = 1 ; i <= a ; i ++){
		if(a % i ==0){
			console.log(i);
		}
	}
}
//看看下面的程序输出的是什么
{
	let a = 0;
	while(true){
		a++;
		if(a % 5 ==0 && a % 6 == 1){
			break;
		}
	}
	console.log(a);
}
*/

//鸡兔同笼问题

/*{

	for (let i =1 ; i < 1000 ; i ++){
	if (i %3 == 2 && i % 5 == 3 && i % 7 ==2){
		console.log(i);
	}
	}
}*/

//鸡兔同笼问题
/*{
	for (let i = 1 ; i <= 35 ; i++){
		for ( let j= 1 ; j <= 35 ; j ++){
			if(i + j == 35 && i *2 + j * 4 == 94 ){
				console.log("鸡为:" + i + ";兔为:" + j);
			}
		}
	}
}*/

// 两个强相关的变量;
/*{
	for (let i = 0, j =0; i <=35; i ++){
		j = 35 - i;
		i * 2 + j * 4 == 94 ? console.log("鸡为:" + i + ";兔为:" + j): 0;
	}
}*/


//累乘器
{
/*	let sum = 1;
	for (var i = 1 ; i < 10 ; i ++){
		sum *= i ;
	}
	console.log(sum);*/
	(function () {
		var j = 8 ;

	})()

	// console.log(j);
}

//递归累乘

/*{
	function factorial(j) {
		if(j == 1) {
			return 1;
		}
		return j * factorial(j-1);


	}
	// console.log(factorial(5));
	// factorial(5);
}*/

/*function fib(n) {
	if(n <= 2){
		return 1;
	}else{
		return fib(n-1) + fib(n-2);

	}

}
console.log(fib(10));*/
//测试函数声明的提升

/*
{
	a = 12 ;
	var a = 13;
//函数的引用(值)和地址是同时存在的;
	f();
	function f() {
		console.log(18);
	}
}
*/

//斐波那契数
/*{
	let arr = [];
		arr[0] = 1;
		arr[1] = 1;

	for (let  i = 0; i <= 10 ; i++ ){
		 arr[i+2] = arr[i+1] +arr[i];
	}
	console.log(arr);
}*/

// {
// 	let goodsPrice = 0;
// 	function sum(goodsprice) {
// 		let min = 0 ;
// 		for (let i = 0 ;i <= 1024 ; i ++){
// 			let num = 0;
// 			for (let j = 0 ; j <= 1024/4 ; j ++){
// 				for (let k = 0 ; k <= 1024/16 ; k ++) {
// 					for (let l = 0 ; l <= 1024/64 ; l ++) {
// 						if (i + j * 4 + k * 16 + l * 64 == goodsprice){
// 							num = i + j + k + l;
//
// 							console.log(i + "+" + j + "+" + k + "+" + l);
//
// 							if(min == 0){
// 								min  = num ;
// 							}else if (num <= min){
// 								min = num ;
// 							}
// 						}
//
// 					}
// 				}
// 			}
// 		}
// 		console.log(min);
// 	}
// 	sum(64);
// }
/*{
	let i = 1;
	while(true){
		if(i % 4 ==0 && i % 6 ===0){
			console.log(i);
			break;
		}
		i ++ ;
	}
}*/
//简化质数,查询
// {   let i = 1 ;
// 	while(i < 10){
// 			for (var j = 2 ; j < i ; j ++){
// 				if(i % j == 0){
// 					break;
// 				}
// 			}
// 			if (i == j) {
// 				console.log(i);
// 			}
// 			i ++;
// 	}
// }







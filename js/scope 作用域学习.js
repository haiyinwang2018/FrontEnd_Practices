//作用域测试

/*
*
*
*    独立作用域块,每次循环会创建一个闭包存储循环变量*/
/*for ( var i  = 1000 ; i <=10000 ; i +=2000){
	console.log(new Date)
	setTimeout(function () {console.log(new Date,i)},i);
}*/
//块状作用域测试

// {
//  for(let b = 0 ; b < 5 ; b++ )
//  {
//  	console.log(b);
//  }
// }

/*
 for(var i=0;i<5;i++){
	 (function(index){
		 setTimeout(function(){
			 console.log(new Date,index);
		 },1000)
	 })(i)
 }
 console.log(new Date,i);*/

/*

 var helper=function(index){
	 setTimeout(function(){
		 console.log(new Date,index);
	 },1000)
 };
 for(var i=0;i<5;i++){
	 helper(i);// 这里传过去的 i 值被复制了
 }
 // console.log(new Date,i);
*/


/*
var arr = [];
for (var i = 0 ; i < 5 ; i ++){
	function f() {
		return function () {
			console.log(i);
		};
	}
	arr[i] = f();
}
arr[0]();
arr[1]();
arr[2]();
arr[3]();
arr[4]();
*/


//循环里面包含闭包函数
/*
 function box(){
	 var arr = [];
	 for(var i=0;i<5;i++){
		 arr[i] = function(){
			 console.log(i);                            //由于这个闭包的关系，他是循环完毕之后才返回，最终结果是4++是5
		 }                                        //这个匿名函数里面根本没有i这个变量，所以匿名函数会从父级函数中去找i，
	 }                                            //当找到这个i的时候，for循环已经循环完毕了，所以最终会返回5
	 return arr;
 }
 // console.log(box());                                    //执行5次匿名函数本身
 // console.log(box()[1]);　　　　　　　　　　　　　　　　　　　//执行第2个匿名函数本身
 // console.log(box().length);                            //最终返回的是一个数组，数组的长度为5
 console.log(box()[4]());                                //数组中的第一个数返回的是5，这是为什么？
*/

/*
 function box(){
	 var arr = [];
	 for(var i=0;i<5;i++){
		 arr[i] = (function(num){
			 //num在这里                                    //原理和上面一种方法一样的，所以可以实现闭包
			 return function(){                        //在这个闭包里面再写一个匿名函数
				 return num;
			 };
		 })(i*2)
	 }
	 return arr;
 }
 //alert(box());
 //alert(box()[1]);
 //alert(box().length);
 var b = box();
 console.log(b[4]());*/
{
	//测试作用域
	/*var a = 30 ;
	function foo() {
		console.log(a + b);
	}
	foo();
	var b = 3;*/
	//测试嵌套作用域
/*	var c = 30;

	function foo() {
		console.log(c);
	}

	// c = 55;
	function bar() {
		c = 22;
		foo();
	}

	bar();*/

//with 作用域测试
	/*function foo(obj) {
		with(obj){
			a = 2;
		}
	}
	var o1={
		a:3
	}
	var o2 ={
		b:2
	}
	foo(o2);
	console.log(o2.a)*/
	//测试对象作用域

	//再次测试闭包

	{
		for (var i = 0; i < 5 ; i++) {
			// (function () {
			// 	console.log(i);
			// })();
			setTimeout(function () {
				console.log(i);

			},0);
		}
	}
}
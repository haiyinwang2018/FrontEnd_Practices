/*
//判断身份证函数

// 函数参数必须是字符串，因为二代身份证号码是十八位，而在javascript中，十八位的数值会超出计算范围，造成不精确的结果，导致最后两位和计算的值不一致，从而该函数出现错误。
// 详情查看javascript的数值范围
// function checkIDCard(idcode) {
// // 加权因子
// 	var weight_factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
// // 校验码
// 	var check_code = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
//
// 	var code = idcode + "";
// 	var last = idcode[17];//最后一个
//
// 	var seventeen = code.substring(0, 17);
//
// // ISO 7064:1983.MOD 11-2
// // 判断最后一位校验码是否正确
// 	var arr = seventeen.split("");
// 	var len = arr.length;
// 	var num = 0;
// 	for (var i = 0; i < len; i++) {
// 		num = num + arr[i] * weight_factor[i];
// 	}
//
// // 获取余数
// 	var resisue = num % 11;
// 	var last_no = check_code[resisue];
//
// // 格式的正则
// // 正则思路
// 	/!*
// 	第一位不可能是0
// 	第二位到Ò第六位可以是0-9
// 	第七位到第十位是年份，所以七八位为19或者20
// 	十一位和十二位是月份，这两位是01-12之间的数值
// 	十三位和十四位是日期，是从01-31之间的数值
// 	十五，十六，十七都是数字0-9
// 	十八位可能是数字0-9，也可能是X
// 	*!/
// 	var idcard_patter = /^[1-9][0-9]{5}([1][9][0-9]{2}|[2][0][0|1][0-9])([0][1-9]|[1][0|1|2])([0][1-9]|[1|2][0-9]|[3][0|1])[0-9]{3}([0-9]|[X])$/;
//
// // 判断格式是否正确
// 	var format = idcard_patter.test(idcode + "");
//
// // 返回验证结果，校验码和格式同时正确才算是合法的身份证号码
// 	return last === last_no && format ? true : false;
// }

// id = prompt("请输入您的身份证号码");
//
// console.log(checkIDCard(id));
// {
// 	//验证哥德巴赫猜想
//
// 	//检查要给数是否是质数
// 	function checkIsPrime(num) {
// 		for (var i = 2; i < num; i++) {
// 			if (num % i == 0) {
// 				break;
// 			}
// 		}
// 		return i == num;
// 	}
//
// 	//检查某一个偶数是否符合猜想,如果是输出
// 	function checkIsCorrectForOne(num_one) {
// 		for (let i = 2; i < num_one; i++) {
// 			if (checkIsPrime(i) && checkIsPrime(num_one - i)) {
//
// 				console.log(num_one + "=" + i + "+" + (num_one - i));
// 				return true;
// 			}
// 		}
// 		return false;
//
//
// 	}
//
// 	function checkIsCorrect(numEnd) {
// 		for (let i = 2; i <= numEnd; i += 2) {
// 			checkIsCorrectForOne(i);
//
// 		}
//
//
// 	}
//
// 	// console.log(checkIsCorrectForOne(15))
// 	//输出前十个质数
// 	/!*	let num = 0;
// 		let i = 2;
// 		while (num < 10) {
//
// 			if (checkIsPrime(i)) {
// 				console.log(i)
// 				num++;
// 			}
// 			i++;
// 		}*!/
// 	/!*for (let num = 0, i = 2; num < 10; i++) {
// 		if (checkIsPrime(i)){
// 			console.log(i);
// 			num ++;
// 		}
//
// 	}*!/
// 	/!*let num = 0;
// 	let p = 0;
// 	while (num <= 6) {
// 		if (checkIsPrime(Math.pow(2, p) - 1)) {
// 			console.log(Math.pow(2, p) - 1);
// 			num++;
// 		}
// 		p++;
//
// 	}*!/
//
// }
//梅森素数

// {
// //	检测是否是质数,后置验证
// 	function checkIsPrime(num) {
// 		for (var i = 2; i < num; i++) {
// 			if (num % i == 0) {
// 				break;
// 			}
// 		}
// 		return i == num;
//
// 	}
//
// 	function checkIsMersennePrime() {
// 		let p = 1;
// 		let number = 0;
// 		while (number < 6) {
// 			let testWaitNumber = Math.pow(2, p) - 1;
// 			//如果是质数,计数器加一,同时输出到控制台
// 			if (checkIsPrime(testWaitNumber)) {
// 				number++;// 这是第 number++ 个质数
// 				console.log(testWaitNumber+ "+" + number);
//
// 			}
// 			// 检测下一个
// 			p++;
// 		}
// 	}
// 	checkIsMersennePrime();
//
// }
// 寻找喇叭花数
/!*
{
	//计算一个数的阶乘
	function factorial(num) {
		if(num == 1){
			return 1 ;
		}else if (num == 0){
			return 0;
		}else{
			return num * factorial(num -1);
		}
	}
    function findMorningGloryNumber() {
		for (let i = 100 ; i <= 999 ; i ++){
		let	baiwei = parseInt(i / 100) % 10;
		let	shiwei = parseInt(i / 10) % 10 ;
		let	gewei = parseInt(i/1) % 10;
		let sumFactorial = factorial(baiwei) + factorial(shiwei) + factorial(gewei) ;

			if ( sumFactorial == i){
				console.log(i);
			}
		}
	    
    }
    console.log(findMorningGloryNumber());
	console.log(factorial(12));
}*!/
{
//圆的面积
	function area(r) {
		return Math.PI * Math.pow(r, 2);
	}

	// console.log(triangleArea(2,2));
//三角形的面积
	function triangleArea(a, h) {
		return a * h / 2;
	}

	// var ss = triangleArea(3,4)
// 数字反转
	function reverse(n) {
		var str = n.toString();
		var strReverse = "";
		for (let i = 0; i < str.length; i++) {
			strReverse += str.charAt(str.length - i - 1);
		}
		return Number(strReverse);


	}

	function isPalindromic(num) {
		return num == reverse(num);

	}

	// console.log(isPalindromic(111));

	//判断是否是质数
	function isPrime(num) {
		for (var i = 2; i < num; i++) {
			if (num % i == 0) {
				break;
			}
		}
		return i == num;
	}

//回文素数
	function isPalindromicPrimeNumber(num) {
		return isPalindromic(num) && isPrime(num);
	}

// 前100 个回文素数
	/!*{
		let num = 0;
		let p =  0;
		while (num < 100) {
			if(isPalindromicPrimeNumber(p)){
				num++;
				console.log(p);
			}
			p ++;
		}


	}*!/
	//亲密数

	//求一个数的约数之和
	function sumOfDivisors(num) {
		let sum = 0;
		for (let i = 1; i < num; i++) {
			if (num % i == 0) {
				sum += i;
			}
		}
		return sum;
	}

	//判断是否是亲密数
	function intimacyNumber(num1, num2) {
		return sumOfDivisors(num1) == num2 && sumOfDivisors(num2) == num1 && num1 != num2;
	}

//时间较长的亲秘数的遍历输出方式
	/!*{
		var tBeginaTime1 = new Date();
		for(let i = 0 ; i <= 2000 ; i ++){
			for (j = 0 ; j <= 2000 ; j ++){
				if(intimacyNumber(i,j)){
					console.log(i,j);
				}
			}
		}
		var tEndTime1 = new Date();

	}*!/
//时间较少亲密数的遍历输出方式
	{
		var tBeginTime2 = new Date;
		for (let i = 0; i <= 2000; i++) {
			let j = sumOfDivisors(i)
			i < j && intimacyNumber(i, j) && j <= 2000 ? console.log(i, j) : 0;
		}
		var tEndTime2 = new Date;
	}
	{
		// console.log("第一个亲密数算法的执行起始时间" + tBeginaTime1 + "---" + tEndTime1 , "间隔时间"  + (tEndTime1 - tBeginaTime1));
		console.log("第一个亲密数算法的执行起始时间" + tBeginTime2 + "---" + tEndTime2, "间隔时间" + (tEndTime2 - tBeginTime2));
	}

	// 返回最小的约数除了1之外


	//分解质因数


	// factorization(1210);
	console.log(toPrime(24))

}
{
	// console.log(factorization(24));
	// console.log(factorization(120));

	// function factorization(n) {
	// 	var n_current = n;
	// 	var arr = [];
	// 	var str = n + '=';
	// 	for (var i = 2; i <= n; i++) {
	// 		while (n_current % i == 0) {
	// 			arr.push(i);
	// 			n_current /= i;
	// 			console.log(i);
	// 		}
	// 	}
	// 	arr.forEach(function (item) {
	// 		str += item + '*';
	// 	})
	// 	return str.substr(0, str.length - 1);
	// }

	//拆分约数
	//拆分约数
	// function splitToPrime(n, str = "") {
	// 	if (verify_isPrimeNum(n)) {
	// 		str += n;
	// 	} else {
	// 		for (var i = 2; i <= n / 2; i++) {
	// 			if (n % i == 0) {
	// 				str += i + "*"
	// 				str = splitToPrime(n / i, str);
	// 				break;
	// 			}
	// 		}
	// 	}
	// 	return str;

	//拆分约数
	// splitToPrime(24); //"2*2*2*3"
	/!*	function splitToPrime(num, str = "") {
			for (var i = 2; i <= num / 2; i++) {
				if (num % i == 0) {
					str += i + "*";
					str = splitToPrime(num / i, str);

					return str;
				}
			}
			return str += num;
		}

		console.log(splitToPrime(24))
	*!/
}

/!*
{
	function progressive(a , n ) {
		for (var i = 1 ,str = a , sum = a ; i < n ; i ++){
			str = str * 10 +a ;
			sum += str;
		}
		console.log(sum);

	}
	progressive(1,3);
}*!/

//一万以内的完美数
/!*{
	function findPerfect() {
		let i = 1;
		while ( i <= 10000){
			sumOfDivisors(i) == i ? console.log(i) : 0;
			i ++
		}
	}
	findPerfect();
}*!/
/!*{
	function progressivenew(a, n) {
		for (var i = 1, sum = 0, str = ""; i <= n; i++) {
			str += a;
			sum += Number(str);
		}
		return sum;

	}

	console.log(progressivenew);
	progressivenew;
}*!/
{
	// console.log(foo);
	/!*function foo1() {
		console.log("我是函数");
	}
	var foo1 = 200;
	/!*var foo1 = function bar() {
		console.log("我是函数");
		console.log(bar);

	}
	console.log(typeof bar);
	console.log(foo1());*!/!*!/
	function fun1() {
		var i = 0 ;
		console.log(i ++)
	}
	fun1();
	fun1();

}
*/
{
	/*function fun1() {
		var i = 0;
		return function fun2(n) {
			console.log( n + i ++)

		}

	}
	fun1()(10);
	fun1()(10);*/
}
{


	//分解质因数
	/*function toPrime(num) {
		for (let i = 2; i <  num ; i++) {
			if (num % i == 0) {
				return i + "*" + toPrime(num / i);
			}
		}
		return num;
	}
	console.log(toPrime(24))*/
	// function fib(n) {
	// 	if( n <= 2){
	// 		return 1;
	// 	}else{
	// 		return fib(n-1)  + fib(n-2)
	// 	}
	// }
	// for(let i = 1 ; i <= 20 ;  ++i){
	// 	console.log(fib(i) + "+" + i);
	// }
	// {
	// 	for (var i = 1 , j = 1 , k = 1  ; i <= 10; ++i) {
	// 		k = j + k ;
	// 		console.log(k);
	// 		j = j + k
	// 		console.log(j + "+" + i);
	//
	// 	}
	// }
	// {
	// 	function intimacyNumber(num1, num2) {
	// 		return sumOfDivisors(num1) == num2 && sumOfDivisors(num2) == num1 ;
	// 	}
	// 	function sumOfDivisors(num) {
	// 		let sum = 0;
	// 		for (let i = 1; i < num; i++) {
	// 			if (num % i == 0) {
	// 				sum += i;
	// 			}
	// 		}
	// 		return sum;
	// 	}
	// 	var tBeginTime2 = new Date;
	// 	for (let i = 0; i <= 100000; i++) {
	// 		let j = sumOfDivisors(i)
	// 		i < j && j < 100000 && intimacyNumber(i, j) ? console.log(i, j) : 0;
	// 	}
	// 	var tEndTime2 = new Date;
	// }
	// {
	// 	// console.log("第一个亲密数算法的执行起始时间" + tBeginaTime1 + "---" + tEndTime1 , "间隔时间"  + (tEndTime1 - tBeginaTime1));
	// 	console.log("第一个亲密数算法的执行起始时间" + tBeginTime2 + "---" + tEndTime2, "间隔时间" + (tEndTime2 - tBeginTime2));
	// }

	//实践题目稍后在思考
	// function fun1(m,n){
	// 	function fun2(m =5){
	// 		console.log(m + n);
	// 	}
	// 	return fun2;
	// }
	// var fun = fun1(6,6);
	// var fun3 = fun1(6,5);
	// console.log(fun);
	// console.log(fun3);
	// fun(8);
	// fun3(8);

	{
		// function f0() {
		// 	var i = 0 ;
		// 	return function f1(a ) {
		// 		console.log(a + i++);
		// 	}
		// }


		// var bar = f0();

		// f0()(2);
		// f0()(2);
		// f0()(2);
		// bar(2);
		// bar(2);
		// bar(2);
	}
	{
		//函数声明提升的优先级测试
		// var foo = 100;
		// function foo() {
		// 	console.log("我是foo 函数");
		// }
		// console.log(foo);

	}
	{
		//闭包闭包
		// function add(){
		// 	var i = 0
		// 	arr = [];
		// 	for(; i < 10; i++){
		// 		arr.push(function(){
		// 			console.log(i);
		// 		});
		// 	}
		// 	return arr;
		// }
		// var temp = add();
		// temp[0]();

		var a = /[a-z][1-9]/.test("abbcccc1c");
		console.log(a);
	}


}

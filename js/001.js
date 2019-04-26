//鸡兔同笼问题练习
/*var chickenNumber = Number(prompt("请输入鸡的数量"));
var rabbitNumber  = Number(prompt("请输入鸭的数量"));
var headNumber = chickenNumber + rabbitNumber;
var legNumber = chickenNumber*2+rabbitNumber*4;
alert("您好，一共有头"+headNumber+";腿"+legNumber);*/


//求用户输入的三位数，各个位数之和；

var inputNumber = Number(prompt("请您输入一个任意位的数字"));
/*function calculator(a) {
	var firstNumber = ~~(a/100);
	alert(firstNumber);
	var secondNumber = ~~((a-firstNumber*100)/10);
	alert(secondNumber);
	var thirdNumber = a-firstNumber*100-secondNumber*10;
	alert(thirdNumber);
	var sumInputNumber = firstNumber+secondNumber+thirdNumber;
	alert(sumInputNumber);
	
}
*/

//计算任意位数的各个位数相加;

function calculatorForAnyNumber(a) {

	var digit = digitCalculator(a);

	alert("我猜您输入的数字肯定是" + digit + "位数");
	console.log("您输入的数字" + a);
	var sum = 0;
	for (let i = 1; i <=digit ; i++) {
		sum = sum+calculatorNNumber(i,inputNumber);

	}
     console.log(sum);
	// 用于储存数组组成的数字

}
//用于计算第n位的数字；
function calculatorNNumber(n,num) {
//	传入要计算的数字位数
	var numberAtN = parseInt(num/Math.pow(10,n-1))%10
	return numberAtN;
}

//计算用户输入的数字的首位数的数字
function calculatorFirstNumber(a) {
	var digit = digitCalculator(a);
	var firstNumber;
	firstNumber = ~~(a / Math.pow(10, digit - 1));
	// console.log(firstNumber);
	return firstNumber;
}

// calculatorFirstNumber(inputNumber);


//计算用户输入的数字的位数；
function digitCalculator(a) {
	for (i = 1; i > 0; i++)
		if ((a - (Math.pow(10, i) - 1)) <= 0) {

			return i;
			// break;
		}

}
//暂时注释，此为计算任意一数字各位数相加之和
calculatorForAnyNumber(inputNumber);
//3.




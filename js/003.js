//取值任意三位数字
function calculator(a, b) {
	var inspectedData = a;
	var firstNumber = ~~(inspectedData / 100);
	var secondNumber = ~~(inspectedData / 10) % 10;
	var thirdNumber = inspectedData % 10;

	//测试基佬数
	var testedData = b;
	var firstNumber_Test = ~~(testedData / 100);
	var secondNumber_Test = ~~(testedData / 10) % 10;
	var thirdNumber_Test = testedData % 10;
	if (firstNumber == firstNumber_Test && secondNumber == secondNumber_Test && thirdNumber == thirdNumber_Test
		|| firstNumber == firstNumber_Test && secondNumber == thirdNumber_Test && thirdNumber == secondNumber_Test
		|| firstNumber == secondNumber_Test && secondNumber == firstNumber_Test && thirdNumber == thirdNumber_Test
		|| firstNumber == secondNumber_Test && secondNumber == thirdNumber_Test && thirdNumber == firstNumber_Test
		|| firstNumber == thirdNumber_Test && secondNumber == firstNumber_Test && thirdNumber == secondNumber_Test
		|| firstNumber == thirdNumber_Test && secondNumber == secondNumber_Test && thirdNumber == firstNumber_Test

	) {
		return true;
	} else {
		return false;
	}
}

function testFlower() {
	for (let i = 100; i <= 999; i++) {

		for (let j = 100; j <= 999; j++) {
			if (calculator(i, j) && !verify_gayPairs(i, j)) {
				console.log("终于等到你" + i + "+" + j);

			} else {
				console.log(i + "+" + j)
			}

		}
	}
}

//另一种计算基佬输的方式
function verify_gayPairs(num1, num2) {
	var obj1 = getDigits(num1);
	var obj2 = getDigits(num2);
	if (obj1.sum == obj2.sum && obj1.product == obj2.product && obj1.someCalculate == obj2.someCalculate) {
		return true;
	} else {
		return false;
	}

	function getDigits(num) {
		var obj = {};
		obj.oneDigit = num % 10;
		obj.tenDigit = ~~(num / 10) % 10;
		obj.hundredDigit = ~~(num / 100);
		obj.sum = obj.oneDigit + obj.tenDigit + obj.hundredDigit;
		obj.product = obj.oneDigit * obj.tenDigit * obj.hundredDigit;
		obj.someCalculate = (obj.oneDigit + obj.tenDigit) * (obj.oneDigit + obj.hundredDigit) * (obj.tenDigit +
			obj
				.hundredDigit);
		return obj;
	}
}

console.log("激动人心的时刻到了");
testFlower();
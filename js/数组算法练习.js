//数组算法课堂练习
/*

var arr = [-34343, 5, -56, 6657, 34, 667, -3434, 454523, 6767, 435, 67, -234234, 45, 6565, 435345, 5656, 445, 65, 7987, 67, 45, -32445, -45, 45, -334];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
	sum += arr[i];
}
console.log(sum);*/

/*
{
	let arr = ["001", "002" , "003"]
	arr.unshift("我是新插入的");
	console.log(arr);
	let a = arr.pop();
	console.log(a)
	console.log(arr);

	let arrNumber = [34, 34, 45, 5, 6, 3, 4, 32, 34, 65, 56, 46, 67, 32, 45, 68, 798, 45, 43, 234, 234];;
	let arrEvenNumber = [];
	let arrOddNumber = [];
	for (let i = 0 ; i  <  arrNumber.length ; i ++){
		arrNumber[i] % 2 == 0 ? arrEvenNumber.push(arrNumber[i]) : arrOddNumber.push(arrNumber[i]);
	}
	console.log(arrEvenNumber);
	console.log(arrOddNumber);
}
*/
{
	var arrTestSplice = ["A", "B", "C", "D", "E", 'F'];
	arrTestSplice.join("M");
	var arr001 = [1, 2, 2, 3, 4, 5];
	arrTestSplice.splice(3, 1, "汉字", "汉字", "汉字");
	// console.log(arrTestSplice);
	// for (let i = arrTestSplice.length - 1; i >= 0; i--) {
	// 	arrTestSplice[i] == "汉字" ? arrTestSplice.splice(i, 1) : 0;
	//
	// }
	// console.log(arrTestSplice)
	// let arrTestSplit = arrTestSplice;
	console.log(arr001.join("-"));
	console.log(arr001);
	// arr001.push("我是被推进来的");
	// // console.log(arrTestSplice);
	// // arrTestSplice.reverse();
	// console.log(arr001.unshift("3",4,"",6));
	// console.log(arr001);
	// console.log(arrTestSplice);

}

{
	var n = 0;
	//冒泡排序练习
	let arrNumber = [34, 3, 3, 3, 1, 2, 2, 2, 53, 234, 34, 45, 234];

	function bubleArray(arr) {

		for (let i = 0; i < arr.length - 1; i++) {
			for (let j = 0; j < arr.length - 1 - i; j++) {
				// console.log(++n);
				if (arr[j] > arr[j + 1]) {
					let temp = arr[j];
					arr[j] = arr[j + 1];
					arr[j + 1] = temp;
				}
			}
		}
		console.log("排序后的数组"+arr);
	}
	bubleArray(arrNumber);

	//测试执行效率的函数
	function timeTest(a) {
		let beginTime = new Date;
		a;
		let endTime = new Date;
		console.log("你的函数执行时间为" + (endTime - beginTime));

	}

	//自己的排序算法
	//找到一个一个数组中最大的数字

	var arrSorted = [];
	var n = 0
	var m = 0

	/*	function maxOfArray(arr, arr1 = []) {

			for (let i = 0; i < arr.length - 1; i++) {
				if (arr[i] > arr[i + 1]) {
					let temp = arr[i];
					arr[i] = arr[i + 1];
					arr[i + 1] = temp;
				}
			}
			arr1.push(arr.pop());
			console.log("排序算法的执行次数" + ++n);
			arr.length == 1 ? arr1.push(arr.pop()) : maxOfArray(arr, arr1);
		}*/

//排序算法的再次修改,目标,去除另一个参数
	function maxOfArray(arr) {
		if (arr.length <= 1) {
			return arr;
		}
		let arr1 = [];
		for (let i = 0; i < arr.length - 1; i++) {
			console.log(++n);
			if (arr[i] > arr[i + 1]) {
				let temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;
			}
		}
		arr1.push(arr.pop());
		return arr1.concat(maxOfArray(arr));
	}

	// console.log(maxOfArray(arrNumber));


	// timeTest(maxOfArray(arrNumber,arrSorted));
	// console.log(arrSorted);
	// timeTest(bubleArray(arrNumber));

	//插值排序算法

	function insertOrder(arr) {
		let result = [-Infinity, Infinity];
		for (let i = 0; i < arr.length; i++) {
			for (let j = 0; j < result.length; j++) {
				console.log("插值排序执行的次数" + ++m);
				if (arr[i] > result[j] && arr[i] <= result[j + 1]) {
					result.splice(j + 1, 0, arr[i]);
					break;
				}
			}
		}
		result.shift();
		result.pop();
		return result;
		console.log(result);

	}

	// insertOrder(arrNumber);

	//快速排序算法
	function quickOrder(arr) {
		if (arr.length <= 1) {
			return arr;
		}
		let bigger = [];
		let smaller = [];
		let pivot = arr[0];
		for (let i = 1; i < arr.length; i++) {
			console.log(++n);
			arr[i] > pivot ? bigger.push(arr[i]) : smaller.push(arr[i]);

		}
		return quickOrder(smaller).concat(pivot, quickOrder(bigger));


	}

	// console.log(quickOrder(arrNumber));
	// quickOrder(arrNumber);
	// console.log(insertOrder(arrNumber))
	// insertOrder(arrNumber)
	/*	arrNumber.sort(function (a,b) {
			return a - b
		})
		console.log(arrNumber);*/


	var quicksort = function (arr) {
		if (arr.length <= 1) {
			return arr;
		}
		var pivotIndex = Math.floor(arr.length / 2);
		var pivot = arr.splice(pivotIndex, 1)[0];
		var left = [];
		var right = [];
		for (var i = 0; i < arr.length; i++) {
			console.log(++m);
			if (arr[i] < pivot) {
				left.push(arr[i]);
			} else {
				right.push(arr[i]);
			}
		}
		return quicksort(left).concat([pivot], quicksort(right));
	};
	// var array = [8, 7, 0, 7, 5, 2, 5, 3, 1];
	// quicksort(arrNumber)
	// insertOrder(arrNumber);


	//数组去重算法

	function uniq(arr) {
		let result = [];
		for (let i = 0; i < arr.length; i++) {
			if (!result.includes(arr[i])) {
				result.push(arr[i]);
			}

		}
		return result;
	}

	// console.log(uniq(arrNumber));
	/*function uniqAnother(arr) {
		let result = [];
		for (let i = 0; i < arr.length ; i++) {
			if(result.indexOf(arr[i]) == -1){
				result.push(arr[i]);
		}
		return result;
	}
	console.log(uniqAnother(arrNumber));*/

	/*	let arrSample = "你好,我是,一个字符串,我要变成,数组".split(",")
		console.log(arrSample);
		console.log(arrSample[1]);

		console.log(arrSample.splice(1,1));
		console.log(arrSample);*/
	function uniqSencond(arr) {
		let arr1 = arr.concat();
		for (let i = 0; i < arr1.length; i++) {
			for (let j = arr1.length - 1; j > i; j--) {
				arr1[i] == arr1[j] ? arr1.splice(j, 1) : 0;
			}
		}
		return arr1;
	}

	// console.log(arrNumber);
	// console.log(arrNumber.splice(6, 1, "我是意外"));
	// console.log(arrNumber);
	//
	//
	// console.log(uniqSencond(arrNumber));
	// console.log(arrNumber);
}

{
// 	let arrOne = [1, 2, 3, 4];
// 	let arrTwo = [0, 2, 3, 5];
//	求数组的交集

	/*	function intersection(arr1,arr2) {
			let result = [];
			for (let i = 0; i < arr2.length ; i++) {
					if(arr1.includes(arr2[i])){
						result.push(arr2[i]);
					}
				}
			return result;
			}
		console.log(intersection(arrOne,arrTwo));

		function difference(arr1,arr2) {
			let result = [];
			for (let i = 0; i < arr1.length; i++) {
				if(!arr2.includes(arr1[i])){
					result.push(arr1[i])
				}
			}
			return result;
		}
		console.log(difference(arrOne,arrTwo));*/
//数组交集的兼容性写法
	//工具函数,代替includes;
	let arrOne = [1, 2, 3, 4];
	let arrTwo = [0, 2, 3, 5];

	function checkExist(arr, item) {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] == item) {
				return false;
			}
		}
		return true;
	}

	console.log(checkExist(arrOne, 5));
	console.log(checkExist(arrTwo, 5));

	function intersectionOther(arr1, arr2) {
		let result = [];
		// let arr = arr2;
		for (let i = 0; i < arr1.length; i++) {
			if (!checkExist(arr2, arr1[i])) {
				result.push(arr1[i]);
			}
		}
		return result;
	}

	function differenceOther(arr1, arr2) {
		let resultArray = [];
		// let arr = arr2;
		for (let i = 0; i < arr1.length; i++) {
			if (checkExist(arr2, arr1[i])) {
				resultArray.push(arr1[i]);
			}
		}
		return resultArray;
	}

	console.log(differenceOther(arrOne, arrTwo));
	console.log(intersectionOther(arrOne, arrTwo));


//数组扁平化

	function flattenArray(arr) {
		let result = [];
		for (let i = 0; i < arr.length; i++) {
			//写错的案例
			// !Array.isArray(arr[i]) ? result.push(arr[i]) : result.concat(flattenArray(arr[i]));
			//修改后的代码
			!Array.isArray(arr[i]) ? result.push(arr[i]) : result = result.concat(flattenArray(arr[i]));
			/*	if(!Array.isArray(arr[i])){
					result.push(arr[i]);
				}else{
					// result = result.concat(flattenArray(arr[i]));
					//测试此时的result 的值
					// console.log(result);
				}*/
		}
		return result;
	}

	let arrThree = [1, 3, 4, [3, 4, 5, 6], 45, [23, 45, 67], 67, [23, 5, 6, 77]];
	let arrFour = [1, 3, 4, 66, 77, 4, 7];

	// console.log(flattenArray(arrThree));
	// console.log(arrThree == arrThree.concat());

	//课后练习题目
	//返回数组中的n 项 随机样本

	function sample(arr, n) {
		let result = [];
		while (result.length != n) {
			let randomIndex = parseInt(Math.random() * arr.length);
			if (!result.includes(arr[randomIndex])) {
				result.push(arr[randomIndex]);
			}
		}
		return result;
	}

	// console.log(sample(arrFour, 5));

	/*function random(arr) {
		let result = [];
		let index = [];
		while (index.length != arr.length) {
			let randomIndex = parseInt(Math.random() * arr.length);
			index.includes(randomIndex) ? 0 : index.push(randomIndex);
		}
		for (let i = 0; i < index.length; i++) {
			result[i] = arr[index[i]];
		}
		console.log(index);
		return result;
	}*/

	//返回数组的随机样本;
	function random(arr) {
		let result = [];
		let index = [];
		while (index.length != arr.length) {
			let randomIndex = parseInt(Math.random() * arr.length);
			if (!index.includes(randomIndex)) {
				index.push(randomIndex);
				result.push(arr[randomIndex]);
			}
		}
		console.log(index);
		return result;
	}

	// console.log(random(arrFour));
	console.log([1, 3, 4].join(""))

}
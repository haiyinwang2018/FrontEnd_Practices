//对象

{
	function Rev(str) {
		let temp = "";
		temp = str.split("").reverse().join("");
		console.log(temp);
	}

	 Rev("你好");
// 	//大小写字母互转
// 	function changeAlphabet(str) {
// 		let tempUpper = "";
// 		let tempLower = "";
// 		let result = "";
// 		tempUpper = str.toUpperCase();
// 		tempLower = str.toLowerCase();
// 		for (let i = 0; i < str.length; i++) {
// 			if (tempUpper[i] == str[i]) {
// 				result += tempLower[i];
// 			} else {
// 				result += tempUpper[i];
// 			}
// 		}
// 		return result;
// 	}
//
	var a = "AAAAABCcddedddfssdffffffffff";
//
// 	// console.log(changeAlphabet(a));
//
	function changeAlphabetAnother(str) {
		let result = "";
		for (let i = 0; i < str.length; i++) {
			// str.toUpperCase()[i] == str[i] ?  result += str.toLowerCase()[i]:result += str.toUpperCase()[i];
			str[i].toUpperCase() == str[i] ? result += str[i].toLowerCase() : result += str[i].toUpperCase();
		}
		return result;
	}
//
// 	console.log(changeAlphabetAnother(a));
// 	console.log(a.substring(2, 5));
// 	console.log(a.substring(5, 2));
// 	//字符串循环右移练习
// 	var char = "东西南北中"
//
// 	function rightchange(char, n) {
// 		let result = [];
// 		var n = n % char.length;
// 		for (let k = 0, i = char.length; k < i; k++) {
// 			k + n <= i - 1 ? result[k + n] = char[k] : result[k + n - i] = char[k];
// 		}
// 		return result;
// 	}

	// console.log(rightchange(char ,411));

	//寻找连续次数最多的字符
	var a = "AAfffaaffassss";
	// function maxChar(char) {
	// 	let countSum =[[0]];
	// 	for (var i = 0; i < char.length; i += count  ) {
	// 		var count = 1;
	// 		for (var j = i+1; j <char.length; j++) {
	// 			if (char[i] == char[j]) {
	// 				count++;
	// 			}else{
	// 				// countSum.push(subArr);
	// 				if(countSum[0][0] < count){
	// 					var subArr =[];
	// 					subArr.push(count,char[i]);
	// 					countSum.pop();
	// 					countSum.push(subArr);
	// 				}
	// 				break;
	// 			}
	// 		}
	// 	}
	// 	if(countSum[0][0] < count){
	// 		var subArr = [];
	// 		subArr.push(count,char[i-count]);
	// 		countSum.pop();
	// 		countSum.push(subArr);
	// 	}
	// 	console.log(countSum);
	// }
	// function maxChar(char) {
	// 	let maxValue = "";
	// 	let maxLength = 0;
	// 	let i = 0;
	// 	let j = 1;
	// 	while(i < char.length) {
	// 		if(char[i] == char[j]){
	// 			j++;
	// 		}else{
	// 			if(j-i >= maxLength){
	// 				maxLength = j-i;
	// 				maxValue = char[i];
	// 			}
	// 			i = j;
	// 			j ++;
	//
	// 		}
	//
	//
	//
	// 	}
	// 	console.log(maxLength,maxValue);
	//
	// }
	function maxAnother(char) {
		let i = 0;
		let count = 0;
		let maxLength = 0;
		let maxChar = "";

		while (i < char.length) {
			if (char[i] == char[i + 1]) {
				count++;
			} else {
				count > maxLength ? maxLength = count : 0;
				maxChar = char[i];
				count = 0;
			}
			i++;
		}
		console.log(maxChar);
	}

	maxAnother(a);
	// maxChar(a);

	//英文单词首字母大写

	function firstWordToUpper(char) {
		let result = char.charAt(0).toUpperCase();
		for (let i = 1, state = 0; i < char.length; i++) {
			state = char.charAt(i - 1) == " " && char.charAt(i) != " "
			if (state) {
				result += char.charAt(i).toUpperCase();
			} else {
				result += char.charAt(i);
			}
		}
		return result;
	}

	// function firstWordToUpper(char) {
	// 	let temp = char.split(" ");
	// 	for (let i = 0; i < temp.length ; i++) {
	// 		temp[i] = temp[i][0].toUpperCase() + temp[i].slice(1);
	// 	}
	// 	return temp.join(" ") ;
	// }
	var sentence = "i love  java script very much";
	// var sentenceAnother = "东南西北中";
	firstWordToUpper(sentence);

	console.log(firstWordToUpper(sentence));
	//字符串循环右移

	//找到循环一位的方法,然后按要求循环

	//字符串拼接方式
	/*	function rightChangeOne(char, n) {
			var n = n % char.length;
			var str1 = char.slice(0, -n);
			var str2 = char.slice(-n );
			console.log(str2 + str1);
		}*/
	// rightChangeOne(sentenceAnother,3);

// console.log(sentence.split(" "))

	//练习题互为变位词
	function isAnagram(str1, str2) {
		var temp = [];
		// var str1 = str1.split("");
		var str2 = str2.split("");
		for (let i = 0; i < str1.length; i++) {
			for (let j = 0; j < str2.length; j++) {
				if (str1[i] == str2[j]) {
					temp.push(str2[j]);
					str2.splice(j, 1);
					break;
				}
			}

		}
		// console.log(temp.join(''));
		return temp.join("") === str1 && str2.join() === "";
	}

	var str1 = "silentw";
	var str2 = "listenw";
	console.log(isAnagram(str1, str2));




}
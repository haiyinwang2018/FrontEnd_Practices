/*
var s;
s = Number(prompt("您好请输入六边形的边长，我会告诉你的它的面积"));
var area = 3/2*Math.sqrt(3)*Math.pow(s,2);
alert("您好六边形的面积是"+area+"平方；");*/
//测试数组索引为变量

/*
var a = [1,2,3];
for(i=1;i<=3;i++){
	console.log(a[i-1]);
}*/
/*
//大小水仙花数判断
var inspectedData = Number(prompt("请输入一个三位数字"));
var firstNumber = ~~(inspectedData/100);
var secondNumber= ~~(inspectedData/10)%10;
var thirdNumber = inspectedData%10;

console.log(""+firstNumber+secondNumber+thirdNumber);
var sum =Math.pow(firstNumber,3)+Math.pow(secondNumber,3)+Math.pow(thirdNumber,3);
if(sum>inspectedData){
	console.log("您输入的数字是大水仙花数");

}else if(sum==inspectedData){
	console.log("您好你输入的数字是水仙花数");
}else {
	console.log("您好，您输入的是小水仙花数");
};
//测试基佬数
var testedData =  Number(prompt("请再次输入一个三位数字"));
var firstNumber_Test = ~~(testedData/100);
var secondNumber_Test= ~~(testedData/10)%10;
var thirdNumber_Test = testedData%10;
if(   firstNumber==firstNumber_Test&&secondNumber==secondNumber_Test&&thirdNumber==thirdNumber_Test
	||firstNumber==firstNumber_Test&&secondNumber==thirdNumber_Test&&thirdNumber==secondNumber_Test
	||firstNumber==secondNumber_Test&&secondNumber==firstNumber_Test&&thirdNumber==thirdNumber_Test
	||firstNumber==secondNumber_Test&&secondNumber==thirdNumber_Test&&thirdNumber==firstNumber_Test
	||firstNumber==thirdNumber_Test&&secondNumber==firstNumber_Test&&thirdNumber==secondNumber_Test
	||firstNumber==thirdNumber_Test&&secondNumber==secondNumber_Test&&thirdNumber==firstNumber_Test

	){
	console.log("您好，您输入的两个数字是基佬数");
}else{
	console.log("您好，您输入的两个数字不是基佬数")
};
console.log ("今天测试结束了，下次再玩");
*/

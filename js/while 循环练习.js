 //简单小练习
 {
 	let a = 40 ;
 	while (a <= 20){

 		console.log(++a);
    }
 }

 //随机数证明练习

 {
 	let a = 3 ;
 	let b = 8 ;
 	let r ;
    r = parseInt(Math.random()*(b -a)) + a;
 	// r = Math.random(b - a)+a ;
 	console.log("[a ,b) 之间的随机数"+r);
	/* var a ,b ;
	// Math.random(b-a) + a;
	console.log(a);*/
 }
 // 1-100 的质数寻找.
 /*{
 	for(let i = 1; i <=100 ; i++){
 		let count = 0 ;
 		for (j = 1 ; j <= i ; j++){
 			if (i % j  == 0){
 			    count++;
		    }
	    }
 		if(count == 2){
 			console.log(i);
	    }
    }
 }*/
 /*

 {

	for (i = 1; i <= 10000; i++) {

		 for (j = 1; j <= 10000; j++) {
		 	 let foo = Math.abs(Math.pow(i, 2) - Math.pow(j, 2));
			 if ( foo == 168) {
				 console.log(i + "+" + j);
				 if(i < j){
					 console.log("该数字为:" + (Math.pow(i, 2) - 100) );
				 }else{

					 console.log("该数字为:" + (Math.pow(j, 2) - 100) );
				 }

			 }
		 }
	 }*/

// 完美数的计算  方法一方程法
/*	 for (i = 1; i <= 10000; i++) {
		 for (j = 1; j <= i; j++) {
		 	 let foo = Math.pow(i, 2) - Math.pow(j, 2);
			 if ( foo == 168) {
				 console.log(i + "+" + j);
					 console.log("该数字为:" + (Math.pow(j , 2) - 100) );

			 }
		 }
	 }
 }*/
 //完美数的计算 开方取整对比法
/*
 {
 	for (let a = -10000; a <= 10000; a++){
 		let testone = Math.sqrt(a + 100);
 		let testtwo = Math.sqrt(a + 168 + 100);
 	    if(testone == parseInt(testone) && testtwo == parseInt(testtwo)){
 	    	console.log("哈哈找到你了:" + a);
        }
    }

 }*/
// 苹果 梨 的计算
 /*{
 	let sum = 0 ;
 	for (let i  = 0 ; i <= 200 ; i++) {
 		for(let j = 0; j <= 200 ; j++){
 			for (let k = 0; k <= 200 ; k++){
 				if(i*3 + j*2 + k*1 == 200 && i + j + k ==100){
 					sum++;
 					console.log("你可以购买苹果的数量:\t" + i + "鸭梨的数量:\t " + j + " 桃子的数量:\t" + k );
			    }
		    }
	    }

    }
 	console.log(sum);
 }*/

 //累加含6或9 的数字之和,1-100
 /*{
	 let sum = 0
	 for (let i = 0; i <=0; i++){
	 	for (let j = 0; j <=9 ; j++){
	 		for (let k = 0 ; k <= 9; k++){
	 			var r1 = 100 * i + 10 * j + k * 1;
	 			if (i ==6 || i == 9 || j == 6 || j == 9 || k ==6 || k==9) {
	 				sum += r1;
			    }
		    }
	    }
	 }
	 console.log("最后符合要求的数字是" + r1 );
	 console.log("符合规定的数字累加之和为:" + sum);
 }*/
 // 数字金子塔;
 /*{
 	 let str;
 	 for (let  i = 1 ; i <= 20 ; i += 1){
 	 	str = "";
 	 	if (i < 10){
 	 		str = "           ";
		    for ( let l =20 - i  ; l >= 1 ; l --){
			    str += "  ";
		    }
	    } else {
		    for ( let l =20 - i  ; l >= 1 ; l --){
			    str += "   ";
		    }
	    }
        for(let l = i ; l >= 2 ; l -- ){
            str += l + " "  ;
	    }
        for(let k = 1 ; k <= i  ; k ++){
            str += k + " ";
	    }

 	 	console.log(str);
     }
 }
*/




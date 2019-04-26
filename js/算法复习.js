{
	function Foo(x, y) {
		this.x = 2;
		this.arr = [{x: x, y: y}]
	}

var foo = new Foo(2,3);
	console.log(foo);


}
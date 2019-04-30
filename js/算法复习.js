{
function A(){
		this.x = 1,
		this.y = {
			foo : this.x
		}

	}
	var a = new A();
	console.log(a);



}
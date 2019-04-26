function Tank(owner) {
	// 中介者
	this.owner = owner;
	// 位置
	this.x = 200;
	this.y = 200;
	// 自己的速度
	this.speed = 2;
	// 自己的方向
	this.direction = "b";
	// 是否在移动
	this.isMoving = false;
}

// 更新
Tank.prototype.update = function () {
	if (this.isMoving) {
		if (this.direction == "l") {
			this.x -= this.speed;
		} else if (this.direction == "t") {
			this.y -= this.speed;
		} else if (this.direction == "r") {
			this.x += this.speed;
		} else if (this.direction == "b") {
			this.y += this.speed;
		}
	}
}
// 改变方向，拐弯修正
Tank.prototype.changeDirection = function (direction) {
	// 往上拐或者往下拐
	if (direction == "t" || direction == "b") {
		// 需要进行水平方向的修正，修正到18的倍数上
		this.x = Math.round(this.x / 18) * 18;
	} else if (direction == "l" || direction == "r") {
		// 需要进行水平方向的修正，修正到18的倍数上
		this.y = Math.round(this.y / 18) * 18;
	}

	this.direction = direction;
}
// 渲染
Tank.prototype.render = function () {
	// 绘图的方法
	this.owner.ctx.drawImage(this.owner.R["tank_" + this.direction + ".gif"], this.x, this.y);
}
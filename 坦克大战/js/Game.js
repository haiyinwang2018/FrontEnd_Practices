// 游戏类
function Game() {
	// canvas
	this.canvas = document.getElementById("canvas");
	// 画布上下文
	this.ctx = this.canvas.getContext("2d");
	// 资源数组
	this.Rarr = [
		"bullet_b.png",
		"bullet_l.png",
		"bullet_r.png",
		"bullet_t.png",
		"tank_b.gif",
		"tank_l.gif",
		"tank_r.gif",
		"tank_t.gif"
	];
	// 资源对象
	this.R = {};
	// 已经加载好的
	var alreadydone = 0;
	// 备份
	var self = this;
	// 遍历资源
	for (var i = 0; i < this.Rarr.length; i++) {
		// 写IIFE的目的是把i变为局部变量，教材上P206页
		(function (i) {
			// new出他们的虚拟图片
			var image = new Image();
			// 设置src
			image.src = "images/" + self.Rarr[i];
			// 加载完毕，异步函数
			image.onload = function () {
				// 写如资源对象
				self.R[self.Rarr[i]] = this;
				// 计数
				alreadydone++;
				// 如果已经加载好的，刚好是图片总数，游戏开始
				if (alreadydone == self.Rarr.length) {
					//游戏开始
					self.start();
				}
			}
		})(i);
	}

	//监听
	document.onkeydown = function (e) {
		if (e.keyCode == 37) {
			self.tank.changeDirection("l");
			self.tank.isMoving = true;
		} else if (e.keyCode == 38) {
			self.tank.changeDirection("t");
			self.tank.isMoving = true;
		} else if (e.keyCode == 39) {
			self.tank.changeDirection("r");
			self.tank.isMoving = true;
		} else if (e.keyCode == 40) {
			self.tank.changeDirection("b");
			self.tank.isMoving = true;
		}
	}
	document.onkeyup = function (e) {
		if (e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40) {
			self.tank.isMoving = false;
		}
	}
}

Game.prototype.start = function () {
	// 备份
	var self = this;
	// 实例化坦克类
	this.tank = new Tank(this);

	// 定时器
	this.timer = setInterval(function () {
		// 清屏
		self.ctx.clearRect(0, 0, 600, 400);
		// 更新坦克
		self.tank.update();
		// 渲染坦克
		self.tank.render();
	}, 20);
}
//地图矩阵  根据素材调整矩阵
function Map(game) {
	//这个地图数据集很有意思 ,存储三个信息 地图位置坐标, 图片类型  ,用于画图遍历
	//有两个坐标信息 , 地图只存有图片在地图的位置;准确的说是背景性质的图片,敌人玩家拥有自己的数据库
	this.game = game;
	this.dataCenter = [];
	// this.mapSize = {};
	this.dataSwitch = false;

	let self = this;
	//存储需要画出的图片类型
	let submit = document.querySelector("#submit");
	let sprite = document.querySelector("#sprite");
	let spriteType = document.querySelector("#spriteType");


	submit.onclick = function () {
		//获取对应精灵的尺寸,作为在地图上的尺寸;
		if (sprite.value && spriteType.value) {
			spriteV = sprite.value.replace(/^\s+|\s+$/g, "");
			spriteTypeV = spriteType.value.replace(/^\s+|\s+$/g, "");
			var spriteXSize = self.game.res.imageSize[spriteV][spriteTypeV].xSize > 32 ? 32 : self.game.res.imageSize[spriteV][spriteTypeV].xSize;
			var spriteYSize = self.game.res.imageSize[spriteV][spriteTypeV].ySize > 32 ? 32 : self.game.res.imageSize[spriteV][spriteTypeV].ySize
			//如果没有输入,数据中心不取数据,地图数据
			//获取鼠标所在位置的矩阵,并存入地图数据中心;V
			self.game.canvas.onmousemove = function (e) {
				var e = e || window.event;
				//确保每个点都在对应的小格子的左上角
				//并且将所有的笔触经过的矩阵,存入数组
				//画图参数          图片对象       切片定位x, y     切片大小 地图定位x,y 地图大小
				// self.ctx.drawImage(self.R.tile, 32 *2, 32 * 0, 32, 32, 100, 100, 32, 32);
				self.dataSwitch && self.dataCenter.push({
					img: self.game.res.imagesSet[spriteV],
					sprite_x: self.game.res.types[spriteV][spriteTypeV].x,
					sprite_y: self.game.res.types[spriteV][spriteTypeV].y,
					spriteSize_x: self.game.res.imageSize[spriteV][spriteTypeV].xSize,
					spriteSize_y: self.game.res.imageSize[spriteV][spriteTypeV].ySize,
					map_x: parseInt(e.offsetX / spriteXSize) * spriteXSize,
					map_y: parseInt(e.offsetY / spriteYSize) * spriteYSize,
					mapSize_x: spriteXSize,
					mapSize_y: spriteYSize
				})
			}

		}
		// 地图数据输出
		document.querySelector("#exportData").onclick = function () {
			document.querySelector("#textarea").innerText = JSON.stringify(self.dataCenter);

		}
		//数据开关切换
		self.game.canvas.ondblclick =function () {
			self.dataSwitch = !self.dataSwitch;
		}
		//地图擦除
		document.querySelector("#erase").addEventListener("click", function () {

			//点击橡皮擦后,先停止画图;
			self.dataSwitch = false;
			self.game.canvas.onmousemove = function (e) {
				var e = e || window.event;
				for (let i = self.dataCenter.length -1; i >= 0; i--) {
					if (self.dataCenter[i].map_x == parseInt(e.offsetX / spriteXSize) * spriteXSize &&
						self.dataCenter[i].map_y == parseInt(e.offsetY / spriteYSize) * spriteYSize) {
						console.log("我删除了一次重复项", self.dataCenter[i].map_x,self.dataCenter[i].map_y,i,self.dataCenter)
						self.dataCenter.splice(i, 1);
						// break;

					}

				}
			}


		})
	}
}

//地图更新
Map.prototype.update = function () {
	this.removeSame();
}
//数组去重,避免重复画图;
Map.prototype.removeSame = function () {
	if (this.dataCenter.length) {
		for (let i = this.dataCenter.length - 1; i >= 0; i--) {
			for (let j = i - 1; j >= 0; j--)
				if (this.dataCenter[i].map_x == this.dataCenter[j].x && this.dataCenter[i].map_y == this.dataCenter[j].map_y) {
					this.dataCenter.splice(i, 1);
					break;
				}
		}
	}

};
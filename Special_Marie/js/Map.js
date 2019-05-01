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
        //如果没有输入,数据中心不取数据,地图数据
        if (sprite.value && spriteType.value) {
            var someType = { 
                sprite: sprite.value.replace(/^\s+|\s+$/g, ""),
                // sprite_child: sprite_child.value.replace(/^\s+|\s+$/g, ""),
                spriteType: spriteType.value.replace(/^\s+|\s+$/g, "")
            };
            self.mapSize = {
                //someType.spriteType  这几个值 有些特殊,我试一下
                x: self.game.res.imageSize[someType.sprite][someType.spriteType].xSize,
                y: self.game.res.imageSize[someType.sprite][someType.spriteType].ySize
            };

            // self.dataSwitch = true;
        }
        //此处绑定的是document, 试试单独绑定canvas 试试;
        self.game.canvas.onmousemove = function (e) {
            // console.log("我是画布中的鼠标移动,我被触发了");
            var e = e || window.event;
            //确保每个点都在对应的小格子的左上角
            //并且将所有的笔触经过的矩阵,存入数组
            self.dataSwitch && self.dataCenter.push({
                x: parseInt(e.offsetX / self.mapSize.x) * self.mapSize.x,
                y: parseInt(e.offsetY / self.mapSize.y) * self.mapSize.y,
                z: someType
            });
        }

    }
    document.querySelector("#exportData").onclick = function () {
        document.querySelector("#textarea").innerText = JSON.stringify(self.dataCenter);

    }
    document.ondblclick = function () {
        self.dataSwitch = !self.dataSwitch;
    }

    document.querySelector("#erase").addEventListener("click", function () {

        //点击橡皮擦后,先停止画图;
        self.dataSwitch = false;
        self.game.canvas.onmousemove = function (e) {
            var e = e || window.event;
            for (let i = 0; i < self.dataCenter.length; i++) {
                if (self.dataCenter[i].x == parseInt(e.offsetX / self.mapSize.x) * self.mapSize.x &&
                    self.dataCenter[i].y == parseInt(e.offsetY / self.mapSize.y) * self.mapSize.y) {
                    self.dataCenter.splice(i, 1);
                    break;

                }

            }
        }


    })
}

Map.prototype.update = function () {
    //数组去重,避免重复画图;
    if (this.dataCenter.length) {
        for (let i = this.dataCenter.length - 1; i >= 0; i--) {
            for (let j = i - 1; j >= 0; j--)
                if (this.dataCenter[i].x == this.dataCenter[j].x && this.dataCenter[i].y == this.dataCenter[j].y) {
                    this.dataCenter.splice(i, 1);
                    break;
                }
        }
    }

};
//资源加载

function Game(Map, Player, Enemy, Resources) {
    //初始化一个32*32 的矩阵
    this.map = new Map();
    this.resources = new Resources();
    //让地图获得图片资源的尺寸// 待会封装成函数
    this.map.mapSize.x = this.resources.imageSize.mario.xSize;
    this.map.mapSize.y = this.resources.imageSize.mario.ySize;

    this.player = new Player();
    this.enemy = new Enemy();
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.loadedCount = 0;
    this.amount = Object.keys(this.resources.imagesSet).length;
    let self = this;
    //图片资源的加载
    for (let k in this.resources.imagesSet) {
        let img = new Image();
        img.src = "images/" + this.resources.imagesSet[k];
        img.onload = function () {
            self.loadedCount++;
            self.resources.imagesSet[k] = img;
            self.loadedCount == self.amount && self.start();
        }
    }


    // this.dataCenter = [{
    //     image :dataCenter[i].z,
    //     type  : someType,
    //     locationSet : someLocationSet
    // },]


}
// 通用的画图函数的, 需要的参数 ,图片 , 精灵位置 , 地图位置 
Game.prototype.draw = function (dataCenter ) {
    if (dataCenter) {
        for (let i = 0; i < this.map.dataCenter.length; i++) {
            this.ctx.drawImage(
                this.resources.imagesSet[dataCenter[i].z.sprite],
                this.resources.types[dataCenter[i].z.sprite][dataCenter[i].z.spriteType].x,
                this.resources.types[dataCenter[i].z.sprite][dataCenter[i].z.spriteType].y,
                this.resources.imageSize[dataCenter[i].z.sprite].xSize,
                this.resources.imageSize[dataCenter[i].z.sprite].ySize,
                dataCenter[i].x,
                dataCenter[i].y,
                this.resources.imageSize[dataCenter[i].z.sprite].xSize,
                this.resources.imageSize[dataCenter[i].z.sprite].ySize
            )
        }
    }

}
Game.prototype.start = function () {
    this.frame = 0
    var self = this;

    setInterval(function () {
        self.ctx.clearRect(0, 0, self.canvas.width, self.canvas.height);
        self.frame++;
        self.ctx.font = " 30px  Arial";
        self.ctx.fillText(self.frame, 40, 40);
        self.update();
        console.log(self.map.dataCenter)
        self.draw(self.map.dataCenter);
        //画图参数          图片对象       切片定位x, y     切片大小 地图定位x,y 地图大小
        // self.ctx.drawImage(self.R.tile, 32 *2, 32 * 0, 32, 32, 100, 100, 32, 32);
    }, 200)
}
Game.prototype.update = function () {
    this.player.update();
    this.enemy.update();
    this.map.update();

}
Game.prototype.render = function () {

}
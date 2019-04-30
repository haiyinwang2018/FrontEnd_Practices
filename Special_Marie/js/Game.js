//资源加载

function Game() {
    //初始化一个32*32 的矩阵
    this.res = new Resources();
    this.map = new Map(this);

    this.player = new Player("mario",this);
    this.enemy = new Enemy();
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.loadedCount = 0;
    this.amount = Object.keys(this.res.imagesSet).length;
    let self = this;
    //图片资源的加载
    for (let k in this.res.imagesSet) {
        let img = new Image();
        img.src = "images/" + this.res.imagesSet[k];
        img.onload = function () {
            self.loadedCount++;
            self.res.imagesSet[k] = img;
            self.loadedCount == self.amount && self.start();
        }
    }


    // this.dataCenter = [{
    //     image :dataCenter[i].z,
    //     type  : someType,
    //     locationSet : someLocationSet
    // },]

    this.groundtheme = document.getElementById("groundtheme");
    this.lostlife = document.getElementById("lostlife");
    this.up = document.getElementById("up");
    this.coin = document.getElementById("coin");
    this.jump = document.getElementById("jump");
    this.hurry = document.getElementById("hurry");
    this.gameover = document.getElementById("gameover");
    this.groundtheme.load();
    this.lostlife.load();
    this.up.load();
    this.jump.load();
    this.hurry.load();
    this.coin.load();
    this.gameover.load();


}
// 通用的画图函数的, 需要的参数 ,图片 , 精灵位置 , 地图位置 
Game.prototype.draw = function (dataCenter) {
    if (dataCenter.length) {
        for (let i = 0; i < dataCenter.length; i++) {
            //开始画图
            //画图参数          图片对象       切片定位x, y     切片大小 地图定位x,y 地图大小
            // self.ctx.drawImage(self.R.tile, 32 *2, 32 * 0, 32, 32, 100, 100, 32, 32);

            this.ctx.drawImage(
                //精灵图片对象 ,大图
                this.res.imagesSet[dataCenter[i].z.sprite],
                //大图中对应小图定位
                //第0项 64
                this.res.types[dataCenter[i].z.sprite][dataCenter[i].z.spriteType].x,
                //第0项 0
                this.res.types[dataCenter[i].z.sprite][dataCenter[i].z.spriteType].y,
                //对应小图的尺寸
                //第0项的图片尺寸32 *32
                this.res.imageSize[dataCenter[i].z.sprite][dataCenter[i].z.spriteType].xSize,
                this.res.imageSize[dataCenter[i].z.sprite][dataCenter[i].z.spriteType].ySize,
                //对应地图的位置
                //第0项的 地图位置 74 *21
                dataCenter[i].x,
                dataCenter[i].y,
                //对应地图的大小,因为地图的位置和精灵的大小一致,所以用同一个值;
                this.res.imageSize[dataCenter[i].z.sprite][dataCenter[i].z.spriteType].xSize ,
                this.res.imageSize[dataCenter[i].z.sprite][dataCenter[i].z.spriteType].ySize 
            )
        }
    }

}
//尝试给角色设计一个画图函数,最后在合并
Game.prototype.drawrole = function (dataCenter) {
//开始画图
            //画图参数          图片对象       切片定位x, y     切片大小 地图定位x,y 地图大小
            // self.ctx.drawImage(self.R.tile, 32 *2, 32 * 0, 32, 32, 100, 100, 32, 32);
        this.ctx.drawImage(
                //精灵图片对象 ,大图
                this.res.imagesSet[dataCenter.role.role],
                //大图中对应小图定位
                //此处待会需要存数组遍历,以动画
                dataCenter.sprite.x,
                dataCenter.sprite.y,
                //切片的尺寸,此处的walk 需要一个数组存///储
                this.res.imageSize[dataCenter.role.role].walk.xSize,
                this.res.imageSize[dataCenter.role.role].walk.ySize,
                //这个精灵切片在地图中的位置
                dataCenter.map.x,
                dataCenter.map.y,
                this.res.imageSize[dataCenter.role.role].walk.xSize,
                this.res.imageSize[dataCenter.role.role].walk.ySize
            )
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
        // console.log(self.player.dataCenter)
        self.draw(self.map.dataCenter);
        self.drawrole(self.player.dataCenter);
    }, 200)
}
Game.prototype.update = function () {
    this.player.update();
    this.enemy.update();
    this.map.update();
    

}
Game.prototype.render = function () {

}
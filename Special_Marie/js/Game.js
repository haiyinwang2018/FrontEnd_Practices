//资源加载

function Game(Map, Player, Enemy ,Resources) {
    //初始化一个32*32 的矩阵
    this.map = new Map(32, 32);
    this.player = new Player();
    this.enemy = new Enemy();
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.resources = new Resources();
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
    document.addEventListener("mousemove", function (e) {
        var e = e || window.event;
        //确保每个点都在对应的小格子的左上角
        //并且将所有的笔触经过的矩阵,存入数组
        self.map.mapLocationSet.push({
            x: parseInt(e.offsetX / self.map.mapSize.x) * self.map.mapSize.x,
            y: parseInt(e.offsetY / self.map.mapSize.y) * self.map.mapSize.y
        });

    })


}
Game.prototype.draw = function(someImage,someType ){
    for (let i = 0; i < this.map.mapLocationSet.length; i++) {
        this.ctx.drawImage(
            this.resources.imagesSet[someImage],
            this.resources.types[someImage][someType].x,
            this.resources.types[someImage][someType].y,
            this.map.mapSize.x,
            this.map.mapSize.y,
            this.map.mapLocationSet[i].x,
            this.map.mapLocationSet[i].y,
            this.map.mapSize.x,
            this.map.mapSize.y
        )
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
        self.draw("tile","grass");
        //画图参数          图片对象       切片定位x, y     切片大小 地图定位x,y 地图大小
        // self.ctx.drawImage(self.R.tile, 32 *2, 32 * 0, 32, 32, 100, 100, 32, 32);
    //     for (let i = 0; i < self.map.mapLocationSet.length; i++) {
    //         self.ctx.drawImage(
    //             self.resources.imagesSet.tile,
    //             self.resources.types.tile.grass.x,
    //             self.resources.types.tile.grass.y,
    //             self.map.mapSize.x,
    //             self.map.mapSize.y,
    //             self.map.mapLocationSet[i].x,
    //             self.map.mapLocationSet[i].y,
    //             self.map.mapSize.x,
    //             self.map.mapSize.y
    //         )
    //     }

    }, 200)
}
Game.prototype.update = function () {
    this.player.update();
    this.enemy.update();
    this.map.update();

}
Game.prototype.render = function () {

}
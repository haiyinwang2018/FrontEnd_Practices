//资源加载
/**
 *临时测试let 对作用域的劫持
 *
 * @param {*} R
 */
function Game(Map, Player, Enemy) {
    this.map = new Map();
    this.player = new Player();
    this.Enemy  = new Enemy();
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.R = {
        "man": "man.png",
        "girl": "girl.png"
    }
    this.loadedCount = 0;
    this.amount = Object.keys(this.R).length;
    let self = this;
    for (let k in this.R) {
        let img = new Image();
        img.src = "images/" + this.R[k];
        img.onload = function () {
            self.loadedCount++;
            self.R[k] = img;
            self.loadedCount == self.amount && self.start();
        }
    }
    Game.prototype.start = function () {
        this.frame = 0
        var self = this;
        setInterval(function(){
            self.ctx.clearRect(0, 0 ,self.canvas.width, self.canvas.height);
            self.frame ++ ;
            self.ctx.font = " 30px  Arial";
            self.ctx.fillText(self.frame ,40 ,40);
            // this.ctx.fillRect(20, 20, 100, 200);
            // this.ctx.drawImage(this.R.man, 100, 100)

        },200)
    }
    Game.prototype.update = function(){
        this.player.update();
        this.enemy.update();
        this.map.update();
    }
    Game.prototype.render = function(){

    }


}
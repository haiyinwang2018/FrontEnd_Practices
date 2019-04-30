function Player(role, game) {
    this.game = game;
    this.step = 0;
    this.jumpIndex = 10;
    this.jumpState = true;
    this.isMoving = false;
    //初始的高度
    this.startJump = 400 ;
    this.speed = 8;
    //获取对应精灵的状态初值,用来展示动画
    //重新整理玩家的数据中心  包含地图位置, 精灵位置
    this.dataCenter = {
        map: {
            x: 20,
            y: 400,
        },
        sprite: {
            x: this.game.res.types[role]["walk"].x,
            y: this.game.res.types[role]["walk"].y
        },
        role: {
            role: role
        }

    };
    var self = this;
    document.onkeydown = function (e) {
        var e = e || window.event;
        switch (e.keyCode) {
            //空格键
            case 32:
                self.isMoving = true;
                self.direction = "up";
                console.log("我是向上,我执行了");
                break;
            //
            case 37:
                self.isMoving = true;
                console.log(e.keyCode)
                self.direction = "left";
                break;
                case 38:
                self.isMoving = true;
                self.direction = "up";
                break;
                //右键
                case 39:
                self.isMoving = true;
                self.direction = "right";
                self.game.groundtheme.play();
                break;
                case 40:
                self.isMoving = true;
                self.direction = "down";
                break;
            default: break;

        }

    }
    document.onkeyup = function () {
        self.step = 2
        self.isMoving = false;
        //精灵回复站立
        self.dataCenter.sprite.x = self.game.res.imageSize[self.dataCenter.role.role].walk.xSize * self.step + 180;
    }
}
Player.prototype.update = function () {
    this.isMoving && (this.direction == "right" ||this.direction =="left") && this.walk();
    this.isMoving && this.direction == "up" && this.jump();


}
Player.prototype.walk = function () {
    this.checkSystem(this.direction);
    //动画播放
    this.step++;
    this.step %= 7;
    this.dataCenter.sprite.x = this.game.res.imageSize[this.dataCenter.role.role].walk.xSize * this.step + 180;
    //人物移动
    if(this.direction == "right"){
        this.dataCenter.map.x += this.speed;
    }else{
        this.dataCenter.map.x -= this.speed;
    }

}
Player.prototype.checkSystem = function (direction) {
    //遍历地图数据,检测障碍物
    if (this.game.map.dataCenter.length) {
        switch (direction) {
            case "left":
                {
                };
                break;
            case "right": {
            };
                break;
            case "up":
                {
                    for (let i = 0; i < this.game.map.dataCenter.length; i++) {
                        if (this.dataCenter.map.x - this.game.map.dataCenter[i].x > 0 &&
                            this.dataCenter.map.x - this.game.map.dataCenter[i].x < 30 &&
                            this.dataCenter.map.y - this.game.map.dataCenter[i].y < 35 && this.dataCenter.map.y - this.game.map.dataCenter[i].y > 0) {
                            console.log(i,"我碰到砖头了", this.dataCenter.map.y, this.game.map.dataCenter[i + 1].y);
                            this.game.map.dataCenter[i].z.sprite = "tile";
                            this.game.map.dataCenter[i].z.spriteType = "greywall";
                            this.game.map.dataCenter[i].y -=10;
                            // return false;
                        } else {
                            // return true;
                        }

                    };
                }
                break;
            case "down":
                {
                };
                break;
            default: break;
        }
    }
}
// Player.prototype.jump = function () {
//     //跳跃音乐
//     var jumpmusic = document.querySelectorAll("audio")[6];
//     jumpmusic.load();
//     jumpmusic.play();
//     this.jumpIndex += 4;
//     this.jumpIndex %= 50;
//     this.checkSystem(this.direction);
//     if (this.jumpIndex < 25) {
//         this.dataCenter.map.y -= this.jumpIndex;
//     } else {
//         this.dataCenter.map.y += parseInt(this.jumpIndex / 2) - 5;
//     }
// }
Player.prototype.jump = function () {
    this.checkSystem(this.direction);
    // this.game.jump.load();
    this.game.jump.play();

    //判断是否可以跳
    if (this.direction == "up") {
        //执行上跳跃,还是下跳跃
        if (this.jumpState) {
            this.dataCenter.map.y -= this.jumpIndex;
            if (this.startJump - this.dataCenter.map.y == 50) {
                this.jumpState = false;
            }
        } else {
            this.dataCenter.map.y += this.jumpIndex;
            if (this.startJump == this.dataCenter.map.y) {
                this.jumpState = true;
                this.direction = "";
            }
        }
    }
}
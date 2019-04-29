function Player(res, role) {
    //终于决定传入资源对象
    this.res = res;
    this.dataCenter = [{
        x: 100,
        y: 100,
        z: {
            //精灵所在大图
            sprite: role,
            //精灵所在主题
            //处理尺寸的size
            sprite_child: "walk",
            //精灵图最后的类型是,一组动作,或行走,或
            //如果和地图渲染的格式一致的话,需要数组,不断插入,移除;
            spriteType: "walk"
        }
    }];
    this.isMoving = false;
}
Player.prototype.update = function () {
    this.speed = 12

    var self = this;
    document.onkeydown = function (e) {
        var e = e || window.event;
        switch (e.keyCode) {
            case 32:
                self.isMoving = true;
                self.walk();
                self.dataCenter[0].x += self.speed;
                break;
            case 37:
                self.isMoving = true;
                break;
            case 38:
                self.isMoving = true;
                break;
            case 39:
                self.isMoving = true;
                break;
            case 40:
                self.isMoving = true;
                break;
            default: break;

        }

    }


}
Player.prototype.walk = function () {
    for (let i = 0; i < 7; i++) {
        this.dataCenter.z.spriteType.x = 20;

    }
}
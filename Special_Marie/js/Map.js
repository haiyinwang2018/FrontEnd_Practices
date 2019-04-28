//地图矩阵  根据素材调整矩阵
function Map(w, h) {
    this.mapLocationSet = [];
    this.mapSize = { x: w, y: h };
    this.dataSwitch = true;

    let self = this;
    //存储需要画出的图片类型
    let chooseImage = document.querySelector("#chooseImage");
    chooseImage.onclick = function (e) {
        var e = e || window.event;
        var someType = e.target.innerText;
        self.dataSwitch = true;
        document.onmousemove = function (e) {
            var e = e || window.event;
            //确保每个点都在对应的小格子的左上角
            //并且将所有的笔触经过的矩阵,存入数组
            if(e.offsetX >= 0 && e.offsetY >= 0){
                var x = e.offsetX ;
                var y = e.offsetY ;
            }else {
                var x = 0;
                var y = 0;
            }
        
            self.dataSwitch && self.mapLocationSet.push({
                x: parseInt( x / self.mapSize.x) * self.mapSize.x,
                y: parseInt( y / self.mapSize.y) * self.mapSize.y,
                z: someType
            });
        }

    }
    document.querySelector("#exportData").onclick = function(){
        document.querySelector("#textarea").innerText = JSON.stringify(self.mapLocationSet);
    
    }
    document.ondblclick = function(){
        self.dataSwitch = false;
    }

    document.querySelector("#erase").addEventListener("click", function () {

        console.log("我是橡皮擦", chooseImage);
        //点击橡皮擦后,先停止画图;
        self.dataSwitch = false;
        document.onmousemove = function (e) {
            var e = e || window.event;
            for (let i = 0; i < self.mapLocationSet.length; i++) {
                if (self.mapLocationSet[i].x == parseInt(e.offsetX / self.mapSize.x) * self.mapSize.x &&
                    self.mapLocationSet[i].y == parseInt(e.offsetY / self.mapSize.y) * self.mapSize.y) {
                    self.mapLocationSet.splice(i, 1);
                    console.log(i);
                    break;

                }

            }
        }


    })
}

Map.prototype.update = function () {
    //数组去重,避免重复画图;
    if (this.mapLocationSet.length) {
        for (let i = this.mapLocationSet.length - 1; i >= 0; i--) {
            for (let j = i - 1; j >= 0; j--)
                if (this.mapLocationSet[i].x == this.mapLocationSet[j].x && this.mapLocationSet[i].y == this.mapLocationSet[j].y) {
                    this.mapLocationSet.splice(i, 1);
                    break;
                }
        }
    }

}
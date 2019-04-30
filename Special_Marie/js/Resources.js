function Resources() {
    this.imagesSet = {
        "man": "man.png",
        "girl": "girl.png",
        "tile": "tile.bmp",
        "mogu": "mogu.png",
        "mix": "mix.png",
        "coin": "coin.png",
        "mario": "mario.png",
        "mix": "mix.png"
    }
    //画图时候需要的数据  
    this.imageSize = {
        //每个精灵的每个主题的图片的尺寸不一致
        mix: {
            yancong: {
                xSize: 60,
                ySize: 120
            },
            littleyancong:{
                xSize: 30,
                ySize: 33
            },
            flower :{
                xSize: 20,
                ySize:15
            }
        },
        mogu: {
            //测试一下蘑菇的尺寸
            redmogu: {
                xSize: 32,
                ySize: 32,
            }
        },
        tile: {
            redwall: {
                xSize: 32,
                ySize: 32
            },
            greywall: {
                xSize: 32,
                ySize: 32
            },
            grass: {
                xSize: 32,
                ySize: 32
            },
            waterflow: {
                xSize: 32,
                ySize: 32
            }
        },
        //大玛丽的尺寸
        mario: {
            walk: {
                xSize: 35,
                ySize: 50
            },
            die: {
                xSize: 50,
                ySize: 50
            }
        },
        coin: {
            coin_rotate: {
                xSize: 125,
                ySize: 125
            }
        }

    }

    this.types = {
        tile: {
            "redwall": {
                x: 0 * this.imageSize.tile.redwall.xSize,
                y: 0 * this.imageSize.tile.redwall.ySize
            },
            "greywall": {
                x: 1 * this.imageSize.tile.greywall.xSize,
                y: 0 * this.imageSize.tile.greywall.ySize
            },
            "grass": {
                x: 2 * this.imageSize.tile.grass.xSize,
                y: 0 * this.imageSize.tile.grass.ySize
            },
            "waterflow": {
                x: 3 * this.imageSize.tile.waterflow.xSize,
                y: 0 * this.imageSize.tile.waterflow.ySize
            }
        },
        mario: {
            //0 所在的位置,准备用 变量代替,以控制位置;
            "walk": {
                x: 180 + 0 * this.imageSize.mario.walk.xSize,
                y: 55 + 0 * this.imageSize.mario.walk.ySize
            },
            "die": {
                x: 180 + 0 * this.imageSize.mario.die.xSize,
                y: 215 + 0 * this.imageSize.mario.die.ySize
            }
        },
        coin: {
            "coin_rotate": {
                x: 0 + 0 * this.imageSize.coin.coin_rotate.xSize,
                y: 0 + 0 * this.imageSize.coin.coin_rotate.xSize
            }

        },
        mogu: {
            "redmogu": {
                x: 0 + 1 * this.imageSize.mogu.redmogu.xSize,
                y: 0 + 0 * this.imageSize.mogu.redmogu.ySize
            }
        },
        mix: {
            "yancong": {
                x: 255,
                y: 185
            },
            "flower":{
                x :20,
                y : 33
            },
            "littleyancong":{
                x: 0,
                y: 88
            }
        }
    }
}

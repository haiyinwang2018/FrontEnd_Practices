function Resources() {
    this.imagesSet = {
        "man": "man.png",
        "girl": "girl.png",
        "tile": "tile.bmp",
        "mogu": "mogu.png",
        "mix": "mix.png",
        "coin": "coin.png",
        "mario": "mario.png"
    }
    this.imageSize = {
        tile: {
            xSize: 32,
            ySize: 32
        },
        //大玛丽的尺寸
        mario: {
            xSize: 35,
            ySize: 50
        },
        coin: {
            xSize: 32,
            ySize: 32
        }

    }

    this.types = {
        tile: {
            "redwall": {
                x: 0 * this.imageSize.tile.xSize,
                y: 0 * this.imageSize.tile.ySize
            },
            "greywall": {
                x: 1 * this.imageSize.tile.xSize,
                y: 0 * this.imageSize.tile.ySize
            },
            "grass": {
                x: 2 * this.imageSize.tile.xSize,
                y: 0 * this.imageSize.tile.ySize
            },
            "waterflow": {
                x: 3 * this.imageSize.tile.xSize,
                y: 0 * this.imageSize.tile.ySize
            }
        },
        mario: {
            //0 所在的位置,准备用 变量代替,以控制位置;
            "walkToLeft": {
                x: 180 + 0 * this.imageSize.mario.xSize,
                y: 55  + 0 * this.imageSize.mario.ySize
            }
        }
    }
}

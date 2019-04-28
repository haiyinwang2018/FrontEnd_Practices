function Resources() {
    this.imagesSet = {
        "man": "man.png",
        "girl": "girl.png",
        "tile": "tile.bmp"
    }

    this.types = {
        tile: {
            "redwall": { x: 0 * 32, y: 0 },
            "greywall": { x: 1 * 32, y: 0 },
            "grass": { x: 2 *32, y: 0 },
            "waterflow": { x: 3 *32, y: 0 }
        }
    }
}

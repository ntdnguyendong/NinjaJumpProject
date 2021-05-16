var _singleTon = require('SingleTon');

cc.Class({

    extends: cc.Component,

    properties: {
        btnPlay: cc.Button,
        menuLayout: cc.Node,
        gameLayout: cc.Node,
        gameOverLayour: cc.Node,
    },

    onLoad() {
        this.menuLayout.active = true;
        this.gameLayout.active = false;
        this.gameOverLayour.active = false;
    },

    start() {

    },

    update(dt) {
        this.gameOver();
    },

    playGame() {
        this.menuLayout.active = false;
        this.gameLayout.active = true;
    },

    gameOver() {
        if (this.gameLayout.active == true) {
            if (_singleTon._instance.flag == true) {
                this.gameOverLayour.active = true;
            }
        }
    }
});

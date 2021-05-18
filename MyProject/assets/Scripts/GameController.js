var _singleTon = require('SingleTon');

cc.Class({

    extends: cc.Component,

    properties: {
        btnPlay: cc.Button,
        menuLayout: cc.Node,
        gameLayout: cc.Node,
        gameOverLayout: cc.Node,
    },

    onLoad() {
        this.menuLayout.active = true;
        this.gameLayout.active = false;
        this.gameOverLayout.active = false;
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
                this.gameOverLayout.active = true;
            }
        }
    },

    returnHome() {
        _singleTon._instance.flag = false;
        _singleTon._instance.score = 0;
        let scene = cc.director.getScene(this.Scene);
        cc.director.loadScene(scene.name)
    }
});

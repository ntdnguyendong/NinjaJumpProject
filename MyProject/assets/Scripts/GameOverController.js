var _singleTon = require('SingleTon');

cc.Class({
    extends: cc.Component,

    properties: {
        curScore : cc.Label,
        bestScore : cc.Label,
        _bestScore : 0,
    },

    onLoad () {
        let scoreStorge = cc.sys.localStorage.getItem('bestScore');
        if(scoreStorge !== null){
           this._bestScore = JSON.parse(scoreStorge);
           this.bestScore.string = this._bestScore;
        }else{
            this._bestScore =0;
        }
    },

    start () {

    },

    update (dt) {
        this.checkScore();
    },

    checkScore(){
        this.curScore.string = _singleTon._instance.score;
        let newScore = parseInt(this.curScore.string);
        cc.log(newScore);
        if(newScore > this._bestScore){
            cc.sys.localStorage.setItem('bestScore', JSON.stringify(newScore));
            cc.log(this._bestScore + "dcm");
            this.bestScore.string = newScore;
        }
    }
});

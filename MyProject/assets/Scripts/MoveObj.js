cc.Class({
    extends: cc.Component,

    properties: {
        sprite : cc.Sprite,
        _timer : 0,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    update (dt) {
        if(this.node.x > -1000){
            this.node.setPosition(cc.v2(this.node.x - 10, this.node.y));
        }else{
            this.node.destroy();
        }
        
    },
   
});

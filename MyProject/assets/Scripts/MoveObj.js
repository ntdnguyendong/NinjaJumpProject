cc.Class({
    extends: cc.Component,

    properties: {
        speed : 3,
        // finalPositionX : -1000,
        // finalPositionY : -150,
    },

    start () {
        // this.MoveToLeft();
    },

    update (dt) {
        if(this.node.x > -1000){
            this.node.setPosition(cc.v2(this.node.x - this.speed, this.node.y));}
        // }else{
        //     // this.node.destroy();
        // }
    },

    // MoveToLeft(){
    //     cc.tween(this.node)
    //     .to(this.speed, { position: cc.v2(this.finalPositionX, this.node.y) })
    //     // .to(1, { scale: 2 })
    //     .start()

    // }
});

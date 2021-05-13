cc.Class({
    extends: cc.Component,

    properties: {
    },

    start () {
        // this.MoveToLeft();
    },

    update (dt) {
        if(this.node.x > -1000){
            this.node.setPosition(cc.v2(this.node.x - 3, this.node.y));}
        // }else{
        //     // this.node.destroy();
        // }
    },

    // MoveToLeft(){
    //     cc.tween(this.node)
    //         .to(8,{position : cc.v2(-1000, this.node.y)})
    //         .call(()=>{
    //             this.node.destroy();
    //         })
    //         .start();
    // }
});

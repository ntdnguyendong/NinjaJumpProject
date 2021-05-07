cc.Class({
    extends: cc.Component,

    properties: {
        jumpPosition: 0,
        force: 0,
        jumpCount : 0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.node.getComponent(cc.Animation).play("RunAnim");
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.jumpPlayer, this);
    },

    start() {

    },

    jumpPlayer(event) {
        switch (event.keyCode) {
            case cc.macro.KEY.space:
                if(this.jumpCount == 0) {
                    this.node.getComponent(cc.Animation).play("Jump");
                    this.node.getComponent(cc.RigidBody).applyForceToCenter(new cc.Vec2(0, this.force += 150000), true);
                    this.jumpCount ++;
                    cc.log(this.jumpCount);
                    cc.log(this.force);

                } else if(this.jumpCount == 1){
                    this.node.getComponent(cc.Animation).play("Jump");
                    this.node.getComponent(cc.RigidBody).applyForceToCenter(new cc.Vec2(0, this.force), true);
                    this.jumpCount ++;
                    cc.log(this.jumpCount);
                    cc.log(this.force);
                }
                break;
        }
    }
});

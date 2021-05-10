cc.Class({
    extends: cc.Component,

    properties: {
        jumpPosition: 0,
        velocity: 0,
        jumpCount : 0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.node.getComponent(cc.RigidBody).gravityScale = 1;
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
                    this.node.getComponent(cc.RigidBody).linearVelocity = (new cc.Vec2(0, this.velocity + 300));
                    this.jumpCount ++;
                    cc.log(this.jumpCount);
                    cc.log(this.node.getComponent(cc.RigidBody))
                } else if(this.jumpCount == 1){
                    this.node.getComponent(cc.Animation).play("Jump");
                    this.node.getComponent(cc.RigidBody).linearVelocity = (new cc.Vec2(0, this.velocity + 300));
                    this.jumpCount ++;
                    cc.log(this.jumpCount);
                }
                break;
        }
    },

    checkLanding() {
        
    }
});

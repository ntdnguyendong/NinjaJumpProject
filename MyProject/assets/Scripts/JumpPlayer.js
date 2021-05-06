cc.Class({
    extends: cc.Component,

    properties: {
        jump : 0,
        nextPosition : 0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.getComponent(cc.Animation).play("RunAnim");
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.jumpPlayer,this);
        cc.director.getPhysicsManager().enabled = true;
        this.node.getComponent(cc.RigidBody).fixedRotation  = true;
    },

    start () {

    },

    jumpPlayer(event){
        switch(event.keyCode){
            case cc.macro.KEY.space:
                if(this.jump == 0){
                this.node.getComponent(cc.Animation).play("Jump");
                this.node.setPosition(cc.v2(this.node.x, this.node.y += 150));
                this.node.getComponent(cc.RigidBody).applyForceToCenter(new cc.Vec2(0,100000),true);              
                this.jump = 0;
                console.log("jump");
                }
            break;
        }
    },

    update (dt) {
        this.currentPosition = this.node.position.y;
     
        if(this.jump == 1)
        {
            if(this.node.position.y>this.nextPosition)
            {
                this.node.getComponent(cc.RigidBody).gravityScale = 1;
                
                this.node.getComponent(cc.Animation).play("RunAnim");
                this.node.angle = 0;
                this.jump = 0;
            }
        }
    },
});

var _singleTon = require('SingleTon');

cc.Class({
    extends: cc.Component,

    properties: {
        labelScore: cc.Label,
        _jumpCount: 0,
        _isJump: false,
        _isAlive: true,
        _score: 0,
        _anim: null,
        _rigidBody: null,
        _physicCollider: null,
    },

    onLoad() {
        this._anim = this.node.getComponent(cc.Animation);
        this._rigidBody = this.node.getComponent(cc.RigidBody);
        this._physicCollider = this.node.getComponent(cc.PhysicsBoxCollider);
        this._rigidBody.gravityScale = 4;
        this._anim.play("RunAnim");
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.charMove, this);
    },

    start() {
    },

    update() {
        // this.checkLanding();
    },

    charMove(event) {
        switch (event.keyCode) {
            case cc.macro.KEY.space:
                if (this._isAlive === true && this._isJump === false) {
                    if (this._jumpCount == 0) {
                        this._anim.play("Jump");
                        this._rigidBody.linearVelocity = new cc.Vec2(0, 650);
                        this._jumpCount++;
                    } else if (this._jumpCount == 1) {
                        this._anim.play("Jump");
                        this._rigidBody.linearVelocity = new cc.Vec2(0, 650);
                        this._jumpCount++;
                        this._isJump = true;
                    }
                }
                break;
        }
    },

    onCollisionEnter(other, self) {
        if (other.node.group === "PillarBottom" || other.node.group === "EndWorld") {
            this.tweenDie();
            this._anim.play("Die");
            this._physicCollider.active = false;
            _singleTon._instance.flag = true;
            this._isAlive = false;
            this._isJump = true;
        }
        if(other.node.group === "CheckScore" && this._isAlive == true){
            _singleTon._instance.score ++;
            this.labelScore.string = _singleTon._instance.score;
        }
    },

    onBeginContact(contact, selfCollider, otherCollider) {
        if (contact.colliderB.tag === 0) {
            this._anim.play("RunAnim");
            this._jumpCount = 0;
            this._isJump = false;
        }
        if (contact.colliderB.tag === 1) {
            this._anim.play("Die");
            this.tweenDie();
            this._isAlive = false;
            this._physicCollider.enabled = false;
            _singleTon._instance.flag = true;
        }
    },

    tweenDie() {
        cc.tween(this.node)
            .to(2, { position: cc.v2(this.node.x - 100, this.node.y - 500) })
            .start()
    },

});

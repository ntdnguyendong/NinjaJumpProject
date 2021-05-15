var _singleTon = require('GameManager');

cc.Class({
    extends: cc.Component,

    properties: {
        _jumpCount: 0,
        _isJump: false,
        _isAlive: true,
        _anim: null,
        _rigidBody: null,

    },

    onLoad() {
        this._anim = this.node.getComponent(cc.Animation);
        this._rigidBody = this.node.getComponent(cc.RigidBody);
        this._rigidBody.gravityScale = 4;
        this._anim.play("RunAnim");
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.charMove, this);
    },

    start() {
        _singleTon._instance.flag = true;
        cc.warn(_singleTon._instance.flag);
    },

    update() {
        this.checkLanding();
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

    checkLanding() {
        if (this._jumpCount >= 1) {
            if (this._rigidBody.linearVelocity.y === 0) {
                this._anim.play("RunAnim");
                this._jumpCount = 0;
                this._isJump = false;
            }
        }
    },

    onCollisionEnter(other, self) {
        if (other.node.group === "PillarBottom") {
            this._anim.play("Die");
        }

        if (other.node.group === "EndWorld") {
            cc.log("die")
        }
    },

    onBeginContact(contact, selfCollider, otherCollider) {
        if (contact.colliderB.tag === 1) {
            this._anim.play("Die");
        }
        // if (contact.colliderB.tag === 2) {
        //     this._score++;
        //     // this.labelScore.string = this._score;
        //     // cc.log(this.labelScore);
        // }
    },


});

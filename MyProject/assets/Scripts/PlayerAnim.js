cc.Class({
  extends: cc.Component,

  properties: {
    _jumpCount: 0,
    _anim: null,
    _rigidBody: null,
  },

  onLoad() {
    this._anim = this.node.getComponent(cc.Animation);
    this._rigidBody = this.node.getComponent(cc.RigidBody);
    this._rigidBody.gravityScale = 4;
    this._anim.play("RunAnim");
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.jumpPlayer, this);
  },

  start() {},

  jumpPlayer(event) {
    switch (event.keyCode) {
      case cc.macro.KEY.space:
        if (this._jumpCount == 0) {
          this._anim.play("Jump");
          this._rigidBody.linearVelocity = new cc.Vec2(0, 650);
          this._jumpCount++;
        } else if (this._jumpCount == 1) {
          this._anim.play("Jump");
          this._rigidBody.linearVelocity = new cc.Vec2(0, 650);
          this._jumpCount++;
        }
        break;
    }
  },

  checkLanding() {
    if (this._jumpCount >= 1) {
      if (this._rigidBody.linearVelocity.y === 0) {
        this._jumpCount = 0;
        this._anim.play("RunAnim");
      }
    }
  },

  update() {
    this.checkLanding();
  },
});

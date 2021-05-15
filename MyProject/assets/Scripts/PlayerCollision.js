cc.Class({
  extends: cc.Component,

  properties: {
    labelScore: cc.Label,
    _score: 0,
    _anim: null,
  },

  onLoad() {
    this._anim = this.node.getComponent(cc.Animation);
  },

  start() { },

  onBeginContact(contact, selfCollider, otherCollider) {
    if (contact.colliderB.tag === 1) {
      this._anim.play("Die");
      this.tweenDie();

    }
    if (contact.colliderB.tag === 2) {
      this._score++;
      this.labelScore.string = this._score;
      cc.log(this.labelScore);
    }
  },

  onCollisionEnter(other, self) {
    cc.log(other.node.group);
    if (other.node.group === "PillarBottom") {
      this._anim.play("Die");
      this.tweenDie();
    }
  },

  tweenDie() {
    cc.log("Die")
    cc.tween(this.node)
      .to(1, { position: cc.v2(this.node.x - 100, this.node.y - 200) })
      .start()
  },

  update(dt) { },
});

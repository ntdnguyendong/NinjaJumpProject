cc.Class({
  extends: cc.Component,

  properties: {
    labelScore: cc.Label,
    _score: 0,
  },

  onLoad() {},

  start() {},

  onBeginContact(contact, selfCollider, otherCollider) {
    if (contact.colliderB.tag === 1) {
      this.node.destroy();
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
      this.node.destroy();
    }
  },

  update(dt) {},
});

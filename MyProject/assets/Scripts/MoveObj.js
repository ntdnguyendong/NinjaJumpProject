cc.Class({
  extends: cc.Component,

  properties: {},

  update(dt) {
    if (this.node.x > -1000) {
      this.node.setPosition(cc.v2(this.node.x - 5, this.node.y));
    }
  },
});

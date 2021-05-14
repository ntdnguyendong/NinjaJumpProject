// Learn cc.Class:
cc.Class({
  extends: cc.Component,

  properties: {
    pillarTop: cc.Prefab,
    pillarBottom: cc.Prefab,
    _timer: 0,
  },

  start() {
    this.createPillar();
  },

  update(dt) {
    this._timer += dt;
    if (this._timer >= 2) {
      this.createPillar();
      this._timer = 0;
    }
  },

  createPillar() {
    let randomY = this.getRandom(-180, 180);
    var pillarTop = cc.instantiate(this.pillarTop);
    var pillarBottom = cc.instantiate(this.pillarBottom);
    pillarTop.parent = this.node;
    pillarBottom.parent = this.node;
    pillarTop.setPosition(this.node.x + 1000, randomY + 90);
    pillarBottom.setPosition(this.node.x + 1000, randomY - 90);
  },

  getRandom(min, max) {
    return Math.random() * (max - min) + min;
  },
});

var _singleTon = require('GameManager');

cc.Class({
  extends: cc.Component,

  properties: {},

  update(dt) {
    if (_singleTon._instance != null) {
      if (_singleTon._instance.flag == false) {
        if (this.node.x > -1000) {
          this.node.setPosition(cc.v2(this.node.x - 5, this.node.y));
        } else {
          this.node.destroy();
        }
      }
    }
  }
});

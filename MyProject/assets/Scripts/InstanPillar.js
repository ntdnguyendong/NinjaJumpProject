var _singleTon = require('SingleTon');

cc.Class({
  extends: cc.Component,

  properties: {
    pillarTop: cc.Prefab,
    pillarBottom: cc.Prefab,
    timerInstant : {
      default : 2.2,
      serializable : false,
    },
    randomPositionY : {
      default : 180,
      serializable : false,
    },
    distanceX : {
      default : 1000,
      serializable : false,
    },
    spacePillar : {
      default : 90,
      serializable : false,
    },
    _checkFlag : true,
    _timer: 0,
  },

  onLoad(){},

  start() {
    this.createPillar();
  },

  update(dt) {
    this.checkFlag();
    this._timer += dt;
    if (this._timer >= this.timerInstant && this._checkFlag == true) {
      this.createPillar();
      this._timer = 0;
    }
  },

  createPillar() {
    let randomY = this.getRandom(-this.randomPositionY, this.randomPositionY);
    var pillarTop = cc.instantiate(this.pillarTop);
    var pillarBottom = cc.instantiate(this.pillarBottom);
    pillarTop.parent = this.node;
    pillarBottom.parent = this.node;
    pillarTop.setPosition(this.node.x + this.distanceX, randomY + this.spacePillar);
    pillarBottom.setPosition(this.node.x + this.distanceX, randomY - this.spacePillar);
  },

  getRandom(min, max) {
    return Math.random() * (max - min) + min;
  },

  checkFlag() {
    if (_singleTon._instance != null) {
      if (_singleTon._instance.flag == true){
        this._checkFlag = false;
      }
    }
  }
});

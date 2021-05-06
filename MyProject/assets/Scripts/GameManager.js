// Learn cc.Class:
cc.Class({
    extends: cc.Component,

    properties: {
        prefab : cc.Prefab,
        _timer : 0,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        
    },
    
    update (dt) {
        this._timer += dt;
        if(this._timer >= 3){
            var pillar = cc.instantiate(this.prefab);
            pillar.parent = cc.director.getScene();
            pillar.setPosition(3000,960);
            this._timer = 0;
        }
    },
});

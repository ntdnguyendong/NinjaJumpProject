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
        if(this._timer >= 1){
            var pillar = cc.instantiate(this.prefab);
            pillar.parent = this.node;
            pillar.setPosition(this.node.x + 1000,this.node.y);
            this._timer = 0;
        }
    },
});

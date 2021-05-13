// Learn cc.Class:
cc.Class({
    extends: cc.Component,

    properties: {
        pillarTop : cc.Prefab,
        pillarBottom : cc.Prefab,
        _timer : 0,
    },

    start () {
        this.createPillar();
        
    },
    
    update (dt) {
        this._timer += dt;
        if(this._timer >= 3.5){
            this.createPillar();
            this._timer = 0;
        }
    },

    createPillar(){
        let randomY = this.getRandom(-200,200);
        var pillarTop = cc.instantiate(this.pillarTop);
        var pillarBottom = cc.instantiate(this.pillarBottom);
        pillarTop.parent = this.node;
        pillarBottom.parent = this.node;
        pillarTop.setPosition(this.node.x + 1000, randomY + 80 );
        pillarBottom.setPosition(this.node.x + 1000, randomY - 80);
    },

    getRandom(min, max) {
        return Math.random() * (max - min) + min;
    }
});

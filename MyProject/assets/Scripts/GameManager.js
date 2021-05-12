// Learn cc.Class:
cc.Class({
    extends: cc.Component,

    properties: {
        groundTop : cc.Prefab,
        groundBottom : cc.Prefab,
        // prefab : cc.Prefab,
        _timer : 0,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        
    },
    
    update (dt) {
        this._timer += dt;
        if(this._timer >= 3){
            this.createGround();
            this._timer = 0;
        }
    },

    createGround(){
        var groundTop = cc.instantiate(this.groundTop);
        var groundBottom = cc.instantiate(this.groundBottom);
        groundTop.parent = this.node;
        groundBottom.parent = this.node;
        groundTop.setPosition(this.node.x + 500, this.node.y + 350);
        groundBottom.setPosition(this.node.x + 500, this.node.y - 300);
        // let prefab = cc.instantiate(this.prefab);
        // prefab.parent = this.node;
        // prefab.setPosition(this.node.x, this.node.y);
        // cc.log(prefab.position);
    },

    getRandom(min, max) {
        return Math.random() * (max - min) + min;
    }
});

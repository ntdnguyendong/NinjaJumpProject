var _singleTon = require('SingleTon');
cc.Class({
    extends: cc.Component,

    properties: {
        gameLayoutPrefab : cc.Prefab,
    },

    onLoad () {
        let physics_manager = cc.director.getPhysicsManager();
        let collision_manager = cc.director.getCollisionManager();
        physics_manager.enabled = true;
        collision_manager.enabled = true;
        collision_manager.enabledDebugDraw = false;
        this.createGameLayout();
    },
    
    update() {
    },

    createGameLayout() {
        let gameLayout = cc.instantiate(this.gameLayoutPrefab);
        gameLayout.parent = this.node;
        _singleTon._instance.returnHome == true;
    }
});
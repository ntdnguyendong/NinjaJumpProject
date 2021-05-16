cc.Class({
    extends: cc.Component,

    properties: {

    },

    onLoad () {
        let physics_manager = cc.director.getPhysicsManager();
        let collision_manager = cc.director.getCollisionManager();
        physics_manager.enabled = true;
        collision_manager.enabled = true;
        collision_manager.enabledDebugDraw = false;
    },
});
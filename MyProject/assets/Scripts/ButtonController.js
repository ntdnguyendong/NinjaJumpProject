const Emitter = require('Emitter');

cc.Class({
    extends: cc.Component,

    properties: {
    
    },

    // onLoad () {},

    start () {

    },

    playGameBtn(){
        Emitter.instance.emit('Play_Game');
    }

    // update (dt) {},
});

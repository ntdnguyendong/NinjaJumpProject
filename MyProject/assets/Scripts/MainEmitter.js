const Emitter = require('Emitter');
cc.Class({
    extends: cc.Component,

    properties: {
     
    },
    onLoad () {
        Emitter.instance = new Emitter();
    },
});

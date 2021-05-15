// var SingleTon = cc.Class({
//     extends: cc.Component,

//     properties: () => ({

//     }),

//     statics: {
//         instance: null,
//     },

//     onLoad: function() {
//         SingleTon.instance = this;
//     }
// });

// var GameManager = cc.Class({
//     extends: cc.Component,
//     properties: {
//     },

//     age : 0,

//     statics: {
//         self: null,
//         getInstance: function () {
//             if (GameManager.self == null) {
//                 var node = new cc.Node("GameManager");
//                 GameManager.self = node.addComponent(GameManager);
//             }
//             return GameManager.self;
//         }
//     },

//     Ctor() // constructor
//     {
//         this.scene = new Array();
//         GameManager.self = this;
//         this.age = 20;
//     },
//     onLoad() {
//         cc.game.addPersistRootNode(this.node); //Resident node
//     },

//     getFlag(){
//         cc.log(flag)
//     }

//  });

var GameManager = cc.Class({
    statics : {_instance : null},
    age : 0,
    flag : null,
    ctor(){
        this.age = 20;
        this.flag = false;
    }

});

GameManager._instance = new GameManager();
module.exports = GameManager;
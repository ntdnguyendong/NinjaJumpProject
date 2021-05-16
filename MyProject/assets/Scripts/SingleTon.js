var SingleTon = cc.Class({
    statics : {_instance : null},
    flag : null,
    score : null,
    ctor(){
        this.flag = false;
        this.score = 0;
    }

});

SingleTon._instance = new SingleTon();
module.exports = SingleTon;
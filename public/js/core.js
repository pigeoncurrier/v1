define([], function(){
    var core = (function(){

        var init = function(){
            console.log("i'm inited")
        }

        return {
            init: init
        }

    })();

    return core;
})
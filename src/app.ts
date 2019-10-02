import App from './game';
var game = (function(document){

    const InnovApp = new App({} , document.getElementById('gameContainer'));
    
    return{

        get:function(){
            return InnovApp;
        },

    }

})(document);

var myGame = game.get();
myGame.init();




/**
 * Created by oleksiy.konkin on 1/27/2016.
 */
define('Classes/KeyboardCoacher', ['Classes/LetterPanel'], function(LetterPanel){

    function KeyboardCoacher(){

    };

    KeyboardCoacher.prototype.init = function(){
        console.log("KeyboardCoacher.init");


    }

    return new KeyboardCoacher;
});
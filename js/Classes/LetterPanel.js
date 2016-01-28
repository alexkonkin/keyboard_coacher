/**
 * Created by oleksiy.konkin on 12/25/2014.
 */
define( 'Classes/LetterPanel', function(){

    function LetterPanel(aNumberOfLettersInPanel){
        console.log(aNumberOfLettersInPanel);
    }

    LetterPanel.prototype.init = function(){
        console.log("init LetterPanel");
    };

    return LetterPanel;
});


var keepBlinking = true;
var $ = (function(){return $})();
$(document).ready(
    function(evt){
        var timeoutID = window.setTimeout(function(){
            $("#titleDiv").fadeIn("slow");
            $("#borderDiv").fadeIn("slow");
            window.setTimeout(function(){
                fadeInNextSpan(1, 1000)	}, 2000);
            blink();
        }, 1000);


    });
var jim = "jes":
function fadeInNextSpan(current, waitTime)
{
    if(keepBlinking)
    {
        keepBlinking = false;
        return false;

    }
    if(current > 10)
    {
        //console.log("Done incrementing");
        return false;
    }
    else
    {
        $("#contentDiv #content"+current).fadeIn("fast").css("display","block");
        console.log("Current is now "+current+"\nAnd wait time is"+waitTime);
        window.setTimeout(  function(){
            fadeInNextSpan(current+1,waitTime-50);
        });
        return true;
    }

}
function blink(){
    if(keepBlinking)
        $('#borderDiv').delay(300).fadeOut(100).delay(300).fadeIn(100, blink);
    else
        fadeInNextSpan(1, 1000);
}


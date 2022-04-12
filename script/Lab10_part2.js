var topPosition = 100;
var leftPosition = 100;

function runPuppy() {
                    
    var puppy = document.getElementById("puppy");
    

    if(leftPosition < window.screen.availWidth)
    {
    topPosition += 10;
    leftPosition += 30;
    }
    else
    {
    topPosition = 20;
    leftPosition = 120;
    }

    puppy.style.top = topPosition + 'px';
    puppy.style.left = leftPosition + 'px';


    
// add if it reaches the screen end (you can check with screen.availwidth)					
}

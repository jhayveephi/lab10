function changeColor(){

}

var fontColorArray = ["gray","slategray","darkblue","teal","maroon","black","red","blue","green"];
var bgColorArray = ["azure","linen","snow","powderblue","ivory","lightpink","lightyellow","red","blue","green"];

var curFontColor=1;
var curBgColor=1;


function changeFontColor(selectedColor){

 var col = document.querySelector('#text')
 console.log(selectedColor)
 if(selectedColor == 'red')
 {
  col.style.color = fontColorArray [6]
 }
 else if(selectedColor == 'blue')
 {
  col.style.color = fontColorArray [7]
 }
 if(selectedColor == 'green')
 {
  col.style.color = fontColorArray [8]
 }
  
} 

function changeBgColor(){
 
}

function changeBg(){
  var col = document.getElementById("colorsel");
  var bgcolor = col.options[col.selectedIndex].value
  document.querySelector('#td_text').style.backgroundColor = bgcolor;

    }
  
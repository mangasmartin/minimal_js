/*
How to call it if a button with id 'full' and a wrapper with id 'display' are present in DOM:

document.getElementById("full").addEventListener("click", function(){
  var elm = document.getElementById("display");
  fullscreen(elm,"landscape");
});

Important: event must be "click" and not a touch event in order to work on Android default browser
Orientation can take only two values: "portrait" and "landscape"
*/

function fullscreen(elm,orient){
  elm = elm || document.body;
  if (elm.mozRequestFullScreen) {
    elm.mozRequestFullScreen();
  }
  if (elm.webkitRequestFullScreen) {
    elm.webkitRequestFullScreen();
  }
  if (elm.requestFullScreen) {
    elm.requestFullScreen();
  }
  if (orient){
    var mobiles = ["Android","iPhone","iPad"];
    var is_mobile = false;
    for (var m = 0; m < mobiles.length; m ++){
      if (navigator.userAgent.indexOf(mobiles[m]) > -1) is_mobile = true;
    }
    if (is_mobile) screen.orientation.lock(orient);
  } else {
    //Show an advicement asking to the user to change manually the orientation device
  }
}

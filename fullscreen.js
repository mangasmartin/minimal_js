function fullscreen(orient){
  var elm = document.body;
  if (elm.mozRequestFullScreen) {
    elm.mozRequestFullScreen();
  }
  if (elm.webkitRequestFullScreen) {
    elm.webkitRequestFullScreen();
  }
  if (elm.requestFullScreen) {
    elm.requestFullScreen();
  }
  if (orient && screen.orientation.lock){
    screen.orientation.lock(orient);
  } else {
    //TODO show an advicement asking to the user to change manually the orientation device
  }
}

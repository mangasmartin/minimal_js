//Start function for example in a onload function
//window.addEventListener("load", setDrag);

//Or just calling the function
//setDrag();

function setDrag(){
  var onpress = ("ontouchstart" in document? "touchstart" : "mousedown");
  var onmove = ("ontouchmove" in document? "touchmove" : "mousemove");
  var onrelease = ("ontouchend" in document? "touchstop" : "mouseup");
  var dragging = false, dY, dX, obj = null;

  window.addEventListener(onmove, drag);
  window.addEventListener(onrelease, drop);

  //Setting drag mode with one object
  /*
	document.getElementById("object").addEventListener(onpress, start);
	*/

	//Setting drag mode with some objects
  /*
  var objects = document.getElementsByClassName("draggables");
	for (var o = 0; o < objects.length; o ++){
		objects[o].addEventListener(onpress, start);
	}
  */

  function start(evt){
  	evt.preventDefault();
  	var e = (evt.touches)? evt.changedTouches[0] : evt;
  	obj = this;
  	dY = e.clientY - obj.getBoundingClientRect().top;
  	dX = e.clientX - obj.getBoundingClientRect().left;
  	dragging = true;
  }

  function drag(evt){
  	if (dragging){
  		var e = (evt.touches)? evt.changedTouches[0] : evt;
  		obj.style.transform = "translate(" + (e.clientX - dX) + "px," + (e.clientY - dY) + "px)";
  	}
  }

  function drop(){
  	if (dragging){
  		obj = null;
  		dragging = false;
  	}
  }
}

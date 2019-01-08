var tocar = ("ontouchstart" in document? "touchstart" : "mousedown");
var mover = ("ontouchmove" in document? "touchmove" : "mousemove");
var soltar = ("ontouchend" in document? "touchstop" : "mouseup");

var moviendo = false, dY, dX, obj = null;

window.addEventListener("load", inicio);
window.addEventListener(mover, mover_obj);
window.addEventListener(soltar, soltar_obj);

function inicio(){
	//Setting drag mode to one object
	document.getElementById("objeto").addEventListener(tocar, coger_obj);
	
	//Setting drag mode to some objects
	var objetos = document.getElementsByClassName("arrastables");
	for (var o = 0; o < objetos.length; o ++){
		objetos[o].addEventListener(tocar, coger_obj);
	}
}

function coger_obj(evt){
	evt.preventDefault();
	var e = (evt.touches)? evt.changedTouches[0] : evt;
	obj = this;
	dY = e.clientY - obj.getBoundingClientRect().top;
	dX = e.clientX - obj.getBoundingClientRect().left;
	moviendo = true;
}

function mover_obj(evt){
	if (moviendo){
		var e = (evt.touches)? evt.changedTouches[0] : evt;
		obj.style.top = e.clientY - dY + "px";
		obj.style.left = e.clientX - dX + "px";
	}
}

function soltar_obj(){
	if (moviendo){
		obj = null;
		moviendo = false;
	}
}

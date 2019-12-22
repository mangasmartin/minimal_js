/*
mmSlider
by MangasMartin (2018-2019)
CC0 licence
*/

function mmSlider(elm, opts){
  var elm = document.getElementById(elm);

  var auto = opts.auto || false,
      delay = opts.delay || 4000,
      rundelay = opts.rundelay || 800,
      buttons = opts.buttons || null,
      infinity = opts.infinity || false;

  var touch = ("ontouchstart" in document)? "touchstart" : "mousedown";
  var transform = ("transform" in document.documentElement.style? "transform" : "webkitTransform");

  var frames = elm.getElementsByTagName("li"),
      running = false,
      timetran,
      current = 0,
      prevbt,
      nextbt;

  elm.style.overflow = "hidden";
  frames[0].setAttribute("data-spos",0);
  for (var f = 0; f < frames.length; f ++){
    if (f !== current) frames[f].style.top = "100%";
    frames[f].style.transition = "transform " + rundelay + "ms, opacity " + rundelay + "ms";
    frames[f].setAttribute("data-spos",0);
  }

  if (buttons){
    prevbt = document.getElementById(buttons[0]);
    nextbt = document.getElementById(buttons[1]);
    prevbt.addEventListener("click",prev);
    nextbt.addEventListener("click",next);
  }
  if (buttons && !infinity) prevbt.style.visibility = "hidden";

  if (auto) automatic();

  function automatic(){
    clearInterval(timetran);
    timetran = setInterval(function(){
      run(1,frames.length,0);
    }, delay);
  }

  this.prev = function(){
    if (!running){
      if (!(infinity === false && current === 0)){
        run(-1,-1,frames.length - 1);
        if (auto) automatic();
      }
      if (!infinity && buttons){
        if (current === 1) prevbt.style.visibility = "hidden";
        nextbt.style.visibility = "visible";
      }
    }
  }

  this.next = function(){
    if (!running){
      if (!(infinity === false && current == frames.length - 1)){
        run(1,frames.length,0);
        if (auto) automatic();
      }
      if (!infinity && buttons){
        if (current === frames.length - 2) nextbt.style.visibility = "hidden";
        prevbt.style.visibility = "visible";
      }
    }
  };

  function run(dif,top1,top2){
    running = true;

    var tra = dif * 100;
    var f1 = current;
    var f2 = (current + dif === top1)? top2 : current + dif;
    var spos = frames[f1].getAttribute("data-spos") - tra;
    frames[f1].setAttribute("data-spos",spos);
    var spos2 = frames[f2].getAttribute("data-spos") - tra;
    frames[f2].setAttribute("data-spos",spos2);

    Object.assign(frames[f1].style, {
      "top": "0%",
      "transition-duration": rundelay + "ms",
      "transform": "translateX(" + spos + "%)",
      "opacity": 1
    });

    Object.assign(frames[f2].style, {
      "top": "0%",
      "left": tra + "%",
      "transition-duration": rundelay + "ms",
      "transform": "translateX(" + spos2 + "%)",
      "opacity": 1
    });

    setTimeout(function(){
      frames[f1].setAttribute("data-spos",0);
      Object.assign(frames[f1].style, {
        "top": "100%",
        "left": "0%",
        "transition-duration": "0ms",
        "transform": "translateX(0%)"
      });
      current = f2;
      running = false;
    }, rundelay);
  }
}

//Prototype style settings as a new method called css
//It must be set before a calling

Element.prototype.css = function(param){
  for (var p in param){
    this.style[p] = param[p];
  }
};

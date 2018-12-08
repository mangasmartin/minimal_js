Object.prototype.css = function(param){
  for (var p in param){
    this.style[p] = param[p];
  }
};

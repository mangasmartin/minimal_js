function miAjax(file,foo){
   var ajax = new XMLHttpRequest;
   ajax.open("GET", file, true);
   ajax.onload = function(){
      if (typeof foo==="function") foo(ajax.responseText);
   };
   ajax.onerror = function(){
   	if (typeof foo==="function") foo("error");
   }
   ajax.send();
}

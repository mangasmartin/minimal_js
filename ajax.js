//Simple case in which you only need to do something in asynchronous mode
/*
ajax("file.php");
*/

//A case in which you need to get some data
/*
ajax("file.json", function(data){
   console.log(data);
});
*/

function ajax(file,foo){
   var x = new XMLHttpRequest;
   x.open("GET", file, true);
   x.setRequestHeader("Cache-Control", "no-store");
   x.responseType = "text";
   x.onload = function(){
      if (typeof foo==="function") foo(x.responseText);
   };
   x.onerror = function(){
   	if (typeof foo==="function") foo("error");
   }
   x.send();
}

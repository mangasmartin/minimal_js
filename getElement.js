function $(i){
  if (i[0] == "#"){
    return document.getElementById(i.substr(1));
  } else if (i[0] == "."){
    return document.getElementsByTagName(i.substr(1));
  } else{
    return document.querySelector(i);
  }
}

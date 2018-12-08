function random_num(max, last){
  //max: max number
  //last: last number used. If set avoid repetition

  var n = Math.round(Math.random() * (max - 1));
  if (last){
    if (n == last){
      n ++;
      if (n == max) n = 0;
    }
  }
  return n;
}

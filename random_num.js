function random_num(max, last){
  //min: min number
  //max: max number
  //last: last number used. If set avoid repetition

  if (!min) min = 0;
  var n = Math.round(Math.random() * (max - 1)) + min;
  if (last){
    if (n == last){
      n ++;
      if (n == max) n = min;
    }
  }
  return n;
}

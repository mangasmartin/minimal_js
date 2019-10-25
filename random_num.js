function random_num(max, last){
  //min: min number (Optional)
  //max: max number (Mandatory)
  //last: last number used: if it's set it avoids repetition only for next number (Optional)

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

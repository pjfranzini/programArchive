// numerology of dates -- adding up digits, when sum exceeds 10, add up again
// I shortcutted using principle of cast out nines

// original solution:
function solution(date){
  year = date.getFullYear();
  month = date.getMonth()+1;
  day = date.getDate();
  x = (year+month+day)%9;
  if (x===0) {x = 9}
  return x;
}

//a much more compact version:
  return (d.getFullYear() + d.getMonth() + 1 + d.getDate())%9 || 9
function formatDuration (seconds) {
  var y = 365;
  var h = 24;
  var m = 60;
  var years = Math.floor(seconds / (y * h * m * m));
  var time_left = seconds - years * (y * h * m * m)
  var days = Math.floor(time_left / (h*m*m));
  time_left = time_left - days * (h*m*m);
  var hours = Math.floor(time_left / (m*m));
  time_left = time_left - hours * (m*m);
  var minutes = Math.floor(time_left / m);
  var secs = time_left - minutes * m;
  var c = connect([years,days,hours,minutes,secs])
  var phrase = stringify(years,0) + c[3] + stringify(days,1) + c[2] + stringify(hours,2) + c[1] +
    stringify(minutes,3) + c[0] + stringify(secs,4);
  console.log("a",phrase,"a");
  test = "fpp";
  console.log("a",test,"a");
  return phrase;
}

function stringify(timeNum,n) {
  var timeWords = [" year", " day", " hour", " minute", " second"];
  var phrase = "";
  console.log(timeNum);
  if (timeNum === 1) {
    phrase = timeNum + timeWords[n];
  } else if (timeNum >= 1) {
    phrase = timeNum + timeWords[n] + "s";
  }
  console.log("here",phrase);
  return phrase;
}
function connect(timeNums) {
  var connectors = [];
  var nonzero = 0;
  for (var i = 0; i < 5; i++){
    if (timeNums[i] !== 0) nonzero += 1;
  }
  console.log(nonzero);
  if (nonzero > 1) {
    connectors.unshift(" and ");
    for (var i = 2; i < nonzero; i++){
      connectors.unshift(", ");
    }
  }
  console.log(connectors);
  return connectors;
}



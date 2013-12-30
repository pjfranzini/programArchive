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
  var t = [years,days,hours,minutes,secs];
  var t_w = [" year", " day", " hour", " minute", " second"];
  var phrase = ""
  for (var i = 0; i < 5; i++) {
    if (t[i] !== 0) {
      phrase = phrase + plural(t_w[i], t[i]);
    }
  }
  console.log("the phrase ",phrase);
  phrase.replace(/,$/, "")
  phrase.replace(/,\d+\s\w+$/, "and ")
  return phrase;
}

function plural(word,n) {
  var phrase = "";
  if (n === 1) {
    phrase = n + word + ", ";
  } else if (n >= 1) {
    phrase = n + word + "s, ";
  }
  return phrase;
}




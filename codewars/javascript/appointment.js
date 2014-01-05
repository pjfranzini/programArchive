// find the earliest time, when every businessman is free for at least that duration
// All times in the calendars will be given in 24h format "hh:mm", the result must also be in that format
// A meeting is represented by its start time (inclusively) and end time (exclusively) -> if a meeting takes place from 09:00 - 11:00, the next possible start time would be 11:00
// The businessmen work from 09:00 (inclusively) - 19:00 (exclusively), the appointment must start and end within that range
// If the meeting does not fit into the schedules, return null as result
// The duration of the meeting will be provided as integer in minutes
// [
//   [['09:00', '11:30'], ['13:30', '16:00'], ['16:00', '17:30'], ['17:45', '19:00']],
//   [['09:15', '12:00'], ['14:00', '16:30'], ['17:00', '17:30']],
//   [['11:30', '12:15'], ['15:00', '16:30'], ['17:45', '19:00']]
// ]

// my very long yet straightforward solution given that the same guy had us do an overlapping interval merge thingy, and reusing another favorite tool of mine (unique on array)
// btw i am hardly the only one to write a long solution

function getStartTime(schedules, duration) {
  var collapsed = schedules.reduce(function(x, y) {
    return x.concat(y);
  });
  var intervals = collapsed.map(function(x) {
    return [makeInt(x[0]),makeInt(x[1])];
  });
  var ranges = intervals.map(function(x) {
    return (function() {
      var results = [];
      for (var i = x[0]; i < x[1]; i++){
        results.push(i); }
      return results;
    }).apply(this);
  });
  var one = ranges.reduce(function(x, y) {
    return x.concat(y);
  });
  var masterlist = one.unique();
  for (var i = 540; i < 1140-duration+1; i++){
    if (masterlist.indexOf(i) !== -1) continue;
    for (var j = 0; j < duration; j++){
      var flag = 0;
      if (masterlist.indexOf(i+j) !== -1) break;
      var flag = 1;
    }
    if (flag === 1) return makeTime(i);
  }
  return null;
}
function makeInt(time){
  var t = time.match(/(\d+):\s*(\d+)/);
  return parseInt(t[1])*60 + parseInt(t[2]);
}
function makeTime(int){
  return pad(Math.floor(int/60).toString()) + ":" + pad(Math.floor(int%60).toString());
}
function pad(num) {
    var s = "00" + num;
    return s.substr(s.length-2);
}
Array.prototype.unique = function() {
  var output = {};
  for (var key = 0; key < this.length; key++) {
    output[this[key]] = this[key];
  }
  var results = [];
  for (key in output) {
    var value = output[key];
    results.push(value);
  }
  return results;
};

// here is the author's solution
function getStartTime(schedules, duration) {
  var schedule = [];

  var time2index = function(time) {
    var hours = time.split(':')[0]|0, minutes = time.split(':')[1]|0;
    return hours * 60 + minutes - 540;
  };

  var index2time = function(index) {
    var hours = ((index + 540) / 60)|0, minutes = index % 60;
    return (hours < 10 ? '0' + hours : hours) + ':' + (minutes < 10 ? '0' + minutes : minutes);
  }

  for (var i=0; i<schedules.length; i++) {
    for (var j=0; j<schedules[i].length; j++) {
      var start = time2index(schedules[i][j][0]);
      var end = time2index(schedules[i][j][1]);
      for (var k=start; k<end; k++) {
        schedule[k] = true;
      }
    }
  }

  var minutes = 0;
  for (i=0; i<600; i++) {
    if (schedule[i]) {
      minutes = 0;
    } else if (++minutes == duration) {
      return index2time(i - minutes + 1);
    }
  }

  return null;
}


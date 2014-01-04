//Write a function called sumIntervals that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.
// sumIntervals( [
//    [1,4],
//    [7, 10],
//    [3, 5]
// ] ); //=> returns 7  ( Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.)

// first extend arrays to have an "unique" method
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

function sumIntervals(intervals){
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
  return one.unique().length;
};
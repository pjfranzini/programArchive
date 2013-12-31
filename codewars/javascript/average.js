// build a calculator object with an average method: Calculator.average(3,4,5) = 4

var Calculator = {
 average: function() {
  sum = 0;
  if (arguments.length === 0) {return 0}
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum/arguments.length;
 }
};
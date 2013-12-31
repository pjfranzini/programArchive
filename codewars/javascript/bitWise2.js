/* Extend the Number prototype with a function called "twos" that accepts one parameter (n), and when called, returns the two's-complement representation of the number in "n" bits in a string. (first bit is sign, rest is normal for positive, for negative counts up from maximum neg number expressible with those bits)

(-2).twos(3) == "110";
(8).twos(5) == "01000";
(-8).twos(5) == "11000";
(-16).twos(5) == "10000"; */

// my solution (which does the job but doesnt use bitwise operators)

Number.prototype.twos = function(n) {
  if (this >= 0) {return pad(this.toString(2),n)}
  // if eg n = 5, 4 bits can represent up to 2**4 => -16, which is represented by "10000"  (or (16).toString(2))
  var max = Math.pow(2,n-1);
  // to get some other number, -x, take (max - x) and represent it in n-1 binary digits and append it to a leading 1
  return "1" + pad((max + this).toString(2),n-1)
}

function pad(num, size) {
    var s = "00000000000000000000" + num;
    return s.substr(s.length-size);
}

// the official solution

Number.prototype.twos = function(n) {
  var ret = "";
  while(n)
  {
    ret += ( (this >> --n) & (1) );
  }
  return ret;
};
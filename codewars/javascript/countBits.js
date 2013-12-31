// Given number (decimal), count number of bits that are set to 1 in its binary representation Example of use of toString(2) and to_s(2)
// take number (decimal), convert to binary (string), count number of bits that are set to 1
var countBits = function(n) {
  return n.toString(2).split('1').length - 1;
};
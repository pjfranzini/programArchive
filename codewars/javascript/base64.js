/*Extend the String object to create a function that converts the value of the String to and from Base64 using the ASCII character set.

'this is a string!!'.toBase64();
should return 'dGhpcyBpcyBhIHN0cmluZyEh'

'dGhpcyBpcyBhIHN0cmluZyEh'.fromBase64();
should return 'this is a string!!'

see http://en.wikipedia.org/wiki/Base64
*/

String.prototype.toBase64 = function () {
  var stringyBits = this.match(/.{1,3}/g);
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  result = stringyBits.map(function(threeLetters) {
   var letters = threeLetters.split("");
    var ascii3 = letters.map(function(char) {
      return pad(char.charCodeAt(0).toString(2),8);
    });
    var twentyFour3 = ascii3[0]+ascii3[1]+ascii3[2];
    var twentyFour4 = twentyFour3.match(/.{1,6}/g);
    var newLetters = twentyFour4.map(function(bStr) {
      return alphabet[parseInt(bStr,2)];
    });
    return newLetters.join("");
  });
  return result.join("");
};
String.prototype.fromBase64 = function () {
  var stringyBits = this.match(/.{1,4}/g);
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  result = stringyBits.map(function(fourLetters) {
   var b64let = fourLetters.split("");
    var b64num = b64let.map(function(char) {
      return alphabet.indexOf(char);
    });
    var binary = b64num.map(function(char) {
      return pad(char.toString(2),6);
    });
    var twentyFour4 = binary[0] + binary[1] + binary[2] + binary[3];
    var twentyFour3 = twentyFour4.match(/.{1,8}/g);
    var newLetters = twentyFour3.map(function(str) {
      return String.fromCharCode(parseInt(str, 2));
    });
    return newLetters.join("");
  });
  return result.join("");
};
function pad(num, size) {
    var s = "000000000" + num;
    return s.substr(s.length-size);
}
// decimal to chinese number in the range  [-99999.999, 99999.999], rounded to the 8th significant digit.
// Simplified Chinese numerals have characters representing each number from 0 to 9 and additional numbers representing larger numbers like 10, 100, 1000, and 10000.
// Multiple-digit numbers are constructed by first the digit value (1 to 9) and then the place multiplier (such as 10, 100, 1000), starting with the most significant digit. A special case is made for 10 - 19 where the leading digit value (yī 一) is dropped. Note that this special case is only made for the actual values 10 - 19, not any larger values.
// 24681 二万四千六百八十一
// Trailing zeros are omitted, but interior zeros are grouped together and indicated by a single 零 character without giving the place multiplier.
// 10004 一万零四
// Decimal numbers are constructed by first writing the whole number part, and then inserting a point (diǎn 点), followed by the decimal portion. The decimal portion is expressed using only the digits 0 to 9, without any positional characters and without grouping zeros.
// 123.45 一百二十三点四五
// Negative numbers are the same as other numbers, but add a 负 (fù) before the number.
// For more information, please see http://en.wikipedia.org/wiki/Chinese_numerals .

function toChineseNumeral(num){
  var numerals = {
    "-":"负",
    ".":"点",
    0:"零",
    1:"一",
    2:"二",
    3:"三",
    4:"四",
    5:"五",
    6:"六",
    7:"七",
    8:"八",
    9:"九",
    10:"十",
    100:"百",
    1000:"千",
    10000:"万"
  };
  if (Math.floor(num) === num) {
    if (0 <= num && num <= 10) {
      return numerals[num];
    }
    if (11 <= num && num <= 19) {
      return numerals[10] + numerals[num-10];
    }
    if (20 <= num) {
      number = num.toString().match(/-?(\d+)/)[1].split("");
      var n = number.length-1;
      var result = "";
      for (var i = 0; i < n + 1; i++){
        if (number[i] === "0"){
          var zeroFlag = true;
        } else{
          if (zeroFlag === true) {
            result = result + numerals[0];
            zeroFlag = false;
          }
          if (i === n) {
            result = result + numerals[number[n]];
          } else {
            result = result + numerals[number[i]] + numerals[Math.pow(10,number.length-i-1)];
          }
        }
      }
      return result;
    }
    if (num < 0) {
      return numerals["-"] + toChineseNumeral(-num);
    }
  }
  else {
    if (num < 0) {
      return numerals["-"] + toChineseNumeral(-num);
    }
    var wholePart = parseInt(num.toString().match(/(-?\d+)\.\d+/)[1]);
    return toChineseNumeral(wholePart) + chiDec(num);
  }
}
function chiDec(num){
  var numerals = { ".":"点", 0:"零", 1:"一", 2:"二", 3:"三", 4:"四", 5:"五",
    6:"六", 7:"七", 8:"八", 9:"九" };
  var fraction = num.toString().match(/-?\d+(\.\d+)/)[1].split("");
  var result = fraction.map (function (digit) {return numerals[digit];
  }).reduce(function(x, y) { return x + y; });
  return result;
}
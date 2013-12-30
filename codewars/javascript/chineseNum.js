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


describe('Chinese Numerals',function(){
  it('Whole numbers',function(){
    Test.assertEquals(toChineseNumeral(9),'九');
  });
    it('Zero',function(){
    Test.assertEquals(toChineseNumeral(0),'零');
  });
  it('Teens',function(){
    Test.assertEquals(toChineseNumeral(18),'十八');
  });
  it('Negative numbers',function(){
    Test.assertEquals(toChineseNumeral(-5),'负五');
  });
  it('Fractional numbers',function(){
    Test.assertEquals(toChineseNumeral(0.5),'零点五');
  });
  it('Fractional numbers',function(){
    Test.assertEquals(toChineseNumeral(16.345),'十六点三四五');
  });
  it('Special Cases',function(){
    Test.assertEquals(toChineseNumeral(10),'十');
    Test.assertEquals(toChineseNumeral(110),'一百一十');
    Test.assertEquals(toChineseNumeral(111),'一百一十一');
    Test.assertEquals(toChineseNumeral(1000),'一千');
    Test.assertEquals(toChineseNumeral(10000),'一万');
    Test.assertEquals(toChineseNumeral(10006),'一万零六');
    Test.assertEquals(toChineseNumeral(10306.0005),'一万零三百零六点零零零五');
  });
});
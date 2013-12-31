// takes a string input, and returns the first character that is not repeated anywhere in the string
// upper and lowercase chars considered same char but function should return correct case for initial letter.
// all repeating or empty string should return empty string

function firstNonRepeatingLetter(s) {
  var letters = s.split("");
  for (var i in letters) {
    var re = new RegExp(letters[i],"ig")
    if ((s.match(re)).length === 1) {
      return letters[i];
    }
  }
  return "";
}
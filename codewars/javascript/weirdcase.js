// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

// my solution
function toWeirdCase(string){
  var words = string.split(" ");
  var newWords = words.map(function(word) {
    var wa = word.split("");
    var newWa = [];
    for (var i = 0; i < wa.length; i++) {
      l = wa[i];
      if (i % 2 === 0) { l = l.toUpperCase(); }
      if (i % 2 !== 0) { l = l.toLowerCase(); }
      newWa.push(l);
    }
    return newWa.join("");
  });
  return newWords.join(" ");
};

// a more compact one
function toWeirdCase(string){
  return string.toLowerCase().split(' ').map(function(word){
    return word.split('').map(function(char, index){
      return index%2==0 ? char.toUpperCase() : char;
    }).join('')
  }).join(' ');
}
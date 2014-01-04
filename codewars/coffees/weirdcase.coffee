# Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.
# toWeirdCase( "String" );//=> returns "StRiNg"
# toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

// my solution
toWeirdCase = (string) ->
  words = string.split(" ")
  newWords = words.map (word) ->
    wa = word.split("")
    newWa = []
    for l,i in wa
      l = l.toUpperCase() if i % 2 == 0
      l = l.toLowerCase() if i % 2 != 0
      newWa.push(l)
    newWa.join("")
  newWords.join(" ")

// a more compact one
toWeirdCase = (string) ->
  string.split(' ').map((w) ->
    w.split('').map((l, i) ->
      l[(if (not (i % 2)) then 'toUpperCase' else 'toLowerCase')]()
    ).join ''
  ).join ' '
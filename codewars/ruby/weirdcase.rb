# Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.
# weirdcase( "String" )#=> returns "StRiNg"
# weirdcase( "Weird string case" );#=> returns "WeIrD StRiNg CaSe"

# my solution
def weirdcase string
  words = string.split(" ")
  words.map! do |word|
    wa = word.split("")
    wa.each_with_index do |l,i|
      l.downcase! if i % 2 != 0
      l.upcase! if i % 2 == 0
    end
    wa.join("")
  end
  words.join(" ")
end

# a compact one
def weirdcase string
  string.split.collect { |word| word.chars.collect.with_index { |c, i| i.even? ? c.upcase : c.downcase }.join }.join(' ')
end
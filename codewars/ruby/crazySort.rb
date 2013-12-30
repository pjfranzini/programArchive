# Accepts a hash of words to an array of translations.
# Returns a hash of words mapped to an array of all possible combinations of translations.
def possibilities(words)
  new_words = {}
  words.each do |key, value|
    list = []
    value.length.times do |i|
      list = list + value.permutation(i+1).to_a
    end
    list.map! { |x| x.sort!}.uniq!.sort!
    new_words[key] = list
  end
  new_words
end
#foo.map {|x| x.map {|y| y.downcase}}
words = {
  life:   %w{ vida vie Leben },
  death:  %w{ muerte mort Tode }
}
puts possibilities(words)
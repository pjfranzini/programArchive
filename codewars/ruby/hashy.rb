def get_hashtags(post)
  words = post.split(" ")
  hash_array = []
  words.each do |word|
    puts word
    foo = word.match(/^#+([a-zA-Z]+)$/)
    hash_array << foo[1] if foo
  end
  hash_array
end
get_hashtags("hello #world")
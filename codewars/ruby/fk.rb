def flesch_kincaid text
# would be better to have better testing since the following passes:
# return 3.67 if (text == "The turtle is leaving.")
# return -1.06 if (text == "A good book is hard to find.")
# return -0.66 if (text == "To be or not to be. That is the question.")
# return 1.31 if (text == "Oh no! The lemming is falling.")
# return 4.19 if (text == "Do not cut your fingers as your katana is getting sharper! Be gentle.")
  wps = 0
  spw = 0
  sentences = text.split(/[.!]/)
  puts sentences
  sentences.each do |sentence|
    puts sentence
    words = sentence.split(" ")
    word_count = words.length
    wps += word_count
    words.each do |word|
      syl_count = 0
      vowelGroup = false
      word.split("").each do |letter|
        if ("AEIOUaeiou".include?(letter) && !vowelGroup)
          vowelGroup = true
          syl_count += 1
        else
          vowelGroup = false
        end
      end
      puts syl_count
      spw += syl_count
    end
  end
  puts spw
  puts wps
  spw = spw/(wps+0.00001)
  wps = wps/sentences.length
  puts spw
  puts wps
  puts ((0.39 * wps) + (11.8 * spw) - 15.59)
  ((0.39 * wps) + (11.8 * spw) - 15.59).round(2)
end

flesch_kincaid("Oh no! The lemming is falling.")
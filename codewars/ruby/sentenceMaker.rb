# a function to make sentences out of parts (words, commas, mulitiple periods at the end)
# there must be space betw words, not space to left of comma, only one period

# original soln
def make_sentence parts
  parts.map! {|x| x + " "}.join('').gsub(/\.*/, '').sub(/\s*$/,'.').gsub(/\s*\,\s*/, ', ')
end

# more concise soln
def make_sentence parts
  parts.join(' ').gsub(' ,', ',').sub(/(\s\.)*$/, '.');
end
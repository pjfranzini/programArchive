# a function to make sentences out of parts (words, commas, mulitiple periods at the end)
# there must be space betw words, not space to left of comma, only one period

makeSentence = (parts) ->
  parts.join(' ').replace(/\s\,/g, ',').replace(/(\s\.)*$/, '.');
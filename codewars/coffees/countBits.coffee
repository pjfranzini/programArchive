# Given number (decimal), count number of bits that are set to 1 in its binary representation Example of use of toString(2) and to_s(2)
# original longer solution
countBits = (n) ->
  (n.toString(2).split("").map (x) -> parseInt(x)).reduce (x,y) -> x + y

# secound line can be replaced by
# n.toString(2).split("1").length - 1
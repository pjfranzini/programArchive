# Given number (decimal), count number of bits that are set to 1 in its binary representation Example of use of toString(2) and to_s(2)
# original solution: longer, doesns't use to_s
def count_bits(n)
  return 0 if n == 0
  return 1 if n == 1
  return count_bits(n/2) + n%2
end

# inside of function can be replaced with the one line
#   n.to_s(2).count "1"
# or
#  n.to_s(2).scan("1").count
def prime(n)
  list = (2..n).to_a
  list.each{ |i| list.delete_if{ |j| j > i && j % i == 0 } }
end

puts prime(300000).to_s
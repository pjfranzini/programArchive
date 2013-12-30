def determinant(m)
  return m[0][0] if m.length == 1
  total = 0
  m[0].each_with_index {|e,i| total = total + e*minor(m,i)}
  total
end

def minor(m,i)
  n = m.length
  mb = m[1..-1]
  mb.map{|row| row.first(i) + row[i+1..n]}
end


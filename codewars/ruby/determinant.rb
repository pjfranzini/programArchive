# calculate (recursively) the determinant of a matrix of arbitrary size, using minors
def determinant(m)
  return m[0][0] if m.length == 1
  total = 0
  m[0].each_with_index {|e,i| total = total + (-1)**i * e * determinant(minor(m,i))}
  total
end

# method to extract minors
def minor(m,i)
  n = m.length
  mb = m[1..-1]
  mb.map{|row| row.first(i) + row[i+1..n-1]}
end

# example of usage
mm = [ [6,1,1], [4,-2,5], [2, 8, 7]]
puts determinant(mm) # -306

mm = [[1, 2, 3, 4], [5, 0, 2, 8], [3,5,6,7],[2,5,3,1]]
puts determinant(mm) # 24
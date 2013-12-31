determinant = (m) ->
  return m[0][0] if m.length == 1
  total = 0
  total = total + Math.pow(-1, i) * e * determinant(minor(m,i)) for e, i in m[0]
  total
minor = (m,i) ->
  n = m.length
  mb = m[1..-1]
  mb.map (row) -> row[0...i].concat row[i+1..n-1]
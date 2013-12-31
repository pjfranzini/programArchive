function determinant(m) {
  var size = m.length;
  if (size === 1) {
    return m[0][0];
  }
  var total = 0;
  for (var i = 0; i < size; i = ++i) {
    total = total + Math.pow(-1, i) *  m[0][i] * determinant(minor(m, i));
  }
  return total;
};

function minor(m, i) {
  var n = m.length;
  mb = m.slice(1);
  return mb.map(function(row) {
    return row.slice(0, i).concat(row.slice(i + 1, +(n - 1) + 1));
  });
};

m1 = [ [4, 6], [3,8]]
m5 = [[2,4,2],[3,1,1],[1,2,0]]
Test.assertEquals(determinant([[5]]), 5, "Determinant of a 1 x 1 matrix yields the value of the one element")
Test.assertEquals(determinant(m1), 14, "Should return 4*8 - 3*6, i.e. 14")
Test.assertEquals(determinant(m5), 10, "Should return the determinant of [[2,4,2],[3,1,1],[1,2,0]], i.e. 10")
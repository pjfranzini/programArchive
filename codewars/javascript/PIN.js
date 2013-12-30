function getPINs(observed) {
  var obsvdA = observed.split("");
  var results = [];
  for (var i = 0; i < obsvdA.length; i++) {
   results.push(checkNeighbors(obsvdA[i]));
  }
  var rA = results[0];
  if (obsvdA.length === 1) return rA;
  for (var i = 1; i < obsvdA.length; i++) {
    rA = cProd(rA,results[i]);
    rA = rA.map(function(x) {
      return x.join("");
    });
  }
  return rA;
}

function checkNeighbors(n){
  var j = (n-1)%3;
  var i = Math.floor((n-1)/3);
  if (n-0 === 0) {
    j = 1;
    i = 3;
  }
  var pad = [["1","2","3"],["4","5","6"],["7","8","9"],["b","0","b"]];
  var neighbors = [[i,j],[i,j+1], [i,j-1], [i+1,j], [i-1,j]];
  var onPad = neighbors.filter(function(x) {
    return x[0] >= 0 && x[0] <= 3 && x[1] >= 0 && x[1] <= 2;
  });
  var noBs = onPad.filter(function(x) {
    return pad[x[0]][x[1]] !== "b";
  });
  var result = noBs.map(function(x) {
    return pad[x[0]][x[1]];
  });
  return result;
}

function cProd() {
  return Array.prototype.reduce.call(arguments, function(a, b) {
    var ret = [];
    a.forEach(function(a) {
      b.forEach(function(b) {
        ret.push(a.concat([b]));
      });
    });
    return ret;
  }, [[]]);
}
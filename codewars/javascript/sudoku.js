// Write a function that will solve a 9x9 Sudoku puzzle. The function will take one argument consisting of the 2D puzzle array, with the value 0 representing an unknown square.

// The Sudokus tested against your function will be "easy" (i.e. determinable; there will be no need to assume and test possibilities on unknowns) and can be solved with a brute-force approach.

function sudoku(puzzle) {
  // fill an array of possiblities
  var ic = 0;
  var working = puzzle.map(function(y) {
    return y.map(function(x){
      if (x !== 0) return x;
      ic += 1; // count yet-unsolved entries
      return [1,2,3,4,5,6,7,8,9];
    })
  })
  var c = analyse(working, puzzle);
  while (ic != c) {
    ic = c;
    c = analyse(working, puzzle);
  }
  console.log(working);
  return working;
}
function analyse(working, puzzle){
  var count = 0;
  for (var i = 0; i < 9; i++){
    for (var j = 0; j < 9; j++){
      if (Array.isArray(working[i][j])) {
        count += 1; // count yet-unsolved entries
        eliminate(working[i][j], puzzle[i]);
        eliminate(working[i][j], transpose(puzzle)[j]);
        eliminate(working[i][j], subgrid(puzzle,i,j));
      }
      if (working[i][j].length === 1) working[i][j] = working[i][j][0];
    }
  }
  return count;
}
function eliminate(arr1,arr2){
    for (var i = 0; i < arr2.length; i++){
      var j = arr1.indexOf(arr2[i]);
      if (j !== -1) arr1.splice(j, 1);
    }
}
function subgrid(arr,i,j){
  // find which subgrid this element belongs to
  var x = i/3 | 0;
  var y = j/3 | 0;
  s = [];
  for (var ii = x; ii < x+3; ii++){
    for (var jj = y; jj < y+3; jj++){
      s.push(arr[ii][jj]);
    }
  }
  return s;
}
function transpose(arr){
  return arr[0].map(function(col, i) {
    return arr.map(function(row) {
      return row[i]
    })
  })
}

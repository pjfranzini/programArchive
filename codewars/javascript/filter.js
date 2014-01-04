// use filter to implement getEvens([2,4,5,6]) // should == [2,4,6]
function getEvens(arr){
  return arr.filter(function(x) {return x%2 === 0});
}
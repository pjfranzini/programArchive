// bugfixes
// what is wrong with:

function getNames(data){
  return data.map(function(item){item.name});
}

// where an example of usage is:
var data = [
  {name: 'Joe', age: 20},
  {name: 'Bill', age: 30},
  {name: 'Kate', age: 23}
]

getNames(data) // should return ['Joe', 'Bill', 'Kate']

// answer, should be
function getNames(data){
  return data.map(function(item){return item.name});
}
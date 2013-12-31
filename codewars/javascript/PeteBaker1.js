// given a recipe hash and an available ingredients hash, how many integral number of cakes can you make?

function cakes(recipe, available) {
  var amounts = [];
  for (var key in recipe) {
    if (isNaN(available[key])) available[key] = 0
    amounts.push(Math.floor(available[key]/recipe[key]));
  }
  return Math.min.apply(null, amounts);
}
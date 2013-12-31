// you have a recipe hash for a cake, and what has been already added; return what else needs to be added to make
// an integral number of cakes
// E.g., var recipe = {flour: 200, eggs: 1, sugar: 100};
// getMissingIngredients(recipe, {flour: 50, eggs: 1}); // must return {flour: 150, sugar: 100}


function getMissingIngredients(recipe, added) {
  var haves = [], need = {};
  for (var key in recipe) {
    if (isNaN(added[key])) added[key] = 0
    haves.push(added[key]/recipe[key]);
  }
  howMany = Math.ceil(Math.max.apply(null, haves)) || 1;
  for (var key in recipe) {
    need[key] = howMany * recipe[key] - added[key];
    if (need[key] === 0) delete need[key];
  }
  return need;
}
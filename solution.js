// your solution should go here
// for demo purposes use the console for any out you will need.
B 

 var recipe = {
    'title': 'Mole',
    'servings': 2,
    'ingredients': ['cumin', 'cinnamon', 'cocoa']
};

console.log(recipe.title);
console.log('Servings: ' + recipe.servings);
console.log('Ingredients:');
for (var i = 0; i < recipe.ingredients.length; i++) {
    console.log(recipe.ingredients[i]);
}

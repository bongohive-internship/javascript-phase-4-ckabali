// your solution should go here
// for demo purposes use the console for any out you will need.

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

 

var books = [
  {title: 'Aids Is Real',
   author: 'John Sukumuna',
   alreadyRead: false
  },
  {title: 'The End Of The Ages',
  author: 'Oscar Christian',
  alreadyRead: true
  }];

for (var i = 0; i < books.length; i++) {
  var book = books[i];
  var bookInfo = book.title + '" by ' + book.author;
  if (book.alreadyRead) {
    console.log('You already read "' + bookInfo);
  } else {
    console.log('You still need to read "' + bookInfo);
  }
}

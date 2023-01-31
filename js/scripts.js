//IIFE - Immediately Invoked Function Expression
let pokemonRepository = (function () {

//List of Pokemon Characters
let pokemonList = [ 
    { name: "Pikachu", height: 1.04, type: 'electric' },
    { name: "Bulbasaur", height: 2.04, type: ['grass', 'poison'] },
    { name: "Squirtle", height: 1.08, type: 'water' },
    { name: "Beedrill", height: 3.03, type: ['bug', 'poison'] },
    { name: "Dragonite", height: 7.03, type: ['dragon', 'flying']},
    { name: "Igglybuff", height: 1.01, type: ['Normal', 'Fairy']},    
]
function add(pokemon) {
  pokemonList.push(pokemon);
}

function getAll() {
  return pokemonList;
}

return {
  add: add,
  getAll: getAll
};
})();


// forEach loop
pokemonRepository.getAll().forEach(function(pokemon){
  if (pokemon.height >= 7){
    document.write("<div class='card'>" + "<p>" + pokemon.name + " " + "(Height:" + " " + pokemon.height + ") - Wow! that is a big pokemon! "+ "</p>" + "</div>");
  } else if (pokemon.height){
    document.write("<div class='card'>" + "<p>" + pokemon.name + " " + "(Height:" + " " + pokemon.height + ")  " + "</p>" + "</div>") 
  }

});


// // Previous loop displaying Pokemon Characters 
// for (let i = 0; i < pokemonList.length; i++) {        
//   if (pokemonList[i].height >= 7) {
//     document.write('<div class="card">' + '<p>' + pokemonList[i].name + " " + "(Height:" + " " + pokemonList[i].height + ") - Wow! that is a big pokemon!" +  '</p>' + '</div>');
//   } else if (pokemonList[i].height){
//     document.write("<div class='card'>" + "<p>" + pokemonList[i].name + " " + "(Height:" + " " + pokemonList[i].height + ")  " + "</p>" + "</div>") 
//   }
// }













































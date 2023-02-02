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

function showDetail(pokemon){
  console.log (pokemon)
  // console.log (pokemon.name)
  // console.log (pokemon.height)
}

function addListItem(pokemon){
  let pokemonList = document.querySelector(".pokemon-list");
  let listPokemon = document.createElement("li");
  let button = document.createElement("button");
  button.innerText = pokemon.name + " " + "(Height" + " " + pokemon.height + ")" ; 
  button.classList.add("button");  
  listPokemon.appendChild(button);
  pokemonList.appendChild(listPokemon);  
  button.addEventListener('click', function () { 
  showDetail(pokemon)
});
}

return {
  add: add,
  getAll: getAll,
  addListItem: addListItem,
  showDetail: showDetail,
};
})();


// forEach loop
pokemonRepository.getAll().forEach(function(pokemon){
pokemonRepository.addListItem(pokemon);

});


















































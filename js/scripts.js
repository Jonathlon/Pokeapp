//List of Pokemon Characters
let pokemonList = [ 
    { name: "Pikachu", height: 1.04, type: 'electric' },
    { name: "Bulbasaur", height: 2.04, type: ['grass', 'poison'] },
    { name: "Squirtle", height: 1.08, type: 'water' },
    { name: "Beedrill", height: 3.03, type: ['bug', 'poison'] },
    { name: "Dragonite", height: 7.03, type: ['dragon', 'flying']}
]

for (let i = 0; i < pokemonList.length; i++) {        
    if (pokemonList[i].height >= 7) {
      document.write(pokemonList[i].name + "(height:" + pokemonList[i].height + ") - Wow! that is a big pokemon!" + "<br>" );
    } else if (pokemonList[i].height){
      document.write(pokemonList[i].name + "(height:" + pokemonList[i].height + ")  " + "<br>") 
    }
  }
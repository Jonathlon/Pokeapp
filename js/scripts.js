//IIFE - Immediately Invoked Function Expression
let pokemonRepository = (function () {

  //List of Pokemon Characters
  let pokemonList = []
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  let modalContainer = document.querySelector('#modal-container');



  //Return Functions

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  // Creates List of pokemon buttons (not working)
  function addListItem(pokemon) {
    let pokemonList = $(".pokemon-list");
    let listPokemon = $('<li class="group-list-item"></li>');
    let button = $('<button type="button" class="pokemon-button" data-toggle="modal" data-target="#pokeModal">' + pokemon.name + '</button>');


    listPokemon.append(button)
    pokemonList.append(listPokemon)

    button.on("click", function () {
      showDetails(pokemon)
    });
  }

  // Shows Modal of pokemon when above functions is executed 
  function showModal(item) {
    let modalTitle = $(".modal-title");
    let modalBody = $(".modal-body");
    // let modalImage = $(".modal-image")
    modalTitle.empty();
    modalBody.empty();

    let nameElement = $("<h1>" + item.name + "</h1>");
    let heightElement = $("<p>" + "height :" + item.height + "</p>")
    let imageElement = $('<img class="modal-img" style="width:50%">')
    imageElement.attr("src", item.imageUrl)

    modalTitle.append(nameElement)
    modalBody.append(heightElement)
    modalBody.append(imageElement)
  }



  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  }


  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }


  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails,
    showModal: showModal,
  };
})();


pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
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
    let button = $('<button type="button class="pokemon-button data-toggle="modal" data-target="#pokeModal"></button>');

    listPokemon.append(listPokemon)
    pokemonList.append(pokemonList)

    button.on("click", function () {
      showDetails(pokemon)
    });
  }

  //Previous function creating list of pokemon buttons (is working)
  // function addListItem(pokemon) {
  //   let pokemonList = document.querySelector(".pokemon-list");
  //   let listPokemon = document.createElement("li");
  //   let button = document.createElement("button");
  //   button.innerText = pokemon.name;
  //   button.classList.add("pokemon-button");
  //   listPokemon.appendChild(button);
  //   pokemonList.appendChild(listPokemon);
  //   button.addEventListener('click', function (event) {
  //     showDetails(pokemon)
  //   });
  // }


// Shows Modal of pokemon when above functions is executed (not working)
  function showModal(item) {
    let modalTitle = $(".modal-title");
    let modalBody = $(".modal-body");
    let modalImage = $(".modal-image")
    modalTitle.empty();
    modalBody.empty();

    let nameElement = $("<h1>" + item.name + "</h1>");
    let heightElement = $("<p>" + "height :" + item.height + "</p>")
    let imageElement = $('<img class="modal-img" style="width:50%">')
    imageElement.attr("src", item.imageUrl)

    modalTitle.append(nameElement)
    modalBody.append(heightElement)
    modalImage.append(imageElement)
  }

  //function showModal(data) {
  //   modalContainer.innerHTML = '';

  //   let modal = document.createElement('div');
  //   modal.classList.add('modal');


  //   let closeButtonElement = document.createElement('button');
  //   closeButtonElement.classList.add('modal-close');
  //   closeButtonElement.innerText = 'Close';
  //   closeButtonElement.addEventListener('click', hideModal);

  //   let titleElement = document.createElement('h3');
  //   titleElement.innerText = data.name;

  //   let contentElement = document.createElement('p');
  //   contentElement.innerText = "Height " + data.height;

  //   let imageElement = document.createElement("img");
  //   imageElement.setAttribute("src", data.imageUrl);
  //   imageElement.setAttribute("width", "304");
  //   imageElement.setAttribute("height", "228");


  //   modal.appendChild(closeButtonElement);
  //   modal.appendChild(titleElement);
  //   modal.appendChild(contentElement);
  //   modal.appendChild(imageElement);
  //   modalContainer.appendChild(modal);

  //   modalContainer.classList.add('is-visible');
  // }

  // function hideModal() {
  //   modalContainer.classList.remove('is-visible');
  // }

  // window.addEventListener('keydown', (e) => {
  //   if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
  //     hideModal();
  //   }
  // });

  // modalContainer.addEventListener('click', (e) => {
  //   let target = e.target;
  //   if (target === modalContainer) {
  //     hideModal();
  //   }
  // });

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
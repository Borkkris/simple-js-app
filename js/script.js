//wrapping my pokemonList-array in an IIFE from Exercise 5
let pokemonRepository = (function() {
    let pokemonList=[];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    let modalContainer = document.querySelector('#modal-container')

    function add(pokemon) {
        if (
            typeof pokemon === 'object' &&  //when type from 'pokemon' is a object
            'name' in pokemon 
            // &&            // and "name" in 'pokemon' 
            // 'height' in pokemon &&          // and "height" in 'pokemon'
            // 'types' in pokemon              // and "types" in 'pokemon'
            // "detailsUrl" in pokemon

        ) {
            pokemonList.push(pokemon);         // then push it to pokemonList
        }   else {
            console.log('pokemon is not correct') //if not then write this 'pokemon is ... '
        }
    }

    function getAll() { //show all objects in pokemonList
        return pokemonList;
    }
    function addListItem(pokemon) { //from Exercise 6
        let pokemonList = document.querySelector('.pokemon-list'); //selects the list with the class pokemon-list from the HTML
        let listpokemon = document.createElement('li'); //(created a new variable: listpokemon) an li element in the parent Element 
        let button = document.createElement('button-pokemon'); //created a button in the li Element
        button.innerText = pokemon.name; //rendered the button to show the pokemon name
        button.classList.add('button-pokemon'); //set a class to style the button in CSS
        listpokemon.appendChild(button); //append a button to the list-element
        pokemonList.appendChild(listpokemon); //append the listpokemon to the pokemonList
        button.addEventListener("click", function(event) {
        showDetails(pokemon); // added eventListener to the variable 'button'
    });
}
    //fetch-function //returns all the pokemon in the console
    function loadList() {
        return fetch(apiUrl).then(function (response) { //the promise
        return response.json();//convert the responde to a json
        }).then(function (json) {
        json.results.forEach(function (item) { //take the json and run a forEach loop on it (parameter: item)
            let pokemon = { //lets map a Pokemon variable
            name: item.name, //return the name in the parameter item (first key)
            detailsUrl: item.url //return the url (the pokemon details)
            };
            add(pokemon);//
            console.log(pokemon);
        });
        }).catch(function (e) {
        console.error(e);
        });
    }

    function loadDetails(item) {
    let url = item.detailsUrl;
        return fetch(url).then(function (response) { //the promise
            return response.json();
        }).then(function (details) { //when you get me the json then give me the parameter called details
        // Now we add the details to the item
        item.imageUrl = details.sprites.front_default; //tiny images of the Pokemon
        item.id = details.id;
        item.height = details.height;
        item.weight = details.weight;
        item.types = details.types;
        }).catch(function (e) {
        console.error(e);
        });
    }
    
    //     function showModal(item) {
    //     let modalBody = $(".modal-body");
    //     let modalTitle = $(".modal-title");
    //     let modalHeader = $(".modal-header");
        
    //     modalBody.empty();
    //     modalTitle.empty();

    //     let nameElement = $("<h1>" + item.name + "</h1>")

    //     let imageElementFront = $('<img class="modal-img" style="width:50%">');
    //     imageElementFront.attr("src", item.imageUrlFGront);
    //     let imageElementBack = $('<img class="modal-img" style="width:50%">');
    //     imageElementBack.attr("src", item.imageUrlBack);


    //     let heightElement = $("<p>" + "height: " + details.height + "</p>");
    //     let weightElement = $("<p>" + "weight: " + details.weight + "</p>");
    //     let typesElement = $("<p>" + "types: " + details.types + "</p>");
    //     // let abilitiesElement = $("<p>" + "abilities: " + item.abilities + "</p>");

    //     modatTitle.append(nameElement);
    //     modalBody.append(imageElementFront);
    //     modalBody.append(imageElementBack);
    //     modalBody.append(heightElement);
    //     modalBody.append(weightElement);
    //     modalBody.append(typesElement);
    //     modalBody.append(abilitiesElement);
    // }

    function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
    modalContainer.innerHTML = '';

    let modal = document.createElement('div');
    modal.classList.add('modal');

      let closeButtonElement = document.createElement('button');
      closeButtonElement.classList.add('modal-close');
      closeButtonElement.setAttribute('title', 'Close');
      closeButtonElement.innerText = 'X';
      closeButtonElement.addEventListener('click', hideDetails);

      let titleElement = document.createElement('h1');
      titleElement.innerText = pokemon.name;

      let entryElement = document.createElement('p');
      entryElement.innerText = `Entry: ${pokemon.id}`;

      let heightElement = document.createElement('p');
      heightElement.innerText = `Height: ${pokemon.height}`;

      let weightElement = document.createElement('p');
      weightElement.innerText = `Weight: ${pokemon.weight}`;

      let typesElement = document.createElement('p');
      typesElement.innerText = `Types: ${pokemon.types[0].type.name}`;

      if (pokemon.types.length === 2) {
        typesElement.innerText += `, ${pokemon.types[1].type.name}`;
      }

      let imageElement = document.createElement('img');
      imageElement.src = pokemon.imageUrl;

      modal.appendChild(closeButtonElement);
      modal.appendChild(titleElement);
      modal.appendChild(entryElement);
      modal.appendChild(heightElement);
      modal.appendChild(weightElement);
      modal.appendChild(typesElement);
      modal.appendChild(imageElement);
      modalContainer.appendChild(modal);

      modalContainer.classList.add('is-visible');
    });
    }

    function hideDetails() {
    modalContainer.classList.remove('is-visible');
  }

  window.addEventListener('keydown', (e) => {
    if (e.key ==='Escape' && modalContainer.classList.contains('is-visible')) {
        hideDetails();
    }
  });

  modalContainer.addEventListener('click', (e) => {
    let target = e.target;
    if (target === modalContainer) {
        hideDetails();
    }
});

    //return - short if the keys are the same
    return {
        add,
        getAll,
        addListItem,
        loadList,
        loadDetails,
        showDetails,
        // showModal
    };
})()

//adds an object to pokemonRepository
pokemonRepository.loadList().then(function() {
  // Now the data is loaded!
  //forEach loop from Exercise 5 - runs over the pokemonRepository and the addListItem-function in a loop
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});
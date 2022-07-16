//wrapping my pokemonList-array in an IIFE from Exercise 5

let pokemonRepository = (function() {
    let pokemonList=[];

    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    //allows addition of pokemon - restricted if they don't fit the format
    function add(pokemon) {
        if (
            typeof pokemon === 'object' &&  //when type from 'pokemon' is a object
            'name' in pokemon &&            // and "name" in 'pokemon'              // and "types" in 'pokemon'
            "detailsUrl" in pokemon
        ) {
            pokemonList.push(pokemon);         // then push it to pokemonList
        }   else {
            console.log('pokemon is not correct') //if not then write this 'pokemon is ... '
        }
    }

    function getAll() { //show all objects in pokemonList
        return pokemonList;
    }

    //DOM manipulation - adds elements using bootstrap, appends them to elements on the dom, then applies a function
	  //to load the information from the showDetails function (which loads information from the API and shows the modal).
    function addListItem(pokemon) { //from Exercise 6
        let pokemonList = document.querySelector('.pokemon-list'); //selects the list with the class pokemon-list from the HTML
        let listpokemon = document.createElement('li'); //(created a new variable: listpokemon) an li element in the parent Element

        let button = document.createElement('button'); //created a button in the li Element
        button.innerText = pokemon.name; //rendered the button to show the pokemon name
        button.classList.add('button'); //set a class to style the button in CSS
        button.classList.add("button"); // bootstrap
        button.classList.add("btn"); // bootstrap
        button.classList.add("btn-primary"); // bootstrap

        listpokemon.appendChild(button); //append a button to the list-element#listpokemon
        listpokemon.classList.add("group-listpokemon-item"); // bootstrap

        pokemonList.appendChild(listpokemon); //append the listpokemon to the pokemonList

        button.addEventListener("click", function(event) { // for my Tutor: why is the event parameter not read?
        showDetails(pokemon); // added eventListener to the variable 'button'
        });
    }

    //fetch-function for API
    //Returns all the pokemon in the console
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

    //loads details from API, from url at beginning of code
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

    // Bootstrap Modal
    function showModal(pokemon) {
    let modalTitle = $(".modal-title");
    let modalBody = $(".modal-body");
    let modalHeader = $(".modal-header");

    modalTitle.empty();
    modalBody.empty();

    let nameElement = $("<h1>" + pokemon.name + "</h1>");

    let heightElement = $("<p>" + "Height: " + pokemon.height + "</p>");

    let weightElement = $("<p>" + "Weight: " + pokemon.weight + "</p>");

    let typesElement = $("<p>" + "Types: " + pokemon.types + "</p>");

    let pokemonImage = $('<img class="modal-img" style="width:50%">');

    pokemonImage.attr("src", pokemon.imageUrl);

    modalTitle.append(nameElement);
    modalBody.append(pokemonImage);
    modalBody.append(heightElement);
    modalBody.append(weightElement);
    modalBody.append(typesElement);

    $("#pokemon-modal").modal("toggle");
  }

  // reads the showModal function and wraps it ionto the showDetails function
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function() {
      showModal(pokemon);
    });
  }
    //return - short if the keys are the same
    return {
        add,
        getAll,
        addListItem,
        loadList,
        loadDetails,
        showDetails,
        // showModal //(for the bootstrap Modal)
    };
})();

//final calling of functions to execute repository

//adds an object to pokemonRepository
pokemonRepository.loadList().then(function() {
  // Now the data is loaded!
  //forEach loop from Exercise 5 - runs over the pokemonRepository and the addListItem-function in a loop
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});
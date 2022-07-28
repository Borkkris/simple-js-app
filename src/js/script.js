//wrapping my pokemonList-array in an IIFE from Exercise 5
// JS code without the Modal (Modal in ui.js)
const pokemonRepository = (function() {
    const pokemonList=[];

    const API_URL = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    //allows addition of pokemon - restricted if they don't fit the format
    function add(pokemon) {
        if (
            typeof pokemon === 'object' &&  //when type from 'pokemon' is a object
            'name' in pokemon &&            // and "name" in 'pokemon'              // and "types" in 'pokemon'
            'detailsUrl' in pokemon
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
        const pokemonList = document.querySelector('.pokemon-list'); //selects the list with the class pokemon-list from the HTML
        const listpokemon = document.createElement('li'); //(created a new variable: listpokemon) an li element in the parent Element

        let button = document.createElement('button'); //created a button in the li Element
        button.innerText = pokemon.name; //rendered the button to show the pokemon name
        button.classList.add('button', 'btn', 'btn-warning'); //set a class to style the button in CSS

        listpokemon.appendChild(button); //append a button to the list-element#listpokemon
        listpokemon.classList.add('group-listpokemon-item'); // bootstrap

        pokemonList.appendChild(listpokemon); //append the listpokemon to the pokemonList

        button.addEventListener('click', function(event) { // FOR TUTOR: why is the event parameter not read?
        showDetails(pokemon); // added eventListener to the variable 'button'
        });
    }

    function addPokemonCards(pokemon) {
        const container = document.querySelector('.pokemon-container');
        const pColumnCard = document.createElement('div');
        pColumnCard.classList.add("col-lg-3", "col-md-4", "col-sm-6", "card");

        const pCardBody = document.createElement('div');
        pCardBody.classList.add('card-body');
        pCardBody.innerText = pokemon.name;

        pColumnCard.appendChild(pCardBody);
        container.appendChild(pColumnCard);

        //Modal is not showing. Card needs to be a button and show the modal when clicking on it
    }

    //fetch-function for API
    //Returns all the pokemon in the console
    function loadList() {
        return fetch(API_URL).then(function (response) { //the promise
        return response.json();//convert the responde to a json
        }).then(function (json) {
        json.results.forEach(function (item) { //take the json and run a forEach loop on it (parameter: item)
            const pokemon = { //lets map a Pokemon variable
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
          item.abilities = details.abilities;
        }).catch(function (e) {
          console.error(e);
        });
    }

    //return - short if the keys are the same
    return {
        add,
        getAll,
        addListItem,
        addPokemonCards,
        loadList,
        loadDetails,
        // showDetails, // contains the modal
    };
})();

// when typing in the keys it'll display the pokemon cards which contains the KEy-value
const searchInput = document.querySelector('.search-input');
searchInput.addEventListener('input', function(e) {
    const key = e.target.value;
    const pokemonCards = document.querySelectorAll('.card-body');
    pokemonCards.forEach(function(p) {
        if (!p.innerText.includes(key)) {
            p.parentNode.style.display = "none";
        }
        else {
            p.parentNode.style.display = "block";
        }
    });
});

//final calling of functions to execute repository

//adds an object to pokemonRepository
pokemonRepository.loadList().then(function() {
  // Now the data is loaded!
  //forEach loop from Exercise 5 - runs over the pokemonRepository and the addListItem-function in a loop
  pokemonRepository.getAll().forEach(function(pokemon){
    // pokemonRepository.addListItem(pokemon);
    pokemonRepository.addPokemonCards(pokemon);
  });
});
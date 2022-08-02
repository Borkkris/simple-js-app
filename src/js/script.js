//wrapping my pokemonList-array in an IIFE from Exercise 5
// JS code without the Modal (Modal in ui.js)
const prevBtn = document.querySelector('.prev-btn');
const nxtBtn = document.querySelector('.nxt-btn');
const pokemonRepository = (function() {
    const pokemonList=[];
    let prevURL = null;
    let nextURL = null;

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

    // added the Pokemon Cards with classes, names and event listener
    function addPokemonCards(pokemon) {
        const container = document.querySelector('.pokemon-container');
        const pColumnCard = document.createElement('div');
        pColumnCard.classList.add("col-lg-3", "col-md-4", "col-sm-6", "card");

        const pCardBody = document.createElement('div');
        pCardBody.classList.add('card-body');
        pCardBody.innerText = pokemon.name;

        // Attach a event listerner (click event) for each card-body
        pColumnCard.addEventListener('click', (evt) => {
            showDetails(pokemon);
        });

        pColumnCard.appendChild(pCardBody);
        container.appendChild(pColumnCard);

        //Modal is not showing. Card needs to be a button and show the modal when clicking on it
    }

    //fetch-function for API
    //Returns all the pokemon in the console
    function loadList(apiUrl) {
        return fetch(apiUrl).then(function (response) { //the promise
        return response.json();//convert the responde to a json
        }).then(function (json) {
            prevURL = json.previous;
            nextURL = json.next;

            //hides the previous and next button when there is no URL for each anymore (first and last page)
            hideButtonsPagination()

            clearPokemons();
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

    // reads the showModal function and wraps it ionto the showDetails function
    function showDetails(pokemon) {
        loadDetails(pokemon).then(function() {
        showModal(pokemon);
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

    function getPrevURL() {
        return prevURL;
    }

    function getNextURL() {
        return nextURL;
    }

    // when there is no previous URL it adds the class "disabled-btn" to disable the previous button
    function hideButtonsPagination() {
        if (!prevURL) {
            prevBtn.classList.add('invisible');
        }
        else {
            prevBtn.classList.remove('invisible');
        }
    // when there is no next URL it adds the class "disabled-btn" to disable the next button
        if (!nextURL) {
            nxtBtn.classList.add('invisible');
        }
        else {
            nxtBtn.classList.remove('invisible');
        }
    }

    function clearPokemons() {
        pokemonList.length = 0;
        document.querySelector('.pokemon-container').innerHTML = "";
    }

    //return - short if the keys are the same
    return {
        add,
        getAll,
        addPokemonCards,
        loadList,
        loadDetails,
        getPrevURL,
        getNextURL,
        clearPokemons,
        hideButtonsPagination,
    };
})();

// when typing in the keys it'll display the pokemon cards which contain the values
// OPTIMIZIE LATER: you can only search for pokemon which are displayed within the 60 pokemon on the page
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

prevBtn.addEventListener('click', (e) => {
    const url = pokemonRepository.getPrevURL();
    if(url) {
        loadPokemons(url);
    }
});

nxtBtn.addEventListener('click', (e) => {
    const url = pokemonRepository.getNextURL();
    if(url) {
        loadPokemons(url);
    }
});

//adds an object to pokemonRepository
const START_API_URL = 'https://pokeapi.co/api/v2/pokemon/?limit=60';
function loadPokemons(apiUrl) {
    pokemonRepository.loadList(apiUrl).then(function() {
        // Now the data is loaded!
        //forEach loop from Exercise 5 - runs over the pokemonRepository and the addListItem-function in a loop
        pokemonRepository.getAll().forEach(function(pokemon){
            // pokemonRepository.addListItem(pokemon);
            pokemonRepository.addPokemonCards(pokemon);
        });
    });
}
// loads the first 60 pokemon URL when the page is loaded
loadPokemons(START_API_URL);
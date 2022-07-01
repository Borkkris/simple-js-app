//wrapping my pokemonList-array in an IIFE from Exercise 5
let pokemonRepository = (function() {
    let pokemonList=[
    {name:'Bulbasaur', height:2.04, type:['grass', ' poison']}, //all pokemon of my pokemonList in here
    {name:'Charmander', height:2, type:['fire']},
    {name:'Squirtle', height:1.08, type:['water']},
    {name:'Onix', height: 28.10, type:['rock',' ground']},
    {name:'Pidgey', height:1, type:['normal', ' flying']},
    {name:'Ekans', height:6.07, type:['poison']},
    {name:'Jigglypuff', height:1.08, type:['normal', ' airy']},
    {name:'Kabutops', height: 4.03, type:['rock',' water']},
    {name:'Caterpie', height:1, type:['bug']},
    {name:'Pikachu', height:1.04, type:['electric']},
    {name:'Abra', height:2.11, type:['psychic']},
    {name:'Dragonair', height: 13.01, type:['dragon']}
]
    function add(pokemon) {
        if (
            typeof pokemon === 'object' &&  //when type from 'pokemon' is a object
            'name' in pokemon &&            // and "name" in 'pokemon' 
            'height' in pokemon &&          // and "height" in 'pokemon'
            'types' in pokemon              // and "types" in 'pokemon'
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
        let button = document.createElement('button'); //created a button in the li Element
        button.innerText = pokemon.name; //rendered the button to show the pokemon name
        button.classList.add('button'); //set a class to style the button in CSS
        listpokemon.appendChild(button); //append a button to the list-element
        pokemonList.appendChild(listpokemon); //append the listpokemon to the pokemonList
        eventListener(button, pokemon); // added eventListener to the variable 'button'
    }
    // by clicking the button the details of the pokemon were shown
    function eventListener (button, pokemon){
        button.addEventListener("click", function(){
            showDetails(pokemon);
        });
    }

    function showDetails(pokemon) {
        console.log(pokemon);
    }
    //return - short if the keys are the same
    return {
        add,
        getAll,
        addListItem,
        showDetails,
    };
})()

//adds an object to pokemonRepository
pokemonRepository.add({name: 'Metapod', height: 2.04, type:['bug']});
console.log(pokemonRepository.getAll());

//forEach loop from Exercise 5 - runs over the pokemonRepository and the addListItem-function in a loop
pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
});

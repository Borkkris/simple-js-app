// let pokemonList=[
//     {name:'Bulbasaur', height:2.04, type:['grass', ' poison']},
//     {name:'Charmander', height:2, type:['fire']},
//     {name:'Squirtle', height:1.08, type:['water']},
//     {name:'Onix', height: 28.10, type:['rock',' ground']},
//     {name:'Pidgey', height:1, type:['normal', ' flying']},
//     {name:'Ekans', height:6.07, type:['poison']},
//     {name:'Jigglypuff', height:1.08, type:['normal', ' airy']},
//     {name:'Kabutops', height: 4.03, type:['rock',' water']},
//     {name:'Caterpie', height:1, type:['bug']},
//     {name:'Pikachu', height:1.04, type:['electric']},
//     {name:'Abra', height:2.11, type:['psychic']},
//     {name:'Dragonair', height: 13.01, type:['dragon']}
// ]

//simple loop that iterates over each item in pokemonList. 
//for (let i = 0 ; i < pokemonList.length; i++){
//document.write(pokemonList[i].name + " ");
//}


// loop that iterates over each item in pokemonList. 
// I used document.write() inside the loop’s code to write the Pokémon name on my website’s DOM.
// for (let i = 0; i < pokemonList.length; i++){
//     if(pokemonList[i].height >20){
//     document.write("Name: " + pokemonList[i].name + " Height: " + pokemonList[i].height + " - Wow, thats a big Pokemon! <br>");
// }   else if(pokemonList[i].height <2){
//     document.write("Name: " + pokemonList[i].name + " Height: " + pokemonList[i].height + " - small Pokemon <br>");
// }   else {
//     document.write("Name: " + pokemonList[i].name + " Height: " + pokemonList[i].height + " - normal sized Pokemon <br>");
// }
// }

// basic function with the parameter "list" so the program assumes that list=pokemonList
// create a paragraph withg <p></p>
// function printArrayDetails(list){
//     for (let i = 0; i < list.length; i++){
//         if(list[i].height >13){
//         document.write("<p>" + "Name: " + list[i].name + " Height: " + list[i].height + " - Wow, thats a big Pokemon! " + "- Type: " + list[i].type + "</p>" + "<br>");
// }           else if(list[i].height <4){
//             document.write("<p>" + "Name: " + list[i].name + " Height: " + list[i].height + " - small Pokemon " + "- Type: " + list[i].type + "</p>" + "<br>");
// }           else {
//             document.write("<p>" + "Name: " + list[i].name + " Height: " + list[i].height + " - normal sized Pokemon " + "- Type: " + list[i].type + "</p>" + "<br>");
// }
// }
// }

//the two function no longer have empty parentheses: 
//one of them contains the pokemonList array, while the other contains the pokemonList2 array. 
//This tells the function to execute using these two values as inputs, or arguments.
// printArrayDetails(pokemonList)
// printArrayDetails(pokemonList2)
// printArrayDetails(pokemonList3)

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
        let pokemonList = document.querySelector('.pokemon-list'); //(created a new variable: pokemonList) and I select the list with the class pokemon-list from the HTML
        let listpokemon = document.createElement('li'); //(created a new variable: listpokemon) an li element in the parent Element 
        let button = document.createElement('button'); //created a button in the li Element
        button.innerText = pokemon.name; //rendered the button to show the pokemon name
        button.classList.add('button'); //set a class to style the button in CSS
        listpokemon.appendChild(button); //append a button to the list-element
        pokemonList.appendChild(listpokemon); //append the listpokemon to the pokemonList
    }
    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
    };
})()

//adds an object to pokemonRepository
pokemonRepository.add({name: 'Metapod', height: 2.04, type:['bug']});
console.log(pokemonRepository.getAll());

//forEach loop from Exercise 5
pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
});
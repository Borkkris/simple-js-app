let pokemonList=[
    {name:'Bulbasaur', height:2.04, type:['grass', ' poison']},
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


//wrapping my pokemonList array in an IIFE from Exercise 5
let pokemonRepository = (function() {
    let pokemonList=[
    {name:'Bulbasaur', height:2.04, type:['grass', ' poison']},
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
    return {

        getAll: function(){
            return pokemonList;
        },
        add: function(pokemon) {
            pokemonList.push(pokemon);
        
        }
    }
})()

pokemonRepository.add({name: 'Metapod', height: 2.04, type:['bug']});
document.write(pokemonRepository.getAll());

//forEach loop from Exercise 5
pokemonList.forEach(function(list) {
    if(list.height >13){
    document.write("<p>" + "Name: " + list.name + " Height: " + list.height + "- Type: " + list.type + " - Wow, thats a big Pokemon! " + "</p>" + "<br>");
}   
        else if(list.height <4){
        document.write("<p>" + "Name: " + list.name + " Height: " + list.height + "- Type: " + list.type + " - small Pokemon " + "</p>" + "<br>");
}   
            else {
            document.write("<p>" + "Name: " + list.name + " Height: " + list.height + "- Type: " + list.type + " - normal sized Pokemon " + "</p>" + "<br>");
}
});
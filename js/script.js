let pokemonList=[
    {name:'Bulbasaur', height:2.04, type:['grass', 'poison']},
    {name:'Charmander', height:2, type:['fire']},
    {name:'Squirtle', height:1.08, type:['water']},
    {name:'Onix', height: 28.10, type:['rock','ground']}
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
// basic funktion
function printArrayDetails(){
    for (let i = 0; i < pokemonList.length; i++){
        if(pokemonList[i].height >20){
        document.write("Name: " + pokemonList[i].name + " Height: " + pokemonList[i].height + " - Wow, thats a big Pokemon! <br><br>");
        }   else if(pokemonList[i].height <2){
            document.write("Name: " + pokemonList[i].name + " Height: " + pokemonList[i].height + " - small Pokemon <br>");
        }   else {
            document.write("Name: " + pokemonList[i].name + " Height: " + pokemonList[i].height + " - normal sized Pokemon <br>");
        }
    }
}

printArrayDetails()
printArrayDetails()

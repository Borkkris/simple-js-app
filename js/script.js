let pokemonList=[
    {name:'Bulbasaur', height:2.04, type:['grass', 'poison']},
    {name:'Charmander', height:2, type:'fire'},
    {name:'Squirtle', height:1.08, type:'water'},
    {name:'Onix', height: 28.10, type:['rock','ground']}
]

//for (let i = 0 ; i < pokemonList.length; i++){
//document.write(pokemonList[i].name + " ");
//}

for (let i = 0; i < pokemonList.length; i++){
    if(pokemonList[i].height >20){
    document.write(pokemonList[i].name + " " + pokemonList[i].height + " Wow, thats a big Pokemon! ");
}   else if(pokemonList[i].height <2){
    document.write(pokemonList[i].name + " " + pokemonList[i].height + " small Pokemon ");
}   else {
    document.write(pokemonList[i].name + " " + pokemonList[i].height + " normal sized Pokemon ");
}
}
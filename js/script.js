let pokemonList=[
    {name:'Bulbasaur', height:2.04, type:['grass', 'poison']},
    {name:'Charmander', height:2, type:'fire'},
    {name:'Squirtle', height:1.08, type:'water'},
    {name:'Onix', height: 28.10, type:['rock','ground']}
]

for (let i = 0 ; i < pokemonList.length; i++);
document.write(pokemonList[i].name)


for (let a=0; a<pokemonList.length; a++){
    if(pokemonList[a].height >20){
    console.log(pokemonList[a].height + "Wow thats a big Pokemon");
}   else if(pokemonList[i].height <6){
    console.log(pokemonList[a].height + "small Pokemon");
}   else {
    console.log(pokemonList[a].height + "normal sized Pokemon");
}
}
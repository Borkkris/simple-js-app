// JS code after minifier
let pokemonRepository=function(){
  let e=[];function a(a){
    "object"==typeof a&&"name"in a&&"detailsUrl"in a?e.push(a):
    console.log("pokemon is not correct")}
    
    function b(){
      return e}function c(a){
        return fetch(a.detailsUrl).then(function(a){return a.json()}).then(function(b){
          a.imageUrl=b.sprites.front_default,
          a.id=b.id,
          a.height=b.height,
          a.weight=b.weight,
          a.types=b.types,
          a.abilities=b.abilities}).catch(function(a){
            console.error(a)})}function d(a){
              c(a).then(function(){
                var b;let d,c,f,g,h,i,j,k,l,e;b=a,d=$(".modal-title"),
                c=$(".modal-body"),
                f=[],
                b.types.map(function(a){f.push(a.type.name)}),
                g=[]
                ,b.abilities.map(function(a){g.push(a.ability.name)}),
                d.empty(),
                c.empty(),
                h=$("<h1>"+b.name+"</h1>"),
                i=$("<p>Height: "+b.height+"</p>"),
                j=$("<p>Weight: "+b.weight+"</p>"),
                k=$("<p>Types: "+f+"</p>"),
                l=$("<p>Abilities: "+g+"</p>"),
                e=$('<img class="modal-img" style="width:50%">'),
                e.attr("src",b.imageUrl),
                d.append(h),c.append(e),
                c.append(i),c.append(j),
                c.append(k),c.append(l),

                $("#pokemon-modal").modal("toggle")})}
                
                return{
                  add:a,getAll:b,addListItem:function(c){
                    let e=document.querySelector(".pokemon-list"),
                    b=document.createElement("li"),
                    a=document.createElement("button");a.innerText=c.name,
                    a.classList.add("button"),
                    a.classList.add("button"),
                    a.classList.add("btn"),
                    a.classList.add("btn-warning"),
                    b.appendChild(a),
                    b.classList.add("group-listpokemon-item"),
                    e.appendChild(b),
                    a.addEventListener("click",function(a){d(c)})},
                    loadList:function(){

                      return fetch("https://pokeapi.co/api/v2/pokemon/?limit=150").then(function(a){

                      return a.json()}).then(function(b){
                        b.results.forEach(function(b){
                          let c={
                            name:b.name,
                            detailsUrl:b.url};
                            a(c),
                            console.log(c)})}).catch(function(a){
                              console.error(a)})},
                              loadDetails:c,
                              showDetails:d}}();

                              pokemonRepository.loadList().then(function(){
                                pokemonRepository.getAll().forEach(function(a){
                                  pokemonRepository.addListItem(a)})})
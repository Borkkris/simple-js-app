const prevBtn=document.querySelector(".prev-btn"),nxtBtn=document.querySelector(".nxt-btn"),pokemonRepository=function(){let g=[],h=null,i=null;function a(a){"object"==typeof a&&"name"in a&&"detailsUrl"in a?g.push(a):console.log("pokemon is not correct")}function b(){return g}function c(a){return fetch(a.detailsUrl).then(function(a){return a.json()}).then(function(b){a.imageUrl=b.sprites.front_default,a.id=b.id,a.height=b.height,a.weight=b.weight,a.types=b.types,a.abilities=b.abilities}).catch(function(a){console.error(a)})}function d(){return i}function e(){h?prevBtn.classList.remove("invisible"):prevBtn.classList.add("invisible"),i?nxtBtn.classList.remove("invisible"):nxtBtn.classList.add("invisible")}function f(){g.length=0,document.querySelector(".pokemon-container").innerHTML=""}return{add:a,getAll:b,addPokemonCards:function(d){let e=document.querySelector(".pokemon-container"),a=document.createElement("div");a.classList.add("col-lg-3","col-md-4","col-sm-6","card");let b=document.createElement("div");b.classList.add("card-body"),b.innerText=d.name,a.addEventListener("click",a=>{(function(a){c(a).then(function(){showModal(a)})})(d)}),a.appendChild(b),e.appendChild(a)},loadList:function(b){return fetch(b).then(function(a){return a.json()}).then(function(b){h=b.previous,i=b.next,e(),f(),b.results.forEach(function(b){let c={name:b.name,detailsUrl:b.url};a(c),console.log(c)})}).catch(function(a){console.error(a)})},loadDetails:c,getPrevURL:function(){if(console.log("inside prevurl"),h){let a=h.split("=")[2];console.log("limit",a),"60"!==a&&(h=h.replace(a,"60"),console.log("Prevurl updated",h))}return console.log("Normal return",h),h},getNextURL:d,clearPokemons:f,hideButtonsPagination:e}}(),searchInput=document.querySelector(".search-input");searchInput.addEventListener("input",function(a){let c=a.target.value,b=document.querySelectorAll(".card-body");b.forEach(function(a){a.innerText.includes(c)?a.parentNode.style.display="block":a.parentNode.style.display="none"})}),prevBtn.addEventListener("click",b=>{let a=pokemonRepository.getPrevURL();a&&loadPokemons(a)}),nxtBtn.addEventListener("click",b=>{let a=pokemonRepository.getNextURL();a&&loadPokemons(a)});const START_API_URL="https://pokeapi.co/api/v2/pokemon/?limit=60";function loadPokemons(a){pokemonRepository.loadList(a).then(function(){pokemonRepository.getAll().forEach(function(a){pokemonRepository.addPokemonCards(a)})})}loadPokemons("https://pokeapi.co/api/v2/pokemon/?limit=60")
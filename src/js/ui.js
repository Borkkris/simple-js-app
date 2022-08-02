    // Bootstrap Modal
    function showModal(pokemon) {
    let modalTitle = $('.modal-title');
    let modalBody = $('.modal-body');
    // let modalHeader = $(".modal-header");
    let types = [];
    pokemon.types.map (function (object) {
    types.push(object.type.name);
    });
    let abilities = [];
    pokemon.abilities.map(function(object){
    abilities.push(object.ability.name);
    });

    modalTitle.empty();
    modalBody.empty();

    let nameElement = $("<h1>" + pokemon.name + "</h1>");

    let heightElement = $('<p>' + 'Height: ' + pokemon.height + '</p>');

    let weightElement = $('<p>' + 'Weight: ' + pokemon.weight + '</p>');

    let typesElement = $('<p>' + 'Types: ' + types + '</p>');

    let abilitiesElement = $('<p>' + 'Abilities: ' + abilities + '</p>');

    let pokemonImage = $('<img class="modal-img" style="width:50%">');

    pokemonImage.attr("src", pokemon.imageUrl);

    // appends all elements to the parts in the modal
    modalTitle.append(nameElement);
    modalBody.append(pokemonImage);
    modalBody.append(heightElement);
    modalBody.append(weightElement);
    modalBody.append(typesElement);
    modalBody.append(abilitiesElement);

    $("#pokemon-modal").modal("toggle");
  }

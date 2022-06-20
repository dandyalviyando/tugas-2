let fetchAll = async () => {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=30"; 
    const response = await fetch(url, {
        method: "GET"
    });

    const json = await response.json();

    allData = json.results;

    return allData;
}

let displayResult = async () => {
    
    const data = await fetchAll();

    data.forEach( (res) => {
        var urlPokemon = res.url;
        console.log(urlPokemon);

        let eachData = async () => {
            const response = await fetch(urlPokemon, {
                method: "GET"
            });
        
            const dataPokemon = await response.json();
        
            console.log(dataPokemon);

            if(dataPokemon.types[0].type.name == "grass"){
                document.getElementById("cards").insertAdjacentHTML(
                    'beforeend', 
                    `<div class="card" style="background-color: #92BA92">
                        <span class="number">${dataPokemon.id}: </span>
                        <span class="name">${dataPokemon.name}</span>
                        <div>
                            <img class="img" src="${dataPokemon.sprites.front_shiny}" alt="">
                        </div>
                        <span class="type">type: ${dataPokemon.types[0].type.name}</span>
                    </div>`
                );
            }else if(dataPokemon.types[0].type.name == "fire") {
                document.getElementById("cards").insertAdjacentHTML(
                    'beforeend', 
                    `<div class="card" style="background-color: #FF7878">
                        <span class="number">${dataPokemon.id}: </span>
                        <span class="name">${dataPokemon.name}</span>
                        <div>
                            <img class="img" src="${dataPokemon.sprites.front_shiny}" alt="">
                        </div>
                        <span class="type">type: ${dataPokemon.types[0].type.name}</span>
                    </div>`
                );
            }else if(dataPokemon.types[0].type.name == "water") {
                document.getElementById("cards").insertAdjacentHTML(
                    'beforeend', 
                    `<div class="card" style="background-color: #8CC0DE">
                        <span class="number">${dataPokemon.id}: </span>
                        <span class="name">${dataPokemon.name}</span>
                        <div>
                            <img class="img" src="${dataPokemon.sprites.front_shiny}" alt="">
                        </div>
                        <span class="type">type: ${dataPokemon.types[0].type.name}</span>
                    </div>`
                );
            }else if(dataPokemon.types[0].type.name == "bug") {
                document.getElementById("cards").insertAdjacentHTML(
                    'beforeend', 
                    `<div class="card" style="background-color: #D1D1D1">
                        <span class="number">${dataPokemon.id}: </span>
                        <span class="name">${dataPokemon.name}</span>
                        <div>
                            <img class="img" src="${dataPokemon.sprites.front_shiny}" alt="">
                        </div>
                        <span class="type">type: ${dataPokemon.types[0].type.name}</span>
                    </div>`
                );
            }else if(dataPokemon.types[0].type.name == "normal") {
                document.getElementById("cards").insertAdjacentHTML(
                    'beforeend', 
                    `<div class="card" style="background-color: #F6E3C5">
                        <span class="number">${dataPokemon.id}: </span>
                        <span class="name">${dataPokemon.name}</span>
                        <div>
                            <img class="img" src="${dataPokemon.sprites.front_shiny}" alt="">
                        </div>
                        <span class="type">type: ${dataPokemon.types[0].type.name}</span>
                    </div>`
                );
            }else if(dataPokemon.types[0].type.name == "poison") {
                document.getElementById("cards").insertAdjacentHTML(
                    'beforeend', 
                    `<div class="card" style="background-color: #F9CEEE">
                        <span class="number">${dataPokemon.id}: </span>
                        <span class="name">${dataPokemon.name}</span>
                        <div>
                            <img class="img" src="${dataPokemon.sprites.front_shiny}" alt="">
                        </div>
                        <span class="type">type: ${dataPokemon.types[0].type.name}</span>
                    </div>`
                );
            }else if(dataPokemon.types[0].type.name == "electric") {
                document.getElementById("cards").insertAdjacentHTML(
                    'beforeend', 
                    `<div class="card" style="background-color: #F4E06D">
                        <span class="number">${dataPokemon.id}: </span>
                        <span class="name">${dataPokemon.name}</span>
                        <div>
                            <img class="img" src="${dataPokemon.sprites.front_shiny}" alt="">
                        </div>
                        <span class="type">type: ${dataPokemon.types[0].type.name}</span>
                    </div>`
                );
            }else{
                document.getElementById("cards").insertAdjacentHTML(
                    'beforeend', 
                    `<div class="card" style="background-color: #B09B71">
                        <span class="number">${dataPokemon.id}: </span>
                        <span class="name">${dataPokemon.name}</span>
                        <div>
                            <img class="img" src="${dataPokemon.sprites.front_shiny}" alt="">
                        </div>
                        <span class="type">type: ${dataPokemon.types[0].type.name}</span>
                    </div>`
                );
            }

        }

        eachData();
        
    });
}
let fetchData = async () => {
    const url = "https://pokeapi.co/api/v2/pokemon/25"; 
    const response = await fetch(url, {
        method: "GET"
    });

    const json = await response.json();

    console.log(json);

    return json;
}

let displayResult = async () => {
    const data = await fetchData();
    let number = document.getElementById("number");
    let name = document.getElementById("name");
    let img = document.getElementById("img");
    let type = document.getElementById("type");
    let card = document.getElementById("card");

    card.style.background = "#FFFF00";
    card.style.display = "inline-block";

    number.innerHTML = `${data.id}: `;
    name.innerHTML = data.name;
    img.src = data.sprites.front_shiny;
    type.innerHTML = `type: ${data.types[0].type.name}`;

}
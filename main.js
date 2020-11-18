const URL = "https://pokeapi.co/api/v2/pokemon/";

function getPokemonById(id) {
  return fetch(`${URL}${id}`)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}

function render(pokemon) {
  const $root = document.getElementById("root");

  $root.innerHTML = `
    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" />
    <h2>${pokemon.name}</h2>
  `;
}
async function init() {
  const pokemon = await getPokemonById(6);
  render(pokemon);
}

init();

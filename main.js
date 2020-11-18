const URL = "https://pokeapi.co/api/v2/pokemon/";

/*Utils*/
const setNumberPokemon = (numberPokemon) => {
  let newNumber;
  if (numberPokemon < 100) {
    newNumber = numberPokemon < 10 ? `00${numberPokemon}` : `0${numberPokemon}`;
  } else {
    newNumber = numberPokemon;
  }

  return newNumber;
};

function getPokemonById(id) {
  return fetch(`${URL}${id}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data;
    });
}

function render(pokemon) {
  const $root = document.getElementById("root");

  $root.innerHTML = `
    <article class="pokemon">
      <div class="pokemon__thumbnail">
        <figure>
          <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${setNumberPokemon(
            pokemon.id
          )}.png" alt="${pokemon.name}" />
        </figure>
      </div>
      <div class="pokemon__info">
        <h2>${pokemon.name}</h2>
        <p class="pokemon__number"><strong>#${setNumberPokemon(
          pokemon.id
        )}</strong></p>
      </div>
    </article>
  `;
}
async function init() {
  const pokemon = await getPokemonById(53);
  render(pokemon);
}

init();

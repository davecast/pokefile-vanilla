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
        <figure class="pokemon__figure">
          <img class="pokemon__image" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${setNumberPokemon(
            pokemon.id
          )}.png" alt="${pokemon.name}" />
        </figure>
      </div>
      <div class="pokemon__info">
        <div class="pokemon__meta">
          <h2 class="pokemon__name">${pokemon.name}</h2>
          <p class="pokemon__number"><strong class="pokemon__position">#${setNumberPokemon(
            pokemon.id
          )}</strong></p>
        </div>
        <ul class="pokemon__types"></ul>
      </div>
    </article>
  `;

  const $listTypes = $root.querySelector(".pokemon__types");

  pokemon.types.forEach((type) => {
    $listTypes.innerHTML += `<li class="pokemon__type" style="background-image: url(./image/${type.type.name}.png);"></li>`;
  });
}
async function init() {
  const pokemon = await getPokemonById(6);
  render(pokemon);
}

init();

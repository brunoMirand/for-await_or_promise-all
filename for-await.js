import axios from 'axios';

const { data: { results } } = await axios.get('https://pokeapi.co/api/v2/pokemon');

let pokemons = [];
for ( const result of results ) {
  const { data } = await axios.get(result.url);
  pokemons.push(data.name);
}

console.log(pokemons);

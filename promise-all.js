import axios from "axios";

const { data: { results } } = await axios.get('https://pokeapi.co/api/v2/pokemon');

const result = await Promise.all(results.map(({ url }) => axios.get(url)));

result.forEach((r) => console.log(r.data.name));

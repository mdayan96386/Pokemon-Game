export const fetchPokemonData = async (maxPokemon) => {
    const fetchedData = [];
    for (let i = 1; i <= maxPokemon; i++) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      const data = await response.json();
      fetchedData.push({
        name: data.name,
        image: data.sprites.other["official-artwork"].front_default,
      });
    }
    return fetchedData;
  };
  
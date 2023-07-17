import React, { useEffect, useState } from 'react';
import '../css/estilos.css';

function Card(props) {
  const [pokemon, setPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const url = `https://pokeapi.co/api/v2/pokemon/${props.pokemonNumber}`;

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setPokemon(json);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [props.pokemonNumber]);

  if (isLoading) {
    return <div>Cargando.....</div>;
  }

  const pokemonTypes = pokemon.types.map((type) => type.type.name); // Obtener los tipos del Pokémon

  return (
    <div className='contenedorTexto'>
      <div className='contenedorPokemon'>
        <img className='contenedorImagen' src={pokemon.sprites.front_default} alt='imagen' />
        <h5 className='contenedorTitulo'>{pokemon.name}</h5>
        <p className='contenedorParrafo'>Tipo: {pokemonTypes.join(', ')}</p> {/* Mostrar los tipos del Pokémon */}
      </div>
    </div>
  );
}

export default Card;

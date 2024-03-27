import React, {useEffect, useState} from 'react';
import axios from "axios";



const Pokemon = ({endpoint}) => {
    useEffect(() => {
        void findpokemon()
    }, []);

    const [pokemon,setPokemon] = useState("")

    async function findpokemon(){
        try{ const response = await axios.get('https://pokeapi.co/api/v2/pokemon/charizard')
            setPokemon(response.data)
            console.log(response.data)
        }catch(e){
            console.error(e)
        }
    }
    return (
        <article className="pokemon-card">
            {Object.keys(pokemon).length > 0 &&
                <>
                    <h2>{pokemon.name}</h2>
                    <img src={pokemon.sprites.front_default} alt="pokemon-picture"/>
                    <h4>Moves : {pokemon.moves.length}</h4>
                    <h4>Weight : {pokemon.weight} </h4>
                    <h4>Abilities : </h4>
                    <ul>
                        {pokemon.abilities.map((ability)=>{
                            return <li key={ability.ability.name}>{ability.ability.name}</li>
                        })}
                    </ul>
                </>
            }
        </article>
    );
};

export default Pokemon;
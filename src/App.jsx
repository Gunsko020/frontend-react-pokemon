import './App.css'
import pokemonlogo from './assets/International_Pokémon_logo.svg.png'
import axios from "axios";
import {useEffect, useState} from "react";
import Pokemon from "./components/Pokemon.jsx";




function App() {



    const [pokemon,setPokemon] = useState([])
    const [endpoint,setEndpoint] = useState("https://pokeapi.co/api/v2/pokemon/")

    useEffect(() => {
        async function findpokemon(){
            try{ const response = await axios.get(endpoint)
                setPokemon(response.data)
            }catch(e){
                console.error(e)
            }
        }
        void findpokemon()
    }, [endpoint]);

  return (
    <>
        <header>
            <h1>Gotta catch em all!</h1>
            <div className="poke-logo">
                <img className='pokemonlogo' src={pokemonlogo} alt="pokemonlogo"/>
            </div>
        </header>
        <main>


            {pokemon &&
            <>
                <section>
                <button
                    type="button"
                    className="nav-button"
                    onClick={()=>setEndpoint(pokemon.previous)}
                    disabled={!pokemon.previous}
                >
                    Vorige
                </button>
                <button
                    type="button"
                    className="nav-button"
                    onClick={()=>setEndpoint(pokemon.next)}
                    disabled={!pokemon.next}
                >
                    Volgende
                </button>
                {pokemon.results && pokemon.results.map((pokemon)=>{
                    return <Pokemon key={pokemon.name} endpoint={pokemon.url}/>
                })}

            </section>
            </>
            }



        </main>
    </>
  )
}

export default App

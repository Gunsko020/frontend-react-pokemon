import './App.css'
import pokemonlogo from './assets/International_Pokémon_logo.svg.png'
import axios from "axios";
import {useEffect, useState} from "react";
import Pokemon from "./components/Pokemon.jsx";




function App() {

    // const [endpoint,setEndpoint] =  useState("'https://pokeapi.co/api/v2/pokemon/charizard'")

    async function fetchData(){
        try{

        }catch (e){
            console,erorr(e)
        }
    }




  return (
    <>
        <header>
            <h1>Gotta catch em all!</h1>
        </header>
        <main>
        <img className='pokemonlogo' src={pokemonlogo} alt="pokemonlogo"/>
            <Pokemon/>
        </main>
    </>
  )
}

export default App

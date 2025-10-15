import { useState, useEffect } from "react";

function Tableta() {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(()=> {
        const fetchPokemons = async () => {
            try{
                setLoading(true);
                const response = await fetch(
                    "https://pokeapi.co/api/v2/pokemon?limit=100"
                );

                if(!response.ok) {
                    throw new Error("Error al cargar los pokemon");
                }

                const data = await response.json();
                setPokemons(data.results);
                setLoading(false);
             } catch (err) {
                setError(err.message);
                setLoading(false);
             }
        };

        fetchPokemons();
    
    },[]); // Ell array vacio significa que se ejecuta solo una vez al montar

    if(loading) return <div>Cargando porfavor espere...</div>;

    if(error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Lista de pokemon</h1>
            <ul>
                {pokemons.map((pokemon, index) => ( 
                    <li key={index}>{pokemon.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Tableta;


function Tableta(){
    
    if(loading) return <div>Cargando pokemon...</div>;
    if(error) return <div>Error: {error}</div>;

    return(
        <div style={{padding: "20px"}}>
         <h1> Lista de pokemon ({pokemons.length})</h1>
         <ul style={{listStyle: "none", padding: 0}}>
         {pokemons.map((pokemon, index) => (
            <li
            key={index}
            style={{
                margin: "10px 0",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                display: "flex",
                justifycontent: "space-between",
                alignItems: "center",
            }}
            >
                <span style={{ textTransform: "capitalize", fontSize: "18px"}}>
                    {pokemon.name}
                </span>
                <button onClick={()=> handViewpokemon(pokemon.name, pokemon.url)}
                style={{
                    padding: "5px 15px",
                    backgroundColor: "#007bff",
                    color: "white",
                    border: "none",
                    borderRadius: "3px",
                    cursor: "pointer",
                }}

                onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
                >
                ver
                </button>
                </li>
            ))}
         </ul>
     </div>
  );
}

export default Tableta;
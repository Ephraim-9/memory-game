import { useState, useEffect } from "react";

function GameBoard() {
    const [gifs, setGifs] = useState([]);
    const [query, setQuery] = useState("");
    const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
    
    const fetchGifs = async (query) => {
        const response = await fetch (
            `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${encodeURIComponent(query)}&limit=10&rating=g&lang=en`
        )
        const data = await response.json()
        setGifs(data.data);    
    }

    const handleSearchSubmit = (e) => {
        e.preventDefault();  
        fetchGifs(query);
    };

    useEffect(() => {
        fetchGifs();
    }, []);


    return (
        <div>
            <div>
            <h1>Search GIFs</h1>

            <form onSubmit={handleSearchSubmit}>
                <input 
                    type="text" 
                    placeholder="Search GIFs..."
                    value={query} 
                    onChange={(e) => setQuery(e.target.value)} 
                />
                <button type="submit">Search</button>
            </form>
        </div>
            {gifs.length === 0 ? (
                <p>Loading...</p>
            ) : (
                <div>
                    {gifs.map((gif) => (
                        <img key={gif.id} src={gif.images.fixed_height.url} alt="GIF" />
                    ))}
                </div>
            )}
        </div>
    )
}

export default GameBoard;
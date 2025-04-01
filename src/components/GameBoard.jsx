import { useState, useEffect } from "react";

function GameBoard() {
    const [gifs, setGifs] = useState([])

    const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
    
    const fetchGifs = async (query) => {
        const response = await fetch (
            `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=loading&limit=10&rating=g&lang=en`
        )
        const data = await response.json()
        setGifs(data.data);    
    }

    useEffect(() => {
        fetchGifs();
    }, []);


    return (
        <div>
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
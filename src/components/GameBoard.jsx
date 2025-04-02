import { useState, useEffect } from "react";

function GameBoard() {
    const [gifs, setGifs] = useState([]);
    const [query, setQuery] = useState("Loading...");
    const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [clickedGifs, setClickedGifs] = useState([]);
    
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
        fetchGifs(query);
    }, []);

    const handleGifClicks = (gifId) => {
        if (clickedGifs.includes(gifId)) {
            setHighScore((prev) => Math.max(prev, score))
            setScore(0)
            setClickedGifs([])
        } else {
            setClickedGifs ([...clickedGifs, gifId])
            setScore(score + 1)

            if (score + 1 > highScore) {
                setHighScore(score + 1)
            }
        }

        setGifs(shuffleArray([...gifs]))
    }

    const shuffleArray = (array) => {
        return array.sort(() => Math.random() - 0.5)
    }

    return (
        <div>
            <div>
            <h2>Score: {score}</h2>
            <h2>High Score: {highScore}</h2>
            <h3>Search GIFs</h3>

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
                        <img key={gif.id} 
                        src={gif.images.fixed_height.url} 
                        alt="GIF"
                        onClick={() => handleGifClicks(gif.id)} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default GameBoard;
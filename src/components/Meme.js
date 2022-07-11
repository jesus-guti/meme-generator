import React from "react"
import memesData from "../memesData"

export default function Meme() {
    const [meme, setMeme] = React.useState({
            topText : "One does not simply",
            bottomText : "walk into mordor", 
            randomImage : "http://i.imgflip.com/1bij.jpg"
    })
    
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getRandomMemeImage(){
        const random = Math.floor(Math.random() * 100)
        const url = allMemeImages.data.memes[random].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }));
    }

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
        
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    onChange={handleChange}
                    value={meme.topText}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    onChange={handleChange}
                    value={meme.bottomText}
                />
                <button 
                    className="form--button"
                    onClick={getRandomMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" alt=""/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}
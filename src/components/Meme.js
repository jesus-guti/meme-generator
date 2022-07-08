import React from "react"
import memesData from "../memesData"

export default function Meme() {
    const [meme, setMeme] = React.useState({
            topText : "hello",
            bottomText : "there", 
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

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={getRandomMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <img src={meme.randomImage} alt="" className="w-[600px] mx-auto border-none my-8 object-cover"/>
        </main>
    )
}
import React from "react"
import memesData from "../memesData"

export default function Meme() {
    const [imgUrl, setImgUrl] = React.useState("http://i.imgflip.com/1bij.jpg");

    function getRandomMemeImage(){
        let random = Math.floor(Math.random() * 100);
        setImgUrl(memesData.data.memes[random].url);
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
            <img src={imgUrl} alt="" className="w-[600px] mx-auto border-none my-8 object-cover"/>
        </main>
    )
}
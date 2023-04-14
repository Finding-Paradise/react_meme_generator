import React from "react";
import "../components/Meme.css";

function Meme() {
  let [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  let [allMemes, setAllMemes] = React.useState([]);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())  
    .then(data => setAllMemes(data.data.memes));
  }, []);

  return (
    <main className="main">
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
        <button className="form--btn" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme-image-wrapper">
        <img src={meme.randomImage} alt="" className="meme-image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}

export default Meme;

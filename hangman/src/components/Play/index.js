import { React, useState, useEffect } from "react";
import "./style.css";
import { useHistory } from "react-router";
import { useLocation } from "react-router";
import image from "../../image/Untitled.png"
import image2 from "../../image/Untitled2.png"
import image3 from "../../image/Untitled3.png"
import image4 from "../../image/Untitled4.png"
import image5 from "../../image/Untitled5.png"
import image6 from "../../image/Untitled6.png"
import image7 from "../../image/Untitled7.png"

const Play = () => {
  const history = useHistory();
  const location = useLocation();
  const myCateg =location.state?.myCateg;
  let words = myCateg;
  const [word, setword] = useState(
    words[Math.floor(Math.random() * words.length)]
  );
    const [picIndex, setpicIndex] = useState(0)
  let amges =[image,image2,image3,image4,image5,image6,image7]
  
  const [dashes, setDashes] = useState("-".repeat(word.length));
  const [guesses, setguesses] = useState(6);
  let letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let str;
  useEffect(() => {
    console.log('should change');
    
  }, [setpicIndex])
  const letterPressed = (index) => {
    document.getElementById(`${index}`).disabled = true;
    if (word.includes(letters[index])) {
      str = dashes.split("");
      str[word.indexOf(letters[index])] = letters[index];
      setDashes(str.join(""));
    } else {
      setguesses(guesses - 1);
      setpicIndex(picIndex+1)
      // document.getElementsByClassName('imagegg').src=image7;
    
    }
  };

  const [seconds, setSeconds] = useState(1000);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
   
  if (seconds <= 0 || guesses <= 1) {
    setTimeout(() => {
      history.push('/lost');
  }, 2000);
  }

  if(!dashes.includes("-")){
      setTimeout(() => {
          history.push('/won');
      }, 2000);
  }

  return (
    <div className="container">
      <div className="home">
        <div class="play">
          <h4>Guesses left: {guesses}</h4>
          <h4>time: {seconds}</h4>
          </div>
          <h4 className="guess">{dashes}</h4>
          <div class="letters">
            {letters.map((letter, index) => {
              return (
                <>
                  <button
                    className="letter"
                    id={`${index}`}
                    onClick={() => letterPressed(index)}
                  >
                    {letter}
                  </button>
                </>
              );
            })}

          </div>
        
          </div>
          <div>
          
          <img  src={amges[picIndex]} className="imagegg" />
          </div>
        </div>
          );
};

export default Play;

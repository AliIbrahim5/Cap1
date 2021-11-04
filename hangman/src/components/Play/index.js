import { React, useState, useEffect } from "react";
import "./style.css";
import { useHistory } from "react-router";
import { useLocation } from "react-router";

const Play = () => {
  const history = useHistory();
  const location = useLocation();
  const myCateg =location.state?.myCateg;
  let words = myCateg;
  const [word, setword] = useState(
    words[Math.floor(Math.random() * words.length)]
  );
  console.log(words);
  const [dashes, setDashes] = useState("-".repeat(word.length));
  const [guesses, setguesses] = useState(5);
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
  const letterPressed = (index) => {
    document.getElementById(`${index}`).disabled = true;
    if (word.includes(letters[index])) {
      str = dashes.split("");
      str[word.indexOf(letters[index])] = letters[index];
      setDashes(str.join(""));
    } else {
      setguesses(guesses - 1);
      if (guesses <= 1) {
        history.push('/lost');
      }
    }
  };

  const [seconds, setSeconds] = useState(30);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (seconds <= 0) {
    history.push('/lost');
  }

  if(!dashes.includes("-")){
      setTimeout(() => {
          history.push('/won');
      }, 500);
  }

  return (
    <div className="container">
      <div className="home">
        <div class="play">
          <h4>Guesses left: {guesses}</h4>
          <p>time: {seconds}</p>
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
          <p className="guess">{dashes}</p>
        </div>
      </div>
    </div>
  );
};

export default Play;

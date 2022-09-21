import React, { useState } from "react";
import "./styles.css";

var emogiDictionay = {
  "😀": "Smilling",
  "😴": "Sleeping",
  "😥": "Sad",
  "😳": "Disbelief",
  "😬": "Sorry",
  "😍": "Lovely",
  "😋": "Yummy",
  "😡": "Angry",
  "🤑": "Money",
  "😲": "seriously",
  "🤗": "Huggs",
  "😫": "Cry",
  "🙄": "Don't know",
  "🤐": "Speachless",
  "😎": "Attitude",
  "🥳": "Party",
  "🤧": "fever"
};
var emogiWeKnow = Object.keys(emogiDictionay);

export default function App() {
  var [meaning, setmeaning] = useState(" ");

  function inputEmogiHandler(event) {
    var variable = event.target.value;
    var meaning = emogiDictionay[variable];

    if (meaning === undefined) {
      meaning = "This wont in our database";
    }
    setmeaning(meaning);
  }
  function emogiClickHandler(emogi) {
    var meaning = emogiDictionay[emogi];
    setmeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Finder</h1>
      <input onChange={inputEmogiHandler} />
      <div>{meaning}</div>

      {emogiWeKnow.map(function (emogi) {
        return (
          <span
            onClick={() => emogiClickHandler(emogi)}
            key={emogi}
            style={{ padding: "0.5rem", fontSize: "25px", cursor: "pointer" }}
          >
            {emogi}
          </span>
        );
      })}
    </div>
  );
}

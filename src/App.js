import "./styles.css";
import React, { useState } from "react";

const emojiDictionay = {
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "😉": "Winking Face",
  "😊": "Smiling Face with Smiling Eyes",
  "😇": "Smiling Face with Halo",
  "🥰": "Smiling Face with Hearts",
  "😍": "Smiling Face with Heart-Eyes",
  "🤩": "Star-Struck"
};

var emojiWeKnow = Object.keys(emojiDictionay) 

export default function App() {
  var [meaning, setMeaning] = useState("");

  function onChangeHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionay[userInput];

    if (meaning === undefined) {
      meaning = "This emoji is not available";
    }

    setMeaning(meaning);
  }

function emojiClickHandler(emoji){
  var meaning = emojiDictionay[emoji]
  setMeaning(meaning)
}

  return (
    <div className="App">
      <h1 style={{ color: "skyblue" }}>Emoji Interpretor</h1>
      <input placeholder="Enter the emoji" onChange={onChangeHandler}></input>
      <div className="meaning-opt"> {meaning} </div>

      <h4>Emojis we know</h4>
      <ul className="list-inline">
        {
          emojiWeKnow.map(function (emoji){
            return <li onClick={()=>emojiClickHandler(emoji)} key={emoji} className="list-emoji">{emoji}</li>
          })
        }
      </ul>

    </div>
  );
}

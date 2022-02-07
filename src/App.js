import React from "react";
import emojipedia from "./Data";
import Card from "./component";
import "./App.css";


function cardData(emojipedia) {
  return (

    <Card
      key={emojipedia.key}
      emoji={emojipedia.emoji}
      name={emojipedia.name}
      meaning={emojipedia.meaning}

    />



  )
};

function App() {
  return (
    <div>
      <h1>
        <span>Emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(cardData)}</dl>

    </div>

  )
};
export default App;
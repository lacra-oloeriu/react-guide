import React, { useState } from "react";

import "./App.css";
import Button from "./components/UI/Button/Button";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  const togglePatagraphHandler = () => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  };
  
  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p>This is new!</p>}
      <Button onClick={togglePatagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
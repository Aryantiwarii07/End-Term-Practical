import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Enter your name:</h2>

      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
      />

      <p>Your name is: {name}</p>
    </div>
  );
}

export default App;
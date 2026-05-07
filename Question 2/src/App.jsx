import React from "react";
import { MyContext } from "./MyContext";
import Child from "./Child";

function App() {
  return (
    <MyContext.Provider value="Hello">
      <Child />
    </MyContext.Provider>
  );
}

export default App;
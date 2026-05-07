import React, { useContext } from "react";
import { MyContext } from "./MyContext";

function GrandChild() {
  const data = useContext(MyContext);

  return <h2>{data}</h2>;
}

export default GrandChild;
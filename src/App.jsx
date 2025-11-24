import React, { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <Nav />
      <Search setResults={setResults} />
      <FoodList results={results} />
    </div>
  );
}

export default App;

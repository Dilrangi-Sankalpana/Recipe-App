import React, { useState } from "react";
import Search from "./components/Search";
import Results from "./components/Results";

function App() {
  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <h1>Recipe Search</h1>
      <Search setResults={setResults} />
      <Results results={results} />
    </div>
  );
}

export default App;

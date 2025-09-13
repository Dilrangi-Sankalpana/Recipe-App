import React, { useState, useEffect } from "react";

function Search({ setResults }) {
  const [query, setQuery] = useState("");

  const URL = "https://api.spoonacular.com/recipes/complexSearch";
  const API_KEY = "dca2e049b42a42ea895400a3aa8ab213";

  useEffect(() => {
    const fetchData = async () => {
      if (!query) return;

      //   const res = await fetch(`${URL}?apiKey=${API_KEY}&query=${query}`);
      const data = await res.json();
      setResults(data.results);
    };

    fetchData();
  }, [query]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a recipe..."
      />
    </div>
  );
}

export default Search;

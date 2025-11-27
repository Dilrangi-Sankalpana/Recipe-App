import React, { useState, useEffect } from "react";
import styles from "./modules/search.module.css";

export default function Search({ setFoodData }) {
  const [query, setQuery] = useState("");

  const URL = "https://api.spoonacular.com/recipes/complexSearch";
  const API_KEY = "dca2e049b42a42ea895400a3aa8ab213";

  useEffect(() => {
    const fetchData = async () => {
      if (!query) return;

      const res = await fetch(`${URL}?apiKey=${API_KEY}&query=${query}`);
      const data = await res.json();
      setFoodData(data.results);
    };

    fetchData();
  }, [query]);

  return (
    <div className={styles.search}>
      <input
        className={styles.input}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a recipe..."
      />
    </div>
  );
}

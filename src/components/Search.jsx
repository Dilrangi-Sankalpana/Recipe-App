import React, { useState, useEffect } from "react";
import styles from "./modules/search.module.css";

export default function Search({ setFoodData, setSelectedFoodID }) {
  const [query, setQuery] = useState("");

  const URL = "https://api.spoonacular.com/recipes/complexSearch";
  const API_KEY = "YOUR_API_KEY_HERE"; // Replace with your actual API key

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

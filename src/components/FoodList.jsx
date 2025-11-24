import React from "react";
import FoodItem from "./FoodItem";

export default function FoodList({ results }) {
  return (
    <div>
      {results.map((result) => (
        <FoodItem key={result.id} result={result} />
      ))}
    </div>
  );
}

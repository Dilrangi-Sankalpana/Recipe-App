import React from "react";
import FoodItem from "./FoodItem";

export default function FoodList({ foodData }) {
  return (
    <div>
      {foodData.map((result) => (
        <FoodItem key={result.id} foodItem={result} />
      ))}
    </div>
  );
}

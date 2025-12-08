import { useEffect, useState } from "react";
import styles from "./modules/fooddetails.module.css";
import ItemIngredients from "./ItemIngredients";

export default function FoodDetails({ selectedFoodID }) {
  const [foodDetails, setFoodDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  const URL = `https://api.spoonacular.com/recipes/${selectedFoodID}/information`;
  const API_KEY = "YOUR_API_KEY_HERE"; // Replace with your actual API key

  useEffect(() => {
    const fetchFoodDetails = async () => {
      if (!selectedFoodID) {
        setFoodDetails(null);
        return;
      }

      setLoading(true);
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFoodDetails(data);
      setLoading(false);
    };

    fetchFoodDetails();
  }, [selectedFoodID]);

  if (loading) return <p>Loading recipe...</p>;
  if (!foodDetails) return null;

  return (
    <div className={styles.itemDetails}>
      <div>
        <h1 className={styles.itemTitle}>{foodDetails.title}</h1>
        <img
          src={foodDetails.image}
          alt={foodDetails.title}
          className={styles.itemImage}
        />
        <div className={styles.recipeSummary}>
          <span>
            🕛 <strong>{foodDetails.readyInMinutes} minutes</strong>
          </span>
          <span>
            👨‍👩‍👧‍👦 <strong>Servings: {foodDetails.servings}</strong>
          </span>
          <span>
            {foodDetails.vegetarian ? "🥕 Vegetarian" : "🍗 Non-Vegetarian"}
          </span>
          <span>{foodDetails.vegan ? "🥦 Vegan" : "🍳 Non-Vegan"}</span>
        </div>
        <div className={styles.recipePrice}>
          💲<span>{foodDetails.pricePerServing} per serving</span>
        </div>
      </div>

      <h2>Ingredients</h2>
      <div className={styles.itemIngredients}>
        {foodDetails.extendedIngredients.map((ingredient) => (
          <ItemIngredients key={ingredient.id} ingredient={ingredient} />
        ))}
      </div>

      <h2>Instructions</h2>
      <div className={styles.recipeInstructions}>
        <ul>
          {foodDetails.analyzedInstructions[0]?.steps?.map((step) => (
            <li key={step.number}>{step.step}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

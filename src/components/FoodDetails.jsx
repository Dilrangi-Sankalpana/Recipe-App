import { useEffect, useState } from "react";

export default function FoodDetails({ selectedFoodID }) {
  const [foodDetails, setFoodDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  const URL = `https://api.spoonacular.com/recipes/${selectedFoodID}/information`;
  const API_KEY = "dca2e049b42a42ea895400a3aa8ab213";

  useEffect(() => {
    const fetchFoodDetails = async () => {
      if (!selectedFoodID) return;

      setLoading(true);
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFoodDetails(data);
      setLoading(false);
    };

    fetchFoodDetails();
  }, [selectedFoodID]);

  if (!selectedFoodID) return <p>Click a recipe to view details</p>;
  if (loading) return <p>Loading recipe...</p>;
  if (!foodDetails) return null;

  return (
    <div>
      <div>
        <h1>{foodDetails.title}</h1>
        <img src={foodDetails.image} alt={foodDetails.title} />
        <div>
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
        <div>
          💲<span>{foodDetails.pricePerServing} per serving</span>
        </div>
      </div>
      <div>
        <h2>Instructions</h2>
        <ul>
          {foodDetails.analyzedInstructions[0].steps.map((step) => (
            <li key={step.number}>{step.step}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

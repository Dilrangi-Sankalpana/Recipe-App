import { useEffect, useState } from "react";

export default function FoodDetails({ selectedFoodID }) {
  const [foodRecipe, setFoodRecipe] = useState(null);

  const URL = `https://api.spoonacular.com/recipes/${selectedFoodID}/information`;
  const API_KEY = "dca2e049b42a42ea895400a3aa8ab213";

  useEffect(() => {
    const fetchFoodDetails = async () => {
      if (!selectedFoodID) return;
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFoodRecipe(data);
    };

    fetchFoodDetails();
  }, [selectedFoodID]);

  return <div>Food Details Component {selectedFoodID}</div>;
}

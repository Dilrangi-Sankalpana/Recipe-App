export default function ItemIngredients({ ingredient }) {
  return (
    <div>
      <li>
        <h3>{ingredient.name}</h3>
        <img
          src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
          alt={ingredient.name}
        />
        <h3>
          {ingredient.amount} {ingredient.unit}
        </h3>
      </li>
    </div>
  );
}

import styles from "./modules/itemIngredients.module.css";

export default function ItemIngredients({ ingredient }) {
  return (
    <div className={styles.ingredientItem}>
      <div>
        <img
          src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
          alt={ingredient.name}
        />
      </div>
      <div>
        <div className={styles.ingredientName}>{ingredient.name}</div>
        <div className={styles.ingredientAmount}>
          {ingredient.amount} {ingredient.unit}
        </div>
      </div>
    </div>
  );
}

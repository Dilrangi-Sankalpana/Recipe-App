import styles from "./modules/fooditem.module.css";

export default function FoodItem({ foodItem, setSelectedFoodID }) {
  return (
    <div className={styles.item}>
      <img
        className={styles.itemImage}
        src={foodItem.image}
        alt={foodItem.title}
      />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{foodItem.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={styles.buttonContent}
          onClick={() => setSelectedFoodID(foodItem.id)}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}

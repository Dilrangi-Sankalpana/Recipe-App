export default function FoodItem({ result }) {
  return (
    <div>
      <img src={result.image} alt={result.title} />
      <h1>{result.title}</h1>
      <button>View Recipe</button>
    </div>
  );
}

import MealItem from "./MealItem";
const Meallist = ({ mealItems }) => {
  return (
    <div className="card meallist-card" style={{ width: "30rem" }}>
      <ul className="list-group list-group-flush">
        {mealItems.map((meal) => (
          <li className="list-group-item" key={meal.id}>
            <MealItem
              name={meal.name}
              description={meal.description}
              price={meal.price}
            ></MealItem>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Meallist;

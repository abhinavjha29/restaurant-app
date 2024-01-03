const MealItem = ({ name, description, price }) => {
  return (
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">{description}</h6>
        <p class="card-text">{price}</p>
      </div>
    </div>
  );
};
export default MealItem;

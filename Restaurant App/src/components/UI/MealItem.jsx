const MealItem = ({ name, description, price }) => {
  return (
    <div class="card">
      <div class="card-body">
        <h5 class="card-title meal-name">{name}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary mealdescription">
          {description}
        </h6>
        <p class="card-text mealprice">{price}</p>
        <form className="add-form">
          <input type="number" className="cart-add" />
          <button type="button" class="btn btn-danger meal-btn">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};
export default MealItem;

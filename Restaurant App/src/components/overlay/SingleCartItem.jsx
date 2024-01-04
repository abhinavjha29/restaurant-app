import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
const SingleCartItem = ({ name, price }) => {
  return (
    <div class="card">
      <div class="card-body Meal-card">
        <h5 class="card-title meal-name">{name}</h5>

        <p class="card-text mealprice">{price}</p>
        <form className="add-form">
          <button type="button">
            <CiSquarePlus />
          </button>
          <input type="number" value={1} />
          <button>
            <CiSquareMinus />
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleCartItem;

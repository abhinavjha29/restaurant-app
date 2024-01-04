import SingleCartItem from "./SingleCartItem";

const Cart = () => {
  const defaul_val = [
    { id: 1, name: "Pasta", description: "Delicious pasta dish", price: 12.99 },
  ];
  return (
    <>
      <ul class="list-group">
        {defaul_val.map((item) => (
          <li class="list-group-item">
            <SingleCartItem
              name={item.name}
              price={item.price}
            ></SingleCartItem>
          </li>
        ))}
      </ul>
      <div>Total Amount : 35</div>
    </>
  );
};
export default Cart;

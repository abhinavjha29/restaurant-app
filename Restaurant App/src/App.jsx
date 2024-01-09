import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Header from "./components/UI/Header";
import Summary from "./components/UI/Summary";
import Meallist from "./components/UI/Meallist";
import Cart from "./components/overlay/Cart";
import { useState } from "react";

function App() {
  const [selectedModal, SetSelectedModal] = useState("Home");
  const mealItems = [
    { id: 1, name: "Pasta", description: "Delicious pasta dish", price: 12.99 },
    { id: 2, name: "Salad", description: "Fresh salad mix", price: 8.49 },
    { id: 3, name: "Pizza", description: "Made in Italy", price: 9.12 },
  ];
  return (
    <>
      {selectedModal === "Cart" && (
        <Cart
          selectedModal={selectedModal}
          SetSelectedModal={SetSelectedModal}
        />
      )}
      <Header SetSelectedModal={SetSelectedModal}></Header>

      <main className="main">
        <Summary></Summary>

        <Meallist mealItems={mealItems}></Meallist>
      </main>
    </>
  );
}

export default App;

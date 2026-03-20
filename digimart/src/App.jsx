import React, { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx";

function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState("home");

  const addToCart = (product) => {
  const existing = cart.find((item) => item.id === product.id);

  if (existing) {
    const updatedCart = cart.map((item) =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCart(updatedCart);
  } else {
    setCart([...cart, { ...product, quantity: 1 }]);
  }
};

  const increaseQty = (id) => {
  const updatedCart = cart.map((item) =>
    item.id === id
      ? { ...item, quantity: item.quantity + 1 }
      : item
  );
  setCart(updatedCart);
};

const decreaseQty = (id) => {
  const updatedCart = cart
    .map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    )
    .filter((item) => item.quantity > 0);

  setCart(updatedCart);
};



const removeItem = (id) => {
  const updatedCart = cart.filter((item) => item.id !== id);
  setCart(updatedCart);
};


  return (
    <div>
      <Navbar />

      <div className="p-4">
        <button onClick={() => setPage("home")} className="mr-4">
          Home
        </button>
        <button onClick={() => setPage("cart")}>
          Cart ({cart.length})
        </button>
      </div>

      {page === "home" ? (
        <Home addToCart={addToCart} />
      ) : (
        <Cart cart={cart} increaseQty={increaseQty}
    decreaseQty={decreaseQty}
    removeItem={removeItem}/>
      )}
    </div>
  );
}

export default App;
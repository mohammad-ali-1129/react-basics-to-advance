// import React from "react";
// // import products from "../data/products.js";
// import ProductCard from "../components/ProductCard.jsx";
// import products from "../data/product.js";

// function Home({ addToCart }) {
//   return (
//     <div className="p-4 grid grid-cols-2 md:grid-cols-3 gap-4">
//       {products.map((item) => (
//         <ProductCard key={item.id} product={item} addToCart={addToCart} />
//       ))}
//     </div>
//   );
// }

// export default Home;







import React, { useState } from "react";
import products from "../data/product.js";
import ProductCard from "../components/ProductCard.jsx";

function Home({ addToCart, cart, increaseQty, decreaseQty }) {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search products..."
        className="border p-2 mb-4 w-full"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {filteredProducts.map((item) => (
          <ProductCard key={item.id} product={item} addToCart={addToCart} cart={cart}
  increaseQty={increaseQty}
  decreaseQty={decreaseQty} />
        ))}
      </div>
    </div>
  );
}

export default Home;
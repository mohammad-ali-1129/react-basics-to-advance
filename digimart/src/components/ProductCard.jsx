import React from "react";

function ProductCard({ product, addToCart, cart,
  increaseQty,
  decreaseQty, }) {
  return (
    <div className="border p-4 rounded shadow">
      <img src={product.image} alt="" className="w-full h-32 object-cover " />
      <h2 className="text-lg font-bold mt-2">{product.name}</h2>
      <p>₹{product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-green-500 text-white px-3 py-1 mt-2"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
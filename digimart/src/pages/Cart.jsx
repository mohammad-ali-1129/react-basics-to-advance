import React from "react";

function Cart({ cart, increaseQty, decreaseQty, removeItem }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="border p-3 my-2 flex justify-between items-center"
            >
              <div>
                <h2>{item.name}</h2>
                <p>₹{item.price}</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="bg-gray-300 px-2"
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() => increaseQty(item.id)}
                  className="bg-gray-300 px-2"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => removeItem(item.id)}
                className="bg-red-500 text-white px-2 py-1"
              >
                Remove
              </button>
            </div>
          ))}

          <h2 className="text-xl font-bold mt-4">
            Total: ₹{total}
          </h2>
        </>
      )}
    </div>
  );
}

export default Cart;
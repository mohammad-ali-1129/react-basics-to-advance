import React from "react";

function Navbar() {
  return (
    <div className="bg-green-600 text-white p-4 flex justify-between">
      <h1 className="text-2xl font-bold">DIGIMART</h1>
      <div>
        <button className="mr-4">Home</button>
        <button>Cart</button>
      </div>
    </div>
  );
}

export default Navbar;
import React from "react";
import { useCart } from "../context/usecart";

import { currencyFormatter } from "../utilities";
import { div } from "framer-motion/client";

export function Favorites() {
  const {
    favorites,
    showFavorites,
    setShowFavorites,
    removeFromFavorites,
    addToCart,
  } = useCart();

  if (!showFavorites) return null;

  return (
    <div className="panel fixed inset-0 bg-black/60 flex justify-end z-50">
      <div className="content bg-white w-full max-w-xl p-6">
        <div className="header flex flex-row items-center justify-between pb-6">
          <h2 className="text-3xl font-bold">Your Favorites</h2>
          <button
            onClick={() => setShowFavorites(false)}
            className="text-xl font-semibold text-white bg-yellow-500 p-2 rounded-md"
          >
            ×
          </button>
        </div>

        <div>
          {favorites.length == 0 ? (
            <p className="text-gray-500">Your do not have any favorites</p>
          ) : (
            <div className="gap-3">
              {favorites.map((product) => (
                <div
                  key={product.id}
                  className="card flex flex-row justify-between p-2 border mb-3"
                >
                  <div className="flex gap-2 items-center">
                    <img
                      src={product.src}
                      alt={product.name}
                      className="w-25 h-25 object-cover rounded-md"
                    />

                    <div>
                      <h3 className="font-bold text-lg">{product.name}</h3>

                      <p>Price: {currencyFormatter.format(product.price)}</p>

                      <p>Quantity: {product.quantity}</p>

                      <p className="font-semibold">
                        Subtotal:{" "}
                        {currencyFormatter.format(
                          product.price * product.quantity,
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="buttons flex flex-row items-center justify-center gap-2">
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-yellow-500 text-white font-semibold px-3 py-2 rounded-lg hover:bg-yellow-600"
                    >
                      Add To Cart
                    </button>
                    <button
                      onClick={() => removeFromFavorites(product.id)}
                      className="text-black bg-yellow-500 font-semibold hover:text-white px-3 py-2 rounded-lg"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Favorites;

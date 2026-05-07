import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/usecart";
import { currencyFormatter } from "../utilities";
import toast from "react-hot-toast";
import Favorites from "./favorites";
import { useSearchParams } from "react-router-dom";

import { FaHeart } from "react-icons/fa";

import logo_tee_black from "../assets/store/logo_tee_black.png";
import logoTeeBlue from "../assets/store/logoTeeBlue.png";
import badge from "../assets/store/badge.png";
import kids_guitar from "../assets/store/kids_guitar.png";
import piano from "../assets/store/piano.png";
import drums from "../assets/store/drums.png";

const products = [
  {
    id: 1,
    src: logo_tee_black,
    name: "Black Logo Tee",
    price: 50,
  },

  {
    id: 2,
    src: logoTeeBlue,
    name: "Blue Logo Tee",
    price: 50,
  },

  {
    id: 3,
    src: badge,
    name: "Logo Badge",
    price: 40,
  },
  {
    id: 4,
    src: kids_guitar,
    name: "16 inches kids piano",
    price: 30,
  },
  {
    id: 5,
    src: piano,
    name: "88 keys piano",
    price: 80,
  },
  {
    id: 6,
    src: drums,
    name: "Conga Drums",
    price: 80,
  },
];

function MerchStore() {
  const { addToCart } = useCart();
  const { favorites, toggleFavorite } = useCart();
  const [itemClicked, setItemClicked] = useState(null);
  const [searchParams] = useSearchParams();

  const search = searchParams.get("search") || "";

  const matchedProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );

  const otherProducts = products.filter(
    (product) => !product.name.toLowerCase().includes(search.toLowerCase()),
  );

  const filteredProducts =
    search.trim() === "" ? products : [...matchedProducts, ...otherProducts];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-10">Merch Store</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => {
          const isFavorite = favorites.some((item) => item.id === product.id);

          return (
            <div
              key={product.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden
  ${
    search && product.name.toLowerCase().includes(search.toLowerCase())
      ? "ring-2 ring-yellow-500"
      : ""
  }`}
            >
              <motion.img
                src={product.src}
                className="w-full h-80 object-fit transition-transform duration-500 group-hover:scale-105"
                onClick={() => setItemClicked(product.src)}
                layoutId={product.src}
              />

              <div className="flex flex-row items-center justify-between p-3 pb-0">
                <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
                <p className="text-xl">
                  {currencyFormatter.format(product.price)}
                </p>
              </div>
              <div className="flex justify-between items-center p-3 pt-0">
                <button
                  onClick={() => addToCart(product)}
                  className="bg-yellow-500 text-white font-semibold px-4 py-2 rounded-lg hover:opacity-80"
                >
                  Add To Cart
                  <toast position="top-right" reverseOrder={false} />
                </button>
                <button
                  onClick={() => toggleFavorite(product)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition
    ${
      isFavorite
        ? " text-red-600 border hover:text-gray-800"
        : "bg-black text-white hover:bg-white hover:text-red-600 hover:border"
    }`}
                >
                  <FaHeart />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* IMAGE MODAL */}

      <AnimatePresence>
        {itemClicked && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            onClick={() => setItemClicked(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setItemClicked(null)}
                className="absolute top-2 right-2 bg-white text-black w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold hover:bg-gray-200"
              >
                ×
              </button>

              <motion.img
                src={itemClicked}
                className="max-w-full max-h-[90vh] rounded-xl object-contain"
                layoutId={itemClicked}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MerchStore;

import React, { useState, useEffect } from "react";
import CartContext from "./useProducts";
import toast from "react-hot-toast";

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [showContactForm, setShowContactForm] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });
  const [showFavorites, setShowFavorites] = useState(false);

  const [showCheckout, setShowCheckout] = useState(false);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  function addToCart(product) {
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      );
      toast.success("Item quantity updated in cart");

      setCart(updatedCart);
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ]);
      toast.success("Item added to cart");
    }
  }

  function removeFromCart(id) {
    setCart(cart.filter((product) => product.id !== id));
    toast.error("Item removed from cart");
  }

  function addToFavorites(product) {
    const existing = favorites.find((item) => item.id === product.id);
    const isFavorite = favorites.some((item) => item.id === product.id);

    if (existing) {
      // toast.error("This product is already added in your favorites");
    } else {
      setFavorites([
        ...favorites,
        {
          ...product,
        },
      ]);
    }
  }

  function toggleFavorite(product) {
    const existing = favorites.find((item) => item.id === product.id);

    if (existing) {
      removeFromFavorites(product.id);
      toast.error("Item removed from favorites");
    } else {
      addToFavorites(product);
      toast.success("Successfully added to favorites!");
    }
  }

  function removeFromFavorites(id) {
    setFavorites(favorites.filter((product) => product.id !== id));
  }

  // const [searchQuery, setSearchQuery] = useState("");

  const counter = cart.reduce((total, item) => total + item.quantity, 0);
  const newCounter = favorites.length;

  return (
    <CartContext.Provider
      value={{
        showContactForm,
        setShowContactForm,

        cart,
        addToCart,
        removeFromCart,
        showCart,
        setShowCart,

        favorites,
        addToFavorites,
        toggleFavorite,
        removeFromFavorites,
        showFavorites,
        setShowFavorites,
        newCounter,
        // isFavorite,

        counter,
        showCheckout,
        setShowCheckout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;

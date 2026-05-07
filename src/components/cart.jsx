import React, { useState } from "react";

import { useCart } from "../context/usecart";

import { currencyFormatter } from "../utilities";
import { FaTimes } from "react-icons/fa";

function Cart() {
  const { cart, showCart, setShowCart, removeFromCart } = useCart();

  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [checkoutData, setCheckoutData] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const cartTotal = cart.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0,
  );
  //////////////checkout

  function handleCheckout() {
    const order = {
      items: cart,
      customer: checkoutData,
      total: cartTotal,
    };

    localStorage.setItem("lastOrder", JSON.stringify(order));

    alert("Order placed successfully!");

    setShowCart(false);
  }

  if (!showCart) return null;

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="panel fixed inset-0 bg-black/60 z-50 flex justify-end">
      <div className="content bg-white w-full max-w-xl h-full overflow-y-auto p-6">
        <div className="cart-header flex flex-row justify-between items-center mb-5">
          <h2 className="text-3xl font-bold">Cart</h2>

          <button
            onClick={() => setShowCart(false)}
            className="close-cart font-semibold text-white bg-yellow-500 hover:text-black p-2 rounded-full border"
          >
            <FaTimes />
          </button>
        </div>

        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty</p>
        ) : (
          <div className="cart flex flex-col gap-3">
            {cart.map((product) => (
              <div
                key={product.id}
                className="card flex flex-row justify-between items-center p-2 border"
              >
                <div className="flex gap-4 items-center">
                  <img
                    src={product.src}
                    alt={product.name}
                    className="w-25 h-25 object-cover rounded-md"
                  />

                  <div className="flex flex-col gap-1">
                    <h3 className="font-bold text-lg">{product.name}</h3>
                    <div className="flex flex-row text-gray-600 gap-2">
                      <p className="border rounded-sm px-2">
                        Price: {currencyFormatter.format(product.price)}
                      </p>
                      <p className="border rounded-sm px-2">
                        Quantity: {product.quantity}
                      </p>
                    </div>

                    <p className="font-semibold text-gray-800">
                      Subtotal:{" "}
                      {currencyFormatter.format(
                        product.price * product.quantity,
                      )}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-end gap-1 px-4">
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="text-black bg-yellow-500 hover:text-white font-semibold h-10 w-20 rounded-md"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="total flex flex-row justify-between rounded-md items-center p-3 border-yellow-600 border-2">
              <h3 className="text-xl font-bold">
                Total: {currencyFormatter.format(cartTotal)}
              </h3>

              <button
                onClick={() => setShowCheckoutForm(true)}
                className="bg-yellow-500 text-white p-2 rounded-lg font-semibold hover:opacity-80"
              >
                Proceed To Checkout
              </button>
            </div>

            {showCheckoutForm && (
              <div className="fixed inset-0 bg-black/60 z-60 flex items-center justify-center p-4">
                <div className="bg-yellow-50 w-full max-w-md rounded-2xl p-6 relative">
                  <div className="flex flex-row justify-between items-center mb-5">
                    <h2 className="text-3xl font-bold">Checkout</h2>

                    <button
                      onClick={() => setShowCheckoutForm(false)}
                      className="close-checkout border text-black hover:opacity-60 rounded-full p-2 "
                    >
                      <FaTimes />
                    </button>
                  </div>

                  <div className="flex flex-col gap-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="border p-3  bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      onChange={(e) =>
                        setCheckoutData({
                          ...checkoutData,
                          name: e.target.value,
                        })
                      }
                    />
                    <input
                      type="text"
                      placeholder="Address"
                      className="border p-3  bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      onChange={(e) =>
                        setCheckoutData({
                          ...checkoutData,
                          address: e.target.value,
                        })
                      }
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="border  bg-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      onChange={(e) =>
                        setCheckoutData({
                          ...checkoutData,
                          phone: e.target.value,
                        })
                      }
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="border  bg-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      onChange={(e) =>
                        setCheckoutData({
                          ...checkoutData,
                          email: e.target.value,
                        })
                      }
                    />
                    <input
                      type="text"
                      placeholder="Postal Code"
                      className="border p-3 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      onChange={(e) =>
                        setCheckoutData({
                          ...checkoutData,
                          code: e.target.value,
                        })
                      }
                    />

                    <div className="group relative">
                      <select
                        className="w-full appearance-none border p-3 pr-10 bg-white rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                        // Use onMouseDown to toggle the state every time the user clicks
                        onMouseDown={handleToggle}
                        // Ensure it closes if the user selects an option
                        onChange={(e) => {
                          setCheckoutData({
                            ...checkoutData,
                            paymentMethod: e.target.value,
                          });
                          setIsOpen(false);
                        }}
                        // Ensure it closes if the user clicks anywhere else on the page
                        onBlur={() => setIsOpen(false)}
                      >
                        <option value="">Select Payment Method</option>
                        <option value="cash">Cash on Delivery</option>
                        <option value="card">Credit/Debit Card</option>
                      </select>

                      <div
                        className={`pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 transition-transform duration-300 transform scale-120
                          ${isOpen ? "rotate-180" : "rotate-0"}`}
                      >
                        <svg
                          className="h-5 w-5 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                        </svg>
                      </div>
                    </div>

                    {checkoutData.paymentMethod === "card" && (
                      <>
                        <input
                          type="text"
                          placeholder="Card Number"
                          maxLength={16}
                          className="border p-3 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                          onChange={(e) =>
                            setCheckoutData({
                              ...checkoutData,
                              cardNumber: e.target.value,
                            })
                          }
                        />

                        <div className="flex gap-3">
                          <input
                            type="text"
                            placeholder="MM/YY"
                            className="border p-3 bg-white rounded-lg w-1/2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            onChange={(e) =>
                              setCheckoutData({
                                ...checkoutData,
                                expiry: e.target.value,
                              })
                            }
                          />

                          <input
                            type="password"
                            placeholder="CVV"
                            maxLength={3}
                            className="border p-3 bg-white rounded-lg w-1/2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            onChange={(e) =>
                              setCheckoutData({
                                ...checkoutData,
                                cvv: e.target.value,
                              })
                            }
                          />
                        </div>
                      </>
                    )}
                    <div className="border p-4 rounded-lg flex items-center justify-between bg-white">
                      <h3 className="text-xl font-bold">
                        Total: {currencyFormatter.format(cartTotal)}
                      </h3>

                      <button
                        onClick={() => {
                          /* VALIDATION */

                          if (
                            !checkoutData.name ||
                            !checkoutData.address ||
                            !checkoutData.phone ||
                            !checkoutData.email ||
                            !checkoutData.code
                          ) {
                            alert("Please fill all required fields");
                            return;
                          }

                          /* EMAIL VALIDATION */

                          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                          if (!emailRegex.test(checkoutData.email)) {
                            alert("Invalid email format");
                            return;
                          }

                          /* PHONE VALIDATION */

                          if (checkoutData.phone.length < 10) {
                            alert("Invalid phone number");
                            return;
                          }

                          /* CARD VALIDATION */

                          if (checkoutData.paymentMethod === "card") {
                            if (
                              !checkoutData.cardNumber ||
                              checkoutData.cardNumber.length !== 16
                            ) {
                              alert("Invalid card number");
                              return;
                            }

                            if (
                              !checkoutData.cvv ||
                              checkoutData.cvv.length !== 3
                            ) {
                              alert("Invalid CVV");
                              return;
                            }
                          }

                          handleCheckout();
                        }}
                        className="bg-yellow-500 text-white py-3 px-4 rounded-lg font-bold hover:opacity-80"
                      >
                        Confirm Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;

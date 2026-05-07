import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useCart } from "../context/usecart";

function Contact() {
  const { showContactForm, setShowContactForm } = useCart();

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    message: "",
  });

  if (!showContactForm) return null;

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Form Data:", formData);

    setFormData({
      name: "",
      address: "",
      phone: "",
      email: "",
      message: "",
    });

    setShowContactForm(false);
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl w-full max-w-md relative">
        <button
          onClick={() => setShowContactForm(false)}
          className="absolute top-3 right-3 text-white bg-yellow-500 p-2 rounded-full"
        >
          <FaTimes />
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name*"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="border p-3 rounded-lg"
            required
          />
          <input
            type="text"
            placeholder="Address"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
            className="border p-3 rounded-lg "
          />
          <input
            type="tel"
            placeholder="Phone"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="border p-3 rounded-lg"
          />
          <input
            type="email"
            placeholder="Email*"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="border p-3 rounded-lg"
            required
          />
          <input
            type="text"
            placeholder="Message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="border p-3 rounded-lg"
          />
          <button
            type="submit"
            className="bg-yellow-500 text-white font-semibold py-3 rounded-lg hover:bg-yellow-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

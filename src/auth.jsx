import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSignup(e) {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find((u) => u.email === formData.email);

    if (existingUser) {
      toast.error("User already exists");
      return;
    }

    const newUser = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(newUser));

    window.dispatchEvent(new Event("storage"));

    toast.apply("Account created successfully!");
  }

  function handleLogin(e) {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(
      (u) => u.email === formData.email && u.password === formData.password,
    );

    if (!foundUser) {
      toast.error("Invalid email or password");
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify(foundUser));

    window.dispatchEvent(new Event("storage"));

    toast.success("Logged in successfully!");

    navigate("/");
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-10">
      <div className="bg-gray-100 w-full max-w-md p-8 rounded-2xl shadow-xl">
        <h1 className="text-4xl font-bold text-center mb-2">BAYAAN</h1>

        <p className="text-center text-gray-700 mb-8">
          {isLogin ? "Login to your account" : "Create an account"}
        </p>

        <form
          onSubmit={isLogin ? handleLogin : handleSignup}
          className="flex flex-col gap-4"
        >
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border border-gray-500 rounded-xl p-3 focus:outline-none focus:ring-1 focus:ring-yellow-500"
            />
          )}
          <div className="flex flex-col gap-3 w-full ">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-gray-500 rounded-xl p-3 focus:outline-none focus:ring-1 focus:ring-yellow-500"
            />

            <label className="flex items-center text-sm">
              <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="border border-gray-500 p-3 rounded-xl w-full pr-10 focus:outline-none focus:ring-1 focus:ring-yellow-500"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </label>
          </div>
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-xl font-semibold transition"
          >
            {isLogin ? "Login" : "Create Account"}
          </button>
        </form>

        <div className="text-center mt-6">
          <button
            onClick={() => {
              setIsLogin(!isLogin);
            }}
            className="text-gray-700"
          >
            <div className="flex flex-row">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <div className="text-yellow-700 ms-1 hover:font-semibold">
                {isLogin ? "Sign Up" : "Login"}
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Auth;

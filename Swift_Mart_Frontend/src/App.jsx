"use client";

import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Context from "./context/index";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [olxCartCount, setOlxCartCount] = useState(0);
  const [user, setUser] = useState(null);
  const [isDark, setIsDark] = useState(false);

  // Load theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const darkMode = savedTheme ? savedTheme === "dark" : prefersDark;

    setIsDark(darkMode);
    document.documentElement.classList.toggle("dark", darkMode);
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const newDark = !prev;
      document.documentElement.classList.toggle("dark", newDark);
      localStorage.setItem("theme", newDark ? "dark" : "light");
      return newDark;
    });
  };

  const fetchUserDetails = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/user-details", {
        credentials: "include",
      });
      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const fetchCartCount = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/countAddToCartProuct",
        {
          credentials: "include",
        }
      );
      if (response.ok) {
        const data = await response.json();
        setCartCount(data.data?.count || 0);
      }
    } catch (error) {
      console.error("Error fetching cart count:", error);
    }
  };

  const loadOlxCartCount = () => {
    try {
      const savedCart = localStorage.getItem("olxCart");
      if (savedCart) {
        const cart = JSON.parse(savedCart);
        setOlxCartCount(cart.length);
      }
    } catch (error) {
      console.error("Error loading OLX cart count:", error);
    }
  };

  useEffect(() => {
    fetchUserDetails();
    fetchCartCount();
    loadOlxCartCount();

    window.updateOlxCartCount = (count) => {
      setOlxCartCount(count);
    };

    window.addEventListener("cart-updated", fetchCartCount);

    return () => {
      delete window.updateOlxCartCount;
      window.removeEventListener("cart-updated", fetchCartCount);
    };
  }, []);

  return (
    <Context.Provider
      value={{
        cartProductCount: cartCount,
        fetchUserAddToCart: fetchCartCount,
        olxCartCount,
        user,
      }}
    >
      {/* OUTERMOST BACKGROUND WRAPPER */}
      <div className="min-h-screen w-screen flex flex-col bg-gradient-to-r from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 transition-colors duration-300">
        {/* HEADER: always full width */}
        <Header
          cartCount={cartCount}
          olxCartCount={olxCartCount}
          user={user}
          isDark={isDark}
          toggleTheme={toggleTheme}
        />

        {/* MAIN: center children vertically and horizontally */}
        <main className="flex-grow w-screen max-w-7xl mx-auto px-4 py-6">
          <Outlet />
        </main>

        {/* FOOTER: always full width */}
        <Footer />

        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </Context.Provider>
  );
}

export default App;

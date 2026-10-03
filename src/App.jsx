import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Books from "./pages/Books";
import Cart from "./pages/Cart";
import BookDetails from "./pages/BookDetails";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import Wishlist from "./pages/Wishlist";


function App() {

  // =========================
  // CART
  // =========================

  const [cart, setCart] = useState([]);


  // =========================
  // CLEAR CART
  // =========================

  const clearCart = () => {
    setCart([]);
  };


  // =========================
  // WISHLIST
  // =========================

  const [wishlist, setWishlist] = useState(() => {

    try {

      const savedWishlist =
        localStorage.getItem("smartyWishlist");

      if (savedWishlist) {
        return JSON.parse(savedWishlist);
      }

      return [];

    } catch (error) {

      return [];

    }

  });


  // =========================
  // SAVE WISHLIST
  // =========================

  useEffect(() => {

    localStorage.setItem(
      "smartyWishlist",
      JSON.stringify(wishlist)
    );

  }, [wishlist]);


  // =========================
  // ADD TO CART
  // =========================

  const addToCart = (book) => {

    setCart((currentCart) => {

      const existingBook =
        currentCart.find(
          (item) => item.id === book.id
        );


      if (existingBook) {

        return currentCart.map((item) =>

          item.id === book.id

            ? {
                ...item,
                quantity:
                  item.quantity + 1
              }

            : item

        );

      }


      return [

        ...currentCart,

        {
          ...book,
          quantity: 1
        }

      ];

    });

  };


  // =========================
  // INCREASE QUANTITY
  // =========================

  const increaseQuantity = (id) => {

    setCart((currentCart) =>

      currentCart.map((item) =>

        item.id === id

          ? {
              ...item,
              quantity:
                item.quantity + 1
            }

          : item

      )

    );

  };


  // =========================
  // DECREASE QUANTITY
  // =========================

  const decreaseQuantity = (id) => {

    setCart((currentCart) =>

      currentCart

        .map((item) =>

          item.id === id

            ? {
                ...item,
                quantity:
                  item.quantity - 1
              }

            : item

        )

        .filter(
          (item) =>
            item.quantity > 0
        )

    );

  };


  // =========================
  // TOGGLE WISHLIST
  // =========================

  const toggleWishlist = (book) => {

    setWishlist((currentWishlist) => {

      const alreadyInWishlist =
        currentWishlist.some(
          (item) =>
            item.id === book.id
        );


      if (alreadyInWishlist) {

        return currentWishlist.filter(
          (item) =>
            item.id !== book.id
        );

      }


      return [

        ...currentWishlist,

        book

      ];

    });

  };


  // =========================
  // CART COUNT
  // =========================

  const cartCount = cart.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );


  // =========================
  // UI
  // =========================

  return (

    <>

      <Navbar
        cartCount={cartCount}
      />


      <Routes>

        {/* =====================
            HOME
        ===================== */}

        <Route
          path="/"
          element={
            <Home
              addToCart={addToCart}
              wishlist={wishlist}
              toggleWishlist={
                toggleWishlist
              }
            />
          }
        />


        {/* =====================
            BOOKS
        ===================== */}

        <Route
          path="/books"
          element={
            <Books
              addToCart={addToCart}
              wishlist={wishlist}
              toggleWishlist={
                toggleWishlist
              }
            />
          }
        />


        {/* =====================
            BOOK DETAILS
        ===================== */}

        <Route
          path="/books/:id"
          element={
            <BookDetails
              addToCart={addToCart}
              wishlist={wishlist}
              toggleWishlist={
                toggleWishlist
              }
            />
          }
        />


        {/* =====================
            WISHLIST
        ===================== */}

        <Route
          path="/wishlist"
          element={
            <Wishlist
              wishlist={wishlist}
              toggleWishlist={
                toggleWishlist
              }
              addToCart={addToCart}
            />
          }
        />


        {/* =====================
            CART
        ===================== */}

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              increaseQuantity={
                increaseQuantity
              }
              decreaseQuantity={
                decreaseQuantity
              }
            />
          }
        />


        {/* =====================
            CHECKOUT
        ===================== */}

        <Route
          path="/checkout"
          element={
            <Checkout
              cart={cart}
            />
          }
        />


        {/* =====================
            ORDER SUCCESS
        ===================== */}

        <Route
          path="/order-success"
          element={
            <OrderSuccess
              clearCart={clearCart}
            />
          }
        />

      </Routes>


      {/* =========================
          FOOTER
      ========================= */}

      <Footer />

    </>

  );

}

export default App;
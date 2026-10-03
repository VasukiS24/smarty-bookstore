import { Link } from "react-router-dom";

function Cart({
  cart,
  increaseQuantity,
  decreaseQuantity
}) {

  // =========================
  // CALCULATE TOTAL
  // =========================

  const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const delivery = cart.length > 0 ? 40 : 0;

  const total = subtotal + delivery;


  // =========================
  // EMPTY CART
  // =========================

  if (cart.length === 0) {

    return (

      <main className="cart-page">

        <div className="empty-cart">

          <div className="empty-cart-icon">
            🛒
          </div>

          <span className="section-label">
            YOUR SHOPPING BAG
          </span>

          <h1>
            Your cart is empty
          </h1>

          <p>
            Looks like you haven't discovered your next
            favorite book yet.
          </p>

          <Link
            to="/books"
            className="cart-shop-button"
          >
            Explore Books →
          </Link>

        </div>

      </main>

    );

  }


  return (

    <main className="cart-page">

      {/* =========================
          HEADER
      ========================= */}

      <div className="cart-header">

        <div>

          <span className="section-label">
            YOUR SHOPPING BAG
          </span>

          <h1>
            My Cart
          </h1>

          <p>
            {cart.reduce(
              (total, item) =>
                total + item.quantity,
              0
            )}{" "}
            item(s) ready for checkout
          </p>

        </div>


        <Link
          to="/books"
          className="continue-shopping"
        >
          ← Continue Shopping
        </Link>

      </div>


      {/* =========================
          CART LAYOUT
      ========================= */}

      <section className="cart-layout">

        {/* CART ITEMS */}

        <div className="cart-items">

          {cart.map((book) => (

            <div
              className="cart-item"
              key={book.id}
            >

              {/* BOOK IMAGE */}

              <Link
                to={`/books/${book.id}`}
                className="cart-image"
              >

                <img
                  src={book.image}
                  alt={book.title}
                />

              </Link>


              {/* BOOK DETAILS */}

              <div className="cart-item-details">

                <span className="cart-category">
                  {book.category}
                </span>

                <Link
                  to={`/books/${book.id}`}
                  className="cart-book-title"
                >
                  {book.title}
                </Link>

                <p>
                  {book.author}
                </p>

                <strong className="cart-item-price">
                  ₹{book.price}
                </strong>


                {/* QUANTITY */}

                <div className="quantity">

                  <button
                    onClick={() =>
                      decreaseQuantity(book.id)
                    }
                  >
                    −
                  </button>

                  <span>
                    {book.quantity}
                  </span>

                  <button
                    onClick={() =>
                      increaseQuantity(book.id)
                    }
                  >
                    +
                  </button>

                </div>

              </div>


              {/* ITEM TOTAL */}

              <div className="cart-item-total">

                <strong>
                  ₹{book.price * book.quantity}
                </strong>

              </div>

            </div>

          ))}

        </div>


        {/* =========================
            ORDER SUMMARY
        ========================= */}

        <aside className="order-summary">

          <div className="summary-heading">

            <h2>
              Order Summary
            </h2>

            <span>
              {cart.length} book(s)
            </span>

          </div>


          <div className="summary-row">

            <span>
              Subtotal
            </span>

            <strong>
              ₹{subtotal}
            </strong>

          </div>


          <div className="summary-row">

            <span>
              Delivery
            </span>

            <strong>
              ₹{delivery}
            </strong>

          </div>


          <div className="free-delivery">
            🚚 Free delivery on orders above ₹999
          </div>


          <div className="summary-divider"></div>


          <div className="summary-total">

            <span>
              Total
            </span>

            <strong>
              ₹{total}
            </strong>

          </div>


          {/* CHECKOUT */}

          <Link
            to="/checkout"
            className="checkout-button"
          >
            Proceed to Checkout →
          </Link>


          <div className="secure-checkout">
            🔒 Secure checkout
          </div>

        </aside>

      </section>

    </main>

  );

}

export default Cart;
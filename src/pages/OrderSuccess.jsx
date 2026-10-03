import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function OrderSuccess({ clearCart }) {

  const navigate = useNavigate();

  const savedOrder =
    localStorage.getItem("smartyLastOrder");

  const order = savedOrder
    ? JSON.parse(savedOrder)
    : null;


  // =========================
  // CLEAR CART
  // =========================

  useEffect(() => {

    if (order && clearCart) {
      clearCart();
    }

  }, []);


  // =========================
  // NO ORDER FOUND
  // =========================

  if (!order) {

    return (

      <main className="success-page">

        <div className="success-card">

          <div className="success-icon">
            !
          </div>

          <span className="section-label">
            NO ORDER FOUND
          </span>

          <h1>
            No recent <span>order.</span>
          </h1>

          <p className="success-message">
            We couldn't find a recent order.
            Please explore our books and place an order.
          </p>

          <div className="success-actions">

            <Link
              to="/books"
              className="success-primary-button"
            >
              Explore Books →
            </Link>

            <Link
              to="/"
              className="success-secondary-button"
            >
              Back to Home
            </Link>

          </div>

        </div>

      </main>

    );

  }


  // =========================
  // ORDER CONFIRMATION
  // =========================

  return (

    <main className="success-page">

      <div className="success-card">

        {/* SUCCESS ICON */}

        <div className="success-icon">
          ✓
        </div>


        {/* HEADER */}

        <span className="section-label">
          ORDER CONFIRMED
        </span>

        <h1>
          Your order is <span>confirmed.</span>
        </h1>

        <p className="success-message">

          Thank you for shopping with Smarty Books,

          <strong>
            {" "}{order.customer.name}
          </strong>.

          Your books are being prepared for delivery.

        </p>


        {/* ORDER NUMBER */}

        <div className="order-number">

          <span>
            ORDER NUMBER
          </span>

          <strong>
            #{order.orderNumber}
          </strong>

        </div>


        {/* ORDER DETAILS */}

        <div className="success-order-details">

          {/* CUSTOMER */}

          <div className="success-detail-card">

            <div className="success-detail-icon">
              👤
            </div>

            <div>

              <span>
                CUSTOMER
              </span>

              <strong>
                {order.customer.name}
              </strong>

              <p>
                {order.customer.email}
              </p>

            </div>

          </div>


          {/* PAYMENT */}

          <div className="success-detail-card">

            <div className="success-detail-icon">
              💳
            </div>

            <div>

              <span>
                PAYMENT
              </span>

              <strong>
                {order.payment}
              </strong>

              <p>
                Payment method selected
              </p>

            </div>

          </div>


          {/* DELIVERY */}

          <div className="success-detail-card">

            <div className="success-detail-icon">
              🚚
            </div>

            <div>

              <span>
                DELIVERY
              </span>

              <strong>
                {order.address.city}
              </strong>

              <p>
                {order.address.pincode}
              </p>

            </div>

          </div>


          {/* ORDER DATE */}

          <div className="success-detail-card">

            <div className="success-detail-icon">
              📅
            </div>

            <div>

              <span>
                ORDER DATE
              </span>

              <strong>
                {order.orderDate}
              </strong>

              <p>
                Order successfully placed
              </p>

            </div>

          </div>

        </div>


        {/* ORDERED BOOKS */}

        <div className="success-books-section">

          <div className="success-section-heading">

            <div>

              <span>
                YOUR BOOKS
              </span>

              <h2>
                Order Summary
              </h2>

            </div>

            <strong>

              {order.items.reduce(
                (count, item) =>
                  count + item.quantity,
                0
              )}

              {" "}items

            </strong>

          </div>


          <div className="success-books">

            {order.items.map((book) => (

              <div
                className="success-book"
                key={book.id}
              >

                <img
                  src={book.image}
                  alt={book.title}
                />

                <div className="success-book-info">

                  <strong>
                    {book.title}
                  </strong>

                  <span>
                    {book.author}
                  </span>

                  <small>
                    Quantity: {book.quantity}
                  </small>

                </div>

                <strong className="success-book-price">

                  ₹{book.price * book.quantity}

                </strong>

              </div>

            ))}

          </div>

        </div>


        {/* PRICE SUMMARY */}

        <div className="success-price-summary">

          <div>

            <span>
              Subtotal
            </span>

            <strong>
              ₹{order.subtotal}
            </strong>

          </div>


          <div>

            <span>
              Delivery
            </span>

            <strong>
              ₹{order.delivery}
            </strong>

          </div>


          <div className="success-total-row">

            <span>
              Total Paid
            </span>

            <strong>
              ₹{order.total}
            </strong>

          </div>

        </div>


        {/* DELIVERY MESSAGE */}

        <div className="success-info">

          <div>

            <span>
              📚
            </span>

            <div>

              <strong>
                Books are being prepared
              </strong>

              <p>
                Your books will be packed carefully.
              </p>

            </div>

          </div>


          <div>

            <span>
              🚚
            </span>

            <div>

              <strong>
                Fast delivery
              </strong>

              <p>
                Your order will be delivered to your address.
              </p>

            </div>

          </div>


          <div>

            <span>
              💜
            </span>

            <div>

              <strong>
                Thank you for choosing us
              </strong>

              <p>
                We hope you enjoy your next great read.
              </p>

            </div>

          </div>

        </div>


        {/* ACTION BUTTONS */}

        <div className="success-actions">

          <button
            type="button"
            className="success-primary-button"
            onClick={() => navigate("/books")}
          >
            Continue Shopping →
          </button>

          <button
            type="button"
            className="success-secondary-button"
            onClick={() => navigate("/")}
          >
            Back to Home
          </button>

        </div>

      </div>

    </main>

  );

}

export default OrderSuccess;
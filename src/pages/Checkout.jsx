import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Checkout({ cart }) {

  const navigate = useNavigate();

  const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const delivery = cart.length > 0 ? 40 : 0;

  const total = subtotal + delivery;


  // FORM DATA

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    payment: "Card Payment"
  });


  // ERROR MESSAGE

  const [error, setError] = useState("");


  // HANDLE INPUT

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value
    }));

    setError("");

  };


  // PLACE ORDER

  const handlePlaceOrder = () => {

    if (!formData.name.trim()) {
      setError("Please enter your full name.");
      return;
    }

    if (!formData.email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!formData.phone.trim()) {
      setError("Please enter your phone number.");
      return;
    }

    if (!formData.address.trim()) {
      setError("Please enter your delivery address.");
      return;
    }

    if (!formData.city.trim()) {
      setError("Please enter your city.");
      return;
    }

    if (!formData.pincode.trim()) {
      setError("Please enter your pincode.");
      return;
    }


    // PHONE VALIDATION

    if (!/^\d{10}$/.test(formData.phone)) {
      setError(
        "Phone number must contain exactly 10 digits."
      );
      return;
    }


    // PINCODE VALIDATION

    if (!/^\d{6}$/.test(formData.pincode)) {
      setError(
        "Pincode must contain exactly 6 digits."
      );
      return;
    }


    // EMAIL VALIDATION

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.email
      )
    ) {
      setError(
        "Please enter a valid email address."
      );
      return;
    }


    // CREATE ORDER NUMBER

    const orderNumber =
      "SB" +
      Math.floor(
        100000 + Math.random() * 900000
      );


    // CREATE ORDER DATA

    const orderData = {

      orderNumber,

      customer: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone
      },

      address: {
        address: formData.address,
        city: formData.city,
        pincode: formData.pincode
      },

      payment: formData.payment,

      items: cart,

      subtotal,

      delivery,

      total,

      orderDate:
        new Date().toLocaleDateString("en-IN")

    };


    // SAVE ORDER

    localStorage.setItem(
      "smartyLastOrder",
      JSON.stringify(orderData)
    );


    // GO TO SUCCESS PAGE

    navigate("/order-success");

  };


  // EMPTY CART

  if (cart.length === 0) {

    return (

      <main className="checkout-page">

        <div className="checkout-container">

          <div className="empty-cart">

            <div className="empty-cart-icon">
              🛒
            </div>

            <span className="section-label">
              CHECKOUT
            </span>

            <h1>
              Your cart is empty
            </h1>

            <p>
              Add some books before proceeding to checkout.
            </p>

            <Link
              to="/books"
              className="cart-shop-button"
            >
              Explore Books →
            </Link>

          </div>

        </div>

      </main>

    );

  }


  return (

    <main className="checkout-page">

      <div className="checkout-container">


        {/* HEADER */}

        <div className="checkout-header">

          <Link
            to="/cart"
            className="checkout-back"
          >
            ← Back to Cart
          </Link>

          <span className="section-label">
            SECURE CHECKOUT
          </span>

          <h1>
            Complete your <span>order.</span>
          </h1>

          <p>
            Enter your details and choose your preferred
            payment method.
          </p>

        </div>


        {/* CHECKOUT CONTENT */}

        <section className="checkout-layout">


          {/* LEFT SIDE */}

          <div className="checkout-form">


            {/* CUSTOMER DETAILS */}

            <div className="checkout-card">

              <div className="checkout-card-heading">

                <div className="checkout-number">
                  01
                </div>

                <div>

                  <h2>
                    Customer Details
                  </h2>

                  <p>
                    Tell us where we should contact you.
                  </p>

                </div>

              </div>


              <div className="form-grid">


                {/* NAME */}

                <div className="form-group">

                  <label>
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                  />

                </div>


                {/* EMAIL */}

                <div className="form-group">

                  <label>
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />

                </div>


                {/* PHONE */}

                <div className="form-group">

                  <label>
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    maxLength="10"
                    placeholder="Enter your 10 digit phone number"
                  />

                </div>

              </div>

            </div>


            {/* DELIVERY ADDRESS */}

            <div className="checkout-card">

              <div className="checkout-card-heading">

                <div className="checkout-number">
                  02
                </div>

                <div>

                  <h2>
                    Delivery Address
                  </h2>

                  <p>
                    Where should we deliver your books?
                  </p>

                </div>

              </div>


              <div className="form-grid">


                {/* ADDRESS */}

                <div className="form-group full-width">

                  <label>
                    Address
                  </label>

                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="House number, street, area..."
                    rows="3"
                  ></textarea>

                </div>


                {/* CITY */}

                <div className="form-group">

                  <label>
                    City
                  </label>

                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Enter city"
                  />

                </div>


                {/* PINCODE */}

                <div className="form-group">

                  <label>
                    Pincode
                  </label>

                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    maxLength="6"
                    placeholder="Enter 6 digit pincode"
                  />

                </div>

              </div>

            </div>


            {/* PAYMENT */}

            <div className="checkout-card">

              <div className="checkout-card-heading">

                <div className="checkout-number">
                  03
                </div>

                <div>

                  <h2>
                    Payment Method
                  </h2>

                  <p>
                    Choose how you want to pay.
                  </p>

                </div>

              </div>


              <div className="payment-options">


                {/* CARD */}

                <label className="payment-option">

                  <input
                    type="radio"
                    name="payment"
                    value="Card Payment"
                    checked={
                      formData.payment ===
                      "Card Payment"
                    }
                    onChange={handleChange}
                  />

                  <div className="payment-icon">
                    💳
                  </div>

                  <div>

                    <strong>
                      Card Payment
                    </strong>

                    <small>
                      Credit / Debit Card
                    </small>

                  </div>

                </label>


                {/* UPI */}

                <label className="payment-option">

                  <input
                    type="radio"
                    name="payment"
                    value="UPI"
                    checked={
                      formData.payment === "UPI"
                    }
                    onChange={handleChange}
                  />

                  <div className="payment-icon">
                    📱
                  </div>

                  <div>

                    <strong>
                      UPI
                    </strong>

                    <small>
                      Google Pay / PhonePe / Paytm
                    </small>

                  </div>

                </label>


                {/* CASH ON DELIVERY */}

                <label className="payment-option">

                  <input
                    type="radio"
                    name="payment"
                    value="Cash on Delivery"
                    checked={
                      formData.payment ===
                      "Cash on Delivery"
                    }
                    onChange={handleChange}
                  />

                  <div className="payment-icon">
                    💵
                  </div>

                  <div>

                    <strong>
                      Cash on Delivery
                    </strong>

                    <small>
                      Pay when your order arrives
                    </small>

                  </div>

                </label>

              </div>

            </div>


            {/* ERROR MESSAGE */}

            {error && (

              <div className="checkout-error">

                ⚠️ {error}

              </div>

            )}

          </div>


          {/* RIGHT SIDE */}

          <aside className="checkout-summary">


            {/* SUMMARY HEADER */}

            <div className="checkout-summary-heading">

              <h2>
                Your Order
              </h2>

              <span>
                {cart.reduce(
                  (count, item) =>
                    count + item.quantity,
                  0
                )} item(s)
              </span>

            </div>


            {/* PRODUCTS */}

            <div className="checkout-products">

              {cart.map((book) => (

                <div
                  className="checkout-product"
                  key={book.id}
                >

                  <img
                    src={book.image}
                    alt={book.title}
                  />

                  <div>

                    <strong>
                      {book.title}
                    </strong>

                    <small>
                      Qty: {book.quantity}
                    </small>

                    <span>
                      ₹{book.price * book.quantity}
                    </span>

                  </div>

                </div>

              ))}

            </div>


            <div className="checkout-divider"></div>


            {/* SUBTOTAL */}

            <div className="checkout-price-row">

              <span>
                Subtotal
              </span>

              <strong>
                ₹{subtotal}
              </strong>

            </div>


            {/* DELIVERY */}

            <div className="checkout-price-row">

              <span>
                Delivery
              </span>

              <strong>
                ₹{delivery}
              </strong>

            </div>


            <div className="checkout-divider"></div>


            {/* TOTAL */}

            <div className="checkout-total">

              <span>
                Total
              </span>

              <strong>
                ₹{total}
              </strong>

            </div>


            {/* PLACE ORDER */}

            <button
              type="button"
              className="place-order-button"
              onClick={handlePlaceOrder}
            >
              Place Order →
            </button>


            <div className="checkout-security">

              🔒 Secure & safe checkout

            </div>

          </aside>

        </section>

      </div>

    </main>

  );
}

export default Checkout;
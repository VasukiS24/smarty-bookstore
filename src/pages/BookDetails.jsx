import { Link, useParams } from "react-router-dom";
import books from "../data/books";

function BookDetails({
  addToCart,
  wishlist,
  toggleWishlist
}) {

  const { id } = useParams();

  const book = books.find(
    (item) => item.id === Number(id)
  );


  // =========================
  // BOOK NOT FOUND
  // =========================

  if (!book) {

    return (

      <main className="book-not-found">

        <div className="not-found-icon">
          📚
        </div>

        <h1>
          Book not found
        </h1>

        <p>
          Sorry, we couldn't find the book you're looking for.
        </p>

        <Link
          to="/books"
          className="primary-button"
        >
          ← Back to Books
        </Link>

      </main>

    );

  }


  const isLiked = wishlist.some(
    (item) => item.id === book.id
  );


  return (

    <main className="book-details-page">

      {/* =========================
          BACK BUTTON
      ========================= */}

      <div className="details-container">

        <Link
          to="/books"
          className="back-to-books"
        >
          ← Back to Books
        </Link>


        {/* =========================
            MAIN DETAILS
        ========================= */}

        <section className="book-details">

          {/* =========================
              BOOK IMAGE
          ========================= */}

          <div className="details-image-wrapper">

            <div className="details-image">

              <img
                src={book.image}
                alt={book.title}
              />

            </div>


            <div className="image-decoration decoration-one"></div>

            <div className="image-decoration decoration-two"></div>

          </div>


          {/* =========================
              BOOK INFORMATION
          ========================= */}

          <div className="details-info">

            <span className="details-category">
              {book.category}
            </span>


            <h1>
              {book.title}
            </h1>


            <p className="details-author">
              Written by{" "}
              <strong>
                {book.author}
              </strong>
            </p>


            {/* RATING */}

            <div className="details-rating">

              <span className="rating-stars">
                ★★★★★
              </span>

              <strong>
                {book.rating}
              </strong>

              <span>
                Excellent reader rating
              </span>

            </div>


            {/* DESCRIPTION */}

            <p className="details-description">

              Discover an inspiring and engaging reading
              experience with{" "}

              <strong>
                {book.title}
              </strong>.

              {" "}This carefully selected book is perfect
              for readers who love meaningful ideas,
              memorable stories and fresh perspectives.

            </p>


            {/* PRICE */}

            <div className="details-price-section">

              <span className="price-label">
                Price
              </span>

              <div className="details-price">
                ₹{book.price}
              </div>

            </div>


            {/* ACTIONS */}

            <div className="details-actions">

              <button
                className="details-add-button"
                onClick={() =>
                  addToCart(book)
                }
              >
                🛒 Add to Cart
              </button>


              <button
                className={
                  isLiked
                    ? "details-wishlist liked"
                    : "details-wishlist"
                }
                onClick={() =>
                  toggleWishlist(book)
                }
                aria-label="Toggle wishlist"
              >
                {isLiked ? "♥" : "♡"}
              </button>

            </div>


            {/* FEATURES */}

            <div className="book-features">

              <div className="book-feature">

                <div className="feature-icon">
                  🚚
                </div>

                <div>
                  <strong>
                    Fast Delivery
                  </strong>

                  <small>
                    Delivered safely to your door
                  </small>
                </div>

              </div>


              <div className="book-feature">

                <div className="feature-icon">
                  🔒
                </div>

                <div>
                  <strong>
                    Secure Payment
                  </strong>

                  <small>
                    Your payment is protected
                  </small>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =========================
            EXTRA INFORMATION
        ========================= */}

        <section className="details-bottom">

          <div className="details-info-card">

            <span>
              📖
            </span>

            <div>
              <strong>
                Carefully Selected
              </strong>

              <p>
                Books chosen for curious and passionate readers.
              </p>
            </div>

          </div>


          <div className="details-info-card">

            <span>
              ✨
            </span>

            <div>
              <strong>
                Reader Favorite
              </strong>

              <p>
                Highly rated by our reading community.
              </p>
            </div>

          </div>


          <div className="details-info-card">

            <span>
              💜
            </span>

            <div>
              <strong>
                Read & Enjoy
              </strong>

              <p>
                Find ideas and stories that stay with you.
              </p>
            </div>

          </div>

        </section>

      </div>

    </main>

  );

}

export default BookDetails;
import { Link } from "react-router-dom";
import books from "../data/books";

function Home({
  addToCart,
  wishlist,
  toggleWishlist
}) {

  return (
    <main className="home">

      {/* =========================
          HERO
      ========================= */}

      <section className="hero">

        <div className="hero-content">

          <div className="small-badge">
            ✨ Your next favorite book is here
          </div>

          <h1>
            Stories that
            <br />
            <span>stay with you.</span>
          </h1>

          <p className="hero-text">
            Discover books you'll love, from timeless classics
            to the newest stories waiting to be explored.
          </p>

          <div className="hero-buttons">

            <Link
              to="/books"
              className="primary-button"
            >
              Explore Books →
            </Link>

            <Link
              to="/wishlist"
              className="secondary-button"
            >
              ♡ My Wishlist
            </Link>

          </div>

          <div className="hero-search">

            <span>⌕</span>

            <input
              type="text"
              placeholder="Search for books, authors..."
            />

          </div>

        </div>


        <div className="hero-visual">

          <div className="blob blob-one"></div>

          <div className="blob blob-two"></div>


          <div className="book-card card-one">

            <div className="book-cover orange-cover">

              <span>THE</span>

              <strong>POWER</strong>

              <span>OF HABIT</span>

            </div>

            <p>
              The Power of Habit
            </p>

            <small>
              Charles Duhigg
            </small>

          </div>


          <div className="book-card card-two">

            <div className="book-cover purple-cover">

              <span>ATOMIC</span>

              <strong>HABITS</strong>

              <small>
                JAMES CLEAR
              </small>

            </div>

            <p>
              Atomic Habits
            </p>

            <small>
              James Clear
            </small>

          </div>


          <div className="floating-star star-one">
            ✦
          </div>

          <div className="floating-star star-two">
            ✦
          </div>

        </div>

      </section>


      {/* =========================
          TRUST
      ========================= */}

      <section className="trust-section">

        <div>
          <strong>10K+</strong>
          <span>Books</span>
        </div>

        <div>
          <strong>8K+</strong>
          <span>Readers</span>
        </div>

        <div>
          <strong>4.8</strong>
          <span>Average Rating ⭐</span>
        </div>

        <div>
          <strong>24/7</strong>
          <span>Book Discovery</span>
        </div>

      </section>


      {/* =========================
          CATEGORIES
      ========================= */}

      <section className="categories-section">

        <div className="section-heading">

          <div>

            <span className="section-label">
              EXPLORE
            </span>

            <h2>
              Find your next <span>obsession.</span>
            </h2>

          </div>

          <p>
            Whatever you're in the mood for,
            there's a story waiting for you.
          </p>

        </div>


        <div className="category-grid">

          <Link
            to="/books"
            className="category-card category-orange"
          >

            <span className="category-icon">
              📖
            </span>

            <h3>
              Fiction
            </h3>

            <p>
              2,450 books
            </p>

            <span className="category-arrow">
              ↗
            </span>

          </Link>


          <Link
            to="/books"
            className="category-card category-purple"
          >

            <span className="category-icon">
              🚀
            </span>

            <h3>
              Self Growth
            </h3>

            <p>
              1,820 books
            </p>

            <span className="category-arrow">
              ↗
            </span>

          </Link>


          <Link
            to="/books"
            className="category-card category-blue"
          >

            <span className="category-icon">
              💼
            </span>

            <h3>
              Business
            </h3>

            <p>
              1,240 books
            </p>

            <span className="category-arrow">
              ↗
            </span>

          </Link>


          <Link
            to="/books"
            className="category-card category-green"
          >

            <span className="category-icon">
              🌿
            </span>

            <h3>
              Lifestyle
            </h3>

            <p>
              980 books
            </p>

            <span className="category-arrow">
              ↗
            </span>

          </Link>

        </div>

      </section>


      {/* =========================
          FEATURED BOOKS
      ========================= */}

      <section className="featured-section">

        <div className="featured-heading">

          <div>

            <span className="section-label">
              HANDPICKED FOR YOU
            </span>

            <h2>
              Popular <span>right now.</span>
            </h2>

          </div>

          <Link
            to="/books"
            className="view-all"
          >
            View all books →
          </Link>

        </div>


        <div className="books-grid">

          {books.map((book) => {

            const isLiked = wishlist.some(
              (item) => item.id === book.id
            );

            return (

              <div
                className="product-card"
                key={book.id}
              >

                {/* BOOK IMAGE */}

                <div className="product-image">

                  <Link
                    to={`/books/${book.id}`}
                    className="book-details-link"
                  >

                    <img
                      src={book.image}
                      alt={book.title}
                    />

                  </Link>


                  {/* WISHLIST */}

                  <button
                    className={
                      isLiked
                        ? "wishlist-button liked"
                        : "wishlist-button"
                    }
                    onClick={() =>
                      toggleWishlist(book)
                    }
                  >
                    {isLiked ? "♥" : "♡"}
                  </button>


                  {/* RATING */}

                  <div className="rating">
                    ★ {book.rating}
                  </div>

                </div>


                {/* BOOK INFORMATION */}

                <div className="product-info">

                  <span className="product-category">
                    {book.category}
                  </span>


                  <Link
                    to={`/books/${book.id}`}
                    className="book-title-link"
                  >

                    <h3>
                      {book.title}
                    </h3>

                  </Link>


                  <p>
                    {book.author}
                  </p>


                  <div className="product-bottom">

                    <strong>
                      ₹{book.price}
                    </strong>

                    <button
                      className="add-button"
                      onClick={() =>
                        addToCart(book)
                      }
                    >
                      + Add
                    </button>

                  </div>

                </div>

              </div>

            );

          })}

        </div>

      </section>


      {/* =========================
          NEWSLETTER
      ========================= */}

      <section className="newsletter">

        <div>

          <span>
            📬 STAY IN THE LOOP
          </span>

          <h2>
            Stories worth <em>sharing.</em>
          </h2>

          <p>
            Get new releases, book recommendations and
            exclusive offers straight to your inbox.
          </p>

        </div>


        <div className="newsletter-form">

          <input
            type="email"
            placeholder="Your email address"
          />

          <button>
            Subscribe →
          </button>

        </div>

      </section>

    </main>
  );
}

export default Home;
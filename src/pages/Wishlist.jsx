import { Link } from "react-router-dom";

function Wishlist({
  wishlist,
  toggleWishlist,
  addToCart
}) {

  return (

    <main className="wishlist-page">

      <div className="wishlist-container">

        {/* HEADER */}

        <div className="wishlist-header">

          <span className="section-label">
            SAVED FOR LATER
          </span>

          <h1>
            My <span>Wishlist.</span>
          </h1>

          <p>
            Keep the books you love in one place
            and come back whenever you're ready.
          </p>

        </div>


        {/* EMPTY WISHLIST */}

        {wishlist.length === 0 && (

          <div className="wishlist-empty">

            <div className="wishlist-empty-icon">
              ♡
            </div>

            <h2>
              Your wishlist is empty
            </h2>

            <p>
              Save books you love by clicking the ♡
              button on any book.
            </p>

            <Link
              to="/books"
              className="wishlist-shop-button"
            >
              Explore Books →
            </Link>

          </div>

        )}


        {/* WISHLIST BOOKS */}

        {wishlist.length > 0 && (

          <>

            <div className="wishlist-top">

              <span>
                {wishlist.length} saved book
                {wishlist.length > 1 ? "s" : ""}
              </span>

              <Link to="/books">
                + Discover More Books
              </Link>

            </div>


            <div className="wishlist-grid">

              {wishlist.map((book) => (

                <div
                  className="wishlist-card"
                  key={book.id}
                >

                  {/* IMAGE */}

                  <div className="wishlist-image">

                    <Link
                      to={`/books/${book.id}`}
                    >

                      <img
                        src={book.image}
                        alt={book.title}
                      />

                    </Link>

                    <button
                      className="wishlist-remove"
                      onClick={() =>
                        toggleWishlist(book)
                      }
                      aria-label="Remove from wishlist"
                    >
                      ♥
                    </button>

                    <div className="wishlist-rating">
                      ★ {book.rating}
                    </div>

                  </div>


                  {/* INFO */}

                  <div className="wishlist-info">

                    <span className="wishlist-category">
                      {book.category}
                    </span>

                    <Link
                      to={`/books/${book.id}`}
                      className="wishlist-title"
                    >
                      {book.title}
                    </Link>

                    <p>
                      {book.author}
                    </p>


                    <div className="wishlist-bottom">

                      <strong>
                        ₹{book.price}
                      </strong>

                      <button
                        className="wishlist-cart-button"
                        onClick={() =>
                          addToCart(book)
                        }
                      >
                        🛒 Add to Cart
                      </button>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </>

        )}

      </div>

    </main>

  );

}

export default Wishlist;
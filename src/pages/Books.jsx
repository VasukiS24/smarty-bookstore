import { useState } from "react";
import { Link } from "react-router-dom";
import books from "../data/books";

function Books({
  addToCart,
  wishlist,
  toggleWishlist
}) {

  const [search, setSearch] = useState("");

  const [category, setCategory] =
    useState("All");


  const categories = [
    "All",
    "Fiction",
    "Finance",
    "Self Growth",
    "Productivity",
    "Lifestyle"
  ];


  // =========================
  // SEARCH + CATEGORY FILTER
  // =========================

  const filteredBooks = books.filter((book) => {

    const matchesSearch =
      book.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||

      book.author
        .toLowerCase()
        .includes(search.toLowerCase());


    const matchesCategory =
      category === "All" ||
      book.category === category;


    return (
      matchesSearch &&
      matchesCategory
    );

  });


  return (
    <main className="books-page">

      {/* =========================
          HEADER
      ========================= */}

      <section className="books-header">

        <span className="section-label">
          OUR COLLECTION
        </span>


        <h1>
          Find your next <span>great read.</span>
        </h1>


        <p>
          Explore our collection of books carefully selected
          for curious minds and passionate readers.
        </p>


        {/* SEARCH */}

        <div className="books-search">

          <span>
            ⌕
          </span>


          <input
            type="text"
            placeholder="Search by title or author..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />


          {search && (

            <button
              onClick={() =>
                setSearch("")
              }
            >
              ×
            </button>

          )}

        </div>

      </section>


      {/* =========================
          BOOK COLLECTION
      ========================= */}

      <section className="book-collection">

        {/* CATEGORY FILTER */}

        <div className="category-filter">

          {categories.map((item) => (

            <button
              key={item}
              className={
                category === item
                  ? "active-filter"
                  : ""
              }
              onClick={() =>
                setCategory(item)
              }
            >
              {item}
            </button>

          ))}

        </div>


        {/* =========================
            COLLECTION TOP
        ========================= */}

        <div className="collection-top">

          <p>
            Showing{" "}
            <strong>
              {filteredBooks.length}
            </strong>{" "}
            books
          </p>


          <button className="sort-button">
            Popular ↕
          </button>

        </div>


        {/* =========================
            BOOK GRID
        ========================= */}

        <div className="books-grid">

          {filteredBooks.map((book) => {

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


        {/* =========================
            NO BOOKS
        ========================= */}

        {filteredBooks.length === 0 && (

          <div className="no-books">

            <div>
              📚
            </div>


            <h2>
              No books found
            </h2>


            <p>
              Try searching for another title
              or author.
            </p>


            <button
              onClick={() => {

                setSearch("");

                setCategory("All");

              }}
            >
              Show all books
            </button>

          </div>

        )}

      </section>

    </main>
  );
}

export default Books;
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ cartCount }) {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      <Link
        to="/"
        className="logo"
        onClick={closeMenu}
      >
        <span className="logo-icon">S</span>

        <span>
          Smarty<span>Books</span>
        </span>
      </Link>


      {/* Desktop Navigation */}

      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/books">Books</Link>

        <Link to="/books">Categories</Link>

      </div>


      {/* Right Side */}

      <div className="nav-actions">

        <button
          className="nav-icon"
          aria-label="Search"
        >
          ⌕
        </button>


        <Link
          to="/cart"
          className="cart-button"
        >
          🛒

          <span>Cart</span>

          {cartCount > 0 && (
            <b className="cart-count">
              {cartCount}
            </b>
          )}

        </Link>


        <button
          className="profile-button"
          aria-label="Profile"
        >
          👤
        </button>


        {/* Mobile Menu Button */}

        <button
          className="mobile-menu-button"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>


      {/* Mobile Navigation */}

      {menuOpen && (

        <div className="mobile-menu">

          <Link
            to="/"
            onClick={closeMenu}
          >
            🏠 Home
          </Link>

          <Link
            to="/books"
            onClick={closeMenu}
          >
            📚 Books
          </Link>

          <Link
            to="/books"
            onClick={closeMenu}
          >
            🏷️ Categories
          </Link>

          <Link
            to="/wishlist"
            onClick={closeMenu}
          >
            ❤️ Wishlist
          </Link>

          <Link
            to="/cart"
            onClick={closeMenu}
          >
            🛒 Cart
          </Link>

        </div>

      )}

    </nav>
  );
}

export default Navbar;
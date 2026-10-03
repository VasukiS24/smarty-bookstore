import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        <span className="logo-icon">S</span>

        <span>
          Smarty<span>Books</span>
        </span>
      </Link>


      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/books">Books</Link>

        <Link to="/books">Categories</Link>

      </div>


      <div className="nav-actions">

        <button className="nav-icon">
          ⌕
        </button>


        <Link to="/cart" className="cart-button">

          🛒

          <span>Cart</span>

          {cartCount > 0 && (
            <b className="cart-count">
              {cartCount}
            </b>
          )}

        </Link>


        <button className="profile-button">
          👤
        </button>

      </div>

    </nav>
  );
}

export default Navbar;
function Footer() {
  return (
    <footer className="footer">

      <div className="footer-main">

        <div className="footer-brand">

          <div className="footer-logo">
            <span className="logo-icon">S</span>
            <span>Smarty<span>Books</span></span>
          </div>

          <p>
            Discover stories, ideas and knowledge
            that stay with you.
          </p>

        </div>


        <div className="footer-column">

          <h3>Explore</h3>

          <a href="/">Home</a>
          <a href="/books">Books</a>
          <a href="/books">Categories</a>
          <a href="/cart">Cart</a>

        </div>


        <div className="footer-column">

          <h3>Categories</h3>

          <a href="/books">Fiction</a>
          <a href="/books">Finance</a>
          <a href="/books">Self Growth</a>
          <a href="/books">Lifestyle</a>

        </div>


        <div className="footer-column">

          <h3>Connect</h3>

          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">YouTube</a>
          <a href="#">Email Us</a>

        </div>

      </div>


      <div className="footer-bottom">

        <p>
          © 2026 Smarty Books. All rights reserved.
        </p>

        <span>
          Made with ❤️ for book lovers
        </span>

      </div>

    </footer>
  );
}

export default Footer;
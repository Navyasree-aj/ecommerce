function Footer() {
  return (
    <footer className="footer">

      <div className="footer-inner">

        <div>
          <div className="footer-brand">
            <span>📍</span>
            CraftLocal
          </div>

          <p>
            Discover handmade products from talented
            local artisans near you.
          </p>
        </div>

        <div className="footer-links">

          <div>
            <h4>Explore</h4>
            <a href="/discover">Discover</a>
            <a href="/discover">Categories</a>
            <a href="/discover">Nearby</a>
          </div>

          <div>
            <h4>For Sellers</h4>
            <a href="#">Sell on CraftLocal</a>
            <a href="#">Seller Dashboard</a>
            <a href="#">Resources</a>
          </div>

          <div>
            <h4>Help</h4>
            <a href="#">Contact</a>
            <a href="#">Shipping</a>
            <a href="#">Returns</a>
          </div>

        </div>

      </div>

      <div className="footer-bottom">
        © 2026 CraftLocal. Supporting local artisans.
      </div>

    </footer>
  );
}

export default Footer;
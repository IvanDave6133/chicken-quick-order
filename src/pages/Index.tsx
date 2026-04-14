import { Link } from "react-router-dom";
import friedChicken from "@/assets/fried-chicken.jpg";

const Index = () => {
  return (
    <div style={{ backgroundColor: "#fff3cd", minHeight: "100vh" }}>
      {/* Intentionally clashing banner */}
      <div
        style={{
          background: "linear-gradient(135deg, #ff0000, #ff8c00, #ffd700)",
          padding: "40px 20px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "Comic Sans MS, cursive",
            fontSize: "42px",
            color: "#fff200",
            textShadow: "2px 2px #ff0000",
            margin: 0,
          }}
        >
          🍗 Welcome to QuickBite Chicken 🍗
        </h1>
        <p
          style={{
            fontFamily: "Times New Roman, serif",
            fontSize: "18px",
            color: "white",
            marginTop: "5px",
          }}
        >
          The BEST chicken in town!! Order now and get amazing deals!!!
        </p>
      </div>

      {/* Navigation - intentionally small font, no active indicator */}
      <nav
        style={{
          backgroundColor: "#cc0000",
          display: "flex",
          gap: "15px",
          padding: "8px 20px",
          fontFamily: "Arial, sans-serif",
          fontSize: "11px",
        }}
      >
        <Link to="/" style={{ color: "#ffcccc", textDecoration: "none" }}>Home</Link>
        <Link to="/menu" style={{ color: "#ffcccc", textDecoration: "none" }}>Menu</Link>
        <Link to="/order" style={{ color: "#ffcccc", textDecoration: "none" }}>Order</Link>
        <Link to="/contact" style={{ color: "#ffcccc", textDecoration: "none" }}>Contact</Link>
      </nav>

      {/* Cluttered body content */}
      <div style={{ padding: "20px", fontFamily: "Verdana, sans-serif" }}>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "flex-start" }}>
          <div style={{ flex: "1 1 300px" }}>
            <h2 style={{ fontFamily: "Impact, sans-serif", color: "#cc0000", fontSize: "28px" }}>
              Why Choose Us?
            </h2>
            <p style={{ fontFamily: "Georgia, serif", fontSize: "14px", color: "#333", lineHeight: "1.4" }}>
              We have been serving the most delicious chicken since 2005. Our secret recipe has been passed down through generations.
              Every piece is hand-battered and fried to perfection. We use only the freshest ingredients sourced locally.
              Our spices are imported from around the world to give you that perfect kick. Come visit us today!
              We also offer catering services for events, parties, and corporate gatherings.
              Don't forget to try our new spicy chicken - it's a customer favorite!
              We have locations in downtown, midtown, and the west side. Open 7 days a week from 10am to 10pm.
            </p>

            <h3 style={{ fontFamily: "Comic Sans MS, cursive", color: "#ff8c00", fontSize: "20px", marginTop: "15px" }}>
              ★★★ TODAY'S SPECIAL ★★★
            </h3>
            <p style={{ fontFamily: "Courier New, monospace", fontSize: "16px", color: "#cc0000", fontWeight: "bold" }}>
              Buy 2 Get 1 FREE on all Fried Chicken!!!
            </p>
            <p style={{ fontFamily: "Arial", fontSize: "11px", color: "#666" }}>
              *Terms and conditions apply. Valid only on dine-in orders. Cannot be combined with other offers.
              Offer valid while supplies last. Management reserves the right to modify or cancel this promotion at any time.
            </p>
          </div>

          <div style={{ flex: "0 0 250px" }}>
            <img src={friedChicken} alt="Fried chicken" width={250} style={{ borderRadius: "5px", border: "3px solid #ff8c00" }} />
            <p style={{ fontFamily: "Comic Sans MS", fontSize: "12px", color: "#cc0000", textAlign: "center" }}>
              Our famous fried chicken!
            </p>
          </div>
        </div>

        {/* Random testimonials cluttering the page */}
        <div style={{ marginTop: "20px", backgroundColor: "#ffe0b2", padding: "15px", borderRadius: "5px" }}>
          <h3 style={{ fontFamily: "Impact", color: "#ff0000", fontSize: "22px" }}>Customer Reviews</h3>
          <p style={{ fontFamily: "Times New Roman", fontSize: "13px", fontStyle: "italic", color: "#555" }}>
            "Best chicken ever!" - John D.
          </p>
          <p style={{ fontFamily: "Georgia", fontSize: "15px", fontStyle: "italic", color: "#444" }}>
            "I come here every week. Love the spicy wings!" - Sarah M.
          </p>
          <p style={{ fontFamily: "Courier New", fontSize: "12px", fontStyle: "italic", color: "#666" }}>
            "Great food, great prices. Highly recommended." - Mike T.
          </p>
        </div>

        <div style={{ marginTop: "15px", textAlign: "center", overflow: "hidden" }}>
          <div
            style={{
              color: "#cc0000",
              fontFamily: "Comic Sans MS",
              fontSize: "16px",
              animation: "scroll-left 10s linear infinite",
              whiteSpace: "nowrap",
            }}
          >
            🔥 HOT DEALS EVERY DAY! 🔥 Visit our MENU page to see all items! 🔥 FREE delivery on orders over $30! 🔥
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

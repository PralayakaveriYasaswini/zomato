import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ isLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/login");
  };

  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>Zomato app</h2>
      <div style={styles.navLinks}>
        {!isLoggedIn ? (
          <>
            <Link to="/login" style={styles.link}>Login</Link>
            <Link to="/register" style={styles.link}>Register</Link>
          </>
        ) : (
          <>
            <Link to="/home" style={styles.link}>Home</Link>
            <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
};

// Inline CSS Styles
const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#ff4757",
    color: "white",
    position: "fixed",
    top: "0",
    width: "100%",
    zIndex: "1000",
  },
  logo: {
    margin: 0,
  },
  navLinks: {
    display: "flex",
    gap: "15px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
    padding: "5px 10px",
  },
  logoutButton: {
    backgroundColor: "white",
    color: "#ff4757",
    border: "none",
    padding: "8px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default Navbar;

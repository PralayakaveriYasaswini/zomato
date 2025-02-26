import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("username");
    if (!storedUser) {
      navigate("/login");
    } else {
      setUsername(storedUser);
    }
  }, [navigate]);

  return (
    <div style={styles.pageContainer}>
      <div style={styles.container}>
        <h2 style={styles.welcomeText}>Welcome Welcome to the Home Page!</h2>
        <p>You have successfully logged in.</p>
        <button
          onClick={() => {
            localStorage.removeItem("username");
            navigate("/login");
          }}
          style={styles.logoutButton}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

// Inline CSS Styles
const styles = {
  pageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Full height of the viewport
    backgroundColor: "#f4f4f4",
  },
  container: {
    background: "white",
    padding: "20px",
    width: "320px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
  },
  welcomeText: {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  logoutButton: {
    backgroundColor: "#ff4757",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default Home;

  
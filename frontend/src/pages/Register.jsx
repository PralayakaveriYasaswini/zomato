const Register = () => {
    return (
      <div
        style={{
          backgroundImage: "url('https://source.unsplash.com/1600x900/?food,restaurant')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            background: "rgba(255, 255, 255, 0.9)",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            width: "400px",
            textAlign: "center",
          }}
        >
          <h2 style={{ color: "#ff4757", marginBottom: "20px" }}>Register</h2>
          <form>
            <input
              type="text"
              placeholder="Full Name"
              required
              style={{
                width: "100%",
                padding: "10px",
                margin: "10px 0",
                border: "1px solid #ddd",
                borderRadius: "5px",
              }}
            />
            <input
              type="email"
              placeholder="Email"
              required
              style={{
                width: "100%",
                padding: "10px",
                margin: "10px 0",
                border: "1px solid #ddd",
                borderRadius: "5px",
              }}
            />
            <input
              type="password"
              placeholder="Password"
              required
              style={{
                width: "100%",
                padding: "10px",
                margin: "10px 0",
                border: "1px solid #ddd",
                borderRadius: "5px",
              }}
            />
            <button
              type="submit"
              style={{
                backgroundColor: "#ff4757",
                color: "white",
                padding: "10px",
                border: "none",
                width: "100%",
                borderRadius: "5px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default Register;
  
  
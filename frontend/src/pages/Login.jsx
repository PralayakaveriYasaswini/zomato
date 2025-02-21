const Login = () => {
    return (
      <div 
        style={{
          backgroundImage: "url('https://source.unsplash.com/1600x900/?food,restaurant')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div className="p-5 bg-white shadow rounded" style={{ width: "400px", opacity: 0.9 }}>
          <h2 className="text-center text-danger">Login</h2>
          <form>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="Enter your email" />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" placeholder="Enter your password" />
            </div>
            <button type="submit" className="btn btn-danger w-100">Login</button>
          </form>
        </div>
      </div>
    );
  };
  
  export default Login;
  

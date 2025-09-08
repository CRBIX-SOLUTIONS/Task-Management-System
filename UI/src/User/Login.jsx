import React from "react";
import "../App.css";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        background: "rgb(169 173 179)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <header
        style={{
          background: "linear-gradient(to right, #006f8e, #00bcd4)",
          color: "white",
          padding: "15px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderEndStartRadius: "50px",
          borderEndEndRadius: "50px",
          minHeight: 80,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {/* <img src="" alt="logo" style={{ height: "40px" }} /> */}
          <h2 style={{ margin: 0, fontSize: "18px", fontWeight: 600 }}>
            CRBIX SOLUTIONS
          </h2>
        </div>
        <div style={{ fontSize: "40px", cursor: "pointer", color: "black" }}>
          <PowerSettingsNewIcon />
        </div>
      </header>

      {/* Login Card */}
      <div
        style={{
          margin: "auto",
          display: "flex",
          flexWrap: "wrap", 
          background: "#fff",
          borderRadius: "12px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          overflow: "hidden",
          width: "90%",
          maxWidth: "1000px",
        }}
      >
        {/* Left Illustration */}
        <div
          style={{
            flex: "1 1 300px", 
            background: "rgb(207 207 207)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "250px",
          }}
        >
          <img
            src="/illustration.png"
            alt="Employee working"
            style={{ width: "90%", height: "auto", maxWidth: "350px" }}
          />
        </div>

        {/* Right Login Form */}
        <div
          style={{
            flex: "1 1 300px", 
            background: "rgb(207 207 207)",
            padding: "30px 20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Logo Circle */}
          <div
            style={{
              width: "80px",
              height: "80px",
              background: "linear-gradient(to right,  #00bcd4, #006f8e)",
              borderRadius: "50%",
              marginBottom: "25px",
              border: "1px solid #0e0e0eff",
            }}
          ></div>

          {/* Inputs */}
          <input type="text" placeholder="Enter Username" style={inputStyle} />
          <input
            type="password"
            placeholder="Enter Password"
            style={inputStyle}
          />

          {/* Login Button */}
          <button style={loginButtonStyle}>Login</button>

          {/* Register Section */}
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <p style={{ fontSize: "14px", marginBottom: "8px" }}>
              If you don't have an account?
            </p>
            <Button
              onClick={() => navigate("/register")}
              style={{
                padding: "10px 20px",
                background: "rgb(207 207 207)",
                color: "#006f8e",
                fontSize: "13px",
                fontWeight: 600,
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Register
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const inputStyle = {
  color: "white",
  fontWeight: 600,
  background: "linear-gradient(to right, #00bcd4, #006f8e)",
  width: "100%",
  margin: "8px 0",
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #141414ff",
  fontSize: "14px",
};

const loginButtonStyle = {
  marginTop: "20px",
  padding: "12px",
  background: "linear-gradient(to right,  #00bcd4, #006f8e)",
  color: "white",
  fontSize: "15px",
  fontWeight: 600,
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "0.3s ease",
  width: "100%",
};

export default LoginPage;

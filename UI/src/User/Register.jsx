import React, { useState } from "react";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setcontact] = useState("");

  const handleRegister = () => {
    if (!firstName || !lastName || !password || !contact) {
      alert(" Please fill all fields before Register.");
      return;
    }
    const strongPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!strongPasswordRegex.test(password)) {
      alert(
        "Password must be at least 8 characters, include uppercase, lowercase, number, and special character."
      );
      return;
    }
    alert("Register Successful ");
    navigate("/");
  };

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
          padding: "15px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderEndStartRadius: "50px",
          borderEndEndRadius: "50px",
          height: 80,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img src="" alt="" style={{ height: "40px" }} />
          <h2 style={{ margin: 0, fontSize: "18px", fontWeight: 600 }}>
            CRBIX SOLUTIONS
          </h2>
        </div>
        <div style={{ fontSize: "60px", cursor: "pointer", color: "black" }}>
          <PowerSettingsNewIcon />
        </div>
      </header>

      {/* Register Card */}
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
          marginTop: "40px",
        }}
      >
        {/* Left Illustration */}
        <div
          style={{
            flex: 1,
            minWidth: "250px",
            background: "rgb(207 207 207)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="/illustration.png"
            alt="Employee working"
            style={{ width: "100%", maxWidth: "300px", height: "auto" }}
          />
        </div>

        {/* Right Register Form */}
        <div
          style={{
            flex: 1,
            minWidth: "280px",
            background: "rgb(207 207 207)",
            padding: "30px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Avatar Circle */}
          <div
            style={{
              width: "90px",
              height: "90px",
              background: "linear-gradient(to right, #00bcd4, #006f8e)",
              borderRadius: "50%",
              marginBottom: "25px",
              border: "1px solid #0e0e0eff",
            }}
          ></div>

          {/* Inputs */}
          {["Enter First Name", "Enter Last Name", "Password", "Phone No"].map(
            (placeholder, index) => (
              <input
                key={index}
                type="text"
                placeholder={placeholder}
                style={{
                  width: "100%",
                  maxWidth: "350px",
                  margin: "8px 0",
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid #0e0e0eff",
                  fontSize: "14px",
                  background: "linear-gradient(to right, #00bcd4, #006f8e)",
                  color: "white",
                  fontWeight: 600,
                }}
              />
            )
          )}

          {/* Register Button */}
          <button
            onClick={handleRegister}
            style={{
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
              width: "75%",
            }}
          >
            Register
          </button>

          {/* Link to Login */}
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <p style={{ fontSize: "14px" }}>If you already have an account?</p>
            <Button
              onClick={() => navigate("/")}
              style={{
                marginTop: "5px",
                padding: "6px 40px",
                background: "rgb(207 207 207)",
                color: "#006f8e",
                fontSize: "12px",
                fontWeight: 600,
                borderRadius: "8px",
              }}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default RegisterPage;

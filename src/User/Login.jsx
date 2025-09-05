import React from "react";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
const LoginPage = () => {
  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        background: "rgb(169 173 179)",
        height: "100vh",
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
          borderEndStartRadius:"50px",
          borderEndEndRadius:"50px",
          height:80

        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img src="" alt="Career Tech Academy" style={{ height: "40px" }} />
          <h2 style={{ margin: 0, fontSize: "18px", fontWeight: 600 }}>
            CAREER TECH <br/><span style={{ fontWeight: 400, fontSize: "26px" }}>ACADEMY</span>
          </h2>
        </div>
        <div style={{ fontSize: "22px", cursor: "pointer" }}><PowerSettingsNewIcon/></div>
      </header>

      {/* Login Card */}
      <div
        style={{
          margin: "auto",
          display: "flex",
          background: "#fff",
          borderRadius: "12px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          overflow: "hidden",
          width: "70%",
          maxWidth: "1000px",
        }}
      >
        {/* Left Illustration */}
        <div
          style={{
            flex: 1,
            background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src="/illustration.png" alt="Employee working" style={{ maxWidth: "90%", height: "auto" }} />
        </div>

        {/* Right Login Form */}
        <div
          style={{
            flex: 0.7,
            background: "#fdfdfd",
            padding: "40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "90px",
              height: "90px",
              background: "radial-gradient(circle at top left, #00c6ff, #0072ff)",
              borderRadius: "50%",
              marginBottom: "25px",
            }}
          ></div>

          <input
            type="text"
            placeholder="Enter Username"
            style={{
              width: "80%",
              margin: "8px 0",
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #ddd",
              fontSize: "14px",
            }}
          />
          <input
            type="password"
            placeholder="Enter Password"
            style={{
              width: "80%",
              margin: "8px 0",
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #ddd",
              fontSize: "14px",
            }}
          />

          <button
            style={{
              marginTop: "20px",
              padding: "12px 30px",
              background: "linear-gradient(to right, #00c6ff, #0072ff)",
              color: "white",
              fontSize: "15px",
              fontWeight: 600,
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "0.3s ease",
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

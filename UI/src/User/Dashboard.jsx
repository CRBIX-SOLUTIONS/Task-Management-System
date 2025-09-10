import React, { useState } from "react";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { Navigate, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      localStorage.removeItem("userId");
      navigate("/");
    }
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
          minHeight: 80,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {/* <img src="" alt="logo" style={{ height: "40px" }} /> */}
          <h2 style={{ margin: 0, fontSize: "18px", fontWeight: 600 }}>
            CRBIX SOLUTIONS
          </h2>
        </div>
        <div
          onClick={handleLogout}
          style={{ fontSize: "40px", cursor: "pointer", color: "black" }}
        >
          <PowerSettingsNewIcon />
          <p
            style={{
              fontWeight: "800",
              fontSize: "13px",
              margin: "-10px -7px -10px",
              color: "black",
            }}
          >
            LogOut
          </p>
        </div>
      </header>

      {/* Main layout */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "20px",
          padding: "20px",
        }}
      >
        {/* Left Side */}
        <div
          style={{
            flex: "1 1 250px",
            background: "rgb(207 207 207)",
            borderRadius: "16px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
            padding: "20px",
            minHeight: "300px",
          }}
        >
          <div
            style={{
              margin: "auto",
              width: "90px",
              height: "90px",
              background: "linear-gradient(to right, #006f8e, #00bcd4)",
              borderRadius: "50%",
              marginBottom: "25px",
            }}
          ></div>
          <div
            style={{
              background: "#018ea3",
              padding: "15px",
              borderRadius: "12px",
              marginBottom: "20px",
              color: "white",
              textAlign: "center",
            }}
          >
            In Time: <br /> Out Time:
          </div>
          <div
            style={{
              background: "#018ea3",
              padding: "15px",
              borderRadius: "12px",
              color: "white",
              textAlign: "center",
            }}
          >
            No of tasks Assigned
          </div>
        </div>

        {/* Right Side */}
        <div
          style={{
            flex: "3 1 600px",
            background: "rgb(207 207 207)",
            borderRadius: "12px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            minHeight: "300px",
          }}
        >
          {/* Filters */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              marginBottom: "20px",
            }}
          >
            <select style={dropdownStyle}>
              <option>Filter 1</option>
            </select>
            <select style={dropdownStyle}>
              <option>Filter 2</option>
            </select>
            <select style={dropdownStyle}>
              <option>Filter 3</option>
            </select>
          </div>

          {/* Task & Escalations */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              flex: 1,
            }}
          >
            <button
              onClick={() => setIsOpen(true)}
              style={{ ...cardBoxStyle, flex: "3 2 210px" }}
            >
              <p>Task 1</p>
            </button>
            {isOpen && (
              <div
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0,0,0,0.5)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    background: "rgb(207 207 207)",
                    padding: "20px",
                    borderRadius: "10px",
                    minWidth: "300px",
                    textAlign: "center",
                  }}
                >
                  <h2>Task Detail's</h2>
                  <p style={{ marginLeft: "5px" }}>
                    <strong>Task Name:</strong> Sample Task
                  </p>
                  <p style={{ marginLeft: "-79px" }}>
                    <strong>Priority:</strong> High
                  </p>
                  <p style={{ marginLeft: "-4px" }}>
                    <strong>Assignee Name:</strong> Omkar
                  </p>
                  <p style={{ marginLeft: "-9px" }}>
                    <strong>Assigned By:</strong> Manager
                  </p>
                  <p style={{ marginLeft: "-55px" }}>
                    <strong>Date:</strong> 09/09/2025
                  </p>

                  <button
                    onClick={() => setIsOpen(false)}
                    style={{
                      marginTop: "10px",
                      padding: "8px 16px",
                      background: "linear-gradient(to right, #006f8e, #00bcd4)",
                      color: "white",
                      border: "none",
                      borderRadius: "6px",
                      cursor: "pointer",
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
            <button style={{ ...cardBoxStyle, flex: "3 2 210px" }}>
              <p> Task 2</p>
            </button>
            <button style={{ ...cardBoxStyle, flex: "3 2 210px" }}>
              <p> Task 3</p>
            </button>
            <button style={{ ...cardBoxStyle, flex: "3 2 210px" }}>
              <p>Task 4</p>
            </button>
            <button style={{ ...cardBoxStyle, flex: "3 2 210px" }}>
              <p> Task 5</p>
            </button>
            <button style={{ ...cardBoxStyle, flex: "3 2 210px" }}>
              <p>Task 6</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const dropdownStyle = {
  padding: "10px",
  borderRadius: "12px",
  background: "linear-gradient(to right, #006f8e, #00bcd4)",
  color: "white",
  border: "none",
  flex: "1 1 200px",
  minWidth: "150px",
};

const cardBoxStyle = {
  background: "linear-gradient(to right, #006f8e, #00bcd4)",
  borderRadius: "12px",
  color: "white",
  padding: "15px",
  minHeight: "200px",
};

export default Dashboard;
